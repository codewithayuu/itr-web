'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Calendar, ArrowRight, Pin } from 'lucide-react'
// Simple date formatter
const formatDate = (date: Date) => {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
}

// IT-R Class Updates
const mockUpdates = [
    {
        id: 1,
        title: 'Best of Luck for Mid-Semester Exams! 🎓',
        content: 'Phod ke aana hai exam',
        author: 'iambatman',
        createdAt: new Date(),
        pinned: true,
    },
    {
        id: 2,
        title: 'IT-R Class Website Launched!',
        content: 'Welcome to the official IT-R class website. Here you can find your timetable, faculty information, and stay updated with class announcements.',
        author: 'IT-R Admin',
        createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000), // 1 day ago
        pinned: false,
    },
    {
        id: 3,
        title: 'Class Timetable Available',
        content: 'Your weekly class schedule is now available on the website. Check the Timetable section for your daily classes and room assignments.',
        author: 'IT-R Admin',
        createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), // 2 days ago
        pinned: false,
    },
    {
        id: 4,
        title: 'Faculty Information Updated',
        content: 'Complete faculty information including subjects and room numbers has been updated. Visit the Faculty section to know your teachers better.',
        author: 'IT-R Admin',
        createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000), // 5 days ago
        pinned: false,
    },
]

export function LatestUpdates() {
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
                        Latest Updates
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="text-lg text-gray-300"
                    >
                        Stay informed with the latest class announcements and updates from IT-R
                    </motion.p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {mockUpdates.map((update, index) => (
                        <motion.article
                            key={update.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -5, scale: 1.02 }}
                            className="group relative overflow-hidden rounded-2xl border border-gray-700/50 bg-gray-800/30 backdrop-blur-sm p-6 shadow-xl hover:shadow-2xl transition-all duration-300 card-hover"
                        >
                            {update.pinned && (
                                <div className="absolute top-4 right-4">
                                    <Pin className="h-4 w-4 text-blue-400" />
                                </div>
                            )}

                            <div className="space-y-4">
                                <div>
                                    <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors mb-2">
                                        {update.title}
                                    </h3>
                                    <p className="text-sm text-gray-300 line-clamp-3">
                                        {update.content}
                                    </p>
                                </div>

                                <div className="flex items-center justify-between text-xs text-gray-400">
                                    <div className="flex items-center space-x-1">
                                        <Calendar className="h-3 w-3" />
                                        <span>{formatDate(update.createdAt)}</span>
                                    </div>
                                    <span>by {update.author}</span>
                                </div>

                            </div>
                        </motion.article>
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
                        href="/updates"
                        className="inline-flex items-center justify-center rounded-lg border border-gray-600 bg-gray-800/50 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:bg-gray-700/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all duration-300"
                    >
                        View All Updates
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </motion.div>
            </div>
        </section>
    )
}