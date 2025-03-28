"use client";
import { FaLaptopCode, FaBook, FaCode, FaGraduationCap, FaTools } from "react-icons/fa";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import Link from "next/link";
import { detailedServices } from "@/util/detailservice";
import { ProgrammingLanguagesService } from "@/types";

// Define the type for service cards
interface ServiceCard {
  name: string;
  icon: React.ReactNode;
  highlight: boolean;
  slug: string;
}

const ServiceCardSection = () => {
  // Define the base service cards (excluding Programming Languages)
  const baseServiceCards: ServiceCard[] = [
    {
      name: "Bridge Course & Entrance Preparation for +2",
      icon: <FaGraduationCap className="text-4xl text-orange-500" />,
      highlight: true,
      slug: "bridge-course",
    },
    {
      name: "Computer Classes (Basic-Advanced)",
      icon: <FaLaptopCode className="text-4xl text-yellow-500" />,
      highlight: true,
      slug: "computer-training",
    },
    {
      name: "Coaching for Classes 6-10",
      icon: <FaBook className="text-4xl text-blue-500" />,
      highlight: false,
      slug: "coaching",
    },
    {
      name: "Mobile Repairing",
      icon: <FaTools className="text-4xl text-blue-500" />,
      highlight: false,
      slug: "mobile-repairing",
    },
    {
      name: "Full Stack Web Development",
      icon:<FaCode  className="text-4xl text-yellow-500" />,
      highlight: true,
      slug: "web-development",
    },
  ];

  // Extract programming sub-courses
  const programmingService = detailedServices.find((service) => service.id === "programming") as ProgrammingLanguagesService | undefined;
  const programmingCards: ServiceCard[] = programmingService?.subCourses.map((subCourse) => ({
    name: subCourse.title,
    icon: <FaCode className="text-4xl text-blue-500" />,
    highlight: false,
    slug: subCourse.id,
  })) || [];

  // Combine all cards
  const serviceCards = [...baseServiceCards.slice(0, 4), ...programmingCards, baseServiceCards[baseServiceCards.length - 1]];

  // Framer Motion animation variants for cards
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 },
    },
  };

  // Framer Motion animation for icons
  const iconVariants = {
    hover: {
      scale: 1.2,
      rotate: 10,
      transition: { duration: 0.3 },
    },
  };

  return (
    <section className="py-16 px-4 w-full relative overflow-hidden">
      {/* SVG Background */}
      <motion.div
        className="absolute inset-0 z-0"
        variants={cardVariants}
        animate="animate"
      >
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
      </motion.div>

      {/* Content */}
      <div className="relative max-w-6xl z-10 mx-auto touch-action-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceCards.map((service, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              variants={cardVariants}
            >
              <Link href={`/services/${service.slug}`} className="block">
                <Card
                  className={`relative bg-white/90 backdrop-blur-sm border-0 shadow-lg transition-all duration-300 cursor-pointer ${
                    service.highlight
                      ? service.name === "Bridge Course & Entrance Preparation for +2"
                        ? "border-l-4 border-orange-500"
                        : "border-l-4 border-yellow-500"
                      : "border-l-4 border-blue-500"
                  }`}
                >
                  <CardHeader>
                    <motion.div
                      whileHover="hover"
                      variants={iconVariants}
                      className="flex justify-center mb-2"
                    >
                      {service.icon}
                    </motion.div>
                    <CardTitle className="text-xl font-semibold text-blue-700 text-center">
                      {service.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-center">
                      {service.highlight
                        ? service.name === "Bridge Course & Entrance Preparation for +2"
                          ? "Ace your +2 entrance exams with us!"
                          : "Perfect for post-SEE students to build skills!"
                        : "Learn with expert guidance and practical training."}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCardSection;