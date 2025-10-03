import { NextRequest, NextResponse } from 'next/server'
import { getSupabaseServer } from '@/lib/supabaseServer'
import { verifyPassword } from '@/lib/hash'
import { signToken, issueCookie } from '@/lib/auth'
import { sanitizeText } from '@/lib/sanitize'

export async function POST(req: NextRequest) {
    try {
        const body = await req.json()
        const username = sanitizeText(body?.username || '').trim().toLowerCase()
        const defaultPassword = String(body?.default_password || '')
        const oauthUser = body?.oauth_user || {}
        const supabaseUid = String(oauthUser?.id || '')
        const oauthEmail = String(oauthUser?.email || '')
        const providerId = String(oauthUser?.provider_id || '')

        if (!username || !defaultPassword || !supabaseUid || !oauthEmail) {
            return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
        }

        const db = getSupabaseServer()
        const { data: studentRows, error } = await db
            .from('students')
            .select('*')
            .ilike('username', username)
            .limit(1)
        if (error) throw error
        const student = studentRows?.[0]
        if (!student) {
            return NextResponse.json({ error: 'Student not found' }, { status: 404 })
        }

        const ok = await verifyPassword(defaultPassword, student.password_hash)
        if (!ok) {
            return NextResponse.json({ error: 'Invalid default password' }, { status: 401 })
        }

        if (student.email && student.email.toLowerCase() !== oauthEmail.toLowerCase()) {
            return NextResponse.json({ error: 'Email mismatch for OAuth link' }, { status: 400 })
        }

        const { error: updErr } = await db
            .from('students')
            .update({
                email: student.email || oauthEmail,
                supabase_auth_uid: supabaseUid,
                oauth_provider: 'google',
                oauth_provider_user_id: providerId,
                must_change_password: true,
            })
            .eq('id', student.id)
        if (updErr) throw updErr

        const token = signToken({ sub: student.id, role: 'student', username: student.username })
        const res = NextResponse.json({ success: true, must_change_password: true }, { status: 200 })
        res.headers.append('Set-Cookie', issueCookie('student', token))
        return res
    } catch (e: any) {
        return NextResponse.json({ error: e?.message || 'Server error' }, { status: 500 })
    }
}


