'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { photos } from '@/data/Photos';
import { FaCamera, FaFilter, FaCalendarAlt, FaTag } from 'react-icons/fa';
import SectionHeader from '../ui/SectionHeader';
import Image from 'next/image';

const Photos = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  const categories = ['All', 'class', 'events', 'lab', 'group', 'activities'];

  const filteredPhotos = photos.filter(photo => 
    selectedCategory === 'All' || photo.category === selectedCategory
  );

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'class': return '🎓';
      case 'events': return '🎉';
      case 'lab': return '🔬';
      case 'group': return '👥';
      case 'activities': return '🎯';
      default: return '📸';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'class': return 'bg-blue-600';
      case 'events': return 'bg-green-600';
      case 'lab': return 'bg-purple-600';
      case 'group': return 'bg-orange-600';
      case 'activities': return 'bg-pink-600';
      default: return 'bg-gray-600';
    }
  };

  return (
    <section id="photos" className="py-20 px-4">
      <div className="container mx-auto">
        <SectionHeader
          title="Photo Gallery"
          subtitle="Capture memories and moments from our class journey"
          Icon={<FaCamera />}
        />

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <div className="flex items-center mr-4">
            <FaFilter className="text-gray-400 mr-2" />
            <span className="text-gray-300 text-sm">Filter by:</span>
          </div>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg transition-colors flex items-center ${
                selectedCategory === category
                  ? 'bg-purple-600 text-white'
                  : 'bg-[#03001442] border border-border-custom text-gray-300 hover:bg-purple-600/20'
              }`}
            >
              <span className="mr-2">{getCategoryIcon(category)}</span>
              {category === 'All' ? 'All Photos' : category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Photos Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {filteredPhotos.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#03001442] backdrop-blur-lg border border-border-custom rounded-xl overflow-hidden hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105 cursor-pointer"
              onClick={() => setSelectedPhoto(photo.id)}
            >
              {/* Photo Placeholder */}
              <div className="relative h-48 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 flex items-center justify-center">
                <div className="text-center">
                  <FaCamera className="text-4xl text-purple-400 mx-auto mb-2" />
                  <p className="text-gray-300 text-sm">{photo.title}</p>
                </div>
              </div>

              {/* Photo Info */}
              <div className="p-4">
                <h3 className="text-white font-bold text-lg mb-2">
                  {photo.title}
                </h3>
                
                <p className="text-gray-400 text-sm mb-3 line-clamp-2">
                  {photo.description}
                </p>

                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center text-gray-400 text-sm">
                    <FaCalendarAlt className="mr-1" />
                    {new Date(photo.date).toLocaleDateString()}
                  </div>
                  
                  <div className={`px-2 py-1 rounded-full text-xs font-semibold text-white ${getCategoryColor(photo.category)}`}>
                    {photo.category.charAt(0).toUpperCase() + photo.category.slice(1)}
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1">
                  {photo.tags.slice(0, 3).map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-md"
                    >
                      #{tag}
                    </span>
                  ))}
                  {photo.tags.length > 3 && (
                    <span className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-md">
                      +{photo.tags.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {filteredPhotos.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">No photos found in this category.</p>
          </div>
        )}

        {/* Photo Modal */}
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedPhoto(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-[#03001442] border border-border-custom rounded-xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {(() => {
                const photo = photos.find(p => p.id === selectedPhoto);
                if (!photo) return null;
                
                return (
                  <>
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-white text-2xl font-bold">{photo.title}</h3>
                      <button
                        onClick={() => setSelectedPhoto(null)}
                        className="text-gray-400 hover:text-white text-2xl"
                      >
                        ×
                      </button>
                    </div>
                    
                    <div className="relative h-64 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-lg mb-4 flex items-center justify-center">
                      <div className="text-center">
                        <FaCamera className="text-6xl text-purple-400 mx-auto mb-4" />
                        <p className="text-gray-300">Photo placeholder</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-4">{photo.description}</p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center text-gray-400">
                        <FaCalendarAlt className="mr-2" />
                        {new Date(photo.date).toLocaleDateString()}
                      </div>
                      <div className={`px-3 py-1 rounded-full text-sm font-semibold text-white ${getCategoryColor(photo.category)}`}>
                        {photo.category.charAt(0).toUpperCase() + photo.category.slice(1)}
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {photo.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-gray-700 text-gray-300 text-sm rounded-md"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </>
                );
              })()}
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Photos;


