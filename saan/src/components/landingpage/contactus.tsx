"use client";
import { FaFacebook, FaYoutube, FaWhatsapp, FaEnvelope, FaGraduationCap } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

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

  // Animation for the buttons
  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: { delay: 0.6 + i * 0.2, duration: 0.5 },
    }),
    hover: {
      scale: 1.05,
      boxShadow: "0 0 15px rgba(255, 255, 255, 0.5)",
      transition: { duration: 0.3 },
    },
  };

  // Animation for floating elements
  const floatingVariants = {
    animate: {
      y: [0, 15, 0],
      rotate: [0, 10, 0],
      opacity: [0.5, 1, 0.5],
      transition: {
        duration: Math.random() * 4 + 4,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      },
    },
  };

  // Animation for the wave
  const waveVariants = {
    animate: {
      x: [0, -50, 0],
      transition: {
        duration: 10,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      },
    },
  };

  // Animation for decorative circles
  const circleVariants = {
    animate: {
      scale: [1, 1.2, 1],
      opacity: [0.3, 0.5, 0.3],
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      },
    },
  };

  // Social media links
  const socialLinks = [
    {
      name: "WhatsApp",
      icon: <FaWhatsapp className="text-lg sm:text-xl" />,
      href: "https://wa.me/9824864187",
      bgColor: "bg-yellow-500",
      hoverColor: "hover:bg-yellow-600",
      textColor: "text-blue-900",
      tooltip: "Chat with us on WhatsApp!",
    },
    {
      name: "Facebook",
      icon: <FaFacebook className="text-lg sm:text-xl" />,
      href: "https://www.facebook.com/p/SAAN-Coaching-Training-centre-61556791370942/",
      bgColor: "bg-blue-700",
      hoverColor: "hover:bg-blue-800",
      textColor: "text-white",
      tooltip: "Follow us on Facebook!",
    },
    {
      name: "YouTube",
      icon: <FaYoutube className="text-lg sm:text-xl" />,
      href: "https://www.youtube.com/@saancoachingandtrainingcentre",
      bgColor: "bg-red-600",
      hoverColor: "hover:bg-red-700",
      textColor: "text-white",
      tooltip: "Watch our videos on YouTube!",
    },
    {
      name: "Email",
      icon: <FaEnvelope className="text-lg sm:text-xl" />,
      href: "mailto:info@saancoaching.com",
      bgColor: "bg-gray-600",
      hoverColor: "hover:bg-gray-700",
      textColor: "text-white",
      tooltip: "Send us an email!",
    },
  ];

  // Floating elements
  const floatingElements = [
    { x: "10%", y: "20%", size: 20, type: "book" },
    { x: "85%", y: "30%", size: 15, type: "laptop" },
  ].map((elem, i) => (
    <motion.div
      key={i}
      className="absolute"
      style={{ left: elem.x, top: elem.y }}
      variants={floatingVariants}
      animate="animate"
    >
      {elem.type === "book" ? (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={elem.size} height={elem.size}>
          <path fill="#F97316" d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 14H8V4h11v12z"/>
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={elem.size} height={elem.size}>
          <path fill="#3B82F6" d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm0 2v12h16V6H4zm2 2h12v2H6V8zm0 4h12v2H6v-2z"/>
        </svg>
      )}
    </motion.div>
  ));

  // Decorative circles
  const decorativeCircles = [
    { x: "-5%", y: "10%", size: 50, color: "#F97316" },
    { x: "90%", y: "20%", size: 40, color: "#3B82F6" },
    { x: "10%", y: "80%", size: 60, color: "#FBBF24" },
  ].map((circle, i) => (
    <motion.div
      key={i}
      className="absolute rounded-full"
      style={{ left: circle.x, top: circle.y, width: circle.size, height: circle.size, backgroundColor: circle.color, opacity: 0.3 }}
      variants={circleVariants}
      animate="animate"
    />
  ));

  return (
    <section id="contactus" className="py-12 sm:py-16 px-4 bg-blue-600 text-white text-center relative overflow-hidden">
      {/* SVG Background with Animation */}
      <motion.div
        className="absolute inset-0 z-0"
        variants={waveVariants}
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
            fillOpacity="0.3"
            d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,138.7C672,128,768,160,864,181.3C960,203,1056,213,1152,197.3C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </motion.div>

      {/* Floating Elements */}
      {floatingElements}

      {/* Content */}
      <motion.div
        className="max-w-5xl mx-auto relative z-10 bg-white/90 backdrop-blur-sm p-6 sm:p-8 rounded-lg shadow-lg border-l-4 border-yellow-500 touch-action-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        {/* Decorative Icon Above Heading */}
        <motion.div
          className="text-4xl sm:text-5xl text-yellow-500 mx-auto mb-4"
          initial={{ opacity: 0, rotate: -10 }}
          whileInView={{ opacity: 1, rotate: 0 }}
          transition={{ duration: 0.8 }}
        >
          <FaGraduationCap />
        </motion.div>

        {/* Decorative Circles */}
        {decorativeCircles}

        <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
          Contact Us
        </h2>
        <motion.p
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={textVariants}
          className="text-sm sm:text-lg text-gray-700 mb-2"
        >
          📍 Janakpurdham-9, Pidari Chowk, behind the Bus Park, opposite side of SBI Bank
        </motion.p>
      
        <motion.p
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={textVariants}
          className="text-sm sm:text-lg text-gray-700 mb-4 sm:mb-6"
        >
          📞 9824864187 / 9824823877 / 9812148069
        </motion.p>
        {/* Social Media Buttons with Tooltips */}
        <TooltipProvider>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            {socialLinks.map((link, index) => (
              <motion.div
                key={link.name}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover="hover"
                variants={buttonVariants}
              >
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      asChild
                      className={`${link.bgColor} ${link.hoverColor} ${link.textColor} font-semibold px-4 py-2 sm:px-6 sm:py-3 rounded-full flex items-center gap-2 text-sm sm:text-base`}
                    >
                      <a href={link.href} target="_blank" rel="noopener noreferrer">
                        {link.icon}
                        {link.name}
                      </a>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{link.tooltip}</p>
                  </TooltipContent>
                </Tooltip>
              </motion.div>
            ))}
          </div>
        </TooltipProvider>
      </motion.div>
    </section>
  );
};

export default ContactSection;