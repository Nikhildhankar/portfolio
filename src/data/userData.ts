import {
  Github,
  Linkedin,
  Mail,
  Phone,
  Link2Icon,
} from "lucide-react";

export const personalInfo = {
  name: "Nikhil Dhankar",
  alias: "Nikhil",
  shortAlias: "ND",
  location: "Bhilai, Chhattisgarh, India",
  role: "Software Developer | Backend & Full-Stack",
  roles: [
    "Software Developer",
    "Backend Specialist",
    "Full-Stack Developer",
    "Python Engineer",
  ],
  college: "Shri Shankaracharya Technical Campus",
  collegeUrl: "https://sstc.ac.in/",
  avatarUrl: "/assets/nikhil.jpg",
  status: "Open for Remote Roles",
  aboutText: "Building scalable backend systems and full-stack applications with Python, FastAPI, and React.",
  aboutText1: "I’m Nikhil Dhankar, based in Bhilai, Chhattisgarh, India. I graduated with a B.Tech in Computer Science (CGPA: 8.33) from ",
  aboutText2: ". Focused on backend development, API design, and full-stack applications. I work primarily in Python (FastAPI, Flask), React, and PostgreSQL/MySQL, with hands-on experience in Docker deployment and automation tooling (Selenium/Playwright). I enjoy solving real problems end-to-end — from database schema to API to frontend.",
};

export const fetchData = [
  { label: "User", value: "nikhil@workstation" },
  { label: "OS", value: "Ubuntu 24.04 LTS x86_64" },
  { label: "Degree", value: "B.Tech CSE (2021-2025) @ SSTC" },
  { label: "CGPA", value: "8.33 / 10.0" },
  { label: "Backend", value: "Python 3.12, FastAPI, Flask" },
  { label: "Frontend", value: "React, TypeScript, TailwindCSS" },
  { label: "Database", value: "PostgreSQL, MySQL" },
  { label: "DevOps", value: "Docker, Git, Postman, CI/CD" },
  { label: "Automation", value: "Selenium, Playwright" },
  { label: "Status", value: "Open for Backend & Full-Stack Roles" },
];

