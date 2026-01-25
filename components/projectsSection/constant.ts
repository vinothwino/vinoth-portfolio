import { ProjectCardProps } from "./ProjectCard";

export const PROJECTS: ProjectCardProps[] = [
    {
        title: "Lamborghini Clone",
        subtitle: "High-fidelity frontend with advanced animations",
        description: "High-fidelity clone of the Lamborghini website built to explore advanced animations, smooth transitions, and performance-focused UI.",
        tags: ["Next.js", "GSAP"],
        typeLabel: "Frontend",
        imageSrc: "/lamborghini-clone.png",
        link: "https://lamborghini-clone.vercel.app/",
        codeLink: "https://github.com/vinothwino/lamborghini-clone",
    },
    {
        title: "Library Management System",
        subtitle: "Role-based system for managing books & users",
        description: "Designed a backend system to manage books, users, and loans with authentication, role-based access, and secure APIs.",
        tags: ["Node.js", "Express.js", "MongoDB"],
        typeLabel: "Backend",
        imageSrc: "/library-management-system.jpg",
        codeLink: "https://github.com/vinothwino/library-management-system",
    },
    {
        title: "Simple Chat",
        subtitle: "Socket-based messaging with live updates",
        description: "Built a real-time chat application supporting instant messaging using WebSockets, with a scalable backend and responsive UI.",
        tags: ["Socket.io", "Express.js", "MongoDB", "Vue.js"],
        typeLabel: "Full Stack",
        imageSrc: "/chat.webp",
        codeLink: "https://github.com/vinothwino/simple-chat",
    },
] as const;