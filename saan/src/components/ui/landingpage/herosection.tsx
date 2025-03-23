"use client"
import { FaGraduationCap } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-32 text-center overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-30"></div> {/* Overlay */}
      <div className="relative max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-extrabold mb-4"
        >
          SAAN Coaching and Training Center
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Badge className="text-lg bg-yellow-500 text-blue-900 mb-4">Special Offer: 50% Discount Until Baisakh!</Badge>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl font-light mb-6"
        >
          Enroll Now for Post-SEE Courses – Start Your Journey Today!
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button asChild size="lg" className="bg-yellow-500 text-blue-900 hover:bg-yellow-600">
            <a href="https://wa.me/9824864187" target="_blank" rel="noopener noreferrer">
              Join Now via WhatsApp
            </a>
          </Button>
        </motion.div>
      </div>
      <FaGraduationCap className="text-6xl absolute bottom-8 right-8 opacity-20 md:text-9xl" />
    </section>
  );
}