import {
  react,
  person,
  computer,
  commingsoon,
  email,
  github,
  cv,
  whatsapp,
} from "../assets";

export const Navlinks = [
  {
    id: 1,
    path: "/",
    title: "Home",
  },
  {
    id: 2,
    path: "#about",
    title: "About",
  },
  {
    id: 3,
    path: "/projects",
    title: "Projects",
  },
  {
    id: 4,
    path: "/contact",
    title: "Contact",
  },
];

export const Expertise = [
  {
    id: 1,
    title: "Sofware Development",
    description:
      "Coding things from scratch, and enjoy bringing ideas to life in the browser.",
    icon: computer,
  },
  {
    id: 2,
    title: "Frontend & Backend",
    description:
      "Experience building websites and web applications using React, Next, and more.",
    icon: react,
  },
  {
    id: 3,
    title: "Master of  Development",
    description:
      "Experienced, self-taught, and always learning. Navigating the vast world of web development.",
    icon: person,
  },
];

export const Categories = [
  {
    id: 1,
    title: "All",
    count: 7,
  },
  {
    id: 2,
    title: "Frontend",
    count: 4,
  },
  {
    id: 3,
    title: "Backend",
    count: 1,
  },
  {
    id: 4,
    title: "Fullstack",
    count: 2,
  },
];

export const Projects = [
  {
    id: 1,
    title: "Project 1",
    category: ["web-development", "front-end", "full0stack"],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    featured: false,
    image: commingsoon,
  },
  {
    id: 2,
    title: "Project 1",
    category: ["web-development", "front-end", "full0stack"],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    featured: false,
    image: commingsoon,
  },
  {
    id: 3,
    title: "Project 1",
    category: ["web-development", "front-end", "full0stack"],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    featured: false,
    image: commingsoon,
  },
  {
    id: 4,
    title: "Project 1",
    category: ["web-development", "front-end", "full0stack"],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    featured: false,
    image: commingsoon,
  },
  {
    id: 5,
    title: "Project 1",
    category: ["web-development", "front-end", "full0stack"],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    featured: false,
    image: commingsoon,
  },
  {
    id: 6,
    title: "Project 1",
    category: ["web-development", "front-end", "full0stack"],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    featured: false,
    image: commingsoon,
  },
  {
    id: 7,
    title: "Project 1",
    category: ["web-development", "front-end", "full0stack"],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    featured: true,
    image: commingsoon,
  },
];

export const Experience = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "Maratolli SIA",
    date: "2022-2023",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    icon: "CompanyIcon",
    address: "Riga, Latvia",
    techStack: ["React", "SCSS", "Firebase", "Next"],
  },
  {
    id: 2,
    title: "Frontend Developer",
    company: "Maratolli SIA",
    date: "2022-2023",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    icon: "CompanyIcon",
    address: "Riga, Latvia",
    techStack: ["React", "SCSS", "Firebase", "Next"],
  },
  {
    id: 3,
    title: "Frontend Developer",
    company: "Maratolli SIA",
    date: "2022-2023",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    icon: "CompanyIcon",
    address: "Riga, Latvia",
    techStack: ["React", "SCSS", "Firebase", "Next"],
  },
];

export const ContactIcons = [
  {
    id: 1,
    title: "Github",
    icon: github,
    link: "https://github.com/RaitisVilums",
  },
  {
    id: 2,
    title: "Email",
    icon: email,
    link: "mailto:rvilums22@gmail.com",
  },

  {
    id: 3,
    title: "Whatsapp",
    icon: whatsapp,
    link: "https://wa.me/26406100",
  },
];
