import { NextRequest, NextResponse } from 'next/server'
import { getSupabaseServer } from '@/lib/supabaseServer'
import { hashPassword } from '@/lib/hash'
import { readCookie, verifyToken } from '@/lib/auth'
import { sanitizeText } from '@/lib/sanitize'

function assertAdmin(req: NextRequest) {
    const cookie = readCookie(req.headers, 'admin')
    const token = cookie ? verifyToken<{ role: string }>(cookie) : null
    if (!token || token.role !== 'admin') {
        throw new Error('Unauthorized')
    }
}

export async function POST(req: NextRequest) {
    try {
        assertAdmin(req)
        const body = await req.json()
        const username = sanitizeText(body?.username || '').trim().toLowerCase()
        const roll = Number(body?.roll)
        const groupTag = sanitizeText(body?.group_tag || '').trim().toLowerCase()
        const displayName = sanitizeText(body?.display_name || '')
        const email = sanitizeText(body?.email || '')
        const defaultPassword = String(body?.default_password || '')
        if (!username || !groupTag || !roll || !defaultPassword) {
            return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
        }
        const passwordHash = await hashPassword(defaultPassword)

        const db = getSupabaseServer()
        const { data, error } = await db
            .from('students')
            .insert({
                username,
                roll,
                group_tag: groupTag,
                display_name: displayName || null,
                email: email || null,
                password_hash: passwordHash,
                must_change_password: true,
            })
            .select('*')
            .limit(1)
        if (error) throw error
        return NextResponse.json({ student: data?.[0] }, { status: 201 })
    } catch (e: any) {
        const msg = e?.message || 'Server error'
        return NextResponse.json({ error: msg }, { status: msg === 'Unauthorized' ? 401 : 500 })
    }
}


