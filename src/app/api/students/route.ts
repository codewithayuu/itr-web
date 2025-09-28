import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(request: NextRequest) {
  try {
    console.log('Fetching students...')
    
    // Test database connection with $queryRaw (safer for SELECT)
    try {
      await prisma.$queryRaw`SELECT 1`
      console.log('Database connection successful')
    } catch (dbError) {
      console.error('Database connection failed:', dbError)
      return NextResponse.json(
        { error: 'Database connection failed', details: dbError instanceof Error ? dbError.message : 'Unknown error' },
        { status: 500 }
      )
    }

    // Check if students exist
    const studentCount = await prisma.student.count()
    console.log(`Found ${studentCount} students in database`)
    
    // If no students, create them using bulk insert (serverless-friendly)
    if (studentCount === 0) {
      console.log('No students found, creating sample data...')
      
      const studentsData = [
        { name: "DISHITA", group: "R-1", bio: "Student in R-1 group." },
        { name: "YASH GUPTA", group: "R-1", bio: "Student in R-1 group." },
        { name: "AMRIT RAJ YADAV", group: "R-1", bio: "Student in R-1 group." },
        { name: "SAKSHAM SHREYANSH", group: "R-1", bio: "Student in R-1 group." },
        { name: "JAGRATT VARSHNEY", group: "R-1", bio: "Student in R-1 group." },
        { name: "AAGAM JAIN", group: "R-1", bio: "Student in R-1 group." },
        { name: "MAYANK JAIN", group: "R-1", bio: "Student in R-1 group." },
        { name: "RISHAB BANSAL", group: "R-1", bio: "Student in R-1 group." },
        { name: "VEER PRATAP SINGH", group: "R-1", bio: "Student in R-1 group." },
        { name: "VISHESH GARG", group: "R-1", bio: "Student in R-1 group." },
        { name: "BHARAT KUMAR", group: "R-1", bio: "Student in R-1 group." },
        { name: "VARUN SINGH RAWAT", group: "R-1", bio: "Student in R-1 group." },
        { name: "PRABHJOT SINGH", group: "R-1", bio: "Student in R-1 group." },
        { name: "YASH MITTAL", group: "R-1", bio: "Student in R-1 group." },
        { name: "SAMARTH CHAUDHARY", group: "R-1", bio: "Student in R-1 group." },
        { name: "SUBHRADITYA GHOSH", group: "R-1", bio: "Student in R-1 group." },
        { name: "KARTIK SHARMA", group: "R-1", bio: "Student in R-1 group." },
        { name: "VARDHMAAN JAIN", group: "R-1", bio: "Student in R-1 group." },
        { name: "AKRITI SHUKLA", group: "R-1", bio: "Student in R-1 group." },
        { name: "KARTIK TIWARI", group: "R-1", bio: "Student in R-1 group." },
        { name: "PRATYUSH SINGH", group: "R-1", bio: "Student in R-1 group." },
        { name: "AASTHA GARG", group: "R-1", bio: "Student in R-1 group." },
        { name: "PARTH DHAMI", group: "R-1", bio: "Student in R-1 group." },
        { name: "DHRUV GUPTA", group: "R-1", bio: "Student in R-1 group." },
        { name: "NAVYA GUPTA", group: "R-1", bio: "Student in R-1 group." },
        { name: "DIVISHA ARORA", group: "R-1", bio: "Student in R-1 group." },
        { name: "MANNAT WADHWA", group: "R-1", bio: "Student in R-1 group." },
        { name: "ARYAN SINGHAL", group: "R-2", bio: "Student in R-2 group." },
        { name: "ROSHAN CHOUDHARY", group: "R-2", bio: "Student in R-2 group." },
        { name: "GARVIT", group: "R-2", bio: "Student in R-2 group." },
        { name: "AKSHAJ JAIN", group: "R-2", bio: "Student in R-2 group." },
        { name: "HARNIT GAUTAM", group: "R-2", bio: "Student in R-2 group." },
        { name: "SAKSHAM MANOCHA", group: "R-2", bio: "Student in R-2 group." },
        { name: "PRAKHAR SRIVASTAVA", group: "R-2", bio: "Student in R-2 group." },
        { name: "AGRIM SINGHAL", group: "R-2", bio: "Student in R-2 group." },
        { name: "NAMIT LAKHCHOWRA", group: "R-2", bio: "Student in R-2 group." },
        { name: "RAGHAV SHARMA", group: "R-2", bio: "Student in R-2 group." },
        { name: "KHUSHI GUPTA", group: "R-2", bio: "Student in R-2 group." },
        { name: "ASIF MIRZA", group: "R-2", bio: "Student in R-2 group." },
        { name: "PARTH GUPTA", group: "R-2", bio: "Student in R-2 group." },
        { name: "AJITESH NIGAM", group: "R-2", bio: "Student in R-2 group." },
        { name: "TANMAY GARG", group: "R-2", bio: "Student in R-2 group." },
        { name: "AMAN POKHARIA", group: "R-2", bio: "Student in R-2 group." },
        { name: "HEMANT KUMAR JHA", group: "R-2", bio: "Student in R-2 group." },
        { name: "SAMBHAV JAIN", group: "R-2", bio: "Student in R-2 group." },
        { name: "ROHIN SAXENA", group: "R-2", bio: "Student in R-2 group." },
        { name: "YASH SALHOTRA", group: "R-2", bio: "Student in R-2 group." },
        { name: "SHUBHRA SINGH", group: "R-2", bio: "Student in R-2 group." },
        { name: "JAHANVI KUKREJA", group: "R-2", bio: "Student in R-2 group." },
        { name: "HARSHITA JAIN", group: "R-2", bio: "Student in R-2 group." },
        { name: "DIYA MANN", group: "R-2", bio: "Student in R-2 group." },
        { name: "SHIVAM AGGARWAL", group: "R-2", bio: "Student in R-2 group." },
        { name: "RIDDHIKA SACHDEVA", group: "R-2", bio: "Student in R-2 group." },
        { name: "DEEPANSHU AGGARWAL", group: "R-2", bio: "Student in R-2 group." },
        { name: "GARIMA", group: "R-3", bio: "Student in R-3 group." },
        { name: "KRISHNA NEGI", group: "R-3", bio: "Student in R-3 group." },
        { name: "VANSHIKA JOSHI", group: "R-3", bio: "Student in R-3 group." },
        { name: "KAVYA SINGHAL", group: "R-3", bio: "Student in R-3 group." },
        { name: "AYUSH KUMAR JHA", group: "R-3", bio: "Student in R-3 group." },
        { name: "ANUJAY DIXIT", group: "R-3", bio: "Student in R-3 group." },
        { name: "AMAN DWIVEDI", group: "R-3", bio: "Student in R-3 group." },
        { name: "MANAS KHANDELWAL", group: "R-3", bio: "Student in R-3 group." },
        { name: "SUHANI", group: "R-3", bio: "Student in R-3 group." },
        { name: "ASHISH SINGH", group: "R-3", bio: "Student in R-3 group." },
        { name: "PRALABH PUSHKER", group: "R-3", bio: "Student in R-3 group." },
        { name: "RAGHAV", group: "R-3", bio: "Student in R-3 group." },
        { name: "AYUSH JINDAL", group: "R-3", bio: "Student in R-3 group." },
        { name: "RHYTHM ARORA", group: "R-3", bio: "Student in R-3 group." },
        { name: "MANVENDRA SINGH RATHORE", group: "R-3", bio: "Student in R-3 group." },
        { name: "ADIT GUPTA", group: "R-3", bio: "Student in R-3 group." },
        { name: "RITISHA BISHT", group: "R-3", bio: "Student in R-3 group." },
        { name: "AVNA BATRA", group: "R-3", bio: "Student in R-3 group." },
        { name: "SAURISH SETH", group: "R-3", bio: "Student in R-3 group." },
        { name: "HARSH SHARMA", group: "R-3", bio: "Student in R-3 group." },
        { name: "AMITESH RANJAN", group: "R-3", bio: "Student in R-3 group." },
        { name: "KRISH CHOPRA", group: "R-3", bio: "Student in R-3 group." },
        { name: "ARADHYA SHARMA", group: "R-3", bio: "Student in R-3 group." },
        { name: "SEERAT TALWAR", group: "R-3", bio: "Student in R-3 group." },
        { name: "NAMAN GUPTA", group: "R-3", bio: "Student in R-3 group." },
        { name: "AARAV GUPTA", group: "R-3", bio: "Student in R-3 group." },
        { name: "RAGINI AGGARWAL", group: "R-3", bio: "Student in R-3 group." },
        { name: "MAYANK JAIN", group: "R-3", bio: "Student in R-3 group." }
      ]

      // Use createMany for bulk insert (serverless-friendly)
      await prisma.student.createMany({
        data: studentsData,
        skipDuplicates: true
      })
      
      console.log(`Created ${studentsData.length} students using bulk insert`)
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
    console.error('Detailed error:', error)
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
