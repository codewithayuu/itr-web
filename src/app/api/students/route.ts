import { NextRequest, NextResponse } from 'next/server'
import { getSupabaseServer } from '@/lib/supabaseServer'

export async function GET(_req: NextRequest) {
    try {
        const db = getSupabaseServer()
        const { data, error } = await db
            .from('students')
            .select('id, username, roll, group_tag, display_name, bio, links, profile_pic_url')
            .order('roll', { ascending: true })
            .limit(100)
        if (error) throw error
        return NextResponse.json({ students: data || [] }, { status: 200 })
    } catch (e: any) {
        return NextResponse.json({ error: e?.message || 'Server error' }, { status: 500 })
    }
}


