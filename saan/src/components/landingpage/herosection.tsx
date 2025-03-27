"use client";
import Image from "next/image";
import { FaGraduationCap, FaWhatsapp, FaChalkboardTeacher, FaMobileAlt, FaCode, FaLaptop, FaBook } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Infer BadgeProps using React.ComponentProps
type BadgeProps = React.ComponentProps<typeof Badge>;
// Create a motion-enabled version of the Badge component
const MotionBadge = motion<BadgeProps>(Badge);

// Floating Element for Background Animation
const FloatingElement = ({ x, y, size, type }: { x: string; y: string; size: number; type: "book" | "laptop" }) => {
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
          <path fill="#F97316" d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 14H8V4h11v12z" />
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size}>
          <path fill="#3B82F6" d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm0 2v12h16V6H4zm2 2h12v2H6V8zm0 4h12v2H6v-2z" />
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

// Floating Service Icon Component (Enhanced Interactivity)
const FloatingServiceIcon = ({ Icon, label, x, y, color, complementaryColor }: { Icon: React.ElementType; label: string; x: string; y: string; color: string; complementaryColor: string }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <motion.div
      className="absolute flex flex-col items-center text-center z-20 cursor-pointer"
      style={{ left: x, top: y }}
      animate={{
        y: [0, 10, 0],
        rotate: [0, 6, 0],
        opacity: [0.8, 1, 0.8],
        scale: isHovered ? 1.15 : [1, 1.05, 1],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      }}
      whileTap={{
        scale: 0.95,
        transition: { duration: 0.2 },
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onTap={() => {
        // Optional: Add a pulse effect on click
      }}
    >
      {/* Custom Curved Shape (Rounded Hexagon-like) with Glow and Rotation */}
      <motion.svg
        width="70"
        height="70"
        viewBox="0 0 70 70"
        className={`absolute ${isHovered ? "drop-shadow-[0_0_15px_rgba(255,255,255,0.6)]" : "drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]"}`}
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      >
        <path
          d="M35 10 Q45 10 55 20 Q65 30 55 40 Q45 50 35 50 Q25 50 15 40 Q5 30 15 20 Q25 10 35 10 Z"
          fill="url(#gradient)"
          stroke={complementaryColor}
          strokeWidth="2"
        />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: color, stopOpacity: 0.9 }} />
            <stop offset="100%" style={{ stopColor: "#ffffff", stopOpacity: 0.6 }} />
          </linearGradient>
        </defs>
      </motion.svg>
      {/* Icon Inside the SVG Shape */}
      <div className="relative flex items-center justify-center w-14 h-14">
        <motion.div
          animate={{
            color: isHovered ? "#ffffff" : complementaryColor,
            scale: isHovered ? 1.2 : 1,
          }}
          transition={{ duration: 0.3 }}
        >
          <Icon className="text-3xl" />
        </motion.div>
      </div>
      {/* Label with Improved Styling */}
      <motion.span
        className="text-xs font-medium text-white mt-3 px-2 py-1 bg-gray-900 bg-opacity-90 rounded-md shadow-lg"
        animate={{
          scale: isHovered ? 1.1 : 1,
          backgroundColor: isHovered ? "rgba(17, 24, 39, 1)" : "rgba(17, 24, 39, 0.9)",
        }}
        transition={{ duration: 0.3 }}
      >
        {label}
      </motion.span>
    </motion.div>
  );
};





// Scroll Down Icon with Animation (Checkbox Style)
const ScrollTrigger = () => {
  const handleScroll = () => {
    window.scrollBy({ top: window.innerHeight / 2, behavior: "smooth" });
  };

  return (
    <div
      className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white z-20 cursor-pointer flex items-center justify-center"
      onClick={handleScroll}
    >
      {/* Checkbox Style */}
      <motion.div
        className="relative w-12 h-12 rounded-full bg-gray-800 border-4 border-yellow-500 flex items-center justify-center hover:bg-yellow-500 hover:border-yellow-600 transition-all duration-300"
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.1 }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-white"
        >
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </svg>
      </motion.div>
      <p className="text-xs text-center mt-2 text-gray-300">Click to Scroll</p>
    </div>
  );
};

