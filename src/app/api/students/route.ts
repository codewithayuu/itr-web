import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(request: NextRequest) {
  try {
    console.log('Fetching students...')
    
    // First, try to push the schema to make sure tables exist
    try {
      await prisma.$executeRaw`SELECT 1`
      console.log('Database connection successful')
    } catch (dbError) {
      console.error('Database connection failed:', dbError)
      return NextResponse.json(
        { error: 'Database connection failed', details: dbError instanceof Error ? dbError.message : 'Unknown error' },
        { status: 500 }
      )
    }

    // Check if students exist
    let studentCount = 0
    try {
      studentCount = await prisma.student.count()
      console.log(`Found ${studentCount} students in database`)
    } catch (countError) {
      console.error('Error counting students:', countError)
      // If table doesn't exist, try to create it
      try {
        await prisma.$executeRaw`
          CREATE TABLE IF NOT EXISTS "Student" (
            "id" SERIAL PRIMARY KEY,
            "name" TEXT NOT NULL,
            "group" TEXT NOT NULL,
            "bio" TEXT,
            "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
            "updatedAt" TIMESTAMP(3) NOT NULL
          )
        `
        console.log('Created Student table')
        studentCount = 0
      } catch (createError) {
        console.error('Error creating table:', createError)
        return NextResponse.json(
          { error: 'Failed to create database table', details: createError instanceof Error ? createError.message : 'Unknown error' },
          { status: 500 }
        )
      }
    }
    
    // If no students, create them
    if (studentCount === 0) {
      console.log('No students found, creating sample data...')
      
      const studentsData = [
        { name: "DISHITA", group: "R-1" },
        { name: "YASH GUPTA", group: "R-1" },
        { name: "AMRIT RAJ YADAV", group: "R-1" },
        { name: "SAKSHAM SHREYANSH", group: "R-1" },
        { name: "JAGRATT VARSHNEY", group: "R-1" },
        { name: "AAGAM JAIN", group: "R-1" },
        { name: "MAYANK JAIN", group: "R-1" },
        { name: "RISHAB BANSAL", group: "R-1" },
        { name: "VEER PRATAP SINGH", group: "R-1" },
        { name: "VISHESH GARG", group: "R-1" },
        { name: "BHARAT KUMAR", group: "R-1" },
        { name: "VARUN SINGH RAWAT", group: "R-1" },
        { name: "PRABHJOT SINGH", group: "R-1" },
        { name: "YASH MITTAL", group: "R-1" },
        { name: "SAMARTH CHAUDHARY", group: "R-1" },
        { name: "SUBHRADITYA GHOSH", group: "R-1" },
        { name: "KARTIK SHARMA", group: "R-1" },
        { name: "VARDHMAAN JAIN", group: "R-1" },
        { name: "AKRITI SHUKLA", group: "R-1" },
        { name: "KARTIK TIWARI", group: "R-1" },
        { name: "PRATYUSH SINGH", group: "R-1" },
        { name: "AASTHA GARG", group: "R-1" },
        { name: "PARTH DHAMI", group: "R-1" },
        { name: "DHRUV GUPTA", group: "R-1" },
        { name: "NAVYA GUPTA", group: "R-1" },
        { name: "DIVISHA ARORA", group: "R-1" },
        { name: "MANNAT WADHWA", group: "R-1" },
        { name: "ARYAN SINGHAL", group: "R-2" },
        { name: "ROSHAN CHOUDHARY", group: "R-2" },
        { name: "GARVIT", group: "R-2" },
        { name: "AKSHAJ JAIN", group: "R-2" },
        { name: "HARNIT GAUTAM", group: "R-2" },
        { name: "SAKSHAM MANOCHA", group: "R-2" },
        { name: "PRAKHAR SRIVASTAVA", group: "R-2" },
        { name: "AGRIM SINGHAL", group: "R-2" },
        { name: "NAMIT LAKHCHOWRA", group: "R-2" },
        { name: "RAGHAV SHARMA", group: "R-2" },
        { name: "KHUSHI GUPTA", group: "R-2" },
        { name: "ASIF MIRZA", group: "R-2" },
        { name: "PARTH GUPTA", group: "R-2" },
        { name: "AJITESH NIGAM", group: "R-2" },
        { name: "TANMAY GARG", group: "R-2" },
        { name: "AMAN POKHARIA", group: "R-2" },
        { name: "HEMANT KUMAR JHA", group: "R-2" },
        { name: "SAMBHAV JAIN", group: "R-2" },
        { name: "ROHIN SAXENA", group: "R-2" },
        { name: "YASH SALHOTRA", group: "R-2" },
        { name: "SHUBHRA SINGH", group: "R-2" },
        { name: "JAHANVI KUKREJA", group: "R-2" },
        { name: "HARSHITA JAIN", group: "R-2" },
        { name: "DIYA MANN", group: "R-2" },
        { name: "SHIVAM AGGARWAL", group: "R-2" },
        { name: "RIDDHIKA SACHDEVA", group: "R-2" },
        { name: "DEEPANSHU AGGARWAL", group: "R-2" },
        { name: "GARIMA", group: "R-3" },
        { name: "KRISHNA NEGI", group: "R-3" },
        { name: "VANSHIKA JOSHI", group: "R-3" },
        { name: "KAVYA SINGHAL", group: "R-3" },
        { name: "AYUSH KUMAR JHA", group: "R-3" },
        { name: "ANUJAY DIXIT", group: "R-3" },
        { name: "AMAN DWIVEDI", group: "R-3" },
        { name: "MANAS KHANDELWAL", group: "R-3" },
        { name: "SUHANI", group: "R-3" },
        { name: "ASHISH SINGH", group: "R-3" },
        { name: "PRALABH PUSHKER", group: "R-3" },
        { name: "RAGHAV", group: "R-3" },
        { name: "AYUSH JINDAL", group: "R-3" },
        { name: "RHYTHM ARORA", group: "R-3" },
        { name: "MANVENDRA SINGH RATHORE", group: "R-3" },
        { name: "ADIT GUPTA", group: "R-3" },
        { name: "RITISHA BISHT", group: "R-3" },
        { name: "AVNA BATRA", group: "R-3" },
        { name: "SAURISH SETH", group: "R-3" },
        { name: "HARSH SHARMA", group: "R-3" },
        { name: "AMITESH RANJAN", group: "R-3" },
        { name: "KRISH CHOPRA", group: "R-3" },
        { name: "ARADHYA SHARMA", group: "R-3" },
        { name: "SEERAT TALWAR", group: "R-3" },
        { name: "NAMAN GUPTA", group: "R-3" },
        { name: "AARAV GUPTA", group: "R-3" },
        { name: "RAGINI AGGARWAL", group: "R-3" },
        { name: "MAYANK JAIN", group: "R-3" }
      ]

      for (const studentData of studentsData) {
        await prisma.student.create({
          data: {
            name: studentData.name,
            group: studentData.group,
            bio: `Student in ${studentData.group} group.`
          }
        })
      }
      
      console.log(`Created ${studentsData.length} students`)
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

    console.log(`Returning ${students.length} students`)
    return NextResponse.json(students)
  } catch (error) {
    console.error('Error fetching students:', error)
    return NextResponse.json(
      { error: 'Failed to fetch students', details: error instanceof Error ? error.message : 'Unknown error' },
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
