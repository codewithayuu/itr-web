'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Users, Newspaper, Calendar, GraduationCap } from 'lucide-react'
import { useState, useEffect } from 'react'

const features = [
    {
        name: 'Latest Updates',
        description: 'Stay informed with our latest news and announcements',
        icon: Newspaper,
        href: '/updates',
    },
    {
        name: 'Meet Our Students',
        description: 'Get to know the talented students of our Class',
        icon: Users,
        href: '/students',
    },
    {
        name: 'Class Timetable',
        description: 'View your weekly schedule and class information',
        icon: Calendar,
        href: '/timetable',
    },
    {
        name: 'Our Faculty',
        description: 'Meet the dedicated educators and mentors',
        icon: GraduationCap,
        href: '/faculty',
    },
]

// Random quotes and coding jokes
const quotesAndJokes = [
    {
        text: "Code is like humor. When you have to explain it, it's bad.",
        type: "joke"
    },
    {
        text: "There are only 10 types of people in the world: those who understand binary and those who don't.",
        type: "joke"
    },
    {
        text: "Why do programmers prefer dark mode? Because light attracts bugs!",
        type: "joke"
    },
    {
        text: "A programmer is a machine that turns coffee into code.",
        type: "quote"
    },
    {
        text: "First, solve the problem. Then, write the code.",
        type: "quote"
    },
    {
        text: "Experience is the name everyone gives to their mistakes.",
        type: "quote"
    },
    {
        text: "The best error message is the one that never shows up.",
        type: "quote"
    },
    {
        text: "Why don't programmers like nature? It has too many bugs.",
        type: "joke"
    },
    {
        text: "Programming is not about typing, it's about thinking.",
        type: "quote"
    },
    {
        text: "How many programmers does it take to change a light bulb? None, that's a hardware problem.",
        type: "joke"
    },
    {
        text: "The only way to go fast is to go well.",
        type: "quote"
    },
    {
        text: "Why do Java developers wear glasses? Because they can't C#!",
        type: "joke"
    },
    {
        text: "Clean code always looks like it was written by someone who cares.",
        type: "quote"
    },
    {
        text: "What's a programmer's favorite hangout place? The Foo Bar.",
        type: "joke"
    },
    {
        text: "The best way to get a project done faster is to start sooner.",
        type: "quote"
    },
    {
        text: "Why did the programmer quit his job? He didn't get arrays.",
        type: "joke"
    },
    {
        text: "Simplicity is the ultimate sophistication.",
        type: "quote"
    },
    {
        text: "What do you call a programmer from Finland? Nerdic.",
        type: "joke"
    },
    {
        text: "The future belongs to those who believe in the beauty of their dreams.",
        type: "quote"
    },
    {
        text: "Why don't programmers like to go outside? The sunlight causes too many reflections.",
        type: "joke"
    }
]

export function Hero() {
    const [randomQuote, setRandomQuote] = useState(quotesAndJokes[0])

    useEffect(() => {
        // Select a random quote/joke on component mount
        const randomIndex = Math.floor(Math.random() * quotesAndJokes.length)
        setRandomQuote(quotesAndJokes[randomIndex])
    }, [])

    return (
        <section className="section-padding relative z-20">
            <div className="container-custom">
                <div className="text-center max-w-4xl mx-auto">
                    {/* Main heading */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6 mb-12"
                    >
                        <div className="inline-flex items-center rounded-full border border-purple-500/30 bg-purple-900/20 px-4 py-2 text-sm font-medium text-white mb-6">
                            <span className="text-blue-400">&lt;/&gt;</span>
                            <span className="ml-2">IT-R - Information Technology</span>
                        </div>

                        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
                            Welcome to{' '}
                            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                                MAIT
                            </span>{' '}
                            <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                                IT-R
                            </span>
                        </h1>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="mx-auto max-w-2xl"
                        >
                            <p className="text-lg text-gray-300 sm:text-xl italic">
                                &quot;{randomQuote.text}&quot;
                            </p>
                        </motion.div>
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
                    >
                        <Link
                            href="/updates"
                            className="group inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all duration-300"
                        >
                            Explore Updates
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                        <Link
                            href="/students"
                            className="inline-flex items-center justify-center rounded-lg border border-gray-600 bg-gray-800/50 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:bg-gray-700/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors duration-300"
                        >
                            Meet Our Students
                        </Link>
                    </motion.div>

                    {/* Feature cards */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
                    >
                        {features.map((feature, index) => {
                            const Icon = feature.icon
                            return (
                                <motion.div
                                    key={feature.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                                    whileHover={{ y: -5, scale: 1.02 }}
                                    className="group relative overflow-hidden rounded-2xl border border-gray-700/50 bg-gray-800/30 backdrop-blur-sm p-6 shadow-xl hover:shadow-2xl transition-all duration-300 card-hover"
                                >
                                    <div className="flex flex-col items-center text-center space-y-4">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600/20 text-blue-400 border border-blue-500/30">
                                            <Icon className="h-6 w-6" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-white mb-2">
                                                {feature.name}
                                            </h3>
                                            <p className="text-sm text-gray-300">
                                                {feature.description}
                                            </p>
                                        </div>
                                        <Link
                                            href={feature.href}
                                            className="inline-flex items-center text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors"
                                        >
                                            Learn more
                                            <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
                                        </Link>
                                    </div>
                                </motion.div>
                            )
                        })}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}