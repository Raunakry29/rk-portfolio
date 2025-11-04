  // Sample projects data
  import type {Project , Projects , Skill} from '../types/Project';
// Type definitions
import DrBuddy from "../chr.png";
import CodeAna from "../chr.png";
import Dboard from "../db.png";


  export const projects: Project[] = [
    {
      id: 1,
      title: "Dr-Buddy – DSA Revision Buddy (Chrome Extension)",
      description:
        "Dr-Buddy is a productivity-focused Chrome extension designed to help you track your DSA (Data Structures & Algorithms) progress. It reminds you at the right time with Chrome notifications, making it perfect for consistent daily practice and preparing for coding interviews! 💻🔔",
      tags: [
        "React",
        "TypeScript",
        "Firebase",
        "Chrome Extension APIs",
        "Tailwind CSS",
        "Webpack",
      ],
      imageUrl: DrBuddy,
      LiveUrl: "https://drbuddy.dev-saga.in",
      githubUrl: "https://github.com/sagarchaurasia176/DRB_ChromeExtension",
    },
    {
      id: 2,
      title: "Code-Analyzer–(Chrome Extension)",
      description:"The (Code-Analyzer) Chrome Extension is designed to help developers optimize their algorithms by providing instant insights into time and space complexity. Whether you are browsing coding platforms, reviewing code snippets, or working on your own projects, this extension simplifies complexity analysis, allowing you to write more efficient and optimized code.",
      tags: ["Typescript","React","Tailwind CSS","Node.Js,","Express.js","MongoDB" , "Firebase" , "Docker" , "Cloudflare"],
      imageUrl: Dboard,
      LiveUrl: "https://canalyzer.dev-saga.in",
      githubUrl:
        "https://github.com/sagarchaurasia176/Code-Analyzer-chrome-extension",
    },
    {
      id: 3,
      title: "Dashcraft – Dashboard Template",
      description:
        "Dashcraft is a powerful dashboard template built with React and Tailwind CSS, designed to help developers quickly kickstart their projects with a modern and responsive UI. It includes various components, charts, and layouts to assist you in creating stunning web applications in no time.",
      tags: [
        "React",
        "Tailwind CSS",
        "TypeScript",
        "Framer Motion",
        "Firebase",
        "GSAP",
      ],
      imageUrl: CodeAna,
      LiveUrl: "https://dashcraft.manishlal.live",
      githubUrl: "https://github.com/sagarchaurasia176/DashboardUI",
    },
  ];

  // other project
  export const otherProj: Projects[] = [
    {
      id: 1,
      title: "Code-Analyzer|Frontend using Gemini AI",
      description:
        "A Time Complexity Analyzer is a tool or program that helps determine how efficiently an algorithm or piece of code runs.",
      tags: [
        "Html",
        "Css",
        "Js",
        "React",
        "Tailwind CSS",
        "Gemini AI",
        "Firebase",
      ],
      imageUrl: "",
      LiveUrl: "https://tcanalyzer.dev-saga.in",
      githubUrl: "https://github.com/sagarchaurasia176/TcAnalyzer",
    },
   

 
  ];

  // Skills data
 export const skills: Skill[] = [
    {
      category: "Frontend",
      items: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    },
    {
      category: "Backend",
      items: [
        "Node.js",
        "Express",
        "REST API Design",
        "Authentication",
        "Security",
        "firebase",
      ],
    },
    {
      category: "Database",
      items: ["MongoDB", "PostgreSQL (familiar)"],
    },
    {
      category: "DevOps",
      items: ["Docker", "Nginx", "Cloudflare"],
    },
  ];