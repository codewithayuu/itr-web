import { NextRequest, NextResponse } from 'next/server'
import { clearCookie } from '@/lib/auth'

export async function POST(_req: NextRequest) {
    const res = NextResponse.json({ success: true }, { status: 200 })
    res.headers.append('Set-Cookie', clearCookie('admin'))
    return res
}