// HeroSection Component
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

  // Expanded Services List
  const services = [
    { text: "Bridge Course & Entrance Preparation", icon: <FaGraduationCap />, color: "#F97316" },
    { text: "Mobile Repairing Training", icon: <FaMobileAlt />, color: "#3B82F6" },
    { text: "Programming Language Courses", icon: <FaCode />, color: "#FBBF24" },
    { text: "Computer Classes for All Levels", icon: <FaLaptop />, color: "#47A248" },
    { text: "Coaching Classes for Success", icon: <FaBook />, color: "#F05138" },
    { text: "English class", icon: <FaChalkboardTeacher />, color: "#F97316" },
    // { text: "Proven Success Rate", icon: <FaTrophy />, color: "#3B82F6" },
    // { text: "Affordable Fees", icon: <FaMoneyBillWave />, color: "#FBBF24" },
  ];

  // Floating Elements (Restored)
  const floatingElements = [
    { x: "10%", y: "15%", size: 20, type: "book" },
    { x: "90%", y: "25%", size: 15, type: "laptop" },
  ].map((elem, i) => (
    <FloatingElement key={i} x={elem.x} y={elem.y} size={elem.size} type={elem.type as "book" | "laptop"} />
  ));

  // Decorative Circles around the Image
  const decorativeCircles = [
    { x: "10%", y: "10%", size: 40, color: "#F97316" },
    { x: "80%", y: "20%", size: 30, color: "#3B82F6" },
    { x: "20%", y: "70%", size: 50, color: "#FBBF24" },
    { x: "90%", y: "80%", size: 20, color: "#F97316" },
  ].map((circle, i) => (
    <DecorativeCircle key={i} x={circle.x} y={circle.y} size={circle.size} color={circle.color} />
  ));

  // Floating Service Icons around the Image
  const floatingServices = [
    { Icon: FaGraduationCap, label: "Bridge Course & Entrance", x: "5%", y: "10%", color: "#F97316", complementaryColor: "#3B82F6" },
    { Icon: FaMobileAlt, label: "Mobile Repairing", x: "65%", y: "5%", color: "#3B82F6", complementaryColor: "#F97316" },
    { Icon: FaCode, label: "Programming Language", x: "0%", y: "70%", color: "#FBBF24", complementaryColor: "#A855F7" },
    { Icon: FaLaptop, label: "Computer Class", x: "70%", y: "70%", color: "#47A248", complementaryColor: "#EF4444" },
    { Icon: FaBook, label: "Coaching Class", x: "40%", y: "-12%", color: "#F05138", complementaryColor: "#47A248" },
    { Icon: FaBook, label: "Englsih Class", x: "0%", y: "40%", color: "#47A248", complementaryColor: "#47A248" },
  ];

  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-blue-950 to-indigo-950 text-white sm:py-12 min-h-[80vh]  overflow-hidden">
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

      {/* Floating Elements (Book and Laptop) - RESTORED */}
      {floatingElements}

      {/* Content */}
      <motion.div
        className="relative w-full md:w-[80%] mx-auto px-4 flex flex-col sm:flex-row items-center justify-between z-10 space-y-8 sm:space-y-0"
        initial="hidden"
        animate="visible"
      >
        {/* Left Side: Highlighted Services */}
        <div className="w-full sm:w-[55%] text-center sm:text-left space-y-6 min-h-[600px] flex flex-col justify-center">
          {/* Offer Badge */}
          <motion.div className="mb-4">
            <MotionBadge
              className="inline-block text-lg sm:text-2xl bg-gradient-to-r from-yellow-400 to-orange-500 text-blue-900 font-bold px-6 py-3 rounded-full text-center whitespace-normal break-words"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: 1,
                scale: 1,
                transition: { duration: 0.8, type: "spring", bounce: 0.5 },
              }}
              whileInView={{
                scale: [1, 1.1, 1],
                transition: { duration: 1.5, repeat: Infinity, ease: "easeInOut" },
              }}
            >
              <span className="inline-block sm:whitespace-nowrap">
                Special Offer: 50% Off All Courses Until Baisakh!
              </span>
            </MotionBadge>
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
            Empower Your Future
          </h1>
          <p className="text-lg md:text-xl font-medium text-gray-300">
            {typedText}
            <span className="inline-block w-1 h-6 bg-yellow-500 ml-1 animate-blink"></span>
          </p>
          <ul className="space-y-3">
            {services.map((service, index) => (
              <li key={index} className="flex items-center justify-center sm:justify-start gap-3">
                <span className="text-xl" style={{ color: service.color }}>{service.icon}</span>
                <span className="text-base md:text-lg text-gray-300">{service.text}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <Button
              size="lg"
              className="bg-yellow-500 text-blue-900 hover:bg-yellow-600 font-semibold px-6 py-3 rounded-full flex items-center gap-2 mx-auto sm:mx-0"
            >
              <FaWhatsapp className="text-lg" />
              <a href="https://wa.me/9824864187" target="_blank" rel="noopener noreferrer">
                Join Now via WhatsApp
              </a>
            </Button>
          </div>
        </div>

        {/* Right Side: Original Image with Decorative Circles and Enhanced Floating Service Icons */}
        <motion.div
          className="w-full sm:w-[45%] flex justify-center relative mt-4"
          initial="hidden"
          animate="visible"
          whileHover="hover"
          variants={{
            hidden: { opacity: 0, scale: 0.9 },
            visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
            hover: { scale: 1.02, transition: { duration: 0.3 } },
          }}
        >
          {/* Decorative Circles */}
          {decorativeCircles}
          {/* Main Image */}
          <Image
            src="/student.png"
            alt="Two students wearing SAAN Coaching and Training Center t-shirts"
            width={400}
            height={400}
            className="w-[450px]  h-[400px] object-contain z-10"
          />
          {/* Floating Service Icons around the Image */}
          {floatingServices.map((service, index) => (
            <FloatingServiceIcon
              key={index}
              Icon={service.Icon}
              label={service.label}
              x={service.x}
              y={service.y}
              color={service.color}
              complementaryColor={service.complementaryColor}
            />
          ))}
        </motion.div>
      </motion.div>

      {/* Animated Graduation Cap Icon */}
      <motion.div
        className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 text-4xl md:text-6xl opacity-20 z-10"
        initial={{ opacity: 0, rotate: -10 }}
        animate={{
          opacity: 0.2,
          rotate: 0,
          transition: { duration: 1, repeat: Infinity, repeatType: "reverse" },
        }}
      >
        <FaGraduationCap />
      </motion.div>
      <ScrollTrigger />
    </section>
  );
};

export default HeroSection;




