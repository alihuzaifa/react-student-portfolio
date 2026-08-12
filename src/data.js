/* =========================================================================
   data.js  —  THIS IS THE ONLY FILE YOU NEED TO EDIT

   The whole website is built from the arrays and objects below.
   Change the values here, save the file, and the browser updates by itself.
   You never have to open a component.

   Each value is exported, and the components import the ones they need,
   for example:  import { projects } from "../data";
   Keep the names spelled exactly as they are, because the components look
   for these exact names.
   ========================================================================= */


/* ---------- 1) BASIC INFO — shown in the top hero banner --------------- */
export const profile = {
    name: "Ali Huzaifa",
    initials: "AH",                       // shown in the circle if there is no photo
    photo: "",                            // put your image path here, e.g. "/me.jpg"
    role: "Front End Developer",
    typingRoles: [                        // these words type themselves one by one
        "Front End Developer",
        "React Learner",
        "UI Enthusiast",
        "Computer Science Student"
    ],
    tagline: "I am a computer science student who builds clean, fast and mobile friendly websites with React, HTML and CSS.",
    location: "Karachi, Pakistan",
    email: "ali.huzaifa@example.com",
    phone: "+92 300 1234567",
    available: true,                      // true shows the green "open to work" badge
    resume: "/resume.pdf"                 // put the file in the public folder
};


/* ---------- 2) NAVIGATION MENU ----------------------------------------- */
export const navLinks = [
    { title: "Home",      link: "#home" },
    { title: "About",     link: "#about" },
    { title: "Skills",    link: "#skills" },
    { title: "Projects",  link: "#projects" },
    { title: "Education", link: "#education" },
    { title: "Services",  link: "#services" },
    { title: "Contact",   link: "#contact" }
];


/* ---------- 3) SOCIAL LINKS -------------------------------------------- */
export const socialLinks = [
    { name: "GitHub",   icon: "GH", link: "https://github.com/username" },
    { name: "LinkedIn", icon: "in", link: "https://linkedin.com/in/username" },
    { name: "Twitter",  icon: "X",  link: "https://twitter.com/username" },
    { name: "Email",    icon: "@",  link: "mailto:ali.huzaifa@example.com" }
];


/* ---------- 4) ABOUT SECTION ------------------------------------------- */
export const aboutText = [
    "Hello! I am a computer science student learning web development. I enjoy building websites that look good, load fast and work well on every screen size.",
    "I started with HTML, CSS and plain JavaScript, and I now build with React and Vite. Next on my list are Node.js and databases. I learn quickly and I like working with a team."
];

export const aboutFacts = [
    { label: "Full Name",  value: "Ali Huzaifa" },
    { label: "Degree",     value: "BS Computer Science" },
    { label: "University", value: "NED University" },
    { label: "Languages",  value: "English, Urdu" },
    { label: "Location",   value: "Karachi, Pakistan" },
    { label: "Freelance",  value: "Available" }
];

export const stats = [
    { number: 12, suffix: "+", label: "Projects Built" },
    { number: 3,  suffix: "",  label: "Years Learning" },
    { number: 8,  suffix: "+", label: "Certificates" },
    { number: 5,  suffix: "+", label: "Happy Clients" }
];


/* ---------- 5) SKILLS — grouped by category ---------------------------- */
export const skillGroups = [
    {
        category: "Front End",
        icon: "</>",
        skills: [
            { name: "HTML5",      percent: 92 },
            { name: "CSS3",       percent: 88 },
            { name: "JavaScript", percent: 82 },
            { name: "React",      percent: 74 }
        ]
    },
    {
        category: "Tools",
        icon: "#",
        skills: [
            { name: "Vite",           percent: 78 },
            { name: "Git and GitHub", percent: 70 },
            { name: "VS Code",        percent: 90 },
            { name: "Figma",          percent: 60 }
        ]
    },
    {
        category: "Currently Learning",
        icon: "*",
        skills: [
            { name: "Node.js",     percent: 40 },
            { name: "TypeScript",  percent: 35 },
            { name: "Tailwind",    percent: 55 },
            { name: "MongoDB",     percent: 30 }
        ]
    }
];


