import { NextRequest, NextResponse } from 'next/server'
import { getSupabaseServer } from '@/lib/supabaseServer'
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
        const title = sanitizeText(body?.title || '').trim()
        const rawBody = sanitizeText(body?.body || '')
        const publishAt = body?.publish_at ? new Date(body.publish_at).toISOString() : new Date().toISOString()
        if (!title || !rawBody) return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
        const db = getSupabaseServer()
        const { data, error } = await db.from('updates').insert({ title, body: rawBody, publish_at: publishAt }).select('*').limit(1)
        if (error) throw error
        return NextResponse.json({ update: data?.[0] }, { status: 201 })
    } catch (e: any) {
        const msg = e?.message || 'Server error'
        return NextResponse.json({ error: msg }, { status: msg === 'Unauthorized' ? 401 : 500 })
    }
}


