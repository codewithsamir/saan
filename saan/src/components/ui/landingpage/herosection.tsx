"use client";
import Image from "next/image";
import { FaGraduationCap, FaWhatsapp, FaChalkboardTeacher, FaTrophy, FaMoneyBillWave } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Badge, BadgeProps } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Create a motion-enabled version of the Badge component
const MotionBadge = motion<BadgeProps>(Badge);

// Floating Element for Background Animation
const FloatingElement = ({ x, y, size, type }: { x: number; y: number; size: number; type: "book" | "laptop" }) => {
  return (
    <motion.div
      className="absolute"
      style={{ left: x, top: y }}
      animate={{
        y: [0, 15, 0],
        rotate: [0, 10, 0],
        opacity: [0.5, 1, 0.5],
      }}
      transition={{
        duration: Math.random() * 4 + 4,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      }}
    >
      {type === "book" ? (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size}>
          <path fill="#F97316" d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 14H8V4h11v12z"/>
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size}>
          <path fill="#3B82F6" d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm0 2v12h16V6H4zm2 2h12v2H6V8zm0 4h12v2H6v-2z"/>
        </svg>
      )}
    </motion.div>
  );
};

// Decorative Circle Element for Image
const DecorativeCircle = ({ x, y, size, color }: { x: string; y: string; size: number; color: string }) => {
  return (
    <motion.div
      className="absolute rounded-full"
      style={{ left: x, top: y, width: size, height: size, backgroundColor: color, opacity: 0.3 }}
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.3, 0.5, 0.3],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      }}
    />
  );
};

