'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Mail, Github, Linkedin } from 'lucide-react'

// Mock data - will be replaced with real API calls
const mockMembers = [
    {
        id: 1,
        name: 'Sarah Johnson',
        role: 'President',
        bio: 'Passionate about AI and machine learning. Leading our community towards innovation.',
        avatarUrl: null,
        email: 'sarah.johnson@it-r-group.edu',
        github: 'sarahjohnson',
        linkedin: 'sarah-johnson-it',
    },
    {
        id: 2,
        name: 'Michael Chen',
        role: 'Vice President',
        bio: 'Full-stack developer with expertise in React and Node.js. Always ready to help fellow students.',
        avatarUrl: null,
        email: 'michael.chen@it-r-group.edu',
        github: 'michaelchen',
        linkedin: 'michael-chen-dev',
    },
    {
        id: 3,
        name: 'Emily Rodriguez',
        role: 'Tech Lead',
        bio: 'Cybersecurity enthusiast and cloud computing expert. Organizing our technical workshops.',
        avatarUrl: null,
        email: 'emily.rodriguez@it-r-group.edu',
        github: 'emilyrodriguez',
        linkedin: 'emily-rodriguez-security',
    },
]

export function FeaturedMembers() {
    return (
        <section className="py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold text-foreground sm:text-4xl"
                    >
                        Meet Our Team
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="mt-4 text-lg text-muted-foreground"
                    >
                        Get to know the passionate individuals leading our IT community
                    </motion.p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {mockMembers.map((member, index) => (
                        <motion.div
                            key={member.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -5 }}
                            className="group relative overflow-hidden rounded-2xl border bg-card p-6 shadow-sm hover:shadow-md transition-all duration-300"
                        >
                            <div className="text-center space-y-4">
                                {/* Avatar */}
                                <div className="mx-auto">
                                    {member.avatarUrl ? (
                                        <Image
                                            src={member.avatarUrl}
                                            alt={member.name}
                                            width={80}
                                            height={80}
                                            className="rounded-full object-cover"
                                        />
                                    ) : (
                                        <div className="h-20 w-20 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center mx-auto">
                                            <span className="text-2xl font-bold text-primary-foreground">
                                                {member.name.split(' ').map(n => n[0]).join('')}
                                            </span>
                                        </div>
                                    )}
                                </div>

                                {/* Name and Role */}
                                <div>
                                    <h3 className="text-lg font-semibold text-card-foreground">
                                        {member.name}
                                    </h3>
                                    <p className="text-sm text-primary font-medium">
                                        {member.role}
                                    </p>
                                </div>

                                {/* Bio */}
                                <p className="text-sm text-muted-foreground line-clamp-3">
                                    {member.bio}
                                </p>

                                {/* Social Links */}
                                <div className="flex justify-center space-x-3">
                                    {member.email && (
                                        <a
                                            href={`mailto:${member.email}`}
                                            className="text-muted-foreground hover:text-primary transition-colors"
                                            aria-label={`Email ${member.name}`}
                                        >
                                            <Mail className="h-4 w-4" />
                                        </a>
                                    )}
                                    {member.github && (
                                        <a
                                            href={`https://github.com/${member.github}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-muted-foreground hover:text-primary transition-colors"
                                            aria-label={`${member.name}'s GitHub`}
                                        >
                                            <Github className="h-4 w-4" />
                                        </a>
                                    )}
                                    {member.linkedin && (
                                        <a
                                            href={`https://linkedin.com/in/${member.linkedin}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-muted-foreground hover:text-primary transition-colors"
                                            aria-label={`${member.name}'s LinkedIn`}
                                        >
                                            <Linkedin className="h-4 w-4" />
                                        </a>
                                    )}
                                </div>
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
                        href="/members"
                        className="inline-flex items-center justify-center rounded-lg border border-input bg-background px-6 py-3 text-sm font-semibold shadow-sm hover:bg-accent hover:text-accent-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring transition-colors"
                    >
                        View All Members
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </motion.div>
            </div>
        </section>
    )
}





