import { NextRequest, NextResponse } from 'next/server'
import { getSupabaseServer } from '@/lib/supabaseServer'
import { readCookie, verifyToken } from '@/lib/auth'

const MAX_SIZE = 2 * 1024 * 1024
const ALLOWED = ['image/jpeg', 'image/png']

export async function POST(req: NextRequest) {
    try {
        const cookie = readCookie(req.headers, 'student')
        const token = cookie ? verifyToken<{ sub: string; username: string }>(cookie) : null
        if (!token) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

        const contentType = req.headers.get('content-type') || ''
        if (!contentType.includes('multipart/form-data')) {
            return NextResponse.json({ error: 'Invalid content type' }, { status: 400 })
        }

        const formData = await req.formData()
        const file = formData.get('file') as File | null
        if (!file) return NextResponse.json({ error: 'File required' }, { status: 400 })
        if (!ALLOWED.includes(file.type)) return NextResponse.json({ error: 'Unsupported file type' }, { status: 400 })
        if (file.size > MAX_SIZE) return NextResponse.json({ error: 'File too large' }, { status: 400 })

        const db = getSupabaseServer()
        const arrayBuffer = await file.arrayBuffer()
        const path = `avatars/${token.sub}-${Date.now()}`
        const { error: upErr } = await db.storage.from('avatars').upload(path, Buffer.from(arrayBuffer), {
            contentType: file.type,
            upsert: true,
        })
        if (upErr) throw upErr

        const { data: signed } = await db.storage.from('avatars').createSignedUrl(path, 60 * 60)
        const url = signed?.signedUrl || null
        const { error: updateErr } = await db.from('students').update({ profile_pic_url: url }).eq('id', token.sub)
        if (updateErr) throw updateErr

        return NextResponse.json({ url }, { status: 200 })
    } catch (e: any) {
        return NextResponse.json({ error: e?.message || 'Server error' }, { status: 500 })
    }
}


