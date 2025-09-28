import { NextRequest, NextResponse } from 'next/server'

// Static student data - no database needed!
const studentsData = [
  { id: 1, name: "DISHITA", group: "R-1", bio: "Student in R-1 group." },
  { id: 2, name: "YASH GUPTA", group: "R-1", bio: "Student in R-1 group." },
  { id: 3, name: "AMRIT RAJ YADAV", group: "R-1", bio: "Student in R-1 group." },
  { id: 4, name: "SAKSHAM SHREYANSH", group: "R-1", bio: "Student in R-1 group." },
  { id: 5, name: "JAGRATT VARSHNEY", group: "R-1", bio: "Student in R-1 group." },
  { id: 6, name: "AAGAM JAIN", group: "R-1", bio: "Student in R-1 group." },
  { id: 7, name: "MAYANK JAIN", group: "R-1", bio: "Student in R-1 group." },
  { id: 8, name: "RISHAB BANSAL", group: "R-1", bio: "Student in R-1 group." },
  { id: 9, name: "VEER PRATAP SINGH", group: "R-1", bio: "Student in R-1 group." },
  { id: 10, name: "VISHESH GARG", group: "R-1", bio: "Student in R-1 group." },
  { id: 11, name: "BHARAT KUMAR", group: "R-1", bio: "Student in R-1 group." },
  { id: 12, name: "VARUN SINGH RAWAT", group: "R-1", bio: "Student in R-1 group." },
  { id: 13, name: "PRABHJOT SINGH", group: "R-1", bio: "Student in R-1 group." },
  { id: 14, name: "YASH MITTAL", group: "R-1", bio: "Student in R-1 group." },
  { id: 15, name: "SAMARTH CHAUDHARY", group: "R-1", bio: "Student in R-1 group." },
  { id: 16, name: "SUBHRADITYA GHOSH", group: "R-1", bio: "Student in R-1 group." },
  { id: 17, name: "KARTIK SHARMA", group: "R-1", bio: "Student in R-1 group." },
  { id: 18, name: "VARDHMAAN JAIN", group: "R-1", bio: "Student in R-1 group." },
  { id: 19, name: "AKRITI SHUKLA", group: "R-1", bio: "Student in R-1 group." },
  { id: 20, name: "KARTIK TIWARI", group: "R-1", bio: "Student in R-1 group." },
  { id: 21, name: "PRATYUSH SINGH", group: "R-1", bio: "Student in R-1 group." },
  { id: 22, name: "AASTHA GARG", group: "R-1", bio: "Student in R-1 group." },
  { id: 23, name: "PARTH DHAMI", group: "R-1", bio: "Student in R-1 group." },
  { id: 24, name: "DHRUV GUPTA", group: "R-1", bio: "Student in R-1 group." },
  { id: 25, name: "NAVYA GUPTA", group: "R-1", bio: "Student in R-1 group." },
  { id: 26, name: "DIVISHA ARORA", group: "R-1", bio: "Student in R-1 group." },
  { id: 27, name: "MANNAT WADHWA", group: "R-1", bio: "Student in R-1 group." },
  { id: 28, name: "ARYAN SINGHAL", group: "R-2", bio: "Student in R-2 group." },
  { id: 29, name: "ROSHAN CHOUDHARY", group: "R-2", bio: "Student in R-2 group." },
  { id: 30, name: "GARVIT", group: "R-2", bio: "Student in R-2 group." },
  { id: 31, name: "AKSHAJ JAIN", group: "R-2", bio: "Student in R-2 group." },
  { id: 32, name: "HARNIT GAUTAM", group: "R-2", bio: "Student in R-2 group." },
  { id: 33, name: "SAKSHAM MANOCHA", group: "R-2", bio: "Student in R-2 group." },
  { id: 34, name: "PRAKHAR SRIVASTAVA", group: "R-2", bio: "Student in R-2 group." },
  { id: 35, name: "AGRIM SINGHAL", group: "R-2", bio: "Student in R-2 group." },
  { id: 36, name: "NAMIT LAKHCHOWRA", group: "R-2", bio: "Student in R-2 group." },
  { id: 37, name: "RAGHAV SHARMA", group: "R-2", bio: "Student in R-2 group." },
  { id: 38, name: "KHUSHI GUPTA", group: "R-2", bio: "Student in R-2 group." },
  { id: 39, name: "ASIF MIRZA", group: "R-2", bio: "Student in R-2 group." },
  { id: 40, name: "PARTH GUPTA", group: "R-2", bio: "Student in R-2 group." },
  { id: 41, name: "AJITESH NIGAM", group: "R-2", bio: "Student in R-2 group." },
  { id: 42, name: "TANMAY GARG", group: "R-2", bio: "Student in R-2 group." },
  { id: 43, name: "AMAN POKHARIA", group: "R-2", bio: "Student in R-2 group." },
  { id: 44, name: "HEMANT KUMAR JHA", group: "R-2", bio: "Student in R-2 group." },
  { id: 45, name: "SAMBHAV JAIN", group: "R-2", bio: "Student in R-2 group." },
  { id: 46, name: "ROHIN SAXENA", group: "R-2", bio: "Student in R-2 group." },
  { id: 47, name: "YASH SALHOTRA", group: "R-2", bio: "Student in R-2 group." },
  { id: 48, name: "SHUBHRA SINGH", group: "R-2", bio: "Student in R-2 group." },
  { id: 49, name: "JAHANVI KUKREJA", group: "R-2", bio: "Student in R-2 group." },
  { id: 50, name: "HARSHITA JAIN", group: "R-2", bio: "Student in R-2 group." },
  { id: 51, name: "DIYA MANN", group: "R-2", bio: "Student in R-2 group." },
  { id: 52, name: "SHIVAM AGGARWAL", group: "R-2", bio: "Student in R-2 group." },
  { id: 53, name: "RIDDHIKA SACHDEVA", group: "R-2", bio: "Student in R-2 group." },
  { id: 54, name: "DEEPANSHU AGGARWAL", group: "R-2", bio: "Student in R-2 group." },
  { id: 55, name: "GARIMA", group: "R-3", bio: "Student in R-3 group." },
  { id: 56, name: "KRISHNA NEGI", group: "R-3", bio: "Student in R-3 group." },
  { id: 57, name: "VANSHIKA JOSHI", group: "R-3", bio: "Student in R-3 group." },
  { id: 58, name: "KAVYA SINGHAL", group: "R-3", bio: "Student in R-3 group." },
  { id: 59, name: "AYUSH KUMAR JHA", group: "R-3", bio: "Student in R-3 group." },
  { id: 60, name: "ANUJAY DIXIT", group: "R-3", bio: "Student in R-3 group." },
  { id: 61, name: "AMAN DWIVEDI", group: "R-3", bio: "Student in R-3 group." },
  { id: 62, name: "MANAS KHANDELWAL", group: "R-3", bio: "Student in R-3 group." },
  { id: 63, name: "SUHANI", group: "R-3", bio: "Student in R-3 group." },
  { id: 64, name: "ASHISH SINGH", group: "R-3", bio: "Student in R-3 group." },
  { id: 65, name: "PRALABH PUSHKER", group: "R-3", bio: "Student in R-3 group." },
  { id: 66, name: "RAGHAV", group: "R-3", bio: "Student in R-3 group." },
  { id: 67, name: "AYUSH JINDAL", group: "R-3", bio: "Student in R-3 group." },
  { id: 68, name: "RHYTHM ARORA", group: "R-3", bio: "Student in R-3 group." },
  { id: 69, name: "MANVENDRA SINGH RATHORE", group: "R-3", bio: "Student in R-3 group." },
  { id: 70, name: "ADIT GUPTA", group: "R-3", bio: "Student in R-3 group." },
  { id: 71, name: "RITISHA BISHT", group: "R-3", bio: "Student in R-3 group." },
  { id: 72, name: "AVNA BATRA", group: "R-3", bio: "Student in R-3 group." },
  { id: 73, name: "SAURISH SETH", group: "R-3", bio: "Student in R-3 group." },
  { id: 74, name: "HARSH SHARMA", group: "R-3", bio: "Student in R-3 group." },
  { id: 75, name: "AMITESH RANJAN", group: "R-3", bio: "Student in R-3 group." },
  { id: 76, name: "KRISH CHOPRA", group: "R-3", bio: "Student in R-3 group." },
  { id: 77, name: "ARADHYA SHARMA", group: "R-3", bio: "Student in R-3 group." },
  { id: 78, name: "SEERAT TALWAR", group: "R-3", bio: "Student in R-3 group." },
  { id: 79, name: "NAMAN GUPTA", group: "R-3", bio: "Student in R-3 group." },
  { id: 80, name: "AARAV GUPTA", group: "R-3", bio: "Student in R-3 group." },
  { id: 81, name: "RAGINI AGGARWAL", group: "R-3", bio: "Student in R-3 group." },
  { id: 82, name: "MAYANK JAIN", group: "R-3", bio: "Student in R-3 group." }
]

export async function GET(request: NextRequest) {
  try {
    console.log('Fetching students from static data...')
    
    const { searchParams } = new URL(request.url)
    const group = searchParams.get('group')
    const search = searchParams.get('search')

    let filteredStudents = studentsData

    // Filter by group
    if (group && group !== 'All') {
      filteredStudents = filteredStudents.filter(student => student.group === group)
    }

    // Filter by search term
    if (search) {
      filteredStudents = filteredStudents.filter(student => 
        student.name.toLowerCase().includes(search.toLowerCase())
      )
    }

    console.log(`Returning ${filteredStudents.length} students`)
    return NextResponse.json(filteredStudents)
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
