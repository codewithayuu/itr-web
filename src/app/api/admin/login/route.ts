import { NextRequest, NextResponse } from 'next/server'
import { getSupabaseServer } from '@/lib/supabaseServer'
import { verifyPassword } from '@/lib/hash'
import { issueCookie, signToken } from '@/lib/auth'
import { sanitizeText } from '@/lib/sanitize'

export async function POST(req: NextRequest) {
    try {
        const body = await req.json()
        const username = sanitizeText(body?.username || '').trim().toLowerCase()
        const password = String(body?.password || '')
        if (!username || !password) return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
        const db = getSupabaseServer()
        const { data, error } = await db.from('admins').select('*').ilike('username', username).limit(1)
        if (error) throw error
        const admin = data?.[0]
        if (!admin || !admin.password_hash) return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 })
        const ok = await verifyPassword(password, admin.password_hash)
        if (!ok) return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 })
        const token = signToken({ sub: admin.id, role: 'admin', username: admin.username })
        const res = NextResponse.json({ success: true, admin: { id: admin.id, username: admin.username, role: admin.role } }, { status: 200 })
        res.headers.append('Set-Cookie', issueCookie('admin', token))
        return res
    } catch (e: any) {
        return NextResponse.json({ error: e?.message || 'Server error' }, { status: 500 })
    }
}


