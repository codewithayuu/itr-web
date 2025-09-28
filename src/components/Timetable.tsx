'use client'

import { motion } from 'framer-motion'
import { Calendar, Clock, MapPin, Users } from 'lucide-react'
import { timetableData } from '@/data/timetable'

const getSubjectColor = (subject: string | null) => {
    if (!subject) return 'bg-gray-800/30 text-gray-500'

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
    if (subject.includes('NCC') || subject.includes('NSS') || subject.includes('Sports')) {
        return 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30'
    }
    if (subject.includes('Library')) {
        return 'bg-teal-500/20 text-teal-300 border-teal-500/30'
    }
    if (subject.includes('LUNCH BREAK')) {
        return 'bg-red-500/20 text-red-300 border-red-500/30'
    }

    return 'bg-gray-600/20 text-gray-300 border-gray-500/30'
}

export function Timetable() {
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
                        Class Timetable
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="mt-4 text-lg text-gray-300"
                    >
                        Your weekly schedule at a glance. Plan your studies and never miss a class!
                    </motion.p>
                </div>

                {/* Timetable Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="space-y-6"
                >
                    {timetableData.map((day, dayIndex) => (
                        <motion.div
                            key={day.day}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 + dayIndex * 0.1 }}
                            viewport={{ once: true }}
                            className="rounded-2xl border border-gray-600/50 bg-white/10 backdrop-blur-sm p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:bg-white/15"
                        >
                            <div className="flex items-center space-x-3 mb-6">
                                <Calendar className="h-6 w-6 text-cyan-400" />
                                <h3 className="text-2xl font-bold text-white">{day.day}</h3>
                            </div>

                            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                                {day.slots.map((slot, slotIndex) => (
                                    <motion.div
                                        key={slotIndex}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.4, delay: 0.4 + dayIndex * 0.1 + slotIndex * 0.05 }}
                                        viewport={{ once: true }}
                                        whileHover={{ y: -2, scale: 1.02 }}
                                        className={`rounded-xl border p-4 transition-all duration-300 hover:shadow-lg ${getSubjectColor(slot.subject)}`}
                                    >
                                        <div className="space-y-3">
                                            <div className="flex items-center space-x-2">
                                                <Clock className="h-4 w-4 text-gray-400" />
                                                <span className="text-sm font-medium text-gray-300">{slot.time}</span>
                                            </div>

                                            {slot.subject ? (
                                                <>
                                                    <div className="space-y-2">
                                                        <h4 className="font-semibold text-white text-sm leading-tight">
                                                            {slot.subject}
                                                        </h4>

                                                        {slot.room && (
                                                            <div className="flex items-center space-x-1">
                                                                <MapPin className="h-3 w-3 text-gray-400" />
                                                                <span className="text-xs text-gray-300">Room: {slot.room}</span>
                                                            </div>
                                                        )}

                                                        {slot.faculty && (
                                                            <div className="flex items-center space-x-1">
                                                                <Users className="h-3 w-3 text-gray-400" />
                                                                <span className="text-xs text-gray-300 line-clamp-2">{slot.faculty}</span>
                                                            </div>
                                                        )}
                                                    </div>
                                                </>
                                            ) : (
                                                <div className="text-center py-2">
                                                    <span className="text-gray-500 text-sm">No Class</span>
                                                </div>
                                            )}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    )
}