
 interface Service {
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


  const services: Service[] = [
    {
      title: "Bridge Course & Entrance Preparation for +2",
      id: "bridge-course",
      details: [
        "Expert Guidance from Experienced Teachers to Ace Your +2 Entrance Exams",
        "Comprehensive Study Materials Covering All Subjects (Math, Science, English, and More)",
        "Regular Mock Tests with Detailed Feedback to Boost Your Confidence",
        "Personalized Support to Strengthen Weak Areas and Maximize Your Potential",
        "Interactive Group Study Sessions to Learn with Peers and Build Confidence",
        "Tips and Tricks to Manage Exam Stress and Perform Your Best",
        "Proven Strategies to Secure Admission in Top +2 Colleges in Nepal",
      ],
      image: "/entrance preparation.jpg",
      alt: "Student preparing for +2 entrance",
      bgColor: "bg-orange-50",
      textColor: "text-orange-600",
      buttonColor: "bg-orange-500 hover:bg-orange-600",
      checkColor: "text-orange-500",
    },
    {
      title: "3-Month Computer Training",
      id: "computer-training",
      details: [
        "Master the Office Package (MS Word, Excel, PowerPoint) to Excel in School Projects",
        "Multimedia & Internet Skills: Learn Photo Editing and Online Productivity Tools",
        "AI for Work: Use ChatGPT, Create AI-Powered Resumes, and Explore Freelancing Basics",
        "Create Professional Documents and Presentations for Academic Success",
        "Hands-On Projects to Build Digital Skills for the Future",
        "Get Certified and Add Valuable Skills to Your Resume",
        "Perfect for Post-SEE Students Starting Their Tech Journey!",
      ],
      image: "/computer class.jpg",
      alt: "computer class",
      bgColor: "bg-blue-50",
      textColor: "text-blue-700",
      buttonColor: "bg-blue-500 hover:bg-blue-600",
      checkColor: "text-yellow-500",
    },
    {
      title: "Coaching for Classes 5-10",
      id: "coaching",
      details: [
        "Interactive Classes with Fun Activities for Better Understanding",
        "Focus on Core Subjects (Math, Science, English, Social Studies, and Nepali)",
        "Regular Assessments with Progress Reports to Track Your Growth",
        "Learn from Experienced Teachers Specializing in Classes 5-10 Curriculum",
        "Small Batch Sizes for Personalized Attention and Doubt Clearing",
        "Exam Preparation Tips to Score High in SEE and School Exams",
        "Build a Strong Foundation for Your Academic Future in Nepal!",
      ],
      image: "/coachingclass.jpg",
      alt: "coaching class",
      bgColor: "bg-white",
      textColor: "text-blue-700",
      buttonColor: "bg-blue-500 hover:bg-blue-600",
      checkColor: "text-yellow-500",
    },
    {
      title: "Mobile Repairing",
      id: "mobile-repairing",
      details: [
        "Hands-On Training with Real Smartphones to Master Repair Skills",
        "Learn to Diagnose and Fix Common Issues (Screen, Battery, Software Problems)",
        "Understand Both Hardware and Software Repairs for All Devices",
        "Guidance from Industry Experts with Years of Experience",
        "Start Earning Early: Learn Skills for Part-Time Jobs or Entrepreneurship",
        "Get Certified and Build a Career in Mobile Repairing Across Nepal",
        "Practical Workshops to Boost Confidence and Problem-Solving Skills",
      ],
      image: "/mobile repairing.jpg",
      alt: "mobile repairing",
      bgColor: "bg-blue-50",
      textColor: "text-blue-700",
      buttonColor: "bg-blue-500 hover:bg-blue-600",
      checkColor: "text-yellow-500",
    },
    {
      title: "Programming Languages",
      id: "programming",
      details: [
        "Learn Popular Languages (Python, JavaScript, C++) with Step-by-Step Guidance",
        "Build Exciting Projects Like Games, Websites, and Apps to Showcase Your Skills",
        "Understand Algorithms and Data Structures to Solve Real-World Problems",
        "Prepare for a High-Demand Career in Coding and Software Development",
        "Participate in Coding Challenges and Competitions to Test Your Skills",
        "Get Mentorship from Expert Programmers to Guide Your Journey",
        "Start Your Coding Journey Today and Shape Your Future in Tech!",
      ],
      image: "/coding class.jpg",
      alt: "coding class",
      bgColor: "bg-white",
      textColor: "text-blue-700",
      buttonColor: "bg-blue-500 hover:bg-blue-600",
      checkColor: "text-yellow-500",
    },
    {
      title: "Full Stack Web Development",
      id: "web-development",
      details: [
        "Master Frontend & Backend Development with HTML, CSS, JavaScript, and More",
        "Build Real-World, Scalable Projects Like E-Commerce Sites and Blogs",
        "Work with Git & GitHub to Collaborate on Projects Like a Pro",
        "Create and Manage APIs & Databases for Dynamic Web Applications",
        "Deploy Your Projects Online and Build a Portfolio to Impress Employers",
        "Get Job-Ready with Skills in High Demand Across Nepal and Globally",
        "Learn from Industry Experts and Start Your Career in Web Development!",
      ],
      image: "/webdevelopment.jpg",
      alt: "web development",
      bgColor: "bg-blue-50",
      textColor: "text-blue-700",
      buttonColor: "bg-blue-500 hover:bg-blue-600",
      checkColor: "text-yellow-500",
    },
  ];
  
  export { services };