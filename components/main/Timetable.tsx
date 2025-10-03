'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { timetable } from '@/data/Timetable';
import { FaCalendarAlt, FaClock, FaMapMarkerAlt, FaUser, FaBook } from 'react-icons/fa';
import SectionHeader from '../ui/SectionHeader';

const Timetable = () => {
  const [selectedDay, setSelectedDay] = useState(0);

  const getClassTypeColor = (type: string) => {
    switch (type) {
      case 'class': return 'bg-blue-600';
      case 'break': return 'bg-yellow-600';
      case 'no-class': return 'bg-gray-600';
      default: return 'bg-gray-600';
    }
  };

  const getClassTypeTextColor = (type: string) => {
    switch (type) {
      case 'class': return 'text-blue-100';
      case 'break': return 'text-yellow-100';
      case 'no-class': return 'text-gray-300';
      default: return 'text-gray-300';
    }
  };

  return (
    <section id="timetable" className="py-20 px-4">
      <div className="container mx-auto">
        <SectionHeader
          title="Weekly Timetable"
          subtitle="Your weekly schedule at a glance. Plan your studies and never miss a class!"
          Icon={<FaCalendarAlt />}
        />

        {/* Day Selector */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {timetable.map((day, index) => (
            <button
              key={day.day}
              onClick={() => setSelectedDay(index)}
              className={`px-4 py-2 rounded-lg transition-colors ${
                selectedDay === index
                  ? 'bg-purple-600 text-white'
                  : 'bg-[#03001442] border border-border-custom text-gray-300 hover:bg-purple-600/20'
              }`}
            >
              {day.day}
            </button>
          ))}
        </div>

        {/* Timetable for Selected Day */}
        <motion.div
          key={selectedDay}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-[#03001442] backdrop-blur-lg border border-border-custom rounded-xl p-6"
        >
          <div className="flex items-center mb-6">
            <FaCalendarAlt className="text-purple-400 mr-3 text-xl" />
            <h3 className="text-white text-2xl font-bold">
              {timetable[selectedDay].day}
            </h3>
          </div>

          <div className="grid gap-4">
            {timetable[selectedDay].slots.map((slot, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className={`${getClassTypeColor(slot.type)} ${getClassTypeTextColor(slot.type)} rounded-lg p-4`}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex items-center mb-2 md:mb-0">
                    <FaClock className="mr-2" />
                    <span className="font-semibold">{slot.time}</span>
                  </div>
                  
                  <div className="flex-1 md:ml-4">
                    <h4 className="font-bold text-lg mb-1">
                      {slot.subject}
                    </h4>
                    
                    {slot.room && (
                      <div className="flex items-center mb-1">
                        <FaMapMarkerAlt className="mr-2" />
                        <span>Room: {slot.room}</span>
                        {slot.group && (
                          <span className="ml-2 px-2 py-1 bg-white/20 rounded text-xs">
                            {slot.group}
                          </span>
                        )}
                      </div>
                    )}
                    
                    {slot.instructor && (
                      <div className="flex items-center">
                        <FaUser className="mr-2" />
                        <span>{slot.instructor}</span>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Legend */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <div className="flex items-center">
            <div className="w-4 h-4 bg-blue-600 rounded mr-2"></div>
            <span className="text-gray-300 text-sm">Regular Class</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-yellow-600 rounded mr-2"></div>
            <span className="text-gray-300 text-sm">Break</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-gray-600 rounded mr-2"></div>
            <span className="text-gray-300 text-sm">No Class</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timetable;


