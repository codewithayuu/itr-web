import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { writeFile, mkdir } from 'fs/promises'
import { join } from 'path'
import { existsSync } from 'fs'

// POST /api/gallery/upload - Upload a new gallery image
export async function POST(request: NextRequest) {
    try {
        const formData = await request.formData()
        const file = formData.get('file') as File
        const caption = formData.get('caption') as string
        const uploader = formData.get('uploader') as string

        if (!file || file.size === 0) {
            return NextResponse.json(
                { error: 'File is required' },
                { status: 400 }
            )
        }

        // Validate file type
        const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp']
        if (!allowedTypes.includes(file.type)) {
            return NextResponse.json(
                { error: 'Invalid file type. Only JPEG, PNG, and WebP images are allowed.' },
                { status: 400 }
            )
        }

        // Validate file size (10MB limit)
        const maxSize = 10 * 1024 * 1024 // 10MB
        if (file.size > maxSize) {
            return NextResponse.json(
                { error: 'File size too large. Maximum size is 10MB.' },
                { status: 400 }
            )
        }

        const bytes = await file.arrayBuffer()
        const buffer = Buffer.from(bytes)

        // Create uploads directory if it doesn't exist
        const uploadsDir = join(process.cwd(), 'public', 'uploads', 'gallery')
        if (!existsSync(uploadsDir)) {
            await mkdir(uploadsDir, { recursive: true })
        }

        // Generate unique filename
        const timestamp = Date.now()
        const fileExtension = file.name.split('.').pop()
        const filename = `${timestamp}-${Math.random().toString(36).substring(2)}.${fileExtension}`
        const filepath = join(uploadsDir, filename)

        await writeFile(filepath, buffer)
        const url = `/uploads/gallery/${filename}`

        const galleryImage = await prisma.galleryImage.create({
            data: {
                filename,
                url,
                caption: caption || null,
                uploader: uploader || null,
            },
        })

        return NextResponse.json(galleryImage, { status: 201 })
    } catch (error) {
        console.error('Error uploading image:', error)
        return NextResponse.json(
            { error: 'Failed to upload image' },
            { status: 500 }
        )
    }
}





