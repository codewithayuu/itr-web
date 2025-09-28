'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Mail, BookOpen, MapPin } from 'lucide-react'
import { facultyData } from '@/data/timetable'

const getSubjectColor = (subject: string) => {
  if (subject.includes('LAB') || subject.includes('Lab')) {
    return 'bg-blue-500/20 text-blue-300 border-blue-500/30'
  }
  if (subject.includes('Maths') || subject.includes('Math')) {
    return 'bg-green-500/20 text-green-300 border-green-500/30'
  }
  if (subject.includes('Physics')) {
    return 'bg-purple-500/20 text-purple-300 border-purple-500/30'
  }
  if (subject.includes('Prog') || subject.includes('C')) {
    return 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30'
  }
  if (subject.includes('Env') || subject.includes('Studies')) {
    return 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30'
  }
  if (subject.includes('Comm') || subject.includes('Skills')) {
    return 'bg-pink-500/20 text-pink-300 border-pink-500/30'
  }
  if (subject.includes('Manu') || subject.includes('Process')) {
    return 'bg-orange-500/20 text-orange-300 border-orange-500/30'
  }
  if (subject.includes('Graphics')) {
    return 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30'
  }
  
  return 'bg-gray-600/20 text-gray-300 border-gray-500/30'
}

export function Faculty() {
  return (
    <section className="section-padding relative z-20">
      {/* Space Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-0.5 h-0.5 bg-white rounded-full animate-twinkle"></div>
          <div className="absolute top-20 left-32 w-0.5 h-0.5 bg-blue-200 rounded-full animate-twinkle delay-1000"></div>
          <div className="absolute top-32 left-16 w-0.5 h-0.5 bg-cyan-200 rounded-full animate-twinkle delay-2000"></div>
          <div className="absolute top-16 left-48 w-0.5 h-0.5 bg-purple-200 rounded-full animate-twinkle delay-500"></div>
          <div className="absolute top-40 left-24 w-0.5 h-0.5 bg-white rounded-full animate-twinkle delay-1500"></div>
          <div className="absolute top-24 left-40 w-0.5 h-0.5 bg-blue-300 rounded-full animate-twinkle delay-3000"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-white sm:text-4xl"
          >
            Our Esteemed Faculty
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="mt-4 text-lg text-gray-300"
          >
            Meet the dedicated educators and mentors shaping the future of IT-R students
          </motion.p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {facultyData.map((faculty, index) => (
            <motion.div
              key={faculty.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group relative overflow-hidden rounded-2xl border border-gray-600/50 bg-white/10 backdrop-blur-sm p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:bg-white/20"
            >
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 flex items-center justify-center text-lg font-bold text-white shadow-lg">
                    {faculty.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{faculty.name}</h3>
                    <p className="text-sm text-cyan-400">Faculty Member</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start space-x-2">
                    <MapPin className="h-4 w-4 text-gray-400 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-gray-300">Room: {faculty.room}</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <BookOpen className="h-4 w-4 text-gray-400" />
                      <span className="text-xs text-gray-400">Subjects:</span>
                    </div>
                    <div className="space-y-2">
                      {faculty.subjects.map((subject, idx) => (
                        <div
                          key={idx}
                          className={`inline-block rounded-lg px-3 py-1 text-xs font-medium border ${getSubjectColor(subject)}`}
                        >
                          {subject}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2">
                    <a
                      href={`mailto:${faculty.name.toLowerCase().replace(/\s+/g, '.')}@it-r.edu`}
                      className="inline-flex items-center text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      <Mail className="h-3 w-3 mr-1" />
                      Contact
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Faculty Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="rounded-2xl border border-gray-600/50 bg-white/10 backdrop-blur-sm p-6 text-center">
            <div className="text-3xl font-bold text-cyan-400 mb-2">{facultyData.length}</div>
            <div className="text-sm text-gray-300">Total Faculty</div>
          </div>
          <div className="rounded-2xl border border-gray-600/50 bg-white/10 backdrop-blur-sm p-6 text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">
              {facultyData.reduce((acc, faculty) => acc + faculty.subjects.length, 0)}
            </div>
            <div className="text-sm text-gray-300">Subjects Covered</div>
          </div>
          <div className="rounded-2xl border border-gray-600/50 bg-white/10 backdrop-blur-sm p-6 text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">100%</div>
            <div className="text-sm text-gray-300">Dedicated to Excellence</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center justify-center rounded-lg border border-gray-400 bg-white/10 backdrop-blur-sm px-6 py-3 text-sm font-semibold text-white shadow-lg">
            <GraduationCap className="mr-2 h-4 w-4" />
            Committed to Excellence in Education
          </div>
        </motion.div>
      </div>
    </section>
  )
}