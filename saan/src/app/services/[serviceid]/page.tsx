import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { DetailedService, ProgrammingLanguagesService, SubCourse, Service } from "@/types";
import ServiceDetailsClient from "@/components/landingpage/servicedetailcom"; // Import client-side component
import { detailedServices } from "@/util/detailservice";



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

// SVG Reward Icon
const RewardIcon = ({ item }: { item: string }) => (
  <div className="flex items-center gap-2">
    <svg
      className="w-6 h-6 text-yellow-500"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2l7.5 6.5H21l-6 7.5L12 22l-6-7.5L3 14.5h3.5L12 2z" />
    </svg>
    <span>{item}</span>
  </div>
);

// Function to calculate discounted price
const calculateDiscountedPrice = (price: string, discount: number): string => {
  const numericPrice = parseFloat(price.replace(/[^0-9.-]+/g, ""));
  const discountedPrice = numericPrice - numericPrice * (discount / 100);
  return `NPR ${discountedPrice.toFixed(2)}`;
};

export default async function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const { serviceid } = await  params;

  // Find the service or sub-course by serviceid
  let service: DetailedService | SubCourse | undefined;
  service = detailedServices.find((s) => s.id === serviceid) as DetailedService | undefined;

  // If not found, check if the serviceid matches a sub-course within "Programming Languages"
  if (!service) {
    const programmingService = detailedServices.find(
      (s) => s.id === "programming" && "subCourses" in s
    ) as ProgrammingLanguagesService | undefined;
    if (programmingService) {
      service = programmingService.subCourses.find((subCourse) => subCourse.id === serviceid);
    }
  }

  if (!service) {
    notFound();
  }

  // Extract styling from the top-level service (for sub-courses, use the parent styling)
  const parentService = detailedServices.find((s) => s.id === "programming" && "subCourses" in s) as
    | ProgrammingLanguagesService
    | undefined;
  const styling: Service = isSubCourse(service) && parentService
    ? { ...parentService, details: [] } // Add default details to satisfy Service interface
    : (service as DetailedService);

  return (
    <>
      <section className="py-12 px-4 bg-gray-100 min-h-screen">
        <Link href="/" className="p-2 text-white rounded-lg bg-red-500 hover:underline">
          {"< Back"}
        </Link>
        <div className="max-w-4xl mx-auto">
          {/* Header Section with Discount Badge */}
          <div className={`p-6 rounded-lg shadow-md ${styling.bgColor} relative`}>
            {/* Pass discount and rewards to the client component */}
            <ServiceDetailsClient service={service}  />

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
                  {service.id === "computer-training" && (
                    <span className="ml-2 text-gray-600">(Optional 6-Month: NPR 14,000)</span>
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

          {/* Rewards Section */}
          {service.rewards && (
            <div className="mt-8 p-6 rounded-lg shadow-md bg-white">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Rewards</h2>
              <div className="flex flex-wrap gap-4">
                {service.rewards.map((reward:any, index) => (
                  <RewardIcon key={index} item={reward.item} />
                ))}
              </div>
            </div>
          )}

          {/* Course Details Section */}
          <div className="mt-8 p-6 rounded-lg shadow-md bg-white">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Course Details</h2>
            <ul className="space-y-2">
              {service?.details?.map((detail, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircleSVG className={`${styling.checkColor} mt-1`} />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Curriculum Section */}
          {service.curriculum && (
            <div className="mt-8 p-6 rounded-lg shadow-md bg-white">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Curriculum</h2>
              <div className="space-y-6">
                {Object.entries(service.curriculum).map(([section, topics]) => (
                  <div key={section}>
                    <h3 className="text-xl font-semibold text-gray-700 mb-2">
                      {section.charAt(0).toUpperCase() + section.slice(1)} Topics
                    </h3>
                    <ul className="list-disc pl-6 space-y-1">
                      {(topics as string[]).map((topic, index) => (
                        <li key={index} className="text-gray-700">
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Prerequisites Section */}
          {service.prerequisites && (
            <div className="mt-8 p-6 rounded-lg shadow-md bg-white">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Prerequisites</h2>
              <ul className="list-disc pl-6 space-y-1">
                {service.prerequisites.map((prerequisite, index) => (
                  <li key={index} className="text-gray-700">
                    {prerequisite}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Target Audience Section */}
          {service.targetAudience && (
            <div className="mt-8 p-6 rounded-lg shadow-md bg-white">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Target Audience</h2>
              <ul className="list-disc pl-6 space-y-1">
                {service.targetAudience.map((audience, index) => (
                  <li key={index} className="text-gray-700">
                    {audience}
                  </li>
                ))}
              </ul>
            </div>
          )}



                    {/* Certificate Section */}
                    {service.certification && (
            <div className="mt-8 p-6 rounded-lg shadow-md bg-white">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Certification</h2>
              <div className="space-y-4">
                <p className="text-gray-700">
                  Upon successful completion of this course, you will receive:
                </p>
                <div className="flex items-center gap-4">
                  <svg
                    className="w-10 h-10 text-green-500"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                    <path d="M9 12l2 2 4-4" />
                  </svg>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">{service.certification}</h3>
                    <p className="text-gray-600">
                      This certificate validates your skills and can be added to your resume.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}