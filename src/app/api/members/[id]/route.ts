import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { unlink } from 'fs/promises'
import { join } from 'path'

// DELETE /api/members/[id] - Delete a member
export async function DELETE(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id: idParam } = await params
        const id = parseInt(idParam)

        if (isNaN(id)) {
            return NextResponse.json(
                { error: 'Invalid member ID' },
                { status: 400 }
            )
        }

        // Get member to check if avatar exists
        const member = await prisma.member.findUnique({
            where: { id },
        })

        if (!member) {
            return NextResponse.json(
                { error: 'Member not found' },
                { status: 404 }
            )
        }

        // Delete avatar file if it exists
        if (member.avatarUrl) {
            try {
                const filepath = join(process.cwd(), 'public', member.avatarUrl)
                await unlink(filepath)
            } catch (error) {
                console.warn('Failed to delete avatar file:', error)
            }
        }

        // Delete member from database
        await prisma.member.delete({
            where: { id },
        })

        return NextResponse.json({ message: 'Member deleted successfully' })
    } catch (error) {
        console.error('Error deleting member:', error)
        return NextResponse.json(
            { error: 'Failed to delete member' },
            { status: 500 }
        )
    }
}
