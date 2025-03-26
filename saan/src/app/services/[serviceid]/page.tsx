import { notFound } from "next/navigation";
import Image from "next/image";
import { detailedServices } from "@/util/detailservice";
import Head from "next/head";
import Link from "next/link";
import { DetailedService, ProgrammingLanguagesService, SubCourse, Service } from "@/types";


// Define the props interface for the page
interface ServiceDetailPageProps {
  params: Promise<{ serviceid: string }>; // Use Promise for params to allow await
}

// Helper function to check if the service is a SubCourse
const isSubCourse = (service: DetailedService | SubCourse): service is SubCourse => {
  return (service as SubCourse).id !== undefined && "subCourses" in (service as any) === false;
};

// SVG Check Circle Icon (replacing FaCheckCircle)
const CheckCircleSVG = ({ className }: { className: string }) => (
  <svg
    className={className}
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

// Function to calculate discounted price
const calculateDiscountedPrice = (price: string, discount: number): string => {
  // Extract the numeric price (handle cases like "NPR 7,000 (3 Months) / NPR 14,000 (6 Months)")
  const priceParts = price.split("/");
  const firstPrice = priceParts[0].replace(/[^0-9]/g, ""); // Extract first price (e.g., "7000")
  const originalPrice = parseFloat(firstPrice);

  if (isNaN(originalPrice)) return price; // Return original price if parsing fails

  const discountedPrice = originalPrice - (originalPrice * (discount / 100));
  const formattedDiscountedPrice = `NPR ${Math.round(discountedPrice).toLocaleString()}`;

  // If there's a second price (e.g., for 6 months), calculate its discount too
  if (priceParts.length > 1) {
    const secondPrice = priceParts[1].replace(/[^0-9]/g, ""); // Extract second price (e.g., "14000")
    const originalSecondPrice = parseFloat(secondPrice);
    const discountedSecondPrice = originalSecondPrice - (originalSecondPrice * (discount / 100));
    return `${formattedDiscountedPrice} (3 Months) / NPR ${Math.round(discountedSecondPrice).toLocaleString()} (6 Months)`;
  }

  return formattedDiscountedPrice;
};

export default async function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  // Await the params to get the serviceid
  const { serviceid } = await params;

  // Find the service or sub-course by serviceid
  let service: DetailedService | SubCourse | undefined;

  // First, check if the serviceid matches a top-level service
  service = detailedServices.find((s) => s.id === serviceid) as DetailedService | undefined;

  // If not found, check if the serviceid matches a sub-course within "Programming Languages"
  if (!service) {
    const programmingService = detailedServices.find((s) => s.id === "programming") as ProgrammingLanguagesService | undefined;
    if (programmingService) {
      service = programmingService.subCourses.find((subCourse) => subCourse.id === serviceid);
    }
  }

  if (!service) {
    notFound();
  }

  // Extract styling from the top-level service (for sub-courses, use the parent styling)
  const parentService = detailedServices.find((s) => s.id === "programming" && "subCourses" in s) as ProgrammingLanguagesService | undefined;
  // Ensure styling is always a Service by providing a default details array for ProgrammingLanguagesService
  const styling: Service = isSubCourse(service) && parentService 
    ? { ...parentService, details: [] } // Add default details to satisfy Service interface
    : service as DetailedService;



  return (
    <>
      <Head>
        <title>{`${service.title} - SAAN Coaching and Training Center`}</title>
        <meta name="description" content={service.description} />
      </Head>
      <section className="py-12 px-4 bg-gray-100 min-h-screen">
        <Link href="/" className="p-2 text-white rounded-lg bg-red-500 hover:underline">
          {"< Back"}
        </Link>

        <div className="max-w-4xl mx-auto">
          {/* Header Section with Discount Badge */}
          <div className={`p-6 rounded-lg shadow-md ${styling.bgColor} relative`}>
            {/* Conditionally render the discount badge */}
            {service.discount && (
           <div className="absolute top-[-60px] right-0 transform  translate-x-4 -translate-y-6 md:translate-x-2 md:-translate-y-4">
           <div className="relative">
             <svg
               className="w-44 h-36 md:w-48 md:h-40"
               viewBox="0 0 180 150"
               fill="none"
               xmlns="http://www.w3.org/2000/svg"
             >
               <path
                 d="M20 30C40 10, 80 20, 100 40C120 60, 140 40, 160 30C160 90, 140 120, 100 130C60 140, 40 120, 20 90C0 60, 0 40, 20 30Z"
                 fill="url(#yellowOrangeGradient)"
                 stroke="white"
                 strokeWidth="2"
               />
               <defs>
                 <linearGradient id="yellowOrangeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                   <stop offset="0%" style={{ stopColor: "#FFD700", stopOpacity: 1 }} />
                   <stop offset="100%" style={{ stopColor: "#FF4500", stopOpacity: 1 }} />
                 </linearGradient>
               </defs>
             </svg>
             <div className="absolute inset-0 flex flex-col items-center justify-center text-white font-bold">
               <span className="text-3xl md:text-4xl">{service.discount}%</span>
               <span className="text-base md:text-lg">DISCOUNT</span>
             </div>
           </div>
         </div>
         
            )}

            <h1 className={`text-3xl font-bold ${styling.textColor} mb-4`}>{service.title}</h1>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/2">
                <Image
                  src={service.image}
                  alt={service.alt}
                  width={500}
                  height={300}
                  className="rounded-lg object-cover w-full h-64"
                />
              </div>
              <div className="md:w-1/2">
                <p className="text-gray-700 mb-4">{service.description}</p>
                <p className="text-gray-800 font-semibold mb-2">Duration: {service.duration}</p>
                <p className="text-gray-800 font-semibold mb-2">
                  Price: {service.discount ? (
                    <>
                      <s>{service.price}</s> {/* Strikethrough original price */}
                      <span className="ml-2 text-green-600">
                        {calculateDiscountedPrice(service.price, service.discount)}
                      </span>
                    </>
                  ) : (
                    service.price
                  )}
                </p>
                <p className="text-gray-800 font-semibold mb-4">Schedule: {service.schedule}</p>
                <button
                  className={`px-6 py-2 rounded-lg text-white ${styling.buttonColor} transition-colors duration-300`}
                >
                  Enroll Now
                </button>
              </div>
            </div>
          </div>

          {/* Details Section */}
          <div className="mt-8 p-6 rounded-lg shadow-md bg-white">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Course Details</h2>
            <ul className="space-y-2">
              {service.details.map((detail, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircleSVG className={`${styling.checkColor} mt-1`} />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Target Audience Section */}
          <div className="mt-8 p-6 rounded-lg shadow-md bg-white">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Target Audience</h2>
            <ul className="space-y-2">
              {service.targetAudience.map((audience, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircleSVG className={`${styling.checkColor} mt-1`} />
                  <span>{audience}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Prerequisites Section */}
          <div className="mt-8 p-6 rounded-lg shadow-md bg-white">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Prerequisites</h2>
            <ul className="space-y-2">
              {service.prerequisites.map((prereq, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircleSVG className={`${styling.checkColor} mt-1`} />
                  <span>{prereq}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Curriculum and Outcomes Section */}
          <div className="mt-8 p-6 rounded-lg shadow-md bg-white">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Curriculum</h2>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Basic Topics</h3>
            <ul className="space-y-2 mb-4">
              {service.curriculum.basic?.map((topic, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircleSVG className={`${styling.checkColor} mt-1`} />
                  <span>{topic}</span>
                </li>
              ))}
            </ul>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Advanced Topics</h3>
            <ul className="space-y-2 mb-4">
              {service.curriculum.advanced?.map((topic, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircleSVG className={`${styling.checkColor} mt-1`} />
                  <span>{topic}</span>
                </li>
              ))}
            </ul>
            {service.curriculum.other && (
              <>
                <h3 className="text-lg font-semibold text-gray-700 mb-2">Other Topics</h3>
                <ul className="space-y-2 mb-4">
                  {service.curriculum.other.map((topic, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircleSVG className={`${styling.checkColor} mt-1`} />
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </>
            )}
            <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">Learning Outcomes</h2>
            <ul className="space-y-2">
              {service.outcomes.map((outcome, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircleSVG className={`${styling.checkColor} mt-1`} />
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Certification Section */}
          <div className="mt-8 p-6 rounded-lg shadow-md bg-white">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Certification</h2>
            <p className="text-gray-700">{service.certification}</p>
          </div>
        </div>
      </section>
    </>
  );
}