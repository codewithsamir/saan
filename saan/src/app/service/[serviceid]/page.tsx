import { detailedServices } from "@/util/detailservice";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { notFound } from "next/navigation";
import { FaCheckCircle } from "react-icons/fa";

// Define the props interface for the page
interface ServiceDetailPageProps {
  params: { serviceid: string };
}

// Generate static parameters for the dynamic route
export async function generateStaticParams() {
  return detailedServices.map((service) => ({
    serviceid: service.id, // Match the dynamic route parameter name
  }));
}

// Page component (Server Component)
export default function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const service = detailedServices.find((s) => s.id === params.serviceid);
  console.log(params); // This will log on the server during build/render

  if (!service) {
    notFound(); // Show 404 if the service is not found
  }

  return (
    <section className="py-12 px-4 bg-gray-100 min-h-screen">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            {service.title}
          </h1>
          <p className="text-lg text-gray-600">{service.description}</p>
        </div>

        {/* Image Section */}
        <div className="mb-8">
          <Image
            src={service.image}
            alt={service.alt}
            width={800}
            height={400}
            className="w-full h-auto rounded-lg object-cover"
          />
        </div>

        {/* Details Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column: Course Info */}
          <div className={`${service.bgColor} p-6 rounded-lg shadow-md`}>
            <h2 className={`text-2xl font-semibold ${service.textColor} mb-4`}>
              Course Overview
            </h2>
            <ul className="space-y-2">
              <li>
                <strong>Duration:</strong> {service.duration}
              </li>
              <li>
                <strong>Price:</strong> {service.price}
              </li>
              <li>
                <strong>Schedule:</strong> {service.schedule}
              </li>
              <li>
                <strong>Certification:</strong> {service.certification}
              </li>
            </ul>

            <h3 className={`text-xl font-semibold ${service.textColor} mt-6 mb-2`}>
              Target Audience
            </h3>
            <ul className="space-y-2">
              {service.targetAudience.map((audience, index) => (
                <li key={index} className="flex items-start gap-2">
                  <FaCheckCircle className={`${service.checkColor} mt-1`} />
                  <span>{audience}</span>
                </li>
              ))}
            </ul>

            <h3 className={`text-xl font-semibold ${service.textColor} mt-6 mb-2`}>
              Prerequisites
            </h3>
            <ul className="space-y-2">
              {service.prerequisites.map((prereq, index) => (
                <li key={index} className="flex items-start gap-2">
                  <FaCheckCircle className={`${service.checkColor} mt-1`} />
                  <span>{prereq}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Curriculum and Outcomes */}
          <div className="p-6 rounded-lg shadow-md bg-white">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Curriculum</h2>
            {service.curriculum.basic && (
              <>
                <h3 className="text-lg font-semibold text-gray-700 mb-2">Basic Topics</h3>
                <ul className="space-y-2 mb-4">
                  {service.curriculum.basic.map((topic, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <FaCheckCircle className="text-yellow-500 mt-1" />
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </>
            )}
            {service.curriculum.advanced && (
              <>
                <h3 className="text-lg font-semibold text-gray-700 mb-2">Advanced Topics</h3>
                <ul className="space-y-2 mb-4">
                  {service.curriculum.advanced.map((topic, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <FaCheckCircle className="text-yellow-500 mt-1" />
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </>
            )}
            {service.curriculum.other && (
              <>
                <h3 className="text-lg font-semibold text-gray-700 mb-2">Other Topics</h3>
                <ul className="space-y-2 mb-4">
                  {service.curriculum.other.map((topic, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <FaCheckCircle className="text-yellow-500 mt-1" />
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
                  <FaCheckCircle className="text-yellow-500 mt-1" />
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Call-to-Action */}
        <div className="text-center mt-8">
          <Button
            asChild
            className={`${service.buttonColor} text-white font-semibold px-6 py-3 rounded-full text-lg`}
          >
            <a href="https://wa.me/9824864187?text=I'm%20interested%20in%20the%20course!" target="_blank" rel="noopener noreferrer">
              Enroll Now
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}