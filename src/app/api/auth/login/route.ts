import { NextRequest, NextResponse } from 'next/server'
import { getSupabaseServer } from '@/lib/supabaseServer'
import { verifyPassword } from '@/lib/hash'
import { signToken, issueCookie } from '@/lib/auth'
import { sanitizeText } from '@/lib/sanitize'
import { canAttempt, rateLimitKey, timeToResetMs } from '@/lib/rateLimit'

const LIMIT = 10
const WINDOW = 60_000

export async function POST(req: NextRequest) {
    const ip = req.headers.get('x-forwarded-for') || 'local'
    const key = rateLimitKey(ip, 'login')
    if (!canAttempt(key, LIMIT, WINDOW)) {
        return NextResponse.json({ error: 'Too many attempts', retry_in_ms: timeToResetMs(key) }, { status: 429 })
    }

    try {
        const body = await req.json()
        const username = sanitizeText(body?.username || '').trim().toLowerCase()
        const password = String(body?.password || '')
        if (!username || !password) {
            return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
        }

        const db = getSupabaseServer()
        const { data, error } = await db
            .from('students')
            .select('*')
            .ilike('username', username)
            .limit(1)
        if (error) throw error
        const student = data?.[0]
        if (!student || !student.password_hash) {
            return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 })
        }

        const ok = await verifyPassword(password, student.password_hash)
        if (!ok) return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 })

        const token = signToken({ sub: student.id, role: 'student', username: student.username })
        const res = NextResponse.json({
            success: true,
            student: {
                id: student.id,
                username: student.username,
                display_name: student.display_name,
                roll: student.roll,
                group_tag: student.group_tag,
                bio: student.bio,
                links: student.links,
                profile_pic_url: student.profile_pic_url,
                must_change_password: student.must_change_password,
            },
        })
        res.headers.append('Set-Cookie', issueCookie('student', token))
        return res
    } catch (e: any) {
        return NextResponse.json({ error: e?.message || 'Server error' }, { status: 500 })
    }
}


