export interface Service {
    title: string;
    id: string;
    details: string[];
    image: string;
    alt: string;
    bgColor: string;
    textColor: string;
    buttonColor: string;
    checkColor: string;
  }
  
 export interface DetailedService extends Service {
    description: string; // A detailed description of the course
    duration: string; // Duration of the course (e.g., "3 Months", "6 Weeks")
    targetAudience: string[]; // Who the course is for
    prerequisites: string[]; // Prerequisites for the course
    curriculum: {
      basic?: string[]; // Basic topics (if applicable)
      advanced?: string[]; // Advanced topics (if applicable)
      other?: string[]; // Other topics (if neither basic nor advanced)
    }; // Detailed curriculum
    outcomes: string[]; // Learning outcomes
    certification: string; // Certification details
    price: string; // Price of the course
    schedule: string; // Class schedule (e.g., "Mon-Fri, 2 hours/day")
  }