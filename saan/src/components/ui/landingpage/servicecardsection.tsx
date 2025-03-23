"use client";
import { FaLaptopCode, FaBook, FaCode, FaGraduationCap, FaTools } from "react-icons/fa";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";
import { isMobile } from "react-device-detect"; // Import isMobile for device detection

// Define the type for service cards
interface ServiceCard {
  name: string;
  icon: React.ReactNode;
  highlight: boolean;
}

const ServiceCardSection = () => {
  const serviceCards: ServiceCard[] = [
    { name: "Bridge Course & Entrance Preparation for +2", icon: <FaGraduationCap className="text-4xl text-orange-500" />, highlight: true },
    { name: "Computer Classes (Basic-Advanced)", icon: <FaLaptopCode className="text-4xl text-yellow-500" />, highlight: true },
    { name: "Coaching for Classes 5-10", icon: <FaBook className="text-4xl text-blue-500" />, highlight: false },
    { name: "Mobile Repairing", icon: <FaTools className="text-4xl text-blue-500" />, highlight: false },
    { name: "Programming Languages", icon: <FaCode className="text-4xl text-blue-500" />, highlight: false },
    { name: "Full Stack Web Development", icon: <FaLaptopCode className="text-4xl text-yellow-500" />, highlight: true },
  ];

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
    <section className="py-16 px-4 max-w-6xl mx-auto relative overflow-hidden">
      {/* Content */}
      <div className="relative z-10">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceCards.map((service, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              animate="visible"
              // Disable whileHover on mobile devices
              {...(!isMobile && { whileHover: "hover" })}
              variants={cardVariants}
            >
              <Card
                className={`relative bg-transparent backdrop-blur-sm border-0 shadow-lg transition-all duration-300 ${
                  service.highlight
                    ? service.name === "Bridge Course & Entrance Preparation for +2"
                      ? "border-l-4 border-orange-500"
                      : "border-l-4 border-yellow-500"
                    : "border-l-4 border-blue-500"
                }`}
              >
                {/* Three.js 3D Sphere Background */}
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                  <Canvas>
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 10, 10]} />
                    <Sphere args={[1, 32, 32]} scale={2}>
                      <MeshDistortMaterial
                        color={
                          service.highlight
                            ? service.name === "Bridge Course & Entrance Preparation for +2"
                              ? "#F97316"
                              : "#FBBF24"
                            : "#3B82F6"
                        }
                        distort={0.4}
                        speed={2}
                      />
                    </Sphere>
                    <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={2} />
                  </Canvas>
                </div>

                <CardHeader>
                  <motion.div
                    // Disable icon hover animation on mobile
                    {...(!isMobile && { variants: iconVariants })}
                    className="flex justify-center mb-2"
                  >
                    {service.icon}
                  </motion.div>
                  <CardTitle className="text-xl font-semibold text-blue-700 text-center">{service.name}</CardTitle>
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCardSection;