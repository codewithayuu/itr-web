'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Users } from 'lucide-react'
import { memo } from 'react'

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

// Optimized student data - only first 6 students for featured section
const featuredStudentsData = [
  { id: 1, name: "DISHITA", group: "R-1", bio: "Student in R-1 group." },
  { id: 2, name: "YASH GUPTA", group: "R-1", bio: "Student in R-1 group." },
  { id: 3, name: "AMRIT RAJ YADAV", group: "R-1", bio: "Student in R-1 group." },
  { id: 28, name: "ARYAN SINGHAL", group: "R-2", bio: "Student in R-2 group." },
  { id: 55, name: "GARIMA", group: "R-3", bio: "Student in R-3 group." },
  { id: 56, name: "KRISHNA NEGI", group: "R-3", bio: "Student in R-3 group." }
]

// Memoized student card component
const StudentCard = memo(({ student, index }: { student: any, index: number }) => (
    <motion.div
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
))

StudentCard.displayName = 'StudentCard'

export const FeaturedStudents = memo(() => {
    // Use optimized data directly
    const students = featuredStudentsData

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
                        <StudentCard key={student.id} student={student} index={index} />
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
})

FeaturedStudents.displayName = 'FeaturedStudents'