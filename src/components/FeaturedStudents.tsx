'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Users } from 'lucide-react'
import { Student } from '@/types'

const getGroupColor = (group: string) => {
    switch (group) {
        case 'R-1':
            return 'bg-blue-600/20 text-blue-300 border-blue-500/30'
        case 'R-2':
            return 'bg-green-600/20 text-green-300 border-green-500/30'
        case 'R-3':
            return 'bg-purple-600/20 text-purple-300 border-purple-500/30'
        default:
            return 'bg-gray-600/20 text-gray-300 border-gray-500/30'
    }
}

// Static student data - no API calls needed!
const studentsData: Student[] = [
  { id: 1, name: "DISHITA", group: "R-1", bio: "Student in R-1 group.", createdAt: new Date(), updatedAt: new Date() },
  { id: 2, name: "YASH GUPTA", group: "R-1", bio: "Student in R-1 group.", createdAt: new Date(), updatedAt: new Date() },
  { id: 3, name: "AMRIT RAJ YADAV", group: "R-1", bio: "Student in R-1 group.", createdAt: new Date(), updatedAt: new Date() },
  { id: 4, name: "SAKSHAM SHREYANSH", group: "R-1", bio: "Student in R-1 group.", createdAt: new Date(), updatedAt: new Date() },
  { id: 5, name: "JAGRATT VARSHNEY", group: "R-1", bio: "Student in R-1 group.", createdAt: new Date(), updatedAt: new Date() },
  { id: 6, name: "AAGAM JAIN", group: "R-1", bio: "Student in R-1 group.", createdAt: new Date(), updatedAt: new Date() },
  { id: 7, name: "MAYANK JAIN", group: "R-1", bio: "Student in R-1 group.", createdAt: new Date(), updatedAt: new Date() },
  { id: 8, name: "RISHAB BANSAL", group: "R-1", bio: "Student in R-1 group.", createdAt: new Date(), updatedAt: new Date() },
  { id: 9, name: "VEER PRATAP SINGH", group: "R-1", bio: "Student in R-1 group.", createdAt: new Date(), updatedAt: new Date() },
  { id: 10, name: "VISHESH GARG", group: "R-1", bio: "Student in R-1 group.", createdAt: new Date(), updatedAt: new Date() },
  { id: 11, name: "BHARAT KUMAR", group: "R-1", bio: "Student in R-1 group.", createdAt: new Date(), updatedAt: new Date() },
  { id: 12, name: "VARUN SINGH RAWAT", group: "R-1", bio: "Student in R-1 group.", createdAt: new Date(), updatedAt: new Date() },
  { id: 13, name: "PRABHJOT SINGH", group: "R-1", bio: "Student in R-1 group.", createdAt: new Date(), updatedAt: new Date() },
  { id: 14, name: "YASH MITTAL", group: "R-1", bio: "Student in R-1 group.", createdAt: new Date(), updatedAt: new Date() },
  { id: 15, name: "SAMARTH CHAUDHARY", group: "R-1", bio: "Student in R-1 group.", createdAt: new Date(), updatedAt: new Date() },
  { id: 16, name: "SUBHRADITYA GHOSH", group: "R-1", bio: "Student in R-1 group.", createdAt: new Date(), updatedAt: new Date() },
  { id: 17, name: "KARTIK SHARMA", group: "R-1", bio: "Student in R-1 group.", createdAt: new Date(), updatedAt: new Date() },
  { id: 18, name: "VARDHMAAN JAIN", group: "R-1", bio: "Student in R-1 group.", createdAt: new Date(), updatedAt: new Date() },
  { id: 19, name: "AKRITI SHUKLA", group: "R-1", bio: "Student in R-1 group.", createdAt: new Date(), updatedAt: new Date() },
  { id: 20, name: "KARTIK TIWARI", group: "R-1", bio: "Student in R-1 group.", createdAt: new Date(), updatedAt: new Date() },
  { id: 21, name: "PRATYUSH SINGH", group: "R-1", bio: "Student in R-1 group.", createdAt: new Date(), updatedAt: new Date() },
  { id: 22, name: "AASTHA GARG", group: "R-1", bio: "Student in R-1 group.", createdAt: new Date(), updatedAt: new Date() },
  { id: 23, name: "PARTH DHAMI", group: "R-1", bio: "Student in R-1 group.", createdAt: new Date(), updatedAt: new Date() },
  { id: 24, name: "DHRUV GUPTA", group: "R-1", bio: "Student in R-1 group.", createdAt: new Date(), updatedAt: new Date() },
  { id: 25, name: "NAVYA GUPTA", group: "R-1", bio: "Student in R-1 group.", createdAt: new Date(), updatedAt: new Date() },
  { id: 26, name: "DIVISHA ARORA", group: "R-1", bio: "Student in R-1 group.", createdAt: new Date(), updatedAt: new Date() },
  { id: 27, name: "MANNAT WADHWA", group: "R-1", bio: "Student in R-1 group.", createdAt: new Date(), updatedAt: new Date() },
  { id: 28, name: "ARYAN SINGHAL", group: "R-2", bio: "Student in R-2 group.", createdAt: new Date(), updatedAt: new Date() },
  { id: 29, name: "ROSHAN CHOUDHARY", group: "R-2", bio: "Student in R-2 group.", createdAt: new Date(), updatedAt: new Date() },
  { id: 30, name: "GARVIT", group: "R-2", bio: "Student in R-2 group.", createdAt: new Date(), updatedAt: new Date() },
  { id: 31, name: "AKSHAJ JAIN", group: "R-2", bio: "Student in R-2 group.", createdAt: new Date(), updatedAt: new Date() },
  { id: 32, name: "HARNIT GAUTAM", group: "R-2", bio: "Student in R-2 group.", createdAt: new Date(), updatedAt: new Date() },
  { id: 33, name: "SAKSHAM MANOCHA", group: "R-2", bio: "Student in R-2 group.", createdAt: new Date(), updatedAt: new Date() },
  { id: 34, name: "PRAKHAR SRIVASTAVA", group: "R-2", bio: "Student in R-2 group.", createdAt: new Date(), updatedAt: new Date() },
  { id: 35, name: "AGRIM SINGHAL", group: "R-2", bio: "Student in R-2 group.", createdAt: new Date(), updatedAt: new Date() },
  { id: 36, name: "NAMIT LAKHCHOWRA", group: "R-2", bio: "Student in R-2 group.", createdAt: new Date(), updatedAt: new Date() },
  { id: 37, name: "RAGHAV SHARMA", group: "R-2", bio: "Student in R-2 group.", createdAt: new Date(), updatedAt: new Date() },
  { id: 38, name: "KHUSHI GUPTA", group: "R-2", bio: "Student in R-2 group.", createdAt: new Date(), updatedAt: new Date() },
  { id: 39, name: "ASIF MIRZA", group: "R-2", bio: "Student in R-2 group.", createdAt: new Date(), updatedAt: new Date() },
  { id: 40, name: "PARTH GUPTA", group: "R-2", bio: "Student in R-2 group.", createdAt: new Date(), updatedAt: new Date() },
  { id: 41, name: "AJITESH NIGAM", group: "R-2", bio: "Student in R-2 group.", createdAt: new Date(), updatedAt: new Date() },
  { id: 42, name: "TANMAY GARG", group: "R-2", bio: "Student in R-2 group.", createdAt: new Date(), updatedAt: new Date() },
  { id: 43, name: "AMAN POKHARIA", group: "R-2", bio: "Student in R-2 group.", createdAt: new Date(), updatedAt: new Date() },
  { id: 44, name: "HEMANT KUMAR JHA", group: "R-2", bio: "Student in R-2 group.", createdAt: new Date(), updatedAt: new Date() },
  { id: 45, name: "SAMBHAV JAIN", group: "R-2", bio: "Student in R-2 group.", createdAt: new Date(), updatedAt: new Date() },
  { id: 46, name: "ROHIN SAXENA", group: "R-2", bio: "Student in R-2 group.", createdAt: new Date(), updatedAt: new Date() },
  { id: 47, name: "YASH SALHOTRA", group: "R-2", bio: "Student in R-2 group.", createdAt: new Date(), updatedAt: new Date() },
  { id: 48, name: "SHUBHRA SINGH", group: "R-2", bio: "Student in R-2 group.", createdAt: new Date(), updatedAt: new Date() },
  { id: 49, name: "JAHANVI KUKREJA", group: "R-2", bio: "Student in R-2 group.", createdAt: new Date(), updatedAt: new Date() },
  { id: 50, name: "HARSHITA JAIN", group: "R-2", bio: "Student in R-2 group.", createdAt: new Date(), updatedAt: new Date() },
  { id: 51, name: "DIYA MANN", group: "R-2", bio: "Student in R-2 group.", createdAt: new Date(), updatedAt: new Date() },
  { id: 52, name: "SHIVAM AGGARWAL", group: "R-2", bio: "Student in R-2 group.", createdAt: new Date(), updatedAt: new Date() },
  { id: 53, name: "RIDDHIKA SACHDEVA", group: "R-2", bio: "Student in R-2 group.", createdAt: new Date(), updatedAt: new Date() },
  { id: 54, name: "DEEPANSHU AGGARWAL", group: "R-2", bio: "Student in R-2 group.", createdAt: new Date(), updatedAt: new Date() },
  { id: 55, name: "GARIMA", group: "R-3", bio: "Student in R-3 group.", createdAt: new Date(), updatedAt: new Date() },
  { id: 56, name: "KRISHNA NEGI", group: "R-3", bio: "Student in R-3 group.", createdAt: new Date(), updatedAt: new Date() },
  { id: 57, name: "VANSHIKA JOSHI", group: "R-3", bio: "Student in R-3 group.", createdAt: new Date(), updatedAt: new Date() },
  { id: 58, name: "KAVYA SINGHAL", group: "R-3", bio: "Student in R-3 group.", createdAt: new Date(), updatedAt: new Date() },
  { id: 59, name: "AYUSH KUMAR JHA", group: "R-3", bio: "Student in R-3 group.", createdAt: new Date(), updatedAt: new Date() },
  { id: 60, name: "ANUJAY DIXIT", group: "R-3", bio: "Student in R-3 group.", createdAt: new Date(), updatedAt: new Date() },
  { id: 61, name: "AMAN DWIVEDI", group: "R-3", bio: "Student in R-3 group.", createdAt: new Date(), updatedAt: new Date() },
  { id: 62, name: "MANAS KHANDELWAL", group: "R-3", bio: "Student in R-3 group.", createdAt: new Date(), updatedAt: new Date() },
  { id: 63, name: "SUHANI", group: "R-3", bio: "Student in R-3 group.", createdAt: new Date(), updatedAt: new Date() },
  { id: 64, name: "ASHISH SINGH", group: "R-3", bio: "Student in R-3 group.", createdAt: new Date(), updatedAt: new Date() },
  { id: 65, name: "PRALABH PUSHKER", group: "R-3", bio: "Student in R-3 group.", createdAt: new Date(), updatedAt: new Date() },
  { id: 66, name: "RAGHAV", group: "R-3", bio: "Student in R-3 group.", createdAt: new Date(), updatedAt: new Date() },
  { id: 67, name: "AYUSH JINDAL", group: "R-3", bio: "Student in R-3 group.", createdAt: new Date(), updatedAt: new Date() },
  { id: 68, name: "RHYTHM ARORA", group: "R-3", bio: "Student in R-3 group.", createdAt: new Date(), updatedAt: new Date() },
  { id: 69, name: "MANVENDRA SINGH RATHORE", group: "R-3", bio: "Student in R-3 group.", createdAt: new Date(), updatedAt: new Date() },
  { id: 70, name: "ADIT GUPTA", group: "R-3", bio: "Student in R-3 group.", createdAt: new Date(), updatedAt: new Date() },
  { id: 71, name: "RITISHA BISHT", group: "R-3", bio: "Student in R-3 group.", createdAt: new Date(), updatedAt: new Date() },
  { id: 72, name: "AVNA BATRA", group: "R-3", bio: "Student in R-3 group.", createdAt: new Date(), updatedAt: new Date() },
  { id: 73, name: "SAURISH SETH", group: "R-3", bio: "Student in R-3 group.", createdAt: new Date(), updatedAt: new Date() },
  { id: 74, name: "HARSH SHARMA", group: "R-3", bio: "Student in R-3 group.", createdAt: new Date(), updatedAt: new Date() },
  { id: 75, name: "AMITESH RANJAN", group: "R-3", bio: "Student in R-3 group.", createdAt: new Date(), updatedAt: new Date() },
  { id: 76, name: "KRISH CHOPRA", group: "R-3", bio: "Student in R-3 group.", createdAt: new Date(), updatedAt: new Date() },
  { id: 77, name: "ARADHYA SHARMA", group: "R-3", bio: "Student in R-3 group.", createdAt: new Date(), updatedAt: new Date() },
  { id: 78, name: "SEERAT TALWAR", group: "R-3", bio: "Student in R-3 group.", createdAt: new Date(), updatedAt: new Date() },
  { id: 79, name: "NAMAN GUPTA", group: "R-3", bio: "Student in R-3 group.", createdAt: new Date(), updatedAt: new Date() },
  { id: 80, name: "AARAV GUPTA", group: "R-3", bio: "Student in R-3 group.", createdAt: new Date(), updatedAt: new Date() },
  { id: 81, name: "RAGINI AGGARWAL", group: "R-3", bio: "Student in R-3 group.", createdAt: new Date(), updatedAt: new Date() },
  { id: 82, name: "MAYANK JAIN", group: "R-3", bio: "Student in R-3 group.", createdAt: new Date(), updatedAt: new Date() }
]

export function FeaturedStudents() {
    // Show first 6 students - no API calls needed!
    const students = studentsData.slice(0, 6)

    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 bg-blue-600/10 text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-4"
                    >
                        <Users className="w-4 h-4" />
                        Our Students
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-3xl sm:text-4xl font-bold text-white mb-4"
                    >
                        Meet Our Amazing Students
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-gray-400 text-lg max-w-2xl mx-auto"
                    >
                        Discover the talented individuals who make up our IT-R community
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    {students.map((student, index) => (
                        <motion.div
                            key={student.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                                    {student.name.charAt(0)}
                                </div>
                                <div>
                                    <h3 className="text-white font-semibold text-lg">{student.name}</h3>
                                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium border ${getGroupColor(student.group)}`}>
                                        {student.group}
                                    </span>
                                </div>
                            </div>
                            <p className="text-gray-400 text-sm">{student.bio}</p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="text-center"
                >
                    <Link
                        href="/students"
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                    >
                        View All Students
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </motion.div>
            </div>
        </section>
    )
}