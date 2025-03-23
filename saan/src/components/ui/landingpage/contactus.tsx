"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const ContactSection = () => {
  // Framer Motion animation variants for the section
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  // Animation for paragraphs
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.5 },
    }),
  };

  // Animation for the button
  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { delay: 0.6, duration: 0.5 } },
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  return (
    <section className="py-16 px-4 bg-blue-600 text-white text-center relative overflow-hidden">
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
            fillOpacity="0.2"
            d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,138.7C672,128,768,160,864,181.3C960,203,1056,213,1152,197.3C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>

      {/* Content */}
      <motion.div
        className="max-w-6xl mx-auto relative z-10 bg-white/90 backdrop-blur-sm p-8 rounded-lg shadow-lg border-l-4 border-yellow-500 touch-action-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h2>
        <motion.p
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={textVariants}
          className="text-lg text-gray-700 mb-2"
        >
          📍 Janakpurdham-9, Pidari Chowk, behind the Bus Park, opposite side of SBI Bank
        </motion.p>
        <motion.p
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={textVariants}
          className="text-lg text-gray-700 mb-4"
        >
          📞 9824864187 / 9824823877 / 9812148069
        </motion.p>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          whileHover="hover" // Enable hover effect for all devices
          variants={buttonVariants}
        >
          <Button asChild className="bg-yellow-500 text-blue-900 hover:bg-yellow-600">
            <a href="https://wa.me/9824864187" target="_blank" rel="noopener noreferrer">
              Contact via WhatsApp
            </a>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ContactSection;