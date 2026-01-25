import { ExperienceItemProps } from "./ExperienceItem";

export const EXPERIENCES: ExperienceItemProps[] = [
    {
        date: "Feb 2024",
        company: "ThoughtWorks",
        role: "Senior Consultant",
        bullets: [
            "Delivered multiple enterprise-grade platforms from scratch, owning end-to-end feature design, implementation, testing, and production stabilization.",
            "Consistently shipped features under tight timelines with minimal defects and smooth production rollouts.",
            "Improved frontend code quality metrics from 30% → 90% by enforcing best practices, refactoring legacy modules, and strengthening quality gates.",
            "Optimized CI/CD pipelines by reducing GitHub Actions coverage time from 20 min → 6 min, improving developer velocity and deployment cadence."
        ],
    },
    {
        date: "Sep 2023",
        company: "Sabbatical / Career Transition",
        meta: "Company-wide restructuring",
        bullets: [
            "Transitioned during a company-wide restructuring driven by global economic conditions.",
        ],
    },
    {
        date: "June 2022",
        company: "Tekion",
        role: "Software Engineer",
        bullets: [
            "Owned the MyAccount and Appointment modules across multiple automotive consumer platforms as a core contributor to the Automotive Enterprise Cloud.",
            "Implemented micro-frontend architecture using SPA patterns and Web Components to enable scalable frontend development.",
            "Actively reviewed pull requests and mentored peers, maintaining high standards for code quality and consistency."
        ],
    },
    {
        date: "Jan 2019",
        company: "Doodleblue Innovations",
        role: "Frontend Engineer",
        bullets: [
            "Built well-designed, testable, and efficient frontend solutions using modern development best practices.",
            "Led a team of 5 engineers to deliver the TNTRP enterprise application under tight deadlines.",
            "Collaborated closely with product and design teams on feature planning, UI/UX decisions, and implementation."
        ],
    },
    {
        date: "Sep 2018",
        company: "Doodleblue Innovations",
        role: "Frontend Engineer Intern",
        bullets: [
            "Built the Loginext full-stack application from scratch, contributing across design, development, testing, and stabilization.",
            "Delivered features consistently under tight timelines with smooth production rollouts.",
        ],
        isLast: true,
    }
] as const;
