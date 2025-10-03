import { NextRequest, NextResponse } from 'next/server'
import { getSupabaseServer } from '@/lib/supabaseServer'

export async function GET(_req: NextRequest, { params }: { params: { username: string } }) {
    try {
        const username = decodeURIComponent(params.username || '').toLowerCase()
        if (!username) return NextResponse.json({ error: 'Not found' }, { status: 404 })
        const db = getSupabaseServer()
        const { data, error } = await db
            .from('students')
            .select('id, username, roll, group_tag, display_name, bio, links, profile_pic_url')
            .ilike('username', username)
            .limit(1)
        if (error) throw error
        const student = data?.[0]
        if (!student) return NextResponse.json({ error: 'Not found' }, { status: 404 })
        return NextResponse.json({ student }, { status: 200 })
    } catch (e: any) {
        return NextResponse.json({ error: e?.message || 'Server error' }, { status: 500 })
    }
}


