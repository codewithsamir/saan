import { Service } from "@/types";

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
    discount: 50, // Add 50% discount
    rewards: [
      { item: "Notebook", image: "/notebook.jpg" },
      { item: "Pen", image: "/pen.jpg" },
    ]
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
    discount: 50, // Add 50% discount
    rewards: [
      { item: "Notebook", image: "/notebook.jpg" },
      { item: "Pen", image: "/pen.jpg" },
    ]
  },
  {
    title: "English Class",
    id: "english-class",
    details: [
      "Improve Your English Speaking, Writing, and Reading Skills",
      "Interactive Classes with Fun Activities to Enhance Vocabulary",
      "Focus on Grammar, Pronunciation, and Communication Skills",
      "Practice Real-Life Conversations and Public Speaking",
      "Prepare for International English Exams like IELTS and TOEFL",
      "Get Certified and Boost Your Confidence in English",
      "Perfect for Students, Professionals, and Anyone Looking to Master English!",
    ],
    image: "/english-class.jpg",
    alt: "English class",
    bgColor: "bg-green-50",
    textColor: "text-green-700",
    buttonColor: "bg-green-500 hover:bg-green-600",
    checkColor: "text-green-500",
    discount: 50, // Add 50% discount
    rewards: [
      { item: "Notebook", image: "/notebook.jpg" },
      { item: "Pen", image: "/pen.jpg" },
    ], // Rewards for English Class
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
    discount: 50, // Add 50% discount
    rewards: [
      { item: "Tool Kit", image: "/toolkit.jpg" },
      { item: "Screwdriver Set", image: "/screwdriver-set.jpg" },
    ], // Rewards for Mobile Repairing
  },
  {
    title: "Java Programming",
    id: "java",
    details: [
      "Learn Java from Basics to Advanced with Step-by-Step Guidance",
      "Build Projects like Banking Systems, Games, and More",
      "Understand Object-Oriented Programming Concepts and Best Practices",
      "Prepare for a High-Demand Career in Software Development",
      "Participate in Java Challenges and Competitions to Test Your Skills",
      "Get Mentorship from Experienced Java Developers",
      "Start Your Programming Journey with Java Today!",
    ],
    image: "/java-programming.jpg",
    alt: "Java programming class",
    bgColor: "bg-white",
    textColor: "text-blue-700",
    buttonColor: "bg-blue-500 hover:bg-blue-600",
    checkColor: "text-yellow-500",
    discount: 50, // Add 50% discount
    rewards: [
      { item: "Notebook", image: "/notebook.jpg" },
      { item: "Pen", image: "/pen.jpg" },
    ]
  },
  {
    title: "JavaScript Programming",
    id: "javascript",
    details: [
      "Master JavaScript from Fundamentals to Advanced Topics",
      "Build Real-World Web Applications and Dynamic Websites",
      "Learn Asynchronous JavaScript, APIs, and Web Development Best Practices",
      "Understand Algorithms, Data Structures, and Solve Real-World Problems",
      "Prepare for a Career in Frontend or Full Stack Web Development",
      "Participate in JavaScript Challenges and Competitions",
      "Get Mentorship from Experienced JavaScript Developers",
      "Shape Your Future in Web Development with JavaScript!",
    ],
    image: "/javascript-programming.jpg",
    alt: "JavaScript programming class",
    bgColor: "bg-white",
    textColor: "text-blue-700",
    buttonColor: "bg-blue-500 hover:bg-blue-600",
    checkColor: "text-yellow-500",
    discount: 50, // Add 50% discount
    rewards: [
      { item: "Notebook", image: "/notebook.jpg" },
      { item: "Pen", image: "/pen.jpg" },
    ]
  },
  {
    title: "C Programming",
    id: "c",
    details: [
      "Learn C Programming Language with Comprehensive Guidance",
      "Understand Pointers, Memory Management, and Low-Level Concepts",
      "Build Efficient Systems and Tools Using C",
      "Prepare for a Career in Systems Programming and Embedded Systems",
      "Solve Complex Problems and Participate in C Challenges",
      "Get Mentorship from Experienced C Programmers",
      "Start Your Programming Journey with C Today!",
    ],
    image: "/c-programming.jpg",
    alt: "C programming class",
    bgColor: "bg-white",
    textColor: "text-blue-700",
    buttonColor: "bg-blue-500 hover:bg-blue-600",
    checkColor: "text-yellow-500",
    discount: 50, // Add 50% discount
    rewards: [
      { item: "Notebook", image: "/notebook.jpg" },
      { item: "Pen", image: "/pen.jpg" },
    ]
  },
  {
    title: "C++ Programming",
    id: "cpp",
    details: [
      "Master C++ with Comprehensive Lessons and Hands-On Projects",
      "Understand Object-Oriented Programming (OOP) and Data Structures",
      "Build Projects Like Games, Desktop Applications, and More",
      "Prepare for a Career in Software Engineering and Game Development",
      "Participate in C++ Competitions and Coding Challenges",
      "Get Mentorship from Experienced C++ Developers",
      "Start Your Journey in C++ Programming Today!",
    ],
    image: "/cpp-programming.jpg",
    alt: "C++ programming class",
    bgColor: "bg-white",
    textColor: "text-blue-700",
    buttonColor: "bg-blue-500 hover:bg-blue-600",
    checkColor: "text-yellow-500",
    discount: 50, // Add 50% discount
    rewards: [
      { item: "Notebook", image: "/notebook.jpg" },
      { item: "Pen", image: "/pen.jpg" },
    ]
  },
  {
    title: "Python Programming",
    id: "python",
    details: [
      "Learn Python from Scratch to Advanced with Hands-On Projects",
      "Master Python Libraries for Data Science, Web Development, and Automation",
      "Build Real-World Projects Like Web Apps, Games, and More",
      "Understand Core Programming Concepts and Best Practices",
      "Prepare for Careers in Software Development, Data Science, and AI",
      "Get Involved in Python Challenges and Open-Source Projects",
      "Mentorship and Guidance from Experienced Python Developers",
      "Start Your Journey with Python Programming Today!",
    ],
    image: "/python-programming.jpg",
    alt: "Python programming class",
    bgColor: "bg-white",
    textColor: "text-blue-700",
    buttonColor: "bg-blue-500 hover:bg-blue-600",
    checkColor: "text-yellow-500",
    discount: 50, // Add 50% discount
    rewards: [
      { item: "Notebook", image: "/notebook.jpg" },
      { item: "Pen", image: "/pen.jpg" },
    ]
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
    discount: 50, // Add 50% discount
    rewards: [
      { item: "Keyboard", image: "/keyboard.jpg" },
      { item: "Mouse", image: "/mouse.jpg" },
    ], // Rewards for Programming Class
  },
  {
    title: "Coaching for Classes 6-10",
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
    // No discount for this service
  },
 
];

export { services };