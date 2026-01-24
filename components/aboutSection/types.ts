export type Feature = {
    title: string;
    description: string;
}

export type Profile = {
    name: string;
    role: string;
    location: string;
    bio: string;
    image: {
        src: string;
        alt: string;
        width: number;
        height: number;
        borderRadius: string;
    }
    socialLinks: {
        linkedin: string;
    }
}