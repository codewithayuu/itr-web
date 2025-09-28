import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

// GET /api/gallery - Get all gallery images
export async function GET() {
    try {
        const images = await prisma.galleryImage.findMany({
            orderBy: { createdAt: 'desc' },
        })

        return NextResponse.json(images)
    } catch (error) {
        console.error('Error fetching gallery images:', error)
        return NextResponse.json(
            { error: 'Failed to fetch gallery images' },
            { status: 500 }
        )
    }
}
