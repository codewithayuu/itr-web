import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(request: NextRequest) {
  try {
    // Check if database is empty and set it up
    const studentCount = await prisma.student.count()
    
    if (studentCount === 0) {
      console.log('Database is empty, setting up...')
      
      // Import and run the setup
      const setupResponse = await fetch(`${request.nextUrl.origin}/api/setup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      
      if (!setupResponse.ok) {
        console.error('Failed to setup database')
        return NextResponse.json(
          { error: 'Database setup failed' },
          { status: 500 }
        )
      }
      
      console.log('Database setup completed')
    }

    const { searchParams } = new URL(request.url)
    const group = searchParams.get('group')
    const search = searchParams.get('search')

    const whereClause: Record<string, string | { contains: string; mode: string }> = {}

    if (group) {
      whereClause.group = group
    }

    if (search) {
      whereClause.name = {
        contains: search,
        mode: 'insensitive'
      }
    }

    const students = await prisma.student.findMany({
      where: whereClause,
      orderBy: [
        { id: 'asc' }
      ]
    })

    return NextResponse.json(students)
  } catch (error) {
    console.error('Error fetching students:', error)
    return NextResponse.json(
      { error: 'Failed to fetch students' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, group, bio } = body

    if (!name || !group) {
      return NextResponse.json(
        { error: 'Name and group are required' },
        { status: 400 }
      )
    }

    const student = await prisma.student.create({
      data: {
        name,
        group,
        bio: bio || `Student in ${group} group.`
      }
    })

    return NextResponse.json(student, { status: 201 })
  } catch (error) {
    console.error('Error creating student:', error)
    return NextResponse.json(
      { error: 'Failed to create student' },
      { status: 500 }
    )
  }
}
