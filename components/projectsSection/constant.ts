import { ProjectCardProps } from "./ProjectCard";

export const PROJECTS: ProjectCardProps[] = [
    {
        title: "Lamborghini Clone",
        description: "A clone of the Lamborghini website built with Next.js and GSAP.",
        tags: ["TypeScript", "Next.js", "GSAP"],
        typeLabel: "FE",
        imageSrc: "/lamborghini-clone.png",
        link: "https://lamborghini-clone.vercel.app/",
        codeLink: "https://github.com/vinothwino/lamborghini-clone",
    },
    {
        title: "Library Management System",
        description: "A library management system for managing books, users, and loans.",
        tags: ["Express.js", "JWT", "Node.js", "MySQL"],
        typeLabel: "BE",
        imageSrc: "/library-management-system.jpg",
        codeLink: "https://github.com/vinothwino/library-management-system",
    },
    {
        title: "Simple Chat",
        description: "A real-time chat app for chatting with friends and family.",
        tags: ["MongoDB", "Socket.io", "Express.js", "Vue.js"],
        typeLabel: "Full Stack",
        imageSrc: "/chat.webp",
        codeLink: "https://github.com/vinothwino/simple-chat",
    },
] as const;