"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { FaWhatsapp, FaTimes, FaFilePdf } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

interface PopupAdvertisementProps {
  contentType?: "pdf" | "image" | "text"; // Type of content to display
  contentUrl?: string; // URL for the PDF or image
}

const PopupAdvertisement = ({ contentType = "text", contentUrl }: PopupAdvertisementProps) => {
  // State to control popup visibility
  const [isOpen, setIsOpen] = useState(false);

  // Check localStorage to see if the popup has been closed
  useEffect(() => {
    const hasClosedPopup = localStorage.getItem("hasClosedPopup");
    if (!hasClosedPopup) {
      setIsOpen(true); // Show popup if it hasn't been closed
    }
  }, []);

  // Handle closing the popup
  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem("hasClosedPopup", "true"); // Store in localStorage
  };

  // Animation variants for the popup
  const popupVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: { duration: 0.3, ease: "easeIn" },
    },
  };

  // Animation for the button
  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.3, duration: 0.5 } },
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  // Animation for the content (PDF or image)
  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.5 } },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={popupVariants}
        >
          <motion.div
            className="relative bg-white rounded-lg p-6 sm:p-8 max-w-md w-full mx-4 shadow-lg border-t-4 border-yellow-500"
            variants={popupVariants}
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-800"
              aria-label="Close popup"
            >
              <FaTimes className="text-lg sm:text-xl" />
            </button>

            {/* Popup Content */}
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-3 sm:mb-4 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Special Offer!
            </h2>

            {/* Dynamic Content (PDF, Image, or Text) */}
            <motion.div
              className="mb-4 sm:mb-6"
              variants={contentVariants}
              initial="hidden"
              animate="visible"
            >
              {contentType === "pdf" && contentUrl ? (
                <div className="flex justify-center">
                  <Button
                    asChild
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 sm:px-6 sm:py-3 rounded-full flex items-center gap-2 text-sm sm:text-base"
                  >
                    <a href={contentUrl} target="_blank" rel="noopener noreferrer" download>
                      <FaFilePdf className="text-lg sm:text-xl" />
                      View Offer PDF
                    </a>
                  </Button>
                </div>
              ) : contentType === "image" && contentUrl ? (
                <div className="flex justify-center">
                  <Image
                    src={contentUrl}
                    alt="Special Offer Banner"
                    width={300}
                    height={150}
                    className="w-full h-auto rounded-lg object-cover"
                  />
                </div>
              ) : (
                <p className="text-sm sm:text-base text-gray-700 text-center">
                  Get <span className="font-bold text-yellow-500">50% Off</span> on all courses until Baisakh! Don’t miss out—enroll now and start your journey with SAAN Coaching!
                </p>
              )}
            </motion.div>

            {/* Call-to-Action Button */}
            <motion.div
              className="flex justify-center"
              variants={buttonVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
            >
              <Button
                asChild
                className="bg-yellow-500 text-blue-900 hover:bg-yellow-600 font-semibold px-4 py-2 sm:px-6 sm:py-3 rounded-full flex items-center gap-2 text-sm sm:text-base"
              >
                <a href="https://wa.me/9824864187?text=I'm%20interested%20in%20the%2050%25%20off%20offer!" target="_blank" rel="noopener noreferrer">
                  <FaWhatsapp className="text-lg sm:text-xl" />
                  Enroll Now
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PopupAdvertisement;