'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { faculty } from '@/data/Faculty';
import { FaGraduationCap, FaEnvelope, FaPhone, FaBook } from 'react-icons/fa';
import SectionHeader from '../ui/SectionHeader';

const Faculty = () => {
  const getInitials = (name: string) => {
    return name.split(' ').map(word => word[0]).join('').toUpperCase();
  };

  const getDepartmentColor = (department: string) => {
    switch (department.toLowerCase()) {
      case 'computer science': return 'bg-blue-600';
      case 'mathematics': return 'bg-green-600';
      case 'physics': return 'bg-purple-600';
      case 'environmental studies': return 'bg-emerald-600';
      case 'communication': return 'bg-orange-600';
      default: return 'bg-gray-600';
    }
  };

  return (
    <section id="faculty" className="py-20 px-4">
      <div className="container mx-auto">
        <SectionHeader
          title="Faculty Members"
          subtitle="Meet our dedicated teaching staff"
          Icon={<FaGraduationCap />}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {faculty.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#03001442] backdrop-blur-lg border border-border-custom rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              {/* Faculty Avatar */}
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center text-white text-2xl font-bold">
                {getInitials(member.name)}
              </div>
              
              {/* Faculty Info */}
              <div className="text-center mb-4">
                <h3 className="text-white font-bold text-xl mb-1">
                  {member.name}
                </h3>
                <p className="text-purple-400 font-semibold mb-2">
                  {member.designation}
                </p>
                <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold text-white mb-3 ${getDepartmentColor(member.department)}`}>
                  {member.department}
                </div>
              </div>

              {/* Subjects */}
              <div className="mb-4">
                <div className="flex items-center mb-2">
                  <FaBook className="text-purple-400 mr-2" />
                  <span className="text-gray-300 text-sm font-semibold">Subjects:</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {member.subjects.map((subject, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-md"
                    >
                      {subject}
                    </span>
                  ))}
                </div>
              </div>

              {/* Contact Info */}
              {member.email && (
                <div className="flex items-center mb-2">
                  <FaEnvelope className="text-purple-400 mr-2" />
                  <a
                    href={`mailto:${member.email}`}
                    className="text-gray-300 text-sm hover:text-purple-400 transition-colors"
                  >
                    {member.email}
                  </a>
                </div>
              )}
              
              {member.phone && (
                <div className="flex items-center">
                  <FaPhone className="text-purple-400 mr-2" />
                  <a
                    href={`tel:${member.phone}`}
                    className="text-gray-300 text-sm hover:text-purple-400 transition-colors"
                  >
                    {member.phone}
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faculty;