const HeroSection = () => {
  // Typing animation for the subtext
  const [typedText, setTypedText] = useState("");
  const fullText = "Enroll Now for Post-SEE Courses!";

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);
    return () => clearInterval(typingInterval);
  }, []);

  // Counter animation for the statistic
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    const target = 5000;
    const duration = 2000; // 2 seconds
    const increment = target / (duration / 50);
    const interval = setInterval(() => {
      setCounter((prev) => {
        if (prev >= target) {
          clearInterval(interval);
          return target;
        }
        return prev + increment;
      });
    }, 50);
    return () => clearInterval(interval);
  }, []);

  // Framer Motion animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, type: "spring", bounce: 0.5 },
    },
    pulse: {
      scale: [1, 1.1, 1],
      transition: { duration: 1.5, repeat: Infinity, ease: "easeInOut" },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, type: "spring", bounce: 0.5 },
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1 },
    },
    hover: { scale: 1.02, transition: { duration: 0.3 } },
  };

  // Generate floating elements (reduced for focus on content)
  const floatingElements = [
    { x: "10%", y: "15%", size: 25, type: "book" },
    { x: "90%", y: "25%", size: 20, type: "laptop" },
  ].map((elem, i) => (
    <FloatingElement key={i} x={elem.x} y={elem.y} size={elem.size} type={elem.type as "book" | "laptop"} />
  ));

  // Generate decorative circles around the image
  const decorativeCircles = [
    { x: "10%", y: "10%", size: 50, color: "#F97316" },
    { x: "80%", y: "20%", size: 40, color: "#3B82F6" },
    { x: "20%", y: "70%", size: 60, color: "#FBBF24" },
    { x: "90%", y: "80%", size: 30, color: "#F97316" },
  ].map((circle, i) => (
    <DecorativeCircle key={i} x={circle.x} y={circle.y} size={circle.size} color={circle.color} />
  ));

  // Updated highlights with icons and simpler wording
  const highlights = [
    { text: "Great Teachers", color: "#F97316", icon: <FaChalkboardTeacher /> },
    { text: "Students Succeed", color: "#3B82F6", icon: <FaTrophy /> },
    { text: "Low Cost", color: "#FBBF24", icon: <FaMoneyBillWave /> },
  ];

  return (
    <section className="relative bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white py-12 min-h-[90vh] overflow-hidden">
      {/* Subtle Background Wave Shape */}
      <div className="absolute inset-0 z-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 900"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: "#3B82F6", stopOpacity: 0.2 }} />
              <stop offset="100%" style={{ stopColor: "#F97316", stopOpacity: 0.2 }} />
            </linearGradient>
          </defs>
          <path
            fill="url(#waveGradient)"
            d="M0,0 L1440,0 L1440,900 L0,900 Z M0,450 Q720,300 1440,450"
          />
        </svg>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 opacity-40 z-0"></div>

      {/* Floating Elements */}
      {floatingElements}

      {/* Content */}
      <motion.div
        className="relative max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between z-10"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Left Side: Highlighted Content */}
        <div className="md:w-[55%] text-center md:text-left mb-10 md:mb-0 space-y-6">
          <motion.div variants={childVariants} className="mb-6">
            <MotionBadge
              variant="default"
              className="inline-block text-3xl md:text-4xl bg-gradient-to-r from-yellow-400 to-orange-500 text-blue-900 font-bold px-8 py-4 rounded-full"
              variants={badgeVariants}
              initial="hidden"
              animate="visible"
              whileInView="pulse"
            >
              Special Offer: 50% Discount Until Baisakh!
            </MotionBadge>
          </motion.div>
          <motion.h1
            variants={childVariants}
            className="text-5xl md:text-6xl font-extrabold mb-2 leading-tight bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent"
          >
            SAAN Coaching and Training Center
          </motion.h1>
          <motion.p
            variants={childVariants}
            className="text-lg md:text-xl font-light mb-4 text-gray-400"
          >
            Empowering Students for Success Since 2023
          </motion.p>
          <motion.p
            variants={childVariants}
            className="text-xl md:text-2xl font-light mb-4 text-gray-300"
          >
            {typedText}
            <span className="inline-block w-1 h-8 bg-yellow-500 ml-1 animate-blink"></span>
          </motion.p>
          {/* Updated Highlights with Icons */}
          <motion.ul
            variants={childVariants}
            className="space-y-3 mb-4"
          >
            {highlights.map((highlight, index) => (
              <li key={index} className="flex items-center gap-3">
                <span className="text-2xl" style={{ color: highlight.color }}>
                  {highlight.icon}
                </span>
                <span className="text-xl text-gray-300">{highlight.text}</span>
              </li>
            ))}
          </motion.ul>
          {/* Testimonial */}
          <motion.div
            variants={childVariants}
            className="mb-4 text-lg text-gray-300 italic"
          >
            "98% of our students improved their grades after joining SAAN!" - Happy Parent
          </motion.div>
       
          {/* Button */}
          <motion.div variants={childVariants}>
            <motion.div variants={buttonVariants} whileHover="hover">
              <Button
                size="lg"
                className="bg-yellow-500 text-blue-900 hover:bg-yellow-600 font-semibold px-10 py-4 rounded-full flex items-center gap-3 text-lg"
              >
                <FaWhatsapp className="text-2xl" />
                <a href="https://wa.me/9824864187" target="_blank" rel="noopener noreferrer">
                  Join Now via WhatsApp
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Right Side: Student Image with Decorative Circles */}
        <motion.div
          className="md:w-[45%] h-full flex justify-center relative"
          initial="hidden"
          animate="visible"
          whileHover="hover"
          variants={imageVariants}
        >
          {/* Decorative Circles */}
          {decorativeCircles}
          <Image
            src="/student.png"
            alt="Two students wearing SAAN Coaching and Training Center t-shirts"
            width={700}
            height={700}
            className="w-full h-full object-contain z-10"
          />
        </motion.div>
      </motion.div>

      {/* Animated Graduation Cap Icon */}
      <motion.div
        className="absolute bottom-8 right-8 text-6xl opacity-20 md:text-9xl z-10"
        initial={{ opacity: 0, rotate: -10 }}
        animate={{
          opacity: 0.2,
          rotate: 0,
          transition: { duration: 1, repeat: Infinity, repeatType: "reverse" },
        }}
      >
        <FaGraduationCap />
      </motion.div>
    </section>
  );
};

export default HeroSection;