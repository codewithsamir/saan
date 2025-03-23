import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://saan-psi.vercel.app";

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
    // {
    //   url: `${baseUrl}/services/bridge-course`,
    //   lastModified: new Date(),
    //   changeFrequency: "weekly",
    //   priority: 0.8,
    // },
    // {
    //   url: `${baseUrl}/services/computer-classes`,
    //   lastModified: new Date(),
    //   changeFrequency: "weekly",
    //   priority: 0.8,
    // },
    // {
    //   url: `${baseUrl}/services/coaching-5-10`,
    //   lastModified: new Date(),
    //   changeFrequency: "weekly",
    //   priority: 0.7,
    // },
    // {
    //   url: `${baseUrl}/services/mobile-repairing`,
    //   lastModified: new Date(),
    //   changeFrequency: "weekly",
    //   priority: 0.7,
    // },
    // {
    //   url: `${baseUrl}/services/programming-languages`,
    //   lastModified: new Date(),
    //   changeFrequency: "weekly",
    //   priority: 0.7,
    // },
    // {
    //   url: `${baseUrl}/services/full-stack-web-development`,
    //   lastModified: new Date(),
    //   changeFrequency: "weekly",
    //   priority: 0.8,
    // },
    // {
    //   url: `${baseUrl}/online-classes`, // Added for future online classes
    //   lastModified: new Date(),
    //   changeFrequency: "monthly",
    //   priority: 0.6,
    // },
    // {
    //   url: `${baseUrl}/contact`,
    //   lastModified: new Date(),
    //   changeFrequency: "monthly",
    //   priority: 0.6,
    // },
  ];
}