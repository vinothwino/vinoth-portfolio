import { ExperienceItemProps } from "./ExperienceItem";

export const EXPERIENCES: ExperienceItemProps[] = [
    {
        date: "Feb 2024",
        company: "ThoughtWorks",
        role: "Senior Consultant",
        bullets: [
            "Contributed to multiple enterprise-grade platforms from scratch, taking ownership across feature design, implementation, testing, and stabilization.",
            "Consistently shipped features under tight timelines with minimal defects and smooth production rollout.",
            "Improved front-end code quality metrics from 30% → 90% by enforcing best practices, refactoring legacy modules, and strengthening code quality gates.",
            "Optimized CI/CD performance by reducing GitHub Actions code coverage time from 20 min → 6 min , improving developer velocity and deployment cadence."
        ],
    },
    {
        date: "Sep 2023",
        company: "Sabbatical / Career Transition",
        meta: "Company Restructuring",
        bullets: [
            "Transitioned during company-wide restructuring related to global economic conditions.",
        ],
    },
    {
        date: "June 2022",
        company: "Tekion",
        role: "Software Engineer",
        bullets: [
            "Managed and assumed ownership of the Myaccount and appointment modules within diverse automotive consumer platform programs as a pivotal member of the Automotive Enterprise Cloud.Managed and assumed ownership of the Myaccount and appointment modules within diverse automotive consumer platform programs as a pivotal member of the Automotive Enterprise Cloud.",
            "Proficient in implementing a micro-frontend architecture utilizing SPA and webcomponents.",
            "Actively reviewing the team's pull request (PR) for improvements, with a focus on maintaining high standards of code quality."
        ],
    },
    {
        date: "Jan 2019",
        company: "Doodleblue Innovations",
        role: "Frontend Engineer",
        bullets: [
            "Write well designed, testable, efficient code by using best software development practices.",
            "Lead a team of 5 to develop the TNRTP enterprise application within the impressive tight deadline.",
            "Actively contributed to feature planning, UI/UX discussions, and implementation."
        ],
    },
    {
        date: "Sep 2018",
        company: "Doodleblue Innovations",
        role: "Frontend Engineer Intern",
        bullets: [
            "Developed the LogiNext full stack application from scratch, taking ownership across feature design, implementation, testing, and stabilization.",
            "Consistently shipped features under tight timelines with minimal defects and smooth production rollout.",
        ],
        isLast: true,
    }
] as const;
