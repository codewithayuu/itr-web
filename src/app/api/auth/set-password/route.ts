import { NextRequest, NextResponse } from 'next/server'
import { getSupabaseServer } from '@/lib/supabaseServer'
import { hashPassword } from '@/lib/hash'
import { readCookie, verifyToken } from '@/lib/auth'
import { sanitizeText } from '@/lib/sanitize'

export async function POST(req: NextRequest) {
    try {
        const body = await req.json()
        const username = sanitizeText(body?.username || '').trim().toLowerCase()
        const newPassword = String(body?.new_password || '')
        if (!username || !newPassword) {
            return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
        }

        const cookie = readCookie(req.headers, 'student')
        const token = cookie ? verifyToken<{ sub: string; username: string }>(cookie) : null
        if (!token || token.username.toLowerCase() !== username) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
        }

        const hash = await hashPassword(newPassword)
        const db = getSupabaseServer()
        const { error } = await db
            .from('students')
            .update({ password_hash: hash, must_change_password: false })
            .eq('id', token.sub)
        if (error) throw error

        return NextResponse.json({ success: true }, { status: 200 })
    } catch (e: any) {
        return NextResponse.json({ error: e?.message || 'Server error' }, { status: 500 })
    }
}


