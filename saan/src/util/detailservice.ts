import { DetailedService, ProgrammingLanguagesService } from "../types/index"; // Adjust the import path based on your project structure

const detailedServices: (DetailedService | ProgrammingLanguagesService)[] = [
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
    description:
      "Our Bridge Course & Entrance Preparation for +2 is designed to help students transition smoothly from SEE to higher secondary education in Nepal. This intensive program prepares students for entrance exams required by top +2 colleges, covering all major subjects and providing personalized support to ensure success.",
    duration: "6 Weeks",
    targetAudience: [
      "Students who have completed SEE and are preparing for +2 entrance exams",
      "Students aiming to join top +2 colleges in Nepal (e.g., St. Xavier’s, Budhanilkantha)",
      "Students seeking to build a strong academic foundation for Science, Management, or Humanities streams",
    ],
    prerequisites: [
      "Completion of SEE or equivalent examination",
      "Basic understanding of Class 10 subjects (Math, Science, English)",
    ],
    curriculum: {
      basic: [
        "Mathematics: Algebra, Geometry, Trigonometry, and Arithmetic",
        "Science: Physics (Mechanics, Heat, Light), Chemistry (Elements, Reactions), Biology (Human Body, Plants)",
        "English: Grammar, Comprehension, Essay Writing, Vocabulary",
        "General Knowledge: Current Affairs, Nepali History, Geography",
      ],
      advanced: [
        "Mathematics: Advanced Problem-Solving, Coordinate Geometry, Statistics",
        "Science: Practical Applications, Lab-Based Questions, Conceptual Analysis",
        "English: Critical Reading, Argumentative Writing, Interview Skills",
        "Entrance Exam Strategies: Time Management, Question Analysis, Mock Tests",
      ],
    },
    outcomes: [
      "Achieve high scores in +2 entrance exams",
      "Secure admission to top +2 colleges in Nepal",
      "Build a strong academic foundation for higher secondary education",
      "Develop confidence and exam-taking skills",
    ],
    certification: "Certificate of Completion for Bridge Course",
    price: "NPR 7,000",
    schedule: "Mon-Sat, 2 hours/day (Morning or Afternoon batches)",
    discount: 50, // Added 50% discount
    rewards: [
      { item: "Notebook", image: "/notebook.jpg" },
      { item: "Pen", image: "/pen.jpg" },
    ], 
  },
  {
    title: "3-Month Computer Training",
    id: "computer-training",
    details: [
      "Master the Office Package (MS Word, Excel, PowerPoint) to Excel in School Projects",
      "Multimedia & Internet Skills: Learn Photo Editing and Online Productivity Tools",
      "AI for Work: Use ChatGPT, Create AI-Powered Resumes, and Explore Freelancing Basics",
      "Introduction to Web Design: Learn HTML and CSS to Build Simple Websites",
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
    description:
      "Our 3-Month Computer Training program is tailored for beginners and intermediate learners, focusing on essential digital skills for academic and professional success. From mastering Microsoft Office to exploring AI tools, multimedia, and web design with HTML and CSS, this course equips students with practical skills for the modern world.",
    duration: "3 Months (Optional 6-Month Extended Program Available) and  NPR 7,000 (3 Months) / NPR 14,000 (6 Months)",
    targetAudience: [
      "Post-SEE students looking to gain digital skills",
      "Beginners with little to no computer experience",
      "Students preparing for higher education or part-time jobs requiring computer literacy",
    ],
    prerequisites: [
      "Basic understanding of computers (e.g., how to use a keyboard and mouse)",
      "No prior technical knowledge required",
    ],
    curriculum: {
      basic: [
        "Introduction to Computers: Hardware, Software, Operating Systems (Windows)",
        "Microsoft Word: Document Creation, Formatting, Tables, Templates",
        "Microsoft Excel: Spreadsheets, Formulas, Charts, Data Sorting",
        "Microsoft PowerPoint: Presentation Design, Slides, Animations",
        "Internet Basics: Browsing, Email, Online Safety",
        "Web Design Basics: HTML (Structure, Tags, Forms), CSS (Styling, Selectors, Box Model)",
      ],
      advanced: [
        "Multimedia Skills: Photo Editing with Canva, Basic Video Editing",
        "AI Tools: Using ChatGPT for Productivity, AI-Powered Resume Building",
        "Freelancing Basics: Introduction to Upwork, Fiverr, and Online Job Platforms",
        "Advanced Excel: Pivot Tables, VLOOKUP, Macros",
        "Cloud Tools: Google Drive, Docs, Sheets, and Collaboration",
      ],
      other: [
        "Hands-On Projects: Create a Resume, Design a Presentation, Build a Digital Portfolio, Create a Simple Website",
        "Typing Skills: Improve Speed and Accuracy with Typing Software",
        "Cybersecurity Basics: Password Management, Avoiding Scams",
      ],
    },
    outcomes: [
      "Master essential computer skills for academic and professional use",
      "Create professional documents, presentations, and spreadsheets",
      "Build simple websites using HTML and CSS",
      "Gain confidence in using AI tools and multimedia software",
      "Earn a certificate to enhance your resume",
      "Prepare for part-time jobs or freelancing opportunities",
    ],
    certification: "Certificate in Computer Literacy",
    price: "NPR 7,000",
    schedule: "Sun-Fri, 2 hours/day (Morning or Evening batches)",
    discount: 50, // Added 50% discount
    rewards: [
  
      { item: "Notebook", image: "/notebook.jpg" },
      { item: "Pen", image: "/pen.jpg" },
    ], // Rewards for Computer Training
  },
  {
    title: "Coaching for Classes 6-10",
    id: "coaching",
    details: [
      "Interactive Classes with Fun Activities for Better Understanding",
      "Focus on Core Subjects (Math, Science, English, Social Studies, and Nepali)",
      "Regular Assessments with Progress Reports to Track Your Growth",
      "Learn from Experienced Teachers Specializing in Classes 6-10 Curriculum",
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
    description:
      "Our Coaching for Classes 6-10 provides comprehensive academic support for students in Nepal, focusing on core subjects and exam preparation. With interactive teaching methods, small batch sizes, and regular assessments, we help students build a strong foundation for SEE and beyond.",
    duration: "Ongoing (Monthly Enrollment)",
    targetAudience: [
      "Students in Classes 6 to 10",
      "Students preparing for SEE (Class 10)",
      "Students needing extra support in core subjects",
    ],
    prerequisites: [
      "Enrollment in Classes 6 to 10",
      "Basic understanding of the respective class curriculum",
    ],
    curriculum: {
      basic: [
        "Mathematics: Arithmetic, Algebra, Geometry, Number Systems",
        "Science: Physics (Motion, Energy), Chemistry (Elements, Reactions), Biology (Cells, Plants)",
        "English: Grammar, Comprehension, Writing Skills, Vocabulary",
        "Social Studies: Nepali History, Geography, Civics",
        "Nepali: Grammar, Literature, Essay Writing",
      ],
      advanced: [
        "Mathematics: Trigonometry, Statistics, Advanced Algebra",
        "Science: Practical Applications, Lab-Based Questions, Conceptual Analysis",
        "English: Critical Reading, Creative Writing, Public Speaking",
        "Social Studies: Current Affairs, Global Issues, Map Skills",
        "SEE Preparation: Mock Tests, Time Management, Question Analysis",
      ],
    },
    outcomes: [
      "Improve grades in school exams",
      "Score high in SEE (Class 10) exams",
      "Develop strong study habits and academic skills",
      "Gain confidence in core subjects",
      "Prepare for higher secondary education",
    ],
    certification: "",
    price: "NPR 1,000/month",
    schedule: "sun-fri, 1.5 hours/day (After school hours)",
    // No discount for this service
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
    description:
      "Our Mobile Repairing course offers hands-on training to master the art of diagnosing and fixing smartphone issues. From hardware repairs to software troubleshooting, this course prepares students for a lucrative career in mobile repairing, with practical workshops and industry insights.",
    duration: "3 Months",
    targetAudience: [
      "Individuals interested in a career in mobile repairing",
      "Post-SEE students looking for vocational skills",
      "Entrepreneurs wanting to start a mobile repair business",
    ],
    prerequisites: [
      "Basic understanding of smartphones",
      "No prior technical experience required",
    ],
    curriculum: {
      basic: [
        "Introduction to Smartphones: Components, Tools, Safety Precautions",
        "Hardware Basics: Screen Replacement, Battery Replacement, Charging Port Repair",
        "Software Basics: Flashing, Unlocking, Factory Reset",
        "Diagnostics: Identifying Common Issues (e.g., No Power, No Display)",
      ],
      advanced: [
        "Advanced Hardware Repairs: Motherboard Repair, IC Replacement",
        "Software Troubleshooting: Fixing Boot Loops, Software Crashes",
        "Specialized Repairs: Water Damage Recovery, Camera Repair",
        "Business Skills: Sourcing Parts, Customer Service, Pricing Strategies",
      ],
      other: [
        "Practical Workshops: Hands-On Repair Sessions with Real Devices",
        "Industry Insights: Trends in Mobile Technology, Market Demand",
      ],
    },
    outcomes: [
      "Master mobile repairing skills for hardware and software",
      "Start a career in mobile repairing or open your own repair shop",
      "Earn a certificate to validate your skills",
      "Gain confidence in diagnosing and fixing smartphone issues",
    ],
    certification: "Certificate in Mobile Repairing",
    price: "NPR 50,000",
    schedule: "Sun-Fri, 2 hours/day (Morning or Afternoon batches)",
    discount: 50, // Added 50% discount
    rewards: [
      { item: "Tool Kit", image: "/toolkit.jpg" },
      { item: "Screwdriver Set", image: "/screwdriver-set.jpg" },
    ], // Rewards for Mobile Repairing
  },
  {
    title: "Programming Languages",
    id: "programming",
    image: "/coding class.jpg",
    alt: "coding class",
    bgColor: "bg-white",
    textColor: "text-blue-700",
    buttonColor: "bg-blue-500 hover:bg-blue-600",
    checkColor: "text-yellow-500",
    subCourses: [
      {
        title: "JavaScript Programming",
        id: "javascript",
        details: [
          "Learn JavaScript with Step-by-Step Guidance for Beginners",
          "Build Interactive Websites and Applications with Hands-On Projects",
          "Understand Core Concepts Like Variables, Functions, and DOM Manipulation",
          "Prepare for a Career in Web Development with JavaScript Skills",
          "Participate in Coding Challenges to Test Your Knowledge",
          "Get Mentorship from Expert Programmers to Guide Your Journey",
          "Start Your Coding Journey with JavaScript Today!",
        ],
        image: "/javascript class.jpg",
        alt: "javascript class",
        description:
          "Our JavaScript Programming course is designed for beginners and intermediate learners, focusing on building interactive web applications. Learn JavaScript from scratch, covering both basic and advanced concepts, and build projects to showcase your skills.",
        duration: "3 Months",
        targetAudience: [
          "Beginners with no prior coding experience",
          "Post-SEE students interested in web development",
          "Intermediate learners looking to master JavaScript",
        ],
        prerequisites: [
          "Basic computer literacy",
          "No prior programming experience required",
        ],
        curriculum: {
          basic: [
            "Syntax, Variables, Data Types, Operators",
            "Control Structures: Loops, Conditionals, Functions",
            "DOM Manipulation: Selecting Elements, Event Handling",
            "Arrays and Objects: Working with Data Structures",
            "Error Handling: Try-Catch, Debugging Basics",
          ],
          advanced: [
            "ES6+ Features: Arrow Functions, Destructuring, Modules",
            "Asynchronous JavaScript: Promises, Async/Await, Fetch API",
            "Closures and Scope: Understanding Lexical Scope",
            "Working with APIs: Fetching Data, JSON Handling",
            "JavaScript in the Browser: Event Delegation, Performance Optimization",
          ],
          other: [
            "Projects: Build a To-Do List App, Create an Interactive Quiz",
            "Coding Challenges: Solve Problems on Platforms Like LeetCode",
            "Version Control: Introduction to Git and GitHub",
          ],
        },
        outcomes: [
          "Master JavaScript for web development",
          "Build interactive web applications and projects",
          "Understand modern JavaScript features (ES6+)",
          "Prepare for a career in web development",
          "Gain confidence in coding and problem-solving",
        ],
        certification: "Certificate in JavaScript Programming",
        price: "NPR 5,000",
        schedule: "Sun-Fri, 2 hours/day (Evening batches)",
        discount: 50, // Added 50% discount
        rewards: [
          { item: "Notebook", image: "/notebook.jpg" },
          { item: "Pen", image: "/pen.jpg" },
        ], 
      },
      {
        title: "Python Programming",
        id: "python",
        details: [
          "Learn Python with Step-by-Step Guidance for Beginners",
          "Build Projects Like Calculators, Games, and Data Analysis Tools",
          "Understand Core Concepts Like Loops, Functions, and Lists",
          "Prepare for a Career in Software Development or Data Science",
          "Participate in Coding Challenges to Test Your Skills",
          "Get Mentorship from Expert Programmers to Guide Your Journey",
          "Start Your Coding Journey with Python Today!",
        ],
        image: "/python class.jpg",
        alt: "python class",
        description:
          "Our Python Programming course is designed for beginners and intermediate learners, focusing on building practical applications with Python. Learn Python from scratch, covering both basic and advanced concepts, and build projects to showcase your skills.",
        duration: "3 Months",
        targetAudience: [
          "Beginners with no prior coding experience",
          "Post-SEE students interested in software development or data science",
          "Intermediate learners looking to master Python",
        ],
        prerequisites: [
          "Basic computer literacy",
          "No prior programming experience required",
        ],
        curriculum: {
          basic: [
            "Syntax, Variables, Data Types, Operators",
            "Control Structures: Loops, Conditionals, Functions",
            "Data Structures: Lists, Tuples, Dictionaries, Sets",
            "File Handling: Reading and Writing Files",
            "Error Handling: Try-Except, Debugging Basics",
          ],
          advanced: [
            "Object-Oriented Programming: Classes, Objects, Inheritance",
            "Modules and Libraries: Using NumPy, Pandas, Matplotlib",
            "Working with APIs: Fetching Data, JSON Handling",
            "Data Analysis Basics: Data Cleaning, Visualization",
            "Automation: Scripting with Python (e.g., File Automation)",
          ],
          other: [
            "Projects: Build a Calculator, Create a Simple Game, Analyze a Dataset",
            "Coding Challenges: Solve Problems on Platforms Like HackerRank",
            "Version Control: Introduction to Git and GitHub",
          ],
        },
        outcomes: [
          "Master Python for software development and data analysis",
          "Build practical projects to showcase your skills",
          "Understand Python libraries and frameworks",
          "Prepare for a career in software development or data science",
          "Gain confidence in coding and problem-solving",
        ],
        certification: "Certificate in Python Programming",
        price: "NPR 5,000",
        schedule: "Sun-Fri, 2 hours/day (Evening batches)",
        discount: 50, // Added 50% discount
        rewards: [
          { item: "Notebook", image: "/notebook.jpg" },
          { item: "Pen", image: "/pen.jpg" },
        ], 
      },
      {
        title: "C Programming",
        id: "c",
        details: [
          "Learn C Programming with Step-by-Step Guidance for Beginners",
          "Build Projects Like Simple Applications and Data Structures",
          "Understand Core Concepts Like Pointers, Arrays, and Functions",
          "Prepare for a Career in System Programming or Software Development",
          "Participate in Coding Challenges to Test Your Skills",
          "Get Mentorship from Expert Programmers to Guide Your Journey",
          "Start Your Coding Journey with C Today!",
        ],
        image: "/c class.jpg",
        alt: "c class",
        description:
          "Our C Programming course is designed for beginners and intermediate learners, focusing on building a strong foundation in programming with C. Learn C from scratch, covering both basic and advanced concepts, and build projects to showcase your skills.",
        duration: "3 Months",
        targetAudience: [
          "Beginners with no prior coding experience",
          "Post-SEE students interested in system programming",
          "Intermediate learners looking to master C",
        ],
        prerequisites: [
          "Basic computer literacy",
          "No prior programming experience required",
        ],
        curriculum: {
          basic: [
            "Syntax, Variables, Data Types, Operators",
            "Control Structures: Loops, Conditionals, Functions",
            "Arrays and Strings: Working with Arrays, String Manipulation",
            "Pointers: Pointer Basics, Pointer Arithmetic",
            "Memory Management: Dynamic Memory Allocation (malloc, free)",
          ],
          advanced: [
            "Data Structures: Linked Lists, Stacks, Queues",
            "File Handling: Reading and Writing Files",
            "Advanced Pointers: Function Pointers, Pointer to Pointer",
            "Bit Manipulation: Working with Bits, Bitwise Operators",
            "System Programming Basics: Interfacing with OS",
          ],
          other: [
            "Projects: Build a Simple Calculator, Implement a Linked List",
            "Coding Challenges: Solve Problems on Platforms Like Codeforces",
            "Version Control: Introduction to Git and GitHub",
          ],
        },
        outcomes: [
          "Master C programming for system-level development",
          "Build foundational projects to showcase your skills",
          "Understand data structures and memory management",
          "Prepare for a career in system programming or software development",
          "Gain confidence in coding and problem-solving",
        ],
        certification: "Certificate in C Programming",
        price: "NPR 5,000",
        schedule: "Sun-Fri, 2 hours/day (Evening batches)",
        discount: 50, // Added 50% discount
        rewards: [
          { item: "Notebook", image: "/notebook.jpg" },
          { item: "Pen", image: "/pen.jpg" },
        ], 
      },
      {
        title: "C++ Programming",
        id: "cpp",
        details: [
          "Learn C++ Programming with Step-by-Step Guidance for Beginners",
          "Build Projects Like Games, Applications, and Data Structures",
          "Understand Core Concepts Like Classes, Objects, and Templates",
          "Prepare for a Career in Software Development or Competitive Programming",
          "Participate in Coding Challenges to Test Your Skills",
          "Get Mentorship from Expert Programmers to Guide Your Journey",
          "Start Your Coding Journey with C++ Today!",
        ],
        image: "/cpp class.jpg",
        alt: "C++ class",
        description:
          "Our C++ Programming course is designed for beginners and intermediate learners, focusing on building a strong foundation in programming with C++. Learn C++ from scratch, covering both basic and advanced concepts, and build projects to showcase your skills.",
        duration: "3 Months",
        targetAudience: [
          "Beginners with no prior coding experience",
          "Post-SEE students interested in software development or competitive programming",
          "Intermediate learners looking to master C++",
        ],
        prerequisites: [
          "Basic computer literacy",
          "No prior programming experience required (knowledge of C is a plus)",
        ],
        curriculum: {
          basic: [
            "Syntax, Variables, Data Types, Operators",
            "Control Structures: Loops, Conditionals, Functions",
            "Arrays and Strings: Working with Arrays, String Manipulation",
            "Pointers: Pointer Basics, Pointer Arithmetic",
            "Memory Management: Dynamic Memory Allocation (new, delete)",
          ],
          advanced: [
            "Object-Oriented Programming: Classes, Objects, Inheritance, Polymorphism",
            "STL (Standard Template Library): Vectors, Maps, Sets",
            "Templates: Function Templates, Class Templates",
            "File Handling: Reading and Writing Files",
            "Advanced Concepts: Exception Handling, Lambda Expressions",
          ],
          other: [
            "Projects: Build a Simple Game, Implement a Data Structure (e.g., Binary Tree)",
            "Coding Challenges: Solve Problems on Platforms Like Codeforces",
            "Version Control: Introduction to Git and GitHub",
          ],
        },
        outcomes: [
          "Master C++ programming for software development",
          "Build projects to showcase your skills",
          "Understand object-oriented programming and STL",
          "Prepare for a career in software development or competitive programming",
          "Gain confidence in coding and problem-solving",
        ],
        certification: "Certificate in C++ Programming",
        price: "NPR 5,000",
        schedule: "Sun-Fri, 2 hours/day (Evening batches)",
        discount: 50, // Added 50% discount
        rewards: [
          { item: "Notebook", image: "/notebook.jpg" },
          { item: "Pen", image: "/pen.jpg" },
        ], 
      },
      {
        title: "Java Programming",
        id: "java",
        details: [
          "Learn Java Programming with Step-by-Step Guidance for Beginners",
          "Build Projects Like Applications, Games, and Backend Systems",
          "Understand Core Concepts Like Classes, Objects, and Collections",
          "Prepare for a Career in Software Development or Android App Development",
          "Participate in Coding Challenges to Test Your Skills",
          "Get Mentorship from Expert Programmers to Guide Your Journey",
          "Start Your Coding Journey with Java Today!",
        ],
        image: "/java class.jpg",
        alt: "Java class",
        description:
          "Our Java Programming course is designed for beginners and intermediate learners, focusing on building robust applications with Java. Learn Java from scratch, covering both basic and advanced concepts, and build projects to showcase your skills.",
        duration: "3 Months",
        targetAudience: [
          "Beginners with no prior coding experience",
          "Post-SEE students interested in software development or Android app development",
          "Intermediate learners looking to master Java",
        ],
        prerequisites: [
          "Basic computer literacy",
          "No prior programming experience required",
        ],
        curriculum: {
          basic: [
            "Syntax, Variables, Data Types, Operators",
            "Control Structures: Loops, Conditionals, Methods",
            "Arrays and Strings: Working with Arrays, String Manipulation",
            "Object-Oriented Programming: Classes, Objects, Constructors",
            "Exception Handling: Try-Catch, Throwing Exceptions",
          ],
          advanced: [
            "Collections Framework: ArrayList, HashMap, HashSet",
            "File Handling: Reading and Writing Files with Java I/O",
            "Multithreading: Threads, Synchronization",
            "Java OOP: Inheritance, Polymorphism, Abstraction, Encapsulation",
            "Introduction to JavaFX: Building Simple GUI Applications",
          ],
          other: [
            "Projects: Build a Simple Banking System, Create a Quiz Application",
            "Coding Challenges: Solve Problems on Platforms Like HackerRank",
            "Version Control: Introduction to Git and GitHub",
          ],
        },
        outcomes: [
          "Master Java programming for software development",
          "Build robust applications to showcase your skills",
          "Understand object-oriented programming and Java libraries",
          "Prepare for a career in software development or Android app development",
          "Gain confidence in coding and problem-solving",
        ],
        certification: "Certificate in Java Programming",
        price: "NPR 5,000",
        schedule: "Sun-Fri, 2 hours/day (Evening batches)",
        discount: 50, // Added 50% discount
        rewards: [
          { item: "Notebook", image: "/notebook.jpg" },
          { item: "Pen", image: "/pen.jpg" },
        ], 
      },
    ],
  },
  {
    title: "Full Stack Web Development",
    id: "web-development",
    details: [
      "Master Frontend with HTML, CSS, JavaScript, React, and Next.js",
      "Learn Backend Development with Python, Django, and PostgreSQL",
      "Work with Git & GitHub to Collaborate on Projects Like a Pro",
      "Build Real-World, Scalable Projects Like E-Commerce Sites and Blogs",
      "Create and Manage APIs & Databases for Dynamic Web Applications",
      "Deploy Your Projects Online with Vercel or Netlify",
      "Get Job-Ready with Skills in High Demand Across Nepal and Globally",
    ],
    image: "/webdevelopment.jpg",
    alt: "web development",
    bgColor: "bg-blue-50",
    textColor: "text-blue-700",
    buttonColor: "bg-blue-500 hover:bg-blue-600",
    checkColor: "text-yellow-500",
    description:
      "Our Full Stack Web Development course takes you from beginner to job-ready developer, covering both frontend and backend technologies. Learn to build dynamic, scalable web applications using HTML, CSS, JavaScript, React, Next.js, Python, Django, and PostgreSQL, and deploy your projects online to build a professional portfolio.",
    duration: "6 Months",
    targetAudience: [
      "Beginners interested in a career in web development",
      "Intermediate developers looking to become full stack developers",
      "Professionals seeking to upskill for better job opportunities",
    ],
    prerequisites: [
      "Basic understanding of HTML, CSS, and JavaScript",
      "Familiarity with programming concepts",
    ],
    curriculum: {
      basic: [
        "HTML: Semantic HTML, Forms, Accessibility",
        "CSS: Flexbox, Grid, Responsive Design, Tailwind CSS",
        "JavaScript: ES6+, DOM Manipulation, Events, Fetch API",
        "Version Control: Git, GitHub, Branching, Pull Requests",
        "Frontend Tools: VS Code, Browser DevTools",
      ],
      advanced: [
        "Frontend Frameworks: React (Components, Hooks, State Management), Next.js (Routing, SSG, SSR)",
        "Backend Development: Python (Syntax, Functions), Django (Models, Views, Templates)",
        "Databases: PostgreSQL (Tables, Queries, Relationships), Django ORM",
        "APIs: REST API with Django REST Framework, Fetching Data",
        "Authentication: JWT, Django Authentication, User Login Systems",
        "Deployment: Vercel, Netlify, Railway (for Django), Domain Management",
      ],
      other: [
        "Projects: Build an E-Commerce Site, Create a Blog, Develop a Task Manager",
        "APIs: Integrate Third-Party APIs (e.g., Payment Gateways, Google Maps)",
        "Best Practices: Code Reviews, Performance Optimization, SEO",
      ],
    },
    outcomes: [
      "Build and deploy full stack web applications",
      "Create a professional portfolio with real-world projects",
      "Master frontend (React, Next.js) and backend (Django, PostgreSQL) development",
      "Prepare for job roles like Full Stack Developer, Web Developer",
      "Gain confidence in working with modern web technologies",
    ],
    certification: "Certificate in Full Stack Web Development",
    price: "NPR 40,000",
    schedule: "Sun-Fri, 3 hours/day (Morning or Evening batches)",
    discount: 50, // Added 50% discount
    rewards: [
      { item: "Keyboard", image: "/keyboard.jpg" },
      { item: "Mouse", image: "/mouse.jpg" },
      { item: "Headphones", image: "/headphones.jpg" },
    ], // Rewards for Full Stack Web Development
  },
  {
    "title": "English Language Mastery",
    "id": "english-class",
    "details": [
      "Improve speaking, listening, reading, and writing skills in English",
      "Learn grammar, vocabulary, and sentence structure",
      "Enhance communication skills for professional and personal growth",
      "Build confidence in speaking English in various settings",
      "Prepare for international English proficiency exams (IELTS, TOEFL, etc.)",
      "Learn through interactive lessons, quizzes, and real-life scenarios",
      "Develop English language skills to excel in global job markets"
    ],
    "image": "/englishclass.jpg",
    "alt": "english language class",
    "bgColor": "bg-green-50",
    "textColor": "text-green-700",
    "buttonColor": "bg-green-500 hover:bg-green-600",
    "checkColor": "text-yellow-500",
    "description": "Our English Language Mastery course helps students of all levels enhance their speaking, writing, reading, and listening skills. With a focus on grammar, vocabulary, and communication, you'll gain confidence and fluency to use English effectively in any context, from professional meetings to casual conversations.",
    "duration": "3 Months",
    "targetAudience": [
      "Beginners who want to start learning English",
      "Intermediate learners aiming to improve their fluency",
      "Professionals seeking to enhance their English for career advancement",
      "Students preparing for English proficiency exams like IELTS, TOEFL"
    ],
    "prerequisites": [
      "None (Open to beginners and intermediate learners)"
    ],
    "curriculum": {
      "basic": [
        "Grammar: Sentence Structure, Tenses, Parts of Speech, Prepositions",
        "Vocabulary: Common Words, Phrasal Verbs, Idioms, and Collocations",
        "Pronunciation: Vowel Sounds, Consonant Sounds, Stress, and Intonation",
        "Reading Comprehension: Skimming, Scanning, Understanding Context",
        "Writing: Paragraphs, Essays, Business Writing, Emails",
        "Listening: Understanding Accents, Audio Clips, Note-taking"
      ],
      "advanced": [
        "Advanced Grammar: Conditionals, Modals, Reported Speech, Passive Voice",
        "Fluency Practice: Conversations, Debates, Presentations",
        "Listening: Advanced Listening Skills, TED Talks, News, Movies",
        "Writing: Formal Writing, Creative Writing, Summaries, Reports",
        "Speaking: Public Speaking, Interviews, Negotiations, Business English",
        "Exam Preparation: IELTS, TOEFL, and other proficiency tests"
      ],
      "other": [
        "Culture & Communication: English in different countries, cross-cultural communication",
        "Study Materials: Access to exclusive learning resources, quizzes, and exercises",
        "Practical Skills: Job interviews, networking, and professional communication"
      ]
    },
    "outcomes": [
      "Speak English fluently and confidently in any situation",
      "Write professional emails, reports, and essays with ease",
      "Pass English proficiency exams like IELTS or TOEFL with high scores",
      "Understand English media (movies, TV shows, podcasts, etc.)",
      "Build a strong vocabulary for both formal and informal settings",
      "Improve listening skills for better understanding of native speakers"
    ],
    certification: "Certificate in English Language Mastery",
    price: "NPR 5,000",
    schedule: "Mon-Sat, 2 hours/day (Morning or Evening batches)",
    discount: 50, // Added 30% discount
    rewards: [
      { item: "Notebook", image: "/notebook.jpg" },
      { item: "Pen", image: "/pen.jpg" },
    ], 
  }
  
];

export { detailedServices };