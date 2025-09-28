'use client'

import Link from 'next/link'
import { Users, Newspaper, Home, Calendar, GraduationCap } from 'lucide-react'

const navigation = [
    { name: 'Updates', href: '/updates', icon: Newspaper },
    { name: 'Students', href: '/students', icon: Users },
    { name: 'Timetable', href: '/timetable', icon: Calendar },
    { name: 'Faculty', href: '/faculty', icon: GraduationCap },
]

export function SiteHeader() {
    return (
        <header className="sticky top-0 z-50 w-full relative">
            <div className="container-custom py-4">
                <div className="flex items-center justify-center">
                    {/* Navigation Bar */}
                    <nav className="flex items-center space-x-1 bg-gray-800/80 backdrop-blur-sm rounded-full px-6 py-3 border border-gray-700/50">
                        <Link
                            href="/"
                            className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-white hover:text-blue-400 transition-colors"
                        >
                            <Home className="h-4 w-4" />
                            <span>Home</span>
                        </Link>
                        {navigation.map((item) => {
                            const Icon = item.icon
                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-white hover:text-blue-400 transition-colors"
                                >
                                    <Icon className="h-4 w-4" />
                                    <span>{item.name}</span>
                                </Link>
                            )
                        })}
                    </nav>
                </div>
            </div>
        </header>
    )
}