export const skills = [
  {
    category: "Backend & APIs",
    items: [
      { name: "Python", icon: "https://cdn.simpleicons.org/python" },
      { name: "FastAPI", icon: "https://cdn.simpleicons.org/fastapi" },
      { name: "Flask", icon: "https://cdn.simpleicons.org/flask", invertDark: true },
      { name: "Postman", icon: "https://cdn.simpleicons.org/postman" },
      { name: "Swagger / OpenAPI", icon: "https://cdn.simpleicons.org/swagger" },
    ],
  },
  {
    category: "Frontend",
    items: [
      { name: "React", icon: "https://cdn.simpleicons.org/react" },
      { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript" },
      { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript" },
      { name: "HTML5", icon: "https://cdn.simpleicons.org/html5" },
      { name: "CSS3", icon: "https://cdn.simpleicons.org/css3" },
      { name: "TailwindCSS", icon: "https://cdn.simpleicons.org/tailwindcss" },
    ],
  },
  {
    category: "Databases",
    items: [
      { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql" },
      { name: "MySQL", icon: "https://cdn.simpleicons.org/mysql" },
    ],
  },
  {
    category: "DevOps & Tools",
    items: [
      { name: "Docker", icon: "https://cdn.simpleicons.org/docker" },
      { name: "Git", icon: "https://cdn.simpleicons.org/git" },
      { name: "GitHub", icon: "https://cdn.simpleicons.org/github", invertDark: true },
      { name: "GitHub Actions", icon: "https://cdn.simpleicons.org/githubactions" },
    ],
  },
  {
    category: "Automation & AI Tools",
    items: [
      { name: "Selenium", icon: "https://cdn.simpleicons.org/selenium" },
      { name: "Playwright", icon: "https://cdn.simpleicons.org/playwright" },
      { name: "LangChain", icon: "https://cdn.simpleicons.org/langchain" },
      { name: "OpenAI", icon: "https://cdn.simpleicons.org/openai", invertDark: true },
    ],
  },
];

export const facts = [
  "B.Tech CSE Graduate (2025)",
  "Backend & Full-Stack Developer",
  "Python & FastAPI Specialist",
  "Docker & PostgreSQL Practitioner",
  "Open for Remote Roles",
];

export const timeline = [
  {
    year: "2025",
    detail:
      "Graduated with B.Tech in Computer Science from Shri Shankaracharya Technical Campus (CGPA: 8.33).",
    more:
      "Built flagship projects including Job Tracker Pro (FastAPI + PostgreSQL + React + Docker) and AI Model Evaluation Simulator.",
  },
  {
    year: "2024",
    detail:
      "Mastered backend API development, microservices architecture, and Docker deployment.",
    more:
      "Engineered JobBoard API, SpendWise expense tracker, and implemented automation scripts using Playwright and Selenium.",
  },
  {
    year: "2023",
    detail:
      "Advanced into full-stack development with Python, Flask, MySQL, and React.",
    more:
      "Developed Student Management System, Parking Management System with OpenCV, and Motion Detection apps.",
  },
  {
    year: "2021",
    detail:
      "Commenced B.Tech Computer Science Engineering degree at Shri Shankaracharya Technical Campus.",
    more:
      "Built strong fundamentals in Data Structures & Algorithms, Object-Oriented Programming, and database management.",
  },
];

export const contactItems = [
  {
    icon: Mail,
    label: "Email",
    value: "nikhildhankar85@gmail.com",
    href: "mailto:nikhildhankar85@gmail.com",
    color: "text-red-500",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 9340742933",
    href: "tel:9340742933",
    color: "text-emerald-500",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/nikhildhankar",
    href: "https://github.com/nikhildhankar",
    color: "text-foreground",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/nikhildhankar-827728233",
    href: "https://www.linkedin.com/in/nikhildhankar-827728233",
    color: "text-blue-600",
  },
];

export const projectData = [
  {
    name: "Job Tracker Pro (Flagship)",
    description:
      "A full-stack job application tracking system — API-driven backend with a PostgreSQL data layer, React frontend, and Dockerized deployment for consistent environments.",
    tech: ["FastAPI", "PostgreSQL", "React", "Docker"],
    live: "https://github.com/nikhildhankar",
    github: "https://github.com/nikhildhankar",
    category: "Full-Stack",
  },
  {
    name: "SpendWise",
    description:
      "Personal finance & expense management system tracking monthly budgets, recurring transactions, and interactive spending analytics.",
    tech: ["Python", "Flask", "PostgreSQL", "React"],
    live: "https://github.com/nikhildhankar",
    github: "https://github.com/nikhildhankar",
    category: "Web",
  },
  {
    name: "JobBoard API",
    description:
      "High-performance API-first job listings backend service featuring JWT authentication, role-based access control, search filtering, and OpenAPI documentation.",
    tech: ["FastAPI", "PostgreSQL", "Docker", "REST API", "Swagger"],
    live: "https://github.com/nikhildhankar",
    github: "https://github.com/nikhildhankar",
    category: "API",
  },
  {
    name: "AI Model Evaluation Simulator",
    description:
      "Benchmarking suite analyzing LLM response accuracy, latency metrics, and token efficiency across customized prompts and datasets.",
    tech: ["Python", "LangChain", "OpenAI", "React", "PostgreSQL"],
    live: "https://github.com/nikhildhankar",
    github: "https://github.com/nikhildhankar",
    category: "AI",
  },
  {
    name: "Student Management System",
    description:
      "Comprehensive CRUD application for managing academic student records, course enrollments, attendance metrics, and grade reporting.",
    tech: ["Python", "Flask", "MySQL", "Bootstrap"],
    live: "https://github.com/nikhildhankar",
    github: "https://github.com/nikhildhankar",
    category: "Web",
  },
  {
    name: "Parking Management System",
    description:
      "Automated smart parking space monitoring system utilizing computer vision for space detection and real-time occupancy management.",
    tech: ["Python", "OpenCV", "MySQL", "Flask"],
    live: "https://github.com/nikhildhankar",
    github: "https://github.com/nikhildhankar",
    category: "Web",
  },
  {
    name: "Motion Detection App",
    description:
      "Real-time video motion tracking security application that triggers automated alerts and records movement events using computer vision.",
    tech: ["Python", "OpenCV", "PyTorch"],
    live: "https://github.com/nikhildhankar",
    github: "https://github.com/nikhildhankar",
    category: "AI",
  },
];

export const resume = {
  "backend-developer": "#",
};
