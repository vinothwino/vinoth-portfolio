import { Feature, Profile } from "./types"

export const FEATURES_LIST: Feature[] = [
    {
        title: "Passionate",
        description: "I'm passionate about writing clean code that is minimalistic and efficient."
    },
    {
        title: "Tech Stack",
        description: "Skilled in React, Next.js, Tailwind CSS, and TypeScript."
    },
    {
        title: "Continuous Learning",
        description: "I Stay Updated with the Latest Trends and Technologies."
    }
]

export const MISSION_QUOTE = "Write clean, efficient, and maintainable code that is easy to understand and scale. Create seamless user experiences and bring ideas to life."


export const PROFILE_DATA: Profile = {
    name: "Vinoth Kumar",
    role: "Frontend Developer",
    location: "Chennai",
    bio: "Based in Chennai. I'm been coding since 2018 and I love turning ideas into beautiful, functional websites.",
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