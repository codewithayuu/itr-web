import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(request: NextRequest) {
  try {
    console.log('Starting database setup...')

    // Check if students already exist
    const existingStudents = await prisma.student.count()
    
    if (existingStudents > 0) {
      console.log(`Database already has ${existingStudents} students`)
      return NextResponse.json({ 
        message: 'Database already set up', 
        studentCount: existingStudents 
      })
    }

    // Create students
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

    const students = []
    for (const studentData of studentsData) {
      const student = await prisma.student.create({
        data: {
          name: studentData.name,
          group: studentData.group,
          bio: `Student in ${studentData.group} group.`
        }
      })
      students.push(student)
    }

    console.log(`Created ${students.length} students`)
    
    return NextResponse.json({ 
      message: 'Database setup completed successfully', 
      studentCount: students.length 
    })

  } catch (error) {
    console.error('Error during database setup:', error)
    return NextResponse.json(
      { error: 'Failed to setup database', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    )
  }
}

export async function GET(request: NextRequest) {
  try {
    const studentCount = await prisma.student.count()
    return NextResponse.json({ 
      message: 'Database status', 
      studentCount,
      isSetup: studentCount > 0
    })
  } catch (error) {
    console.error('Error checking database status:', error)
    return NextResponse.json(
      { error: 'Failed to check database status', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    )
  }
}
