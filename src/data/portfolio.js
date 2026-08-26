export const personal = {
    name: "Kaung Htet Lin",
    firstName: "Kaung",
    title: "Full Stack Developer",
    age: 22,
    location: "Tamwe, Yangon, Myanmar",
    email: "kaunghttln3113@gmail.com",
    phone: "09-768608545",
    phoneAlt: "09-5085574",
    profileImage: "/profile.jpg",
    resumePath: "/resume.pdf",
    resumeFileName: "Kaung_Htet_Lin_CV",
    description:
        "Passionate and self-motivated Full Stack Developer with a strong interest in PHP and JavaScript development. Skilled in building web applications and familiar with SDLC, database management, backend development concepts, and frontend development. Eager to continuously improve technical skills, solve real-world problems, and grow as a professional developer.",
    yearsOfLearning: 3,
    typingSpeed: 100,
};

export const stats = [
    { id: 1, label: "Projects Completed", value: 4, suffix: "+" },
    { id: 3, label: "Certificates Earned", value: 2, suffix: "" },
    { id: 4, label: "Technologies", value: 2, suffix: "+" },
];

export const rotatingRoles = [
    "Full Stack Developer",
    "Backend Developer",
    "PHP / Laravel Developer",
    "React Learner",
    "Problem Solver",
    "Software Engineer"
];

export const socials = [
    {
        id: "github",
        name: "GitHub",
        url: "https://github.com/KaungHtetLin3113",
        icon: "github",
    },
    {
        id: "email",
        name: "Email",
        url: "mailto:kaunghttln3113@gmail.com",
        icon: "email",
    },
    {
        id: "phone",
        name: "Phone",
        url: "tel:09-768608545",
        icon: "phone",
    },
    {
        id: "location",
        name: "Location",
        url: "https://maps.google.com/?q=Tamwe,Yangon,Myanmar",
        icon: "location",
    },
];

