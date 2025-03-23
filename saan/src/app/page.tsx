
import {  services } from "@/util/service";
import Header from "@/components/landingpage/header";
import HeroSection from "@/components/landingpage/herosection";

import ServiceSection from "@/components/landingpage/sections";
import Servicecardsection from "@/components/landingpage/servicecardsection";
import ContactSection from "@/components/landingpage/contactus";
import GallerySection from "@/components/landingpage/galarysection";
import PopupAdvertisement from "@/components/landingpage/advertisement";

export default function Home() {


 

  return (
    <main suppressHydrationWarning>
      {/* Hero Section */}
     
      <Header/>
      <HeroSection/>

{/* Example with a PDF */}
{/* <PopupAdvertisement
        contentType="pdf"
        contentUrl="/path/to/offer-flyer.pdf" // Replace with your actual PDF URL
      /> */}
      {/* Example with an Image */}
      <PopupAdvertisement
        contentType="image"
        contentUrl="/course_advertisement.png" // Replace with your actual image URL
      />
      {/* Example with Text Only */}
      {/* <PopupAdvertisement contentType="text" /> */}
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

<GallerySection/>

      {/* Contact Section */}
  <ContactSection/> 

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 text-center">
        <p className="text-lg">© 2025 SAAN Coaching and Training Center. All rights reserved.</p>
      </footer>
    </main>
  );
}