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
    description: string;
    duration: string;
    targetAudience: string[];
    prerequisites: string[];
    curriculum: {
      basic?: string[];
      advanced?: string[];
      other?: string[];
    };
    outcomes: string[];
    certification: string;
    price: string;
    schedule: string;
  }



  // Define a type for sub-courses within the Programming Languages object
export interface SubCourse {
  title: string;
  id: string;
  details: string[];
  image: string;
  alt: string;
  description: string;
  duration: string;
  targetAudience: string[];
  prerequisites: string[];
  curriculum: {
    basic: string[];
    advanced: string[];
    other?: string[];
  };
  outcomes: string[];
  certification: string;
  price: string;
  schedule: string;
}

export interface ProgrammingLanguagesService extends Omit<DetailedService, "details" | "description" | "duration" | "targetAudience" | "prerequisites" | "curriculum" | "outcomes" | "certification" | "price" | "schedule"> {
  subCourses: SubCourse[];
}