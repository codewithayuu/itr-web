import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    console.log('🌱 Seeding database...')

    // Create sample members
    const members = await Promise.all([
        prisma.member.create({
            data: {
                name: 'Sarah Johnson',
                role: 'President',
                email: 'sarah.johnson@it-r-group.edu',
                bio: 'Passionate about AI and machine learning. Leading our community towards innovation.',
            },
        }),
        prisma.member.create({
            data: {
                name: 'Michael Chen',
                role: 'Vice President',
                email: 'michael.chen@it-r-group.edu',
                bio: 'Full-stack developer with expertise in React and Node.js. Always ready to help fellow students.',
            },
        }),
        prisma.member.create({
            data: {
                name: 'Emily Rodriguez',
                role: 'Tech Lead',
                email: 'emily.rodriguez@it-r-group.edu',
                bio: 'Cybersecurity enthusiast and cloud computing expert. Organizing our technical workshops.',
            },
        }),
        prisma.member.create({
            data: {
                name: 'David Kim',
                role: 'Events Coordinator',
                email: 'david.kim@it-r-group.edu',
                bio: 'Creative problem solver and event organizer. Making sure our community stays connected.',
            },
        }),
    ])

    console.log(`✅ Created ${members.length} members`)

    // Create sample updates
    const updates = await Promise.all([
        prisma.update.create({
            data: {
                title: 'Welcome to the New Academic Year!',
                content: `We are excited to welcome all new and returning students to the IT-R group. This year promises to be filled with exciting projects, workshops, and opportunities for growth.

## What's Coming This Year

- **Monthly Tech Talks**: Industry professionals sharing their experiences
- **Hackathons**: Quarterly coding competitions with prizes
- **Study Groups**: Collaborative learning sessions for challenging courses
- **Career Workshops**: Resume building, interview prep, and networking events

## Getting Involved

Join our Discord server to stay connected with the community and get updates on upcoming events. We're always looking for enthusiastic members to help organize activities and contribute to our projects.

Looking forward to an amazing year ahead!`,
                author: 'IT-R Admin',
                pinned: true,
            },
        }),
        prisma.update.create({
            data: {
                title: 'Upcoming Workshop: Introduction to Machine Learning',
                content: `Join us for an interactive workshop on machine learning fundamentals. This session is perfect for beginners who want to understand the basics of ML.

## Workshop Details

- **Date**: February 15th, 2024
- **Time**: 2:00 PM - 4:00 PM
- **Location**: Computer Lab 3
- **Instructor**: Dr. Sarah Johnson

## What You'll Learn

- Introduction to machine learning concepts
- Hands-on experience with Python and scikit-learn
- Building your first ML model
- Best practices and resources for further learning

No prior experience required! Just bring your laptop and enthusiasm to learn.`,
                author: 'Tech Committee',
                pinned: false,
            },
        }),
        prisma.update.create({
            data: {
                title: 'Project Showcase Results',
                content: `Congratulations to all participants in our recent project showcase! The innovation and creativity displayed was truly inspiring.

## Winners

🥇 **First Place**: Smart Campus Navigation App
- Team: Alex, Maria, and James
- Features: Real-time navigation, accessibility support, and event integration

🥈 **Second Place**: AI-Powered Study Buddy
- Team: Sarah and Michael
- Features: Personalized study plans, progress tracking, and collaborative features

🥉 **Third Place**: Sustainable Energy Monitor
- Team: Emily, David, and Lisa
- Features: Real-time energy consumption tracking and optimization suggestions

## Special Recognition

- **Most Innovative**: VR Learning Environment
- **Best User Experience**: Campus Event Planner
- **Most Practical**: Library Resource Optimizer

Thank you to all participants and judges. We're already excited for next year's showcase!`,
                author: 'Events Team',
                pinned: false,
            },
        }),
    ])

    console.log(`✅ Created ${updates.length} updates`)

    // Create sample gallery images (placeholder entries)
    const galleryImages = await Promise.all([
        prisma.galleryImage.create({
            data: {
                filename: 'workshop-2024-01.jpg',
                url: '/uploads/gallery/workshop-2024-01.jpg',
                caption: 'Machine Learning Workshop - January 2024',
                uploader: 'Tech Committee',
            },
        }),
        prisma.galleryImage.create({
            data: {
                filename: 'hackathon-2024.jpg',
                url: '/uploads/gallery/hackathon-2024.jpg',
                caption: 'Annual Hackathon 2024 - Amazing projects and great energy!',
                uploader: 'Events Team',
            },
        }),
        prisma.galleryImage.create({
            data: {
                filename: 'team-meeting.jpg',
                url: '/uploads/gallery/team-meeting.jpg',
                caption: 'Monthly team meeting - Planning upcoming events',
                uploader: 'IT-R Admin',
            },
        }),
    ])

    console.log(`✅ Created ${galleryImages.length} gallery images`)

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

    console.log(`✅ Created ${students.length} students`)

    console.log('🎉 Database seeded successfully!')
}

main()
    .catch((e) => {
        console.error('❌ Error seeding database:', e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })





