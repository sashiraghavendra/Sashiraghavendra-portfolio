import { Project, SkillCategory, TimelineItem, CertificationItem } from '../types';

export const PERSONAL_INFO = {
  fullName: "Desha Sashi Raghavendra Kumar",
  shortName: "Sashi Raghavendra",
  firstName: "Desha Sashi",
  lastName: "Raghavendra",
  initials: "SR.",
  role: "Software Developer & B.Tech CSE '26",
  email: "sashiraghavendra789@gmail.com",
  phone: "+91 6302155895",
  location: "Nandyal, Andhra Pradesh, India",
  languages: ["English", "Telugu", "Hindi"],
  birthday: "Computer Science & Engineering (2022–2026)",
  github: "https://github.com/sashiraghavendra",
  githubUsername: "sashiraghavendra",
  linkedin: "https://linkedin.com/in/sashiraghavendra",
  linkedinUsername: "sashiraghavendra",
  resumePath: "/assets/aistudio/Desha_Sashi_Raghavendra_Resume_39a83de6.pdf",
  photoPath: "/assets/aistudio/sashi_img_f7c76b18.jpg",
  summary: "Computer Science and Engineering graduate (2026) with hands-on experience developing applications using Java, MySQL, HTML, and CSS. Built two end-to-end systems, a cryptocurrency portfolio manager and a university ERP portal, using relational database design. Eager to apply strong engineering fundamentals in a software development role.",
  typingWords: [
    "Java Applications.",
    "SQL Database Systems.",
    "Web Applications.",
    "Software Solutions."
  ],
  stats: [
    { label: "B.Tech CGPA", value: "8.31/10" },
    { label: "Core Projects", value: "2+" },
    { label: "Certifications", value: "3" },
    { label: "Languages", value: "4" }
  ]
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Languages",
    iconName: "Code",
    skills: [
      {
        name: "Java",
        levelName: "Advanced",
        percentage: 90,
        color: "#f89820"
      },
      {
        name: "SQL",
        levelName: "Advanced",
        percentage: 88,
        color: "#00758f"
      },
      {
        name: "HTML",
        levelName: "Advanced",
        percentage: 92,
        color: "#e34f26"
      },
      {
        name: "CSS",
        levelName: "Advanced",
        percentage: 86,
        color: "#264de4"
      }
    ]
  },
  {
    title: "Tools",
    iconName: "Wrench",
    skills: [
      {
        name: "Git & GitHub",
        levelName: "Advanced",
        percentage: 88,
        color: "#f05032"
      },
      {
        name: "Eclipse",
        levelName: "Advanced",
        percentage: 86,
        color: "#2c2255"
      },
      {
        name: "VS Code",
        levelName: "Advanced",
        percentage: 92,
        color: "#007acc"
      }
    ]
  }
];

export const EDUCATION_DATA: TimelineItem[] = [
  {
    id: "btech",
    period: "2022 – 2026",
    title: "B.Tech in Computer Science",
    organization: "Kalasalingam Academy of Research and Education",
    location: "Tamilnadu, India",
    badge: "CGPA: 8.31 / 10",
    badgeType: "cgpa",
    description: "",
    points: [
    ],
  },
  {
    id: "intermediate",
    period: "2020 – 2022",
    title: "Intermediate (MPC)",
    organization: "SDRS Akanksha Junior College",
    location: "Andhra Pradesh, India",
    badge: "Percentage: 83.6%",
    badgeType: "cgpa",
    description: "Completed Intermediate education specializing in Mathematics, Physics, and Chemistry (MPC) with academic distinction.",
    points: [
    ]
  },
  {
    id: "secondary",
    period: "2019 – 2020",
    title: "Secondary Schooling",
    organization: "Sri Shanthiniketan E.M School",
    location: "Andhra Pradesh, India",
    badge: "Percentage: 98.3%",
    badgeType: "cgpa",
    description: "Completed secondary school education with exemplary academic honors.",
    points: [
    ]
  }
];

