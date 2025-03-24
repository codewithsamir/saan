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
    visible: { opacity: 1, scale: 1, transition: { delay: 0.5, duration: 0.5 } },
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  // Animation for the image
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { delay: 0.3, duration: 0.8 } },
    hover: { scale: 1.02, transition: { duration: 0.3 } },
  };

  return (
    <section id={id} className={`py-20 px-4 ${bgColor} relative overflow-hidden`}>
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
        className="max-w-6xl mx-auto relative z-10 touch-action-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">{title}</h2>
        <div className="flex flex-col md:flex-row items-center gap-8 bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
          <div className="md:w-1/2">
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
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover="hover" // Enable hover effect for all devices
                variants={buttonVariants}
                className="mt-2"
              >
                   <Link href={`/services/${id}`}>
       <Button> Explore more</Button>
       </Link>
              </motion.div>
            {title === "Bridge Course & Entrance Preparation for +2" && (
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover="hover" // Enable hover effect for all devices
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
          <motion.div
            className="md:w-1/2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover="hover" // Enable hover effect for all devices
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