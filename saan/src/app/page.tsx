
import {  services } from "@/util/service";
import Header from "@/components/ui/landingpage/header";
import HeroSection from "@/components/ui/landingpage/herosection";

import ServiceSection from "@/components/ui/landingpage/sections";
import Servicecardsection from "@/components/ui/landingpage/servicecardsection";
import ContactSection from "@/components/ui/landingpage/contactus";

export default function Home() {


 

  return (
    <main suppressHydrationWarning>
      {/* Hero Section */}
     
      <Header/>
      <HeroSection/>


      {/* Services Section */}
     <Servicecardsection />


{/* Dynamic Service Sections */}
{services.map((service, index) => (
        <ServiceSection
          key={index}
          title={service.title}
          id={service.id}
          details={service.details}
          image={service.image}
          alt={service.alt}
          bgColor={service.bgColor}
          textColor={service.textColor}
          buttonColor={service.buttonColor}
          checkColor={service.checkColor}
        />
      ))}


      {/* Contact Section */}
  <ContactSection/> 

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 text-center">
        <p className="text-lg">© 2025 SAAN Coaching and Training Center. All rights reserved.</p>
      </footer>
    </main>
  );
}