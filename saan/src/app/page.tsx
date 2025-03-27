
import {  services } from "@/util/service";

import HeroSection from "@/components/landingpage/herosection";

import ServiceSection from "@/components/landingpage/sections";

import ContactSection from "@/components/landingpage/contactus";
import GallerySection from "@/components/landingpage/galarysection";
import PopupAdvertisement from "@/components/landingpage/advertisement";


export default function Home() {


 

  return (
    <main suppressHydrationWarning>
      {/* Hero Section */}
     
   
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


{/* Dynamic Service Sections */}
<>
<h2 className="text-4xl mt-6 font-bold text-center text-transparent  bg-gradient-to-l to-yellow-400 from-orange-600 bg-clip-text mb-10">Our Services</h2>


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
          discount={service.discount}
          rewards={service.rewards }
        />
      ))}
</>
     {/* <Servicecardsection /> */}


<GallerySection/>

      {/* Contact Section */}
      
  <ContactSection/> 

     
    </main>
  );
}