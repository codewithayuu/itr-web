'use client'

import { useState, useEffect } from 'react'
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

export function FeaturedStudents() {
    const [students, setStudents] = useState<Student[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchStudents = async () => {
            try {
                const response = await fetch('/api/students')
                if (response.ok) {
                    const data = await response.json()
                    
                    
                    // Sort students by the defined order and take first 6
                    const sortedStudents = data.sort((a: Student, b: Student) => {
                        // Create unique identifiers by combining name and group
                        const identifierA = `${a.name}-${a.group}`
                        const identifierB = `${b.name}-${b.group}`
                        
                        // Define the exact order with name-group combinations
                        const studentOrderWithGroups = [
                            "DISHITA-R-1", "YASH GUPTA-R-1", "AMRIT RAJ YADAV-R-1", "SAKSHAM SHREYANSH-R-1", "JAGRATT VARSHNEY-R-1",
                            "AAGAM JAIN-R-1", "MAYANK JAIN-R-1", "RISHAB BANSAL-R-1", "VEER PRATAP SINGH-R-1", "VISHESH GARG-R-1",
                            "BHARAT KUMAR-R-1", "VARUN SINGH RAWAT-R-1", "PRABHJOT SINGH-R-1", "YASH MITTAL-R-1", "SAMARTH CHAUDHARY-R-1",
                            "SUBHRADITYA GHOSH-R-1", "KARTIK SHARMA-R-1", "VARDHMAAN JAIN-R-1", "AKRITI SHUKLA-R-1", "KARTIK TIWARI-R-1",
                            "PRATYUSH SINGH-R-1", "AASTHA GARG-R-1", "PARTH DHAMI-R-1", "DHRUV GUPTA-R-1", "NAVYA GUPTA-R-1",
                            "DIVISHA ARORA-R-1", "MANNAT WADHWA-R-1", "ARYAN SINGHAL-R-2", "ROSHAN CHOUDHARY-R-2", "GARVIT-R-2",
                            "AKSHAJ JAIN-R-2", "HARNIT GAUTAM-R-2", "SAKSHAM MANOCHA-R-2", "PRAKHAR SRIVASTAVA-R-2", "AGRIM SINGHAL-R-2",
                            "NAMIT LAKHCHOWRA-R-2", "RAGHAV SHARMA-R-2", "KHUSHI GUPTA-R-2", "ASIF MIRZA-R-2", "PARTH GUPTA-R-2",
                            "AJITESH NIGAM-R-2", "TANMAY GARG-R-2", "AMAN POKHARIA-R-2", "HEMANT KUMAR JHA-R-2", "SAMBHAV JAIN-R-2",
                            "ROHIN SAXENA-R-2", "YASH SALHOTRA-R-2", "SHUBHRA SINGH-R-2", "JAHANVI KUKREJA-R-2", "HARSHITA JAIN-R-2",
                            "DIYA MANN-R-2", "SHIVAM AGGARWAL-R-2", "RIDDHIKA SACHDEVA-R-2", "DEEPANSHU AGGARWAL-R-2", "GARIMA-R-3",
                            "KRISHNA NEGI-R-3", "VANSHIKA JOSHI-R-3", "KAVYA SINGHAL-R-3", "AYUSH KUMAR JHA-R-3", "ANUJAY DIXIT-R-3",
                            "AMAN DWIVEDI-R-3", "MANAS KHANDELWAL-R-3", "SUHANI-R-3", "ASHISH SINGH-R-3", "PRALABH PUSHKER-R-3",
                            "RAGHAV-R-3", "AYUSH JINDAL-R-3", "RHYTHM ARORA-R-3", "MANVENDRA SINGH RATHORE-R-3", "ADIT GUPTA-R-3",
                            "RITISHA BISHT-R-3", "AVNA BATRA-R-3", "SAURISH SETH-R-3", "HARSH SHARMA-R-3", "AMITESH RANJAN-R-3",
                            "KRISH CHOPRA-R-3", "ARADHYA SHARMA-R-3", "SEERAT TALWAR-R-3", "NAMAN GUPTA-R-3", "AARAV GUPTA-R-3",
                            "RAGINI AGGARWAL-R-3", "MAYANK JAIN-R-3"
                        ]
                        
                        const indexA = studentOrderWithGroups.indexOf(identifierA)
                        const indexB = studentOrderWithGroups.indexOf(identifierB)
                        return indexA - indexB
                    })
                    
                    setStudents(sortedStudents.slice(0, 6))
                }
            } catch (error) {
                console.error('Error fetching students:', error)
            } finally {
                setLoading(false)
            }
        }

        fetchStudents()
    }, [])

    if (loading) {
        return (
            <section className="section-padding relative z-20">
                <div className="container-custom">
                    <div className="text-center py-12">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto mb-4"></div>
                        <p className="text-gray-300">Loading students...</p>
                    </div>
                </div>
            </section>
        )
    }

    return (
        <section className="section-padding relative z-20">
            <div className="container-custom">
                <div className="text-center mb-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold text-white sm:text-4xl mb-4"
                    >
                        Meet Our Talented Students
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="text-lg text-gray-300"
                    >
                        Discover the bright minds and future leaders of IT-R
                    </motion.p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {students.map((student, index) => (
                        <motion.div
                            key={student.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -5, scale: 1.02 }}
                            className="group relative overflow-hidden rounded-2xl border border-gray-700/50 bg-gray-800/30 backdrop-blur-sm p-6 shadow-xl hover:shadow-2xl transition-all duration-300 card-hover"
                        >
                            <div className="flex flex-col items-center text-center space-y-4">
                                <div className="h-20 w-20 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center text-2xl font-bold text-white shadow-lg">
                                    {student.name.charAt(0)}
                                </div>

                                <span className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-medium border ${getGroupColor(student.group)}`}>
                                    {student.group}
                                </span>

                                <h3 className="text-lg font-semibold text-white">{student.name}</h3>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="mt-12 text-center"
                >
                    <Link
                        href="/students"
                        className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all duration-300"
                    >
                        <Users className="mr-2 h-4 w-4" />
                        View All Students
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </motion.div>
            </div>
        </section>
    )
}