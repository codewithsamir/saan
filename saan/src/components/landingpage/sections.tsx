"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

// Define the props interface
interface ServiceSectionProps {
  title: string;
  id: string;
  details: string[];
  image: string;
  alt: string;
  bgColor: string;
  textColor: string;
  buttonColor: string;
  checkColor: string;
  discount?: number;
  rewards?: { item: string; image: string }[]; // Add rewards property
}

export default function ServiceSection({
  title,
  id,
  details,
  image,
  alt,
  bgColor,
  textColor,
  buttonColor,
  checkColor,
  discount,
  rewards, // Include rewards in props
}: ServiceSectionProps) {
  // Framer Motion animation variants for the section
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  // Animation for list items
  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1, duration: 0.5 },
    }),
  };

  // Animation for the button
  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { delay: 0.5, duration: 0.5 },
    },
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  // Animation for the image
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { delay: 0.3, duration: 0.8 } },
    hover: { scale: 1.02, transition: { duration: 0.3 } },
  };

  // Enhanced animation for the discount badge
  const discountVariants = {
    hidden: { opacity: 0, scale: 0, rotate: -30 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        delay: 0.3,
        duration: 0.7,
        type: "spring",
        stiffness: 120,
        damping: 10,
      },
    },
    hover: {
      scale: 1.2,
      rotate: 5,
      filter: "brightness(1.3) drop-shadow(0 0 15px rgba(255, 255, 255, 0.8))",
      transition: { duration: 0.3 },
    },
    animate: {
      scale: [1, 1.1, 1],
      filter: [
        "brightness(1) drop-shadow(0 0 5px rgba(255, 255, 255, 0.5))",
        "brightness(1.2) drop-shadow(0 0 10px rgba(255, 255, 255, 0.8))",
        "brightness(1) drop-shadow(0 0 5px rgba(255, 255, 255, 0.5))",
      ],
      transition: {
        repeat: Infinity,
        duration: 2,
        ease: "easeInOut",
      },
    },
  };

  // Animation for decorative elements
  const decorVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: [0, 1, 0],
      scale: [0, 1.5, 0],
      transition: {
        repeat: Infinity,
        duration: 2,
        ease: "easeInOut",
        delay: Math.random() * 1,
      },
    },
  };

  return (
    <section id={id} className={`py-10 md:py-20 px-4 ${bgColor} relative overflow-hidden`}>
      {/* SVG Background */}
      <div className="absolute inset-0 z-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: "#3B82F6", stopOpacity: 1 }} />
              <stop offset="50%" style={{ stopColor: "#FBBF24", stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: "#F97316", stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          <path
            fill="url(#waveGradient)"
            fillOpacity="0.1"
            d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,138.7C672,128,768,160,864,181.3C960,203,1056,213,1152,197.3C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>

      {/* Content */}
      <motion.div
        className="max-w-6xl mx-auto relative z-10 touch-action-auto "
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <h2 className=" text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">{title}</h2>
        <div className="relative   flex flex-col md:flex-row items-center gap-8 bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
          {/* Conditionally render the discount badge */}
          {discount && (
            <motion.div
              className="absolute  top-[-40px] right-[100px] md:top-[-10px] md:right-[200px]  transform z-50 translate-x-4 -translate-y-6 md:translate-x-2 md:-translate-y-4"
              initial="hidden"
              whileInView="visible"
              animate="animate"
              whileHover="hover"
              viewport={{ once: true }}
              variants={discountVariants}
            >
              <div className="relative">
                {/* Curved Wave Shape using SVG */}
                <svg
                  className="w-32 h-32 md:w-48 md:h-40"
                  viewBox="0 0 180 150"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 30C40 10, 80 20, 100 40C120 60, 140 40, 160 30C160 90, 140 120, 100 130C60 140, 40 120, 20 90C0 60, 0 40, 20 30Z"
                    fill="url(#yellowOrangeGradient)"
                    stroke="white"
                    strokeWidth="2"
                  />
                  <defs>
                    <linearGradient id="yellowOrangeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{ stopColor: "#FFD700", stopOpacity: 1 }} /> {/* Bright Yellow */}
                      <stop offset="100%" style={{ stopColor: "#FF4500", stopOpacity: 1 }} /> {/* Vibrant Orange */}
                    </linearGradient>
                  </defs>
                </svg>

                {/* Discount Text */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white font-bold">
                  <span className="text-xl md:text-4xl">{discount}%</span>
                  <span className="text-sm md:text-lg">DISCOUNT</span>
                </div>

                {/* Decorative Elements */}
                <motion.div
                  className="absolute top-0 left-0 w-4 h-4 bg-yellow-300 rounded-full opacity-50"
                  variants={decorVariants}
                  initial="hidden"
                  animate="visible"
                />
                <motion.div
                  className="absolute bottom-0 right-0 w-3 h-3 bg-orange-300 rounded-full opacity-50"
                  variants={decorVariants}
                  initial="hidden"
                  animate="visible"
                />
                <motion.div
                  className="absolute top-4 right-2 w-2 h-2 bg-yellow-200 rounded-full opacity-50"
                  variants={decorVariants}
                  initial="hidden"
                  animate="visible"
                />
              </div>
            </motion.div>
          )}

          {/* Conditionally render the rewards badge */}
          {rewards && rewards.length > 0 && (
            <motion.div
              className="absolute top-[-40px] right-[-45px] md:top-[-10px]  md:right-0 transform z-50 -translate-x-4 -translate-y-6 md:-translate-x-2 md:-translate-y-4"
              initial="hidden"
              whileInView="visible"
              animate="animate"
              whileHover="hover"
              viewport={{ once: true }}
              variants={discountVariants} // Reuse discount animation for rewards badge
            >
              <div className="relative">
                {/* Curved Wave Shape using SVG */}
                <svg
                  className="w-32 h-32 md:w-48 md:h-40"
                  viewBox="0 0 180 150"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 30C40 10, 80 20, 100 40C120 60, 140 40, 160 30C160 90, 140 120, 100 130C60 140, 40 120, 20 90C0 60, 0 40, 20 30Z"
                    fill="url(#rewardGradient)"
                    stroke="white"
                    strokeWidth="2"
                  />
                  <defs>
                    <linearGradient id="rewardGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{ stopColor: "#34D399", stopOpacity: 1 }} /> {/* Green */}
                      <stop offset="100%" style={{ stopColor: "#10B981", stopOpacity: 1 }} /> {/* Dark Green */}
                    </linearGradient>
                  </defs>
                </svg>

                {/* Rewards Text */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white font-bold">
                  <span className="text-3xl md:text-4xl">🎁</span> {/* Emoji for gifts */}
                  <span className=" text-sm md:text-lg">REWARDS</span>
                </div>

                {/* Decorative Elements */}
                <motion.div
                  className="absolute top-0 left-0 w-4 h-4 bg-green-300 rounded-full opacity-50"
                  variants={decorVariants}
                  initial="hidden"
                  animate="visible"
                />
                <motion.div
                  className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full opacity-50"
                  variants={decorVariants}
                  initial="hidden"
                  animate="visible"
                />
                <motion.div
                  className="absolute top-4 right-2 w-2 h-2 bg-green-200 rounded-full opacity-50"
                  variants={decorVariants}
                  initial="hidden"
                  animate="visible"
                />
              </div>
            </motion.div>
          )}

          {/* Left Column: Details */}
          <div className=" md:w-1/2 pt-4 sm:pt-0">
            <h3 className={`text-2xl font-semibold ${textColor} mb-4`}>What You'll Learn:</h3>
            <ul className="space-y-2">
              {details.map((detail, index) => (
                <motion.li
                  key={index}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={listItemVariants}
                  className="flex items-center gap-2"
                >
                  <span className={checkColor}>✔</span>
                  <span className="text-gray-700">{detail}</span>
                </motion.li>
              ))}
            </ul>

            {/* Buttons */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover="hover"
              variants={buttonVariants}
              className="mt-6"
            >
              <Button asChild>
                <Link href={`/services/${id}`}>Explore more</Link>
              </Button>
            </motion.div>
            {title === "Bridge Course & Entrance Preparation for +2" && (
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover="hover"
                variants={buttonVariants}
              >
                <Button asChild className={`mt-6 ${buttonColor}`}>
                  <a href="https://wa.me/9824864187" target="_blank" rel="noopener noreferrer">
                    Enroll Now
                  </a>
                </Button>
              </motion.div>
            )}
          </div>

          {/* Right Column: Image */}
          <motion.div
            className="md:w-1/2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover="hover"
            variants={imageVariants}
          >
            <div className="h-[300px] rounded-lg flex items-center justify-center overflow-hidden shadow-lg">
              <Image
                src={image}
                alt={alt}
                width={500}
                height={300}
                className="rounded-lg w-full object-cover h-full"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}