export const CERTIFICATIONS_DATA: CertificationItem[] = [
  {
    id: "cert-java",
    title: "Introduction to Java",
    issuer: "Coursera",
    partner: "LearnQuest",
    issueDate: "Jun 2025",
    credentialUrl: "https://www.coursera.org/account/accomplishments/verify/",
    skills: ["Java", "Object-Oriented Programming", "Classes & Methods", "Algorithm Logic"],
    description: "Comprehensive certification covering core Java syntax, OOP design principles, inheritance, polymorphism, and structured exception handling."
  },
  {
    id: "cert-sql",
    title: "SQL Fundamentals",
    issuer: "IBM SkillsBuild",
    partner: "IBM",
    issueDate: "Jul 2025",
    credentialUrl: "https://skillsbuild.org/",
    skills: ["SQL", "Relational Database Design", "Queries & Joins", "Data Modeling"],
    description: "Industry credential validating expertise in writing complex SQL queries, relational database schema creation, table constraints, indexing, and multi-table joins."
  },
  {
    id: "cert-git",
    title: "Introduction to Git and GitHub",
    issuer: "Coursera",
    partner: "Google",
    issueDate: "Jul 2025",
    credentialUrl: "https://www.coursera.org/account/accomplishments/verify/",
    skills: ["Git", "GitHub Flow", "Version Control", "Branching & Merging", "Collaboration"],
    description: "Certified by Google in distributed version control workflows, repository management, pull requests, merge conflict resolution, and collaborative open-source practices."
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: "crypto-tracker",
    title: "Cryptocurrency Portfolio Tracker with Risk & Scam Detection",
    tagline: "Track crypto investments with live price feeds, scam detection heuristics, and CSV transaction exports.",
    featuredBadge: "Infosys Springboard Internship 6.0",
    category: "Full Stack",
    techStack: ["Java", "MySQL", "HTML", "CSS", "REST APIs"],
    metrics: [
      { icon: "Users", label: "Infosys Springboard 6.0" },
      { icon: "ShieldAlert", label: "Scam & Risk Detection" },
      { icon: "TrendingUp", label: "Live Price Updates" },
      { icon: "FileSpreadsheet", label: "CSV Export Option" }
    ],
    description: "Built a centralized system where users can track all their cryptocurrency investments in one place with live price updates. Developed secure login, portfolio management, and transaction history features. Connected to external services to pull live crypto prices, engineered scam detection to check risky cryptocurrencies and warn users before investing, and built a CSV export module.",
    features: [
      "Built a system where users can track all their cryptocurrency investments in one place and see live price updates.",
      "Developed login, portfolio management, and transaction history features to allow users to manage their investments.",
      "Connected to outside services to pull live crypto prices and show real-time market data to users.",
      "Added a scam detection feature that checks risky cryptocurrencies and sends alerts to users before they invest.",
      "Built a CSV download option so users can export their transaction history for their own records."
    ],
    architecture: [
      "Java backend managing application logic, portfolio operations, and external API calls.",
      "MySQL database storing user credentials, token holdings, and transaction logs in an organized structure.",
      "Heuristic rule engine analyzing contract risks and alerting users to potential honeypots.",
      "Responsive web interface built with clean HTML and CSS for desktop and mobile devices."
    ],
    githubUrl: "https://github.com/sashiraghavendra",
    demoAvailable: true,
    accentColor: "#10b981"
  },
  {
    id: "erp-portal",
    title: "University ERP Portal",
    tagline: "Web portal for students and administrators handling admissions, fee payments, hostel bookings, and notices.",
    featuredBadge: "Full-Stack System",
    category: "Java & Backend",
    techStack: ["Java", "MySQL", "HTML", "CSS", "RBAC"],
    metrics: [
      { icon: "KeyRound", label: "Two Separate Login Systems" },
      { icon: "Database", label: "Organized MySQL Database" },
      { icon: "Smartphone", label: "Desktop & Mobile Responsive" }
    ],
    description: "Built a comprehensive web portal where students and admins can handle admissions, fee payments, hostel bookings, and campus notices from one place. Features two separate login systems so users only see what they are allowed to access, backed by a thoroughly normalized MySQL database.",
    features: [
      "Built a web portal where students and admins can handle admissions, fee payments, hostel bookings, and notices from one place.",
      "Made two separate login systems, one for students and one for admins, so each user only sees what they are allowed to access.",
      "Designed the full database in MySQL to store student details, course info, fee records, and hostel data in an organized way.",
      "Built all the web pages using HTML and CSS so the portal works well on both desktop and mobile screens.",
      "Added features like profile management, academic records viewing, and an approval workflow for admin actions."
    ],
    architecture: [
      "Java architecture handling session management and secure routing.",
      "Relational MySQL database schema modeling students, courses, fee transactions, and room allocations.",
      "Role-Based Access Control (RBAC) ensuring strict separation between student and admin actions.",
      "Responsive layout engineered with semantic HTML and CSS."
    ],
    githubUrl: "https://github.com/sashiraghavendra",
    demoAvailable: true,
    accentColor: "#0ea5e9"
  }
];

export const CRYPTO_SIMULATION_COINS = [
  { id: "btc", name: "Bitcoin", symbol: "BTC", price: 68420.50, change24h: 3.42, risk: "Low Risk", riskScore: 12, safe: true },
  { id: "eth", name: "Ethereum", symbol: "ETH", price: 3540.20, change24h: 2.15, risk: "Low Risk", riskScore: 18, safe: true },
  { id: "sol", name: "Solana", symbol: "SOL", price: 178.60, change24h: 5.80, risk: "Low Risk", riskScore: 24, safe: true },
  { id: "pepe", name: "PepeMoonSafe", symbol: "PMS", price: 0.000042, change24h: -44.5, risk: "HIGH RISK (SCAM DETECTED)", riskScore: 94, safe: false, warning: "Honeypot contract detected: 98% sell tax & unverified liquidity lock." },
  { id: "elon", name: "ElonRocketDoge", symbol: "ERD", price: 0.0028, change24h: 120.4, risk: "HIGH RISK (PUMP & DUMP)", riskScore: 89, safe: false, warning: "Top 2 wallets hold 91% of total token supply. Extreme dump risk." },
  { id: "matic", name: "Polygon", symbol: "MATIC", price: 0.72, change24h: -1.2, risk: "Low Risk", riskScore: 22, safe: true }
];