/* ---------- 6) PROJECTS ------------------------------------------------- */
/* The filter buttons are created automatically from the category names. */
export const projects = [
    {
        title: "Calculator App",
        category: "React",
        icon: "=",
        description: "A calculator that handles add, subtract, multiply and divide, and also works with the keyboard.",
        tech: ["React", "CSS", "Hooks"],
        demo: "#",
        code: "#",
        featured: true
    },
    {
        title: "To Do List",
        category: "React",
        icon: "[]",
        description: "Add tasks, mark them complete and delete them. Everything is saved in the browser with localStorage.",
        tech: ["React", "useState", "localStorage"],
        demo: "#",
        code: "#",
        featured: true
    },
    {
        title: "Restaurant Website",
        category: "Website",
        icon: "&",
        description: "A responsive website for a local restaurant with a menu, a photo gallery and a booking page.",
        tech: ["HTML", "CSS", "JavaScript"],
        demo: "#",
        code: "#",
        featured: false
    },
    {
        title: "Weather App",
        category: "API",
        icon: "~",
        description: "Type a city name and see the current weather. Live data comes from the OpenWeather API.",
        tech: ["React", "Fetch API", "useEffect"],
        demo: "#",
        code: "#",
        featured: true
    },
    {
        title: "Quiz App",
        category: "React",
        icon: "?",
        description: "A ten question quiz with a countdown timer and a score screen. Questions are stored in an array of objects.",
        tech: ["React", "Hooks", "CSS"],
        demo: "#",
        code: "#",
        featured: false
    },
    {
        title: "Portfolio Template",
        category: "Website",
        icon: "@",
        description: "The portfolio you are looking at right now. Every section is generated from a single data file.",
        tech: ["React", "Vite", "CSS"],
        demo: "#",
        code: "#",
        featured: false
    }
];


/* ---------- 7) EDUCATION AND EXPERIENCE TIMELINE ------------------------ */
export const timeline = [
    {
        year: "2023 - 2027",
        title: "BS Computer Science",
        place: "NED University, Karachi",
        detail: "Coursework in programming, data structures, databases and web development. Current CGPA 3.6."
    },
    {
        year: "2021 - 2023",
        title: "Intermediate, Pre Engineering",
        place: "Adamjee Government Science College",
        detail: "Graduated with an A grade and served as an active member of the college computer society."
    },
    {
        year: "2024 - Present",
        title: "Freelance Web Developer",
        place: "Fiverr and Upwork",
        detail: "Build landing pages and portfolio websites for small businesses, from first draft to final handover."
    },
    {
        year: "Summer 2024",
        title: "Front End Intern",
        place: "TechSol Pvt Ltd",
        detail: "Worked with the team on sections of the company website and improved the responsive layout."
    }
];


/* ---------- 8) CERTIFICATES --------------------------------------------- */
export const certificates = [
    { title: "React Basics",          issuer: "Scrimba",      year: "2025", link: "#" },
    { title: "JavaScript Essentials", issuer: "Coursera",     year: "2024", link: "#" },
    { title: "Responsive Web Design", issuer: "freeCodeCamp", year: "2023", link: "#" },
    { title: "Git and GitHub Basics", issuer: "Udemy",        year: "2023", link: "#" }
];


/* ---------- 9) SERVICES ------------------------------------------------- */
export const services = [
    {
        icon: "01",
        title: "Website Development",
        detail: "A clean and fast website for your business that looks right on every screen size."
    },
    {
        icon: "02",
        title: "Responsive Design",
        detail: "Layouts that work just as well on a phone and a tablet as they do on a desktop."
    },
    {
        icon: "03",
        title: "React Components",
        detail: "Reusable pieces of interface, built so the rest of your team can drop them in anywhere."
    },
    {
        icon: "04",
        title: "Bug Fixing",
        detail: "Fix the broken parts of an existing website and make the pages load faster."
    }
];


/* ---------- 10) TESTIMONIALS -------------------------------------------- */
export const testimonials = [
    {
        name: "Bilal Ahmed",
        role: "Owner, Bilal Traders",
        message: "The work was delivered on time and the website turned out exactly the way I described it. Communication was clear throughout."
    },
    {
        name: "Sana Malik",
        role: "Classmate",
        message: "A huge help on our semester project. The way React concepts were explained finally made them click for me."
    },
    {
        name: "Usman Sheikh",
        role: "Team Lead, TechSol",
        message: "Genuinely eager to learn during the internship and finished every assigned task ahead of the deadline."
    }
];


/* ---------- 11) CONTACT CARDS ------------------------------------------- */
export const contactInfo = [
    { icon: "@", label: "Email",     value: "ali.huzaifa@example.com", link: "mailto:ali.huzaifa@example.com" },
    { icon: "#", label: "Phone",     value: "+92 300 1234567",         link: "tel:+923001234567" },
    { icon: "^", label: "Location",  value: "Karachi, Pakistan",       link: "#contact" },
    { icon: "*", label: "Freelance", value: "Available for work",      link: "#contact" }
];


/* ---------- 12) CONTACT NOTE — the line and button under the cards ------- */
export const contactNote = {
    text: "Email is the fastest way to reach me. I am open to internships, freelance projects and questions about code.",
    buttonText: "Send Me An Email"
};


/* ---------- 13) FOOTER --------------------------------------------------- */
export const footerInfo = {
    about: "A computer science student building clean, accessible websites with React, HTML and CSS. Open to internships and junior front end roles.",
    linksHeading: "Quick Links",
    servicesHeading: "What I Do",
    contactHeading: "Get In Touch",
    ctaText: "Have a project in mind?",
    ctaSub: "I reply to every message, usually within a day.",
    ctaButton: "Start a conversation",
    owner: "Ali Huzaifa",              // the year is added automatically, so it never goes stale
    rights: "All rights reserved.",
    builtWith: "Built with React and Vite."
};
