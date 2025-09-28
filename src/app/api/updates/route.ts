import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { writeFile, mkdir } from 'fs/promises'
import { join } from 'path'
import { existsSync } from 'fs'

// GET /api/updates - Get all updates
export async function GET() {
    try {
        const updates = await prisma.update.findMany({
            orderBy: [
                { pinned: 'desc' },
                { createdAt: 'desc' }
            ],
        })

        return NextResponse.json(updates)
    } catch (error) {
        console.error('Error fetching updates:', error)
        return NextResponse.json(
            { error: 'Failed to fetch updates' },
            { status: 500 }
        )
    }
}

// POST /api/updates - Create a new update
export async function POST(request: NextRequest) {
    try {
        const formData = await request.formData()
        const title = formData.get('title') as string
        const content = formData.get('content') as string
        const author = formData.get('author') as string
        const pinned = formData.get('pinned') === 'true'
        const image = formData.get('image') as File | null

        if (!title || !content) {
            return NextResponse.json(
                { error: 'Title and content are required' },
                { status: 400 }
            )
        }

        let imageUrl: string | null = null

        // Handle image upload
        if (image && image.size > 0) {
            const bytes = await image.arrayBuffer()
            const buffer = Buffer.from(bytes)

            // Create uploads directory if it doesn't exist
            const uploadsDir = join(process.cwd(), 'public', 'uploads', 'updates')
            if (!existsSync(uploadsDir)) {
                await mkdir(uploadsDir, { recursive: true })
            }

            // Generate unique filename
            const timestamp = Date.now()
            const filename = `${timestamp}-${image.name}`
            const filepath = join(uploadsDir, filename)

            await writeFile(filepath, buffer)
            imageUrl = `/uploads/updates/${filename}`
        }

        const update = await prisma.update.create({
            data: {
                title,
                content,
                author: author || null,
                pinned,
                imageUrl,
            },
        })

        return NextResponse.json(update, { status: 201 })
    } catch (error) {
        console.error('Error creating update:', error)
        return NextResponse.json(
            { error: 'Failed to create update' },
            { status: 500 }
        )
    }
}





