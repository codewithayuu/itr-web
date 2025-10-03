'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { students } from '@/data/Students';
import { FaUsers, FaSearch, FaFilter } from 'react-icons/fa';
import SectionHeader from '../ui/SectionHeader';

const Students = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGroup, setSelectedGroup] = useState('All');

  const groups = ['All', 'R-1', 'R-2', 'R-3'];
  
  const filteredStudents = students.filter(student => {
    const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGroup = selectedGroup === 'All' || student.group === selectedGroup;
    return matchesSearch && matchesGroup;
  });

  const getInitials = (name: string) => {
    return name.split(' ').map(word => word[0]).join('').toUpperCase();
  };

  const getGroupColor = (group: string) => {
    switch (group) {
      case 'R-1': return 'bg-blue-600';
      case 'R-2': return 'bg-green-600';
      case 'R-3': return 'bg-purple-600';
      default: return 'bg-gray-600';
    }
  };

  return (
    <section id="students" className="py-20 px-4">
      <div className="container mx-auto">
        <SectionHeader
          title="Students Directory"
          subtitle="Meet your classmates from MAIT IT-R"
          Icon={<FaUsers />}
        />

        {/* Search and Filter Controls */}
        <div className="flex flex-col md:flex-row gap-4 mb-8 justify-center items-center">
          <div className="relative">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search students..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 bg-[#03001442] border border-border-custom rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
            />
          </div>
          
          <div className="flex gap-2">
            <FaFilter className="text-gray-400 mt-2" />
            {groups.map((group) => (
              <button
                key={group}
                onClick={() => setSelectedGroup(group)}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  selectedGroup === group
                    ? 'bg-purple-600 text-white'
                    : 'bg-[#03001442] border border-border-custom text-gray-300 hover:bg-purple-600/20'
                }`}
              >
                {group}
              </button>
            ))}
          </div>
        </div>

        {/* Students Count */}
        <div className="text-center mb-8">
          <p className="text-gray-400">
            Showing {filteredStudents.length} of {students.length} students
          </p>
        </div>

        {/* Students Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {filteredStudents.map((student, index) => (
            <motion.div
              key={student.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#03001442] backdrop-blur-lg border border-border-custom rounded-xl p-6 text-center hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              {/* Student Avatar */}
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center text-white text-xl font-bold">
                {getInitials(student.name)}
              </div>
              
              {/* Group Badge */}
              <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold text-white mb-3 ${getGroupColor(student.group)}`}>
                {student.group}
              </div>
              
              {/* Student Name */}
              <h3 className="text-white font-semibold text-lg mb-2">
                {student.name}
              </h3>
            </motion.div>
          ))}
        </motion.div>

        {filteredStudents.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">No students found matching your criteria.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Students;


