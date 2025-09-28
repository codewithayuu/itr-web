import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { unlink } from 'fs/promises'
import { join } from 'path'

// GET /api/updates/[id] - Get a single update
export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id: idParam } = await params
        const id = parseInt(idParam)

        if (isNaN(id)) {
            return NextResponse.json(
                { error: 'Invalid update ID' },
                { status: 400 }
            )
        }

        const update = await prisma.update.findUnique({
            where: { id },
        })

        if (!update) {
            return NextResponse.json(
                { error: 'Update not found' },
                { status: 404 }
            )
        }

        return NextResponse.json(update)
    } catch (error) {
        console.error('Error fetching update:', error)
        return NextResponse.json(
            { error: 'Failed to fetch update' },
            { status: 500 }
        )
    }
}

// DELETE /api/updates/[id] - Delete an update
export async function DELETE(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id: idParam } = await params
        const id = parseInt(idParam)

        if (isNaN(id)) {
            return NextResponse.json(
                { error: 'Invalid update ID' },
                { status: 400 }
            )
        }

        // Get update to check if image exists
        const update = await prisma.update.findUnique({
            where: { id },
        })

        if (!update) {
            return NextResponse.json(
                { error: 'Update not found' },
                { status: 404 }
            )
        }

        // Delete image file if it exists
        if (update.imageUrl) {
            try {
                const filepath = join(process.cwd(), 'public', update.imageUrl)
                await unlink(filepath)
            } catch (error) {
                console.warn('Failed to delete image file:', error)
            }
        }

        // Delete update from database
        await prisma.update.delete({
            where: { id },
        })

        return NextResponse.json({ message: 'Update deleted successfully' })
    } catch (error) {
        console.error('Error deleting update:', error)
        return NextResponse.json(
            { error: 'Failed to delete update' },
            { status: 500 }
        )
    }
}
