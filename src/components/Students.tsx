'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, Users, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

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

// Static student data - exactly like timetable and faculty!
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
  { id: 72, name: "abha batra", group: "R-3", bio: "Student in R-3 group." },
  { id: 73, name: "SAURISH SETH", group: "R-3", bio: "Student in R-3 group." },
  { id: 74, name: "HARSH SHARMA", group: "R-3", bio: "Student in R-3 group." },
  { id: 75, name: "AMITESH RANJAN", group: "R-3", bio: "Student in R-3 group." },
  { id: 76, name: "KRISH CHOPRA", group: "R-3", bio: "Student in R-3 group." },
  { id: 77, name: "ARADHYA SHARMA", group: "R-3", bio: "Student in R-3 group." },
  { id: 78, name: "SEERAT TALWAR", group: "R-3", bio: "Student in R-3 group." },
  { id: 79, name: "NAMAN GUPTA", group: "R-3", bio: "Student in R-3 group." },
  { id: 80, name: "AARAV GUPTA", group: "R-3", bio: "Student in R-3 group." },
  { id: 81, name: "RAGINI AGGARWAL", group: "R-3", bio: "Student in R-3 group." },
  { id: 82, name: "MAYANK JAIN", group: "R-3", bio: "Student in R-3 group." },
  { id: 83, name: "SHIVANK", group: "R-3", bio: "Student in R-3 group." },
  { id: 84, name: "GYAN WARDHAN", group: "R-3", bio: "Student in R-3 group." }
]

export function Students() {
    const [searchTerm, setSearchTerm] = useState('')
    const [selectedGroup, setSelectedGroup] = useState('All')

    const filteredStudents = studentsData
        .filter(student => {
            const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase())
            const matchesGroup = selectedGroup === 'All' || student.group === selectedGroup
            return matchesSearch && matchesGroup
        })

    const groups = ['All', 'R-1', 'R-2', 'R-3']

    return (
        <div className="container mx-auto px-4 py-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-8"
                >
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors mb-4"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Home
                    </Link>
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-3 bg-blue-600/20 rounded-lg">
                            <Users className="w-6 h-6 text-blue-400" />
                        </div>
                        <div>
                            <h1 className="text-3xl font-bold text-white">Our Students</h1>
                            <p className="text-gray-400">Meet the talented members of our IT-R community</p>
                        </div>
                    </div>
                </motion.div>

                {/* Filters */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 mb-8"
                >
                    <div className="flex flex-col sm:flex-row gap-4">
                        {/* Search */}
                        <div className="flex-1">
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                                <input
                                    type="text"
                                    placeholder="Search students..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                            </div>
                        </div>

                        {/* Group Filter */}
                        <div className="sm:w-48">
                            <select
                                value={selectedGroup}
                                onChange={(e) => setSelectedGroup(e.target.value)}
                                className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            >
                                {groups.map(group => (
                                    <option key={group} value={group} className="bg-gray-800">
                                        {group === 'All' ? 'All Groups' : group}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </motion.div>

                {/* Results Count */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mb-6"
                >
                    <p className="text-gray-400">
                        Showing {filteredStudents.length} of {studentsData.length} students
                    </p>
                </motion.div>

                {/* Students Grid */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                >
                    {filteredStudents.map((student, index) => (
                        <motion.div
                            key={student.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.05 }}
                            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                                    {student.name.charAt(0)}
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-white font-semibold text-lg">{student.name}</h3>
                                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium border ${getGroupColor(student.group)}`}>
                                        {student.group}
                                    </span>
                                </div>
                            </div>
                            <p className="text-gray-400 text-sm">{student.bio}</p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* No Results */}
                {filteredStudents.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="text-center py-12"
                    >
                        <Users className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-gray-400 mb-2">No students found</h3>
                        <p className="text-gray-500">Try adjusting your search or filter criteria</p>
                    </motion.div>
                )}
        </div>
    )
}
