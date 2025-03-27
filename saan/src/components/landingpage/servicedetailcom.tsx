"use client";

import { motion } from "framer-motion";

// Define the props interface
interface ServiceDetailsClientProps {
  service: any; // Adjust type based on your data structure

}

export default function ServiceDetailsClient({ service }: ServiceDetailsClientProps) {
  // Framer Motion animation variants
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
  };

  return (
    <>
      {/* Discount Badge */}
      {service.discount && (
        <motion.div
          className="absolute top-[-60px] right-0 transform translate-x-4 -translate-y-6 md:translate-x-2 md:-translate-y-4"
          initial="hidden"
          whileInView="visible"
          animate="animate"
          whileHover="hover"
          viewport={{ once: true }}
          variants={discountVariants}
        >
          <div className="relative">
            <svg
              className="w-44 h-36 md:w-48 md:h-40"
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
                  <stop offset="0%" style={{ stopColor: "#FFD700", stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: "#FF4500", stopOpacity: 1 }} />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white font-bold">
              <span className="text-3xl md:text-4xl">{service.discount}%</span>
              <span className="text-base md:text-lg">DISCOUNT</span>
            </div>
          </div>
        </motion.div>
      )}

     
    </>
  );
}