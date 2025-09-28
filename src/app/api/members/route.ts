import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { writeFile, mkdir } from 'fs/promises'
import { join } from 'path'
import { existsSync } from 'fs'

// GET /api/members - Get all members
export async function GET() {
    try {
        const members = await prisma.member.findMany({
            orderBy: { createdAt: 'desc' },
        })

        return NextResponse.json(members)
    } catch (error) {
        console.error('Error fetching members:', error)
        return NextResponse.json(
            { error: 'Failed to fetch members' },
            { status: 500 }
        )
    }
}

// POST /api/members - Create a new member
export async function POST(request: NextRequest) {
    try {
        const formData = await request.formData()
        const name = formData.get('name') as string
        const role = formData.get('role') as string
        const email = formData.get('email') as string
        const bio = formData.get('bio') as string
        const avatar = formData.get('avatar') as File | null

        if (!name) {
            return NextResponse.json(
                { error: 'Name is required' },
                { status: 400 }
            )
        }

        let avatarUrl: string | null = null

        // Handle avatar upload
        if (avatar && avatar.size > 0) {
            const bytes = await avatar.arrayBuffer()
            const buffer = Buffer.from(bytes)

            // Create uploads directory if it doesn't exist
            const uploadsDir = join(process.cwd(), 'public', 'uploads', 'avatars')
            if (!existsSync(uploadsDir)) {
                await mkdir(uploadsDir, { recursive: true })
            }

            // Generate unique filename
            const timestamp = Date.now()
            const filename = `${timestamp}-${avatar.name}`
            const filepath = join(uploadsDir, filename)

            await writeFile(filepath, buffer)
            avatarUrl = `/uploads/avatars/${filename}`
        }

        const member = await prisma.member.create({
            data: {
                name,
                role: role || null,
                email: email || null,
                bio: bio || null,
                avatarUrl,
            },
        })

        return NextResponse.json(member, { status: 201 })
    } catch (error) {
        console.error('Error creating member:', error)
        return NextResponse.json(
            { error: 'Failed to create member' },
            { status: 500 }
        )
    }
}