export const navLinks = [
    { id: "home", label: "Home" },
    { id: "education", label: "Education" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
];

export const education = [
    {
        id: 1,
        icon: "🎓",
        degree: "Level 5 Diploma in Computing",
        institution: "KMD College - NCC Education UK",
        period: "March 2025 - February 2026",
        status: "completed",
    },
    {
        id: 2,
        icon: "🎓",
        degree: "Level 4 Diploma in Computing",
        institution: "KMD College - NCC Education UK",
        period: "March 2024 - January 2025",
        status: "completed",
    },
    {
        id: 3,
        icon: "💻",
        degree: "Diploma in Web Development",
        institution: "Yangon University Of Distance Education",
        period: "April 2023 - March 2024",
        status: "completed",
    },
    {
        id: 4,
        icon: "🔬",
        degree: "BSc Chemistry",
        institution: "Dagon University",
        period: "3rd Year - Ongoing",
        status: "in-progress",
    },
];

export const certificates = [
    {
        id: 1,
        image: "/certificate1.jpg",
        alt: "Professional Web Developer Certificate",
        title: "Professional Web Developer",
        description: "Javascript, Bootstrap, PHP, Laravel",
        institution: "Fairway Technology",
        downloadName: "Professional_Web_Developer_Certificate",
        date: "2024",
    },
    {
        id: 2,
        image: "/certificate2.jpg",
        alt: "Programming Basic Certificate",
        title: "Programming Basic",
        description: "JAVA",
        institution: "Fairway Technology",
        downloadName: "Programming_Basic_Certificate",
        date: "2023",
    },
];

export const skillCategories = [
    {
        id: "languages",
        title: "Languages",
        icon: "💻",
        skills: [
            { name: "PHP", level: 85 },
            { name: "JavaScript", level: 80 },
        ],
    },
    {
        id: "frontend",
        title: "Frontend",
        icon: "🎨",
        skills: [
            { name: "HTML5", level: 95 },
            { name: "CSS3", level: 90 },
            { name: "Bootstrap", level: 85 },
            { name: "Blade", level: 80 },
        ],
    },
    {
        id: "backend",
        title: "Backend",
        icon: "⚙️",
        skills: [
            { name: "PHP", level: 85 },
            { name: "Laravel", level: 75 },
            { name: "REST APIs", level: 20 },
        ],
    },
    {
        id: "database",
        title: "Database",
        icon: "🗄️",
        skills: [
            { name: "MySQL", level: 85 },
            { name: "SQL", level: 80 },
        ],
    },
    {
        id: "tools",
        title: "Tools & Workflow",
        icon: "🛠️",
        skills: [
            { name: "XAMPP", level: 90 },
            { name: "Git & GitHub", level: 80 },
            { name: "AI Agent Tools", level: 75 },
        ],
    },
    {
        id: "learning",
        title: "Currently Learning",
        icon: "📚",
        skills: [
            { name: "Laravel (Advanced)", level: 55 },
            { name: "API Development", level: 50 },
            { name: "React", level: 65 },
        ],
    },
];

export const personalSkills = [
    { id: 1, text: "Fast Learner", icon: "⚡" },
    { id: 2, text: "Good Teamwork & Communication", icon: "🤝" },
    { id: 3, text: "Problem-Solving Skills", icon: "🧠" },
    { id: 4, text: "Strong Passion for Backend Development", icon: "💙" },
    { id: 5, text: "Self-Learning Ability", icon: "📖" },
    { id: 6, text: "English Intermediate", icon: "🌐" },
];

export const projects = [
    {
        id: 1,
        name: "POS System (SME Business)",
        // featured: true,
        tech: ["Laravel", "Bootstrap", "MySQL"],
        description:
            "Developed a complete Point of Sale system for small business use. Includes product management (add, edit, delete, stock control), sales transaction handling, invoice generation, and inventory tracking. Built with a simple and user-friendly interface for daily business operations.",
        highlights: [
            "Inventory stock tracking & alerts",
            "Invoice PDF generation",
            "Role-based access controls",
        ],
        github: "https://github.com/KaungHtetLin3113",
        demo: "",
        image: "/pos-system.png",
        alt: "POS System screenshot",
    },
    {
        id: 2,
        name: "AuraMed Hospital Management System",
        // featured: true,
        tech: ["Pure PHP", "MySQL", "JavaScript"],
        description:
            "Developed patient record management system with comprehensive features including doctor information management, appointment scheduling, and payment processing. Implemented health package management features with structured backend logic.",
        highlights: [
            "Appointment scheduling dashboard",
            "Patient history management",
            "Health package subscriptions",
        ],
        github: "https://github.com/KaungHtetLin3113",
        demo: "",
        image: "/auramed.png",
        alt: "AuraMed Hospital Management System screenshot",
    },
    {
        id: 3,
        name: "FoodFusion Recipe Website",
        featured: false,
        tech: ["Pure PHP", "MySQL", "JavaScript"],
        description:
            "Developed recipe management platform with community cookbook feature. Implemented favorite/save functionality and print recipes feature. Designed responsive and modern UI for better user experience.",
        highlights: [
            "Save & organize favorite recipes",
            "One-click print feature",
            "Fully responsive design",
        ],
        github: "https://github.com/KaungHtetLin3113",
        demo: "",
        image: "/foodfusion.png",
        alt: "FoodFusion Recipe Website screenshot",
    },
    {
        id: 4,
        name: "Standing Desk Website",
        featured: false,
        tech: ["HTML", "CSS", "JavaScript"],
        description:
            "Built responsive product website for standing desk products using HTML & CSS. Focused on clean UI design and optimal user experience with modern layout and smooth interactions.",
        highlights: [
            "Pixel-perfect landing page",
            "Smooth scroll interactions",
            "Mobile-first responsive",
        ],
        github: "https://github.com/KaungHtetLin3113",
        demo: "",
        image: "/standing-desk.png",
        alt: "Standing Desk Website screenshot",
    },
];

export const contact = [
    {
        id: "phone",
        icon: "phone",
        title: "Phone",
        value: "09-768608545 / 09-5085574",
        href: "tel:09-768608545",
        copyValue: "09768608545",
        isLink: true,
    },
    {
        id: "email",
        icon: "email",
        title: "Email",
        value: "kaunghttln3113@gmail.com",
        href: "mailto:kaunghttln3113@gmail.com",
        copyValue: "kaunghttln3113@gmail.com",
        isLink: true,
    },
    {
        id: "github",
        icon: "github",
        title: "GitHub",
        value: "github.com/KaungHtetLin3113",
        href: "https://github.com/KaungHtetLin3113",
        copyValue: "https://github.com/KaungHtetLin3113",
        isLink: true,
    },
    {
        id: "location",
        icon: "location",
        title: "Location",
        value: "Tamwe, Yangon, Myanmar",
        href: "https://maps.google.com/?q=Tamwe,Yangon,Myanmar",
        copyValue: "Tamwe, Yangon, Myanmar",
        isLink: true,
    },
];
