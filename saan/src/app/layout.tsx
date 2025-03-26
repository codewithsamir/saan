import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import Header from "@/components/landingpage/header";
import Footer from "@/components/landingpage/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SAAN Coaching and Training Center | Janakpur, Nepal",
  description: "SAAN Coaching Center in Janakpur offers quality education and training. Join us for bridge courses, computer classes, mobile repairing, and programming. Online classes coming soon for students across Nepal.",
  keywords: [
    "saan",
    "saan coaching center",
    "saan computer center", // Added
    "saan computer",       // Added
    "saan mobile",         // Added
    "saan programming",    // Added
    "janakpur coaching center",
    "janakpur computer center",
    "mobile repairing janakpur",
    "bridge course janakpur",
    "computer classes nepal",
    "programming courses nepal",
    "entrance preparation +2 janakpur",
    "full stack web development nepal",
    "online classes nepal",
  ],
  authors: [{ name: "SAAN Coaching and Training Center" }],
  verification: {
    google: "0h6mLogELJG-SKu5XC5V5dTzYRqmcD02VKnpBTtHbz4",
  },
  openGraph: {
    title: "SAAN Coaching and Training Center | Janakpur, Nepal",
    description: "SAAN Coaching Center in Janakpur offers bridge courses, computer classes (saan computer center), mobile repairing (saan mobile), and programming (saan programming). Online classes coming soon for students in Nepal.",
    url: "https://saan-psi.vercel.app",
    siteName: "SAAN Coaching and Training Center",
    images: [
      {
        url: "https://saan-psi.vercel.app/logo.png",
        width: 1200,
        height: 630,
        alt: "SAAN Coaching and Training Center in Janakpur, Nepal",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SAAN Coaching and Training Center | Janakpur, Nepal",
    description: "SAAN Coaching Center in Janakpur offers bridge courses, computer classes (saan computer), mobile repairing (saan mobile), and programming (saan programming). Online classes coming soon for students in Nepal.",
    images: ["https://saan-psi.vercel.app/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://saan-psi.vercel.app",
  },
  other: {
    "geo.region": "NP",
    "geo.placename": "Janakpur",
    "geo.position": "26.7288;85.9266",
    "ICBM": "26.7288, 85.9266",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Viewport for responsive design */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Google Site Verification */}
        <meta name="google-site-verification" content="0h6mLogELJG-SKu5XC5V5dTzYRqmcD02VKnpBTtHbz4" />

        {/* Updated Nepali Keywords for Local Search */}
        <meta
          name="keywords"
          content="सान कोचिङ सेन्टर, सान कम्प्युटर सेन्टर, सान कम्प्युटर, सान मोबाइल, सान प्रोग्रामिङ, जनकपुर कोचिङ सेन्टर, जनकपुर कम्प्युटर सेन्टर, मोबाइल मर्मत जनकपुर, अनलाइन कक्षा नेपाल"
        />

        {/* Local Business Structured Data (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              name: "SAAN Coaching and Training Center",
              description: "SAAN Coaching Center in Janakpur offers quality education and training. Join us for bridge courses, computer classes (saan computer center), mobile repairing (saan mobile), and programming (saan programming). Online classes coming soon for students across Nepal.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Janakpurdham-9, Pidari Chowk, behind the Bus Park, opposite side of SBI Bank",
                addressLocality: "Janakpur",
                addressRegion: "Madhesh Province",
                postalCode: "45600",
                addressCountry: "NP",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 26.7288,
                longitude: 85.9266,
              },
              telephone: "+977-9824864187",
              url: "https://saan-psi.vercel.app",
              sameAs: [
                "https://www.facebook.com/p/SAAN-Coaching-Training-centre-61556791370942/",
                "https://www.youtube.com/@saancoachingandtrainingcentre",
              ],
              openingHours: "Mo-Sa 08:00-18:00",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+977-9824864187",
                contactType: "Customer Service",
                areaServed: "NP",
                availableLanguage: ["English", "Nepali"],
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Educational Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Bridge Course & Entrance Preparation for +2",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Computer Classes (Basic-Advanced) - SAAN Computer Center",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Mobile Repairing - SAAN Mobile",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Programming Languages - SAAN Programming",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Full Stack Web Development",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Online Classes (Coming Soon)",
                    },
                  },
                ],
              },
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Analytics />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}