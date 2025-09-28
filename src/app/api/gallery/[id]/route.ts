import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { unlink } from 'fs/promises'
import { join } from 'path'

// DELETE /api/gallery/[id] - Delete a gallery image
export async function DELETE(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id: idParam } = await params
        const id = parseInt(idParam)

        if (isNaN(id)) {
            return NextResponse.json(
                { error: 'Invalid image ID' },
                { status: 400 }
            )
        }

        // Get image to check if file exists
        const image = await prisma.galleryImage.findUnique({
            where: { id },
        })

        if (!image) {
            return NextResponse.json(
                { error: 'Image not found' },
                { status: 404 }
            )
        }

        // Delete image file if it exists
        try {
            const filepath = join(process.cwd(), 'public', image.url)
            await unlink(filepath)
        } catch (error) {
            console.warn('Failed to delete image file:', error)
        }

        // Delete image from database
        await prisma.galleryImage.delete({
            where: { id },
        })

        return NextResponse.json({ message: 'Image deleted successfully' })
    } catch (error) {
        console.error('Error deleting image:', error)
        return NextResponse.json(
            { error: 'Failed to delete image' },
            { status: 500 }
        )
    }
}
