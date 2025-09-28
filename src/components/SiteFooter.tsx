import Link from 'next/link'
import { Github, Mail, MapPin } from 'lucide-react'

export function SiteFooter() {
    return (
        <footer className="border-t border-gray-700/50 bg-gray-800/30 backdrop-blur-sm">
            <div className="container-custom py-8">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    {/* Brand */}
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <div className="h-8 w-8 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center">
                                <span className="text-white font-bold text-sm">IT</span>
                            </div>
                            <span className="text-lg font-bold text-white">IT-R</span>
                        </div>
                        <p className="text-sm text-gray-300">
                            Information Technology branch community website. Connecting students, sharing knowledge, and building the future of technology.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h3 className="text-sm font-semibold text-white">Quick Links</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/updates" className="text-gray-300 hover:text-blue-400 transition-colors">
                                    Latest Updates
                                </Link>
                            </li>
                            <li>
                                <Link href="/students" className="text-gray-300 hover:text-blue-400 transition-colors">
                                    Our Students
                                </Link>
                            </li>
                            <li>
                                <Link href="/timetable" className="text-gray-300 hover:text-blue-400 transition-colors">
                                    Class Timetable
                                </Link>
                            </li>
                            <li>
                                <Link href="/faculty" className="text-gray-300 hover:text-blue-400 transition-colors">
                                    Our Faculty
                                </Link>
                            </li>
                            <li>
                                <a 
                                    href="https://amrit-11022007.github.io/" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-gray-300 hover:text-blue-400 transition-colors"
                                >
                                    Study Material
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="space-y-4">
                        <h3 className="text-sm font-semibold text-white">Contact</h3>
                        <div className="space-y-3 text-sm text-gray-300">
                            <div className="flex items-start space-x-2">
                                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                                <div>
                                    <div className="font-medium text-white">MAIT</div>
                                    <div className="text-xs">Maharaja Agrasen Institute of Technology</div>
                                    <div className="text-xs">PSP Area, Plot No-1, Sector-22</div>
                                    <div className="text-xs">Rohini, Delhi-110086</div>
                                </div>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Mail className="h-4 w-4" />
                                <span>contact@it-r-group.edu</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-8 border-t border-gray-700/50 pt-6">
                    <div className="flex flex-col items-center justify-between space-y-4 sm:flex-row sm:space-y-0">
                        <p className="text-sm text-gray-400">
                            © {new Date().getFullYear()} IT-R. All rights reserved.
                        </p>
                        <div className="flex items-center space-x-4">
                            <Link
                                href="https://github.com/codewithayuu/itr-web"
                                className="text-gray-400 hover:text-white transition-colors"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Github className="h-5 w-5" />
                                <span className="sr-only">GitHub</span>
                            </Link>
                        </div>
                    </div>
                    <div className="mt-4 text-center">
                        <p className="text-sm text-gray-500">
                            Made with ❤️ by <span className="text-gray-400">iambatman</span>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}