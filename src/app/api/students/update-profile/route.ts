import { NextRequest, NextResponse } from 'next/server'
import { getSupabaseServer } from '@/lib/supabaseServer'
import { readCookie, verifyToken } from '@/lib/auth'
import { isValidUrl, sanitizeText } from '@/lib/sanitize'

export async function POST(req: NextRequest) {
    try {
        const cookie = readCookie(req.headers, 'student')
        const token = cookie ? verifyToken<{ sub: string; username: string }>(cookie) : null
        if (!token) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
        const body = await req.json()
        const bio = sanitizeText(body?.bio || '', 1000)
        const links = Array.isArray(body?.links) ? body.links : []
        const cleanedLinks = links
            .slice(0, 10)
            .map((l: any) => ({ label: sanitizeText(String(l?.label || ''), 60), url: String(l?.url || '') }))
            .filter((l: any) => l.label && l.url && isValidUrl(l.url))
        const db = getSupabaseServer()
        const { error } = await db.from('students').update({ bio, links: cleanedLinks }).eq('id', token.sub)
        if (error) throw error
        return NextResponse.json({ success: true }, { status: 200 })
    } catch (e: any) {
        return NextResponse.json({ error: e?.message || 'Server error' }, { status: 500 })
    }
}


