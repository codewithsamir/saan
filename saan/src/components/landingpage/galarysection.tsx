"use client";
import * as React from "react";
import { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi, // Import the CarouselApi type
} from "@/components/ui/carousel";
import Image from "next/image";

const GallerySection = () => {
  // Your image paths
  const images = [
    { src: "/SAAN.jpg", alt: "Student" },
    { src: "/student-2.jpg", alt: "Student" },
    { src: "/student-3.jpg", alt: "Student" },
    { src: "/allstudent.jpg", alt: "Student" },
  ];

  // State for the carousel API with proper typing
  const [api, setApi] = React.useState<CarouselApi | null>(null);

  // Auto-play functionality
  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext(); // Move to the next item
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [api]);

  return (
    <section id="gallery" className="py-12 bg-gray-100 text-center relative overflow-hidden">
      <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-yellow-500 bg-clip-text text-transparent">
        Our Journey in Pictures
      </h2>
      <div className="max-w-5xl mx-auto px-4">
        <Carousel
          className="w-full bg-transparent"
          setApi={setApi} // Set the carousel API for auto-play control
          opts={{
            loop: true, // Enable looping
          }}
        >
          <CarouselContent className="-ml-1 h-[300px] sm:h-[400px] md:h-[500px] bg-transparent">
            {images.map((image, index) => (
              <CarouselItem key={index} className="pl-1">
                <Card className="border-none shadow-lg h-full">
                  <CardContent className="p-0 h-full flex items-center justify-center">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={500}
                      height={500}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full" />
          <CarouselNext className="right-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full" />
        </Carousel>
      </div>
    </section>
  );
};

export default GallerySection;