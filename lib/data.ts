import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import angularP from "@/public/angular_project.jpg";
import hoobankLanding from "@/public/hoobank_landing.png";
import travelW from "@/public/Screenshot (106).png"

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  // {
  //   name: "Experience",
  //   hash: "#experience",
  // },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

// export const experiencesData = [
//   {
//     title: "",
//     location: "",
//     description:
//       "",
//     icon: React.createElement(LuGraduationCap),
//     date: "",
//   },
  
// ] as const;

export const projectsData = [
  {
    title: "Hoobank",
    description:
      "I created this full responsive modern landing page of a bank named Hoobank",
    tags: ["React", "Tailwind",],
    imageUrl: hoobankLanding,
  },
  {
    title: "Recipe Shopping-list Web Application",
    description:
      "This is a dynamic shopping list(ingredients list) where data could be easily sent from parent component to child and vice versa.",
    tags: ["Angular", "TypeScript", "CSS"],
    imageUrl: angularP,
  },
  {
    title: "Travel.Website",
    description:
      "A travel website with appealing full responsive modern design for beaches for travelling.",
    tags: ["React", "Tailwind"],
    imageUrl: travelW,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "Express",
  "MySQL",
  "Angular",
  "C++",
  "Java",
  "Framer Motion",
] as const;