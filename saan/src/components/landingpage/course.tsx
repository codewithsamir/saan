"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';

import {
    FaBook,
    FaLaptop,
    FaMobileAlt,
    FaCode,
    FaPen,
    FaTools,
    FaScrewdriver,
    FaKeyboard,
    FaMouse,
  } from 'react-icons/fa';

// Import services
import { services } from '@/util/service'; // Adjust the import path

// Filter out the "Coaching for Classes 6-10" service
const filteredServices = services.filter(service => service.id !== 'coaching');

// Animation variants for the cards
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i:any) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      type: 'spring',
      stiffness: 100,
      damping: 15,
    },
  }),
  hover: {
    scale: 1.03,
    boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.1)',
    transition: {
      type: 'spring',
      stiffness: 200,
      damping: 10,
    },
  },
};

// Animation variants for the discount badge
const badgeVariants = {
  hidden: { scale: 0, rotate: -10 },
  visible: {
    scale: 1,
    rotate: 0,
    transition: {
      type: 'spring',
      stiffness: 200,
      damping: 10,
    },
  },
};

// Animation variants for the SVG icon
const iconVariants = {
  hidden: { scale: 0, rotate: -10 },
  visible: {
    scale: 1,
    rotate: 0,
    transition: {
      type: 'spring',
      stiffness: 200,
      damping: 10,
    },
  },
  hover: {
    scale: 1.1,
    rotate: 5,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 10,
    },
  },
};




// Map course IDs to SVG icons and colors
const iconMap:any = {
  'bridge-course': { icon: FaBook, color: 'text-orange-600' },
  'computer-training': { icon: FaLaptop, color: 'text-blue-700' },
  'english-class': { icon: FaBook, color: 'text-green-700' },
  'mobile-repairing': { icon: FaMobileAlt, color: 'text-blue-700' },
  'java': { icon: FaCode, color: 'text-blue-700' },
  'javascript': { icon: FaCode, color: 'text-blue-700' },
  'c': { icon: FaCode, color: 'text-blue-700' },
  'cpp': { icon: FaCode, color: 'text-blue-700' },
  'python': { icon: FaCode, color: 'text-blue-700' },
  'web-development': { icon: FaLaptop, color: 'text-blue-700' },
};





// Map reward items to SVG icons
const rewardIconMap:any = {
    Notebook: FaBook,
    Pen: FaPen,
    'Tool Kit': FaTools,
    'Screwdriver Set': FaScrewdriver,
    Keyboard: FaKeyboard,
    Mouse: FaMouse,
  };

const CoursesPage = () => {
  return (
    <section className="py-12 bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            Our Courses at SAAN Coaching Center
          </h1>
          <p className="text-base text-gray-600 max-w-xl mx-auto">
            Explore our wide range of courses designed to help you succeed. Enroll now and get{' '}
            <span className="font-bold text-red-500">50% OFF</span> on all courses!
          </p>
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:w-[80%] mx-auto">
          {filteredServices.map((service, index) => {
            const IconComponent = iconMap[service.id]?.icon || FaBook; // Fallback to FaBook
            const iconColor = iconMap[service.id]?.color || 'text-gray-500';

            return (
              <motion.div
                key={service.id}
                custom={index}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                variants={cardVariants}
                className={`rounded-xl shadow-md overflow-hidden ${service.bgColor} flex flex-col relative`}
              >
                {/* SVG Icon */}
                <div className="flex justify-center items-center h-32 bg-gradient-to-b from-white to-gray-50">
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    whileHover="hover"
                    variants={iconVariants}
                  >
                    <IconComponent className={`text-6xl ${iconColor}`} />
                  </motion.div>
                </div>

                {/* Discount Badge (if applicable) */}
                {service.discount && (
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={badgeVariants}
                    className="absolute top-3 right-3 bg-red-500 text-white font-bold text-xs px-2 py-1 rounded-full shadow-md"
                  >
                    {service.discount}% OFF
                  </motion.div>
                )}

                {/* Course Content */}
                <div className="p-4 flex-1 flex flex-col">
                  {/* Course Title */}
                  <h2 className={`text-xl font-bold ${service.textColor} mb-3`}>
                    {service.title}
                  </h2>

                  {/* Rewards Section */}
                  {service.rewards && (
                    <div className="mb-4">
                      <h3 className="text-base font-semibold text-gray-800 mb-1">
                        Rewards on Enrollment
                      </h3>
                      <div className="flex gap-2 flex-wrap">
                        {service.rewards.map((reward, idx) => {
                          const RewardIcon = rewardIconMap[reward.item] || FaBook; // Fallback to FaBook
                          return (
                            <div key={idx} className="flex items-center gap-1">
                              <RewardIcon className="text-gray-600 text-lg" />
                              <span className="text-gray-700 text-xs">{reward.item}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* Enroll Now Button */}
                  <Link href={`/courses/${service.id}`} passHref>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-full ${service.buttonColor} text-white font-medium py-2 rounded-full transition-colors duration-300 text-sm`}
                    >
                      Explore more
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CoursesPage;