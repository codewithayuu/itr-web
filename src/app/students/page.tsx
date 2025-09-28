'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Search, Users, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
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

export default function StudentsPage() {
    const [searchTerm, setSearchTerm] = useState('')
    const [selectedGroup, setSelectedGroup] = useState('All')
    const [students, setStudents] = useState<Student[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchStudents = async () => {
            try {
                const response = await fetch('/api/students')
                if (!response.ok) {
                    throw new Error('Failed to fetch students')
                }
                const data = await response.json()
                setStudents(data)
            } catch (err) {
                setError(err instanceof Error ? err.message : 'An error occurred')
            } finally {
                setLoading(false)
            }
        }

        fetchStudents()
    }, [])


    const filteredStudents = students
        .filter(student => {
            const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase())
            const matchesGroup = selectedGroup === 'All' || student.group === selectedGroup
            return matchesSearch && matchesGroup
        })
        .sort((a, b) => {
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

    const groupCounts = {
        'R-1': students.filter(s => s.group === 'R-1').length,
        'R-2': students.filter(s => s.group === 'R-2').length,
        'R-3': students.filter(s => s.group === 'R-3').length,
    }

    if (loading) {
        return (
            <div className="relative z-10">
                <div className="section-padding relative z-20">
                    <div className="container-custom">
                        <div className="text-center py-12">
                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
                            <p className="text-gray-300">Loading students...</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    if (error) {
        return (
            <div className="relative z-10">
                <div className="section-padding relative z-20">
                    <div className="container-custom">
                        <div className="text-center py-12">
                            <p className="text-red-400 mb-4">Error: {error}</p>
                            <button 
                                onClick={() => window.location.reload()} 
                                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                            >
                                Retry
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="relative z-10">
            <div className="section-padding relative z-20">
                <div className="container-custom">
                    {/* Header */}
                    <div className="mb-8">
                        <Link
                            href="/"
                            className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors mb-4"
                        >
                            <ArrowLeft className="h-4 w-4 mr-2" />
                            Back to Home
                        </Link>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-center"
                        >
                            <h1 className="text-4xl font-bold text-white sm:text-5xl mb-4">
                                All Students
                            </h1>
                            <p className="text-lg text-gray-300 mb-6">
                                Meet all {students.length} talented students of IT-R
                            </p>
                        </motion.div>
                    </div>

                    {/* Search and Filter */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mb-8 space-y-4"
                    >
                        <div className="flex flex-col sm:flex-row gap-4">
                            <div className="relative flex-1">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Search students..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full pl-10 pr-4 py-2 border border-gray-600 bg-gray-800/50 backdrop-blur-sm rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                            </div>

                            <div className="flex gap-2">
                                {['All', 'R-1', 'R-2', 'R-3'].map((group) => (
                                    <button
                                        key={group}
                                        onClick={() => setSelectedGroup(group)}
                                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${selectedGroup === group
                                                ? 'bg-blue-600 text-white'
                                                : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-600'
                                            }`}
                                    >
                                        {group}
                                        {group !== 'All' && (
                                            <span className="ml-1 text-xs">({groupCounts[group as keyof typeof groupCounts]})</span>
                                        )}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Results Count */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="mb-6"
                    >
                        <p className="text-gray-300">
                            Showing {filteredStudents.length} of {students.length} students
                        </p>
                    </motion.div>

                    {/* Students Grid */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
                    >
                        {filteredStudents.map((student, index) => (
                            <motion.div
                                key={student.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.05 }}
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
                    </motion.div>

                    {/* No Results */}
                    {filteredStudents.length === 0 && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="text-center py-12"
                        >
                            <Users className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                            <h3 className="text-lg font-semibold text-white mb-2">No students found</h3>
                            <p className="text-gray-300">Try adjusting your search or filter criteria</p>
                        </motion.div>
                    )}
                </div>
            </div>
        </div>
    )
}