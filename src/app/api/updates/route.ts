import { NextRequest, NextResponse } from 'next/server'
import { getSupabaseServer } from '@/lib/supabaseServer'

export async function GET(_req: NextRequest) {
    try {
        const db = getSupabaseServer()
        const { data, error } = await db
            .from('updates')
            .select('*')
            .eq('is_draft', false)
            .order('publish_at', { ascending: false })
        if (error) throw error
        return NextResponse.json({ updates: data || [] }, { status: 200 })
    } catch (e: any) {
        return NextResponse.json({ error: e?.message || 'Server error' }, { status: 500 })
    }
}


