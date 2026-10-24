export const PROFILE = {
  name: 'Kunal Rayate',
  initials: 'KR',
  title: 'Java Full Stack Developer',
  tagline: 'I build secure, scalable web applications with Java, Spring Boot and Angular.',
  email: 'kunalrayate7713@gmail.com',
  phone: '+91 96997 65065',
  location: 'Antapur, Maharashtra, India',
  github: 'https://github.com/kunalrayate',
  linkedin: 'https://linkedin.com/in/kunal-rayate',
  hackerrank : 'https://hackerrank.com/profile/kunalrayate',
  photo: '/myphoto.jpeg',
  resume: 'resume.pdf',
  about: [
    'I am a Java Full Stack Developer with 6 months of hands-on internship experience designing RESTful APIs and web applications using Java, Spring Boot, Spring MVC, Spring Security (JWT), Hibernate/JPA, MySQL and Angular.',
    'I have built three end-to-end projects: a multi-vendor e-commerce platform, an AI-powered coding platform that uses Spring AI and LLM integration, and a student attendance system.',
    'I have a strong base in Object-Oriented Programming, Data Structures & Algorithms and relational database design. I am pursuing my MCA and looking for a Java Developer or Full Stack Developer role where I can build scalable, secure and high-performance applications.'
  ],
  stats: [
    { v: '6 months', l: 'Internship experience' },
    { v: '3', l: 'End-to-end projects' },
    { v: 'MCA', l: 'Pursuing, 2025 – 2027' }
  ]
};

export const SKILLS: { group: string; items: string[] }[] = [
  { group: 'Languages', items: ['Java', 'SQL', 'JavaScript'] },
  { group: 'Backend & Frameworks', items: ['Spring Boot', 'Spring MVC', 'Spring Security', 'JWT', 'Hibernate', 'JPA', 'REST APIs', 'JDBC'] },
  { group: 'Frontend', items: ['Angular', 'HTML', 'CSS', 'JavaScript', 'Bootstrap'] },
  { group: 'Databases', items: ['MySQL', 'PostgreSQL'] },
  { group: 'AI & Emerging Tech', items: ['Spring AI', 'Large Language Models (LLMs)', 'AI Integration'] },
  { group: 'CS Fundamentals', items: ['OOP', 'Data Structures & Algorithms', 'Dynamic Programming'] },
  { group: 'Tools', items: ['Git', 'GitHub', 'Maven', 'Postman', 'IntelliJ IDEA', 'Eclipse', 'VS Code', 'Jira', 'Vercel' , 'Render'] },
  { group: 'Soft Skills', items: ['Problem Solving', 'Leadership', 'Project Management', 'Teamwork'] }
];

export const EXPERIENCE = [
  {
    role: 'Trainee Developer Intern', company: 'Kiran Academy, Pune', when: 'Nov 2024 – May 2025 · 6 months',
    points: [
      'Completed a 6-month internship focused on web application development using Java and Spring Boot.',
      'Contributed to DigitalRollCall, a Java-based student attendance management system.',
      'Developed REST APIs for student, subject, user and attendance management.',
      'Integrated MySQL for reliable data persistence using Hibernate/JPA.'
    ],
    tools: ['Java', 'Spring Boot', 'Hibernate', 'JPA', 'MySQL', 'REST APIs', 'Maven']
  }
];

export interface Project {
  name: string; kind: string; summary: string; highlights: string[];
  tech: string[]; code: string; demo?: string;
}

export const PROJECTS: Project[] = [
  {
    name: 'Bazaarly', kind: 'Full-stack e-commerce platform',
    summary: 'A multi-vendor marketplace for customers, sellers and administrators, secured with Spring Security and JWT authentication.',
    highlights: [
      'Product search, filtering, sorting and pagination, plus cart, wishlist, coupons, order placement, payment workflow and order tracking.',
      'Seller dashboards for product, inventory and order operations, and admin tools for seller approvals and platform oversight.',
      'Product reviews, ratings and personalised recommendations.'
    ],
    tech: ['Java', 'Spring Boot', 'Hibernate/JPA', 'Spring Security', 'JWT', 'MySQL', 'Angular', 'HTML', 'CSS', 'Maven'],
    code: 'https://github.com/kunalrayate/Bazaarly'
  },
  {
    name: 'CodeMentor AI', kind: 'AI-powered coding learning platform',
    summary: 'A learning platform that helps developers understand technical concepts and practise coding with intelligent assistance.',
    highlights: [
      'Integrated AI into a Java application using Spring AI for programming explanations, AI-generated quizzes and knowledge assessment.',
      'Intelligent question answering based on supported learning materials.',
      'Backend REST APIs powering the application.'
    ],
    tech: ['Java', 'Spring Boot', 'Spring AI', 'REST APIs', 'Hibernate/JPA', 'MySQL', 'Angular', 'HTML', 'CSS', 'Maven'],
    code: 'https://github.com/kunalrayate/codementor-ai'
  },
  {
    name: 'DigitalRollCall', kind: 'Student attendance system',
    summary: 'A Java-based attendance management system with REST APIs for students, subjects, users and attendance records.',
    highlights: [
      'CRUD operations for students, subject-wise attendance tracking, and user registration and login.',
      'Separate API queries for administrators and faculty, with attendance recorded by student, subject, date, time and faculty.',
      'History retrieval with date and subject filtering, stored in MySQL.'
    ],
    tech: ['Java 17', 'Spring Boot', 'Spring Web', 'Hibernate', 'JPA', 'MySQL', 'Maven', 'REST APIs'],
    code: 'https://github.com/kunalrayate/DigitalRollCall'
  }
];

export const EDUCATION = [
  { degree: 'Master of Computer Application (MCA)', place: 'Vishwakarma University, Pune', when: '2025 – 2027', note: 'Pursuing' },
  { degree: 'Bachelor of Computer Science', place: 'Savitribai Phule Pune University, Pune', when: '2021 – 2024', note: 'Percentage: 71.1%' },
  { degree: 'Higher Secondary Education (HSC)', place: 'Maharashtra Higher Secondary School, Taharabad', when: '2020 – 2021', note: 'Percentage: 65.17%' },
  { degree: 'Secondary Education (SSC)', place: 'Maharashtra Secondary School, Antapur', when: '2019', note: 'Percentage: 64%' }
];

export const CERTIFICATIONS = [
  { name: 'Full Stack Developer', issuer: 'The Kiran Academy, Pune', when: 'Jul 2024 – Dec 2024' },
  { name: 'Internship Certification', issuer: 'Kiran Academy, Pune', when: 'Nov 2024 – May 2025' },
  { name: 'HackerRank Certification', issuer: 'HackerRank', when: '2026' }

];
