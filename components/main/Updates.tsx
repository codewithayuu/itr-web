'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { updates } from '@/data/Updates';
import { FaBell, FaFilter, FaCalendarAlt, FaUser, FaExclamationTriangle, FaInfoCircle, FaGraduationCap, FaNewspaper } from 'react-icons/fa';
import SectionHeader from '../ui/SectionHeader';

const Updates = () => {
  const [selectedType, setSelectedType] = useState('All');
  const [selectedPriority, setSelectedPriority] = useState('All');

  const types = ['All', 'announcement', 'event', 'academic', 'general'];
  const priorities = ['All', 'high', 'medium', 'low'];

  const filteredUpdates = updates.filter(update => {
    const matchesType = selectedType === 'All' || update.type === selectedType;
    const matchesPriority = selectedPriority === 'All' || update.priority === selectedPriority;
    return matchesType && matchesPriority;
  });

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'announcement': return <FaBell className="text-yellow-400" />;
      case 'event': return <FaCalendarAlt className="text-green-400" />;
      case 'academic': return <FaGraduationCap className="text-blue-400" />;
      case 'general': return <FaNewspaper className="text-gray-400" />;
      default: return <FaInfoCircle className="text-purple-400" />;
    }
  };

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case 'high': return <FaExclamationTriangle className="text-red-400" />;
      case 'medium': return <FaInfoCircle className="text-yellow-400" />;
      case 'low': return <FaInfoCircle className="text-green-400" />;
      default: return <FaInfoCircle className="text-gray-400" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'announcement': return 'border-yellow-500/50 bg-yellow-500/10';
      case 'event': return 'border-green-500/50 bg-green-500/10';
      case 'academic': return 'border-blue-500/50 bg-blue-500/10';
      case 'general': return 'border-gray-500/50 bg-gray-500/10';
      default: return 'border-purple-500/50 bg-purple-500/10';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-red-400';
      case 'medium': return 'text-yellow-400';
      case 'low': return 'text-green-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <section id="updates" className="py-20 px-4">
      <div className="container mx-auto">
        <SectionHeader
          title="Updates & Announcements"
          subtitle="Stay updated with the latest news and important information"
          Icon={<FaBell />}
        />

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8 justify-center items-center">
          <div className="flex gap-2">
            <FaFilter className="text-gray-400 mt-2" />
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="px-4 py-2 bg-[#03001442] border border-border-custom rounded-lg text-white focus:outline-none focus:border-purple-500"
            >
              {types.map((type) => (
                <option key={type} value={type} className="capitalize">
                  {type === 'All' ? 'All Types' : type}
                </option>
              ))}
            </select>
          </div>

          <div className="flex gap-2">
            <select
              value={selectedPriority}
              onChange={(e) => setSelectedPriority(e.target.value)}
              className="px-4 py-2 bg-[#03001442] border border-border-custom rounded-lg text-white focus:outline-none focus:border-purple-500"
            >
              {priorities.map((priority) => (
                <option key={priority} value={priority} className="capitalize">
                  {priority === 'All' ? 'All Priorities' : priority}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Updates List */}
        <div className="space-y-6">
          {filteredUpdates.map((update, index) => (
            <motion.div
              key={update.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-[#03001442] backdrop-blur-lg border rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300 ${getTypeColor(update.type)}`}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex items-start space-x-3 mb-2 md:mb-0">
                  {getTypeIcon(update.type)}
                  <div>
                    <h3 className="text-white font-bold text-xl mb-1">
                      {update.title}
                    </h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <div className="flex items-center">
                        <FaCalendarAlt className="mr-1" />
                        {new Date(update.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center">
                        <FaUser className="mr-1" />
                        {update.author}
                      </div>
                      <div className={`flex items-center ${getPriorityColor(update.priority)}`}>
                        {getPriorityIcon(update.priority)}
                        <span className="ml-1 capitalize">{update.priority}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <span className="px-3 py-1 bg-purple-600/20 text-purple-400 rounded-full text-xs font-semibold capitalize">
                    {update.type}
                  </span>
                </div>
              </div>
              
              <p className="text-gray-300 leading-relaxed">
                {update.content}
              </p>
            </motion.div>
          ))}
        </div>

        {filteredUpdates.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">No updates found matching your criteria.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Updates;


