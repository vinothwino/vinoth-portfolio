import { Feature, Profile } from "./types"

export const FEATURES_LIST: Feature[] = [
    {
        title: "Engineering Mindset",
        description: "I care about writing clean, predictable code and building UI systems that teams can confidently extend over time."
    },
    {
        title: "Tech Stack",
        description: "React, Next.js, TypeScript, Tailwind CSS, and modern frontend tooling focused on performance and scalability."
    },
    {
        title: "Continuous Learning",
        description: "I stay current with evolving frontend standards, performance techniques, and best practices to deliver future-ready solutions."
    }
]

export const MISSION_QUOTE = "My mission is to build frontend systems that are easy to scale, simple to maintain, and enjoyable for both users and developers. I care deeply about code quality, performance, and creating interfaces that feel intuitive and reliable."


export const PROFILE_DATA: Profile = {
    name: "Vinoth Kumar",
    role: "Senior Frontend Engineer",
    location: "Chennai",
    bio: "Based in Chennai, I’ve been building production-grade frontend applications since 2018, turning complex requirements into clean, user-friendly interfaces.",
    image: {
        src: "/vinoth-kumar.jpg",
        alt: "Vinoth Kumar",
        width: 350,
        height: 350,
        borderRadius: "32% 68% 60% 40% / 40% 40% 60% 60%"
    },
    socialLinks: {
        linkedin: "https://www.linkedin.com/in/vinoth-kumar-150397/"
    }
} as const