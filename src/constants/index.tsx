import {
    Code2,
    Database,
    Server,
    Wrench,
    Zap,
    Layers,
    Package,
    Settings,
    Shield,
    Lock,
    Activity,
    Github,
    Linkedin,
    Instagram,
    Mail,
    Phone,
    MapPin,
} from 'lucide-react';

export const SOCIALS = [
    { icon: Github, href: 'https://www.github.com/ArindamSharma1', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/arindam-sharma-ab4712251/', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://www.instagram.com/arindam._.sharma/', label: 'Instagram' },
];

export const HERO_STATS = [
    { end: 4, label: 'Years of Experience' },
    { end: 9, label: 'Completed Projects' },
    { end: 15, label: 'Hours Worked' },
];

export const PROJECTS = [
    {
        title: 'Folio Gauge - AI Powered Portfolio Analyzer',
        image: '/projects/Folio-Gauge.png',
        tech: [
            'React',
            'FastAPI',
            'Supabase Auth',
            'RLS',
            'PostgreSQL',
            'GSAP',
        ],
        description:
            'Automated portfolio critique system leveling the playing field for students. Orchestrates AI analysis via FastAPI with student/recruiter flows secured by Supabase Auth and RLS.',
        demo: 'https://folio-gauge.vercel.app/',
        repo: 'https://github.com/ArindamSharma1/FolioGauge',
    },
    {
        title: 'Learn Vista-Moodle LMS',
        image: '/projects/learn-vista.png',
        tech: ['React', 'Moodle API', 'JWT Auth', 'i18n', 'CSS'],
        description:
            'Custom frontend interface for Moodle LMS. Optimized for accessibility and multi-language support (i18n) to lower the barrier of entry for diverse student usage.',
        // demo: 'https://example.com/learn-vista',
        repo: 'https://github.com/ArindamSharma1/learn-vista',
    },
    {
        title: 'JYC-JUIT Youth Club Website',
        image: '/projects/jyc-juit.png',
        tech: ['React', 'REST APIs', 'RBAC', 'Chart.js', 'Tailwind'],
        description:
            'University club management platform handling high-volume event registrations. Implemented role-based access control (RBAC) regarding admin dashboard data protection.',
        demo: 'https://jyc.co.in/',
        // repo: 'https://github.com/yourusername/jyc-juit',
    },
    {
        title: 'Quantum QR',
        image: '/projects/Quantum-QR-1.png',
        tech: [
            'React',
            'Vite',
            'Canvas API',
            'CSS Modules',
        ],
        description:
            'High-performance, privacy-first QR generator. Zero-dependency architecture focused on client-side generation speed and pure CSS layout.',
        demo: 'https://quantum-qr-gold.vercel.app/',
        repo: 'https://github.com/ArindamSharma1/Quantum-QR',
    },
    {
        title: 'Maintaining University Website',
        image: '/projects/juit.png',
        tech: [
            'React',
            'Service Workers',
            'Caching Strategies',
            'PWA',
            'Geolocation',
        ],
        description:
            'Maintained core infrastructure for high-traffic university portal. Deployed Service Workers and caching strategies to ensure uptime during result declaration surges.',
        demo: 'https://www.juit.ac.in/',
        // repo: 'https://github.com/yourusername/university-site',
    },
    {
        title: 'Framer Portfolio',
        image: '/projects/framer-portfolio.png',
        tech: ['Framer Motion', 'Spline', 'Performance Optimization', 'Responsive'],
        description:
            'Modern design showcase with complex orchestrations. Focused on rendering performance and smooth layout thrashing avoidance.',
        demo: 'https://arindam-sharma.framer.website/',
        // repo: 'https://github.com/yourusername/framer-portfolio',
    },
];

export const EXPERIENCES = [
    {
        company: 'ApexPlanet Technologies',
        role: 'Frontend Developer Intern',
        duration: 'June 2025 - July 2025',
        description: 'Worked as Frontend development intern, developing high-performance web applications with focus on user experience and performance optimization.',
        skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'SAP Animate'],
    },
    {
        company: 'Technical Club JYC-JUIT',
        role: 'Frontend Developer',
        duration: 'Oct 2023 - Nov 2024',
        description: 'Developed responsive web applications for my university\'s technical club. Optimized performance and maintained code quality.',
        skills: ['React', 'JavaScript', 'SCSS', 'Webpack', 'Git'],
    },
    {
        company: 'Freelanced',
        role: 'Web Developer and UI/UX Designer',
        duration: 'June 2021 - Present',
        description: 'Building responsive web applications and designing user experiences. Implemented interactive features using modern JavaScript frameworks.',
        skills: ['React', 'CSS', 'HTML5', 'JavaScript', 'Figma'],
    },
];

export const TECH_CATEGORIES = [
    {
        name: 'Frontend',
        techs: [
            { name: 'JavaScript (ES6+)', icon: Code2 },
            { name: 'TypeScript', icon: Code2 },
            { name: 'React', icon: Zap },
            { name: 'Next.js', icon: Layers },
            { name: 'Angular', icon: Zap },
            { name: 'Tailwind CSS', icon: Wrench },
            { name: 'SASS / SCSS', icon: Wrench },
            { name: 'GSAP', icon: Package },
            { name: 'Framer Motion', icon: Zap },
        ],
    },
    {
        name: 'Backend',
        techs: [
            { name: 'Node.js', icon: Server },
            { name: 'Express.js', icon: Server },
            { name: 'REST APIs', icon: Code2 },
            { name: 'Authentication (JWT)', icon: Settings },
            { name: 'Middleware & API Security', icon: Settings },
        ],
    },
    {
        name: 'Database',
        techs: [
            { name: 'MongoDB', icon: Database },
            { name: 'Mongoose ODM', icon: Database },
            { name: 'Firebase', icon: Zap },
            { name: 'Supabase', icon: Database },
            { name: 'SQL / MySQL', icon: Database },
        ],
    },
    {
        name: 'Tools & Workflow',
        techs: [
            { name: 'Git & GitHub', icon: Wrench },
            { name: 'Vite', icon: Zap },
            { name: 'Webpack', icon: Settings },
            { name: 'Docker (Basics)', icon: Package },
            { name: 'CI/CD Pipelines', icon: Code2 },
            { name: 'Postman', icon: Settings },
            { name: 'Vercel', icon: Layers },
            { name: 'VS Code', icon: Code2 },
            { name: 'Figma', icon: Wrench },
        ],
    },
];

export const SYSTEMS = [
    {
        title: 'Authentication & Identity',
        icon: <Shield className="w-6 h-6 text-secondary" />,
        content: 'Engineered secure identity management using Supabase Auth and Google OAuth. Implemented rigid JWT session handling to maintain user integrity across distributed client-server interactions.',
    },
    {
        title: 'Access Control & Limits',
        icon: <Lock className="w-6 h-6 text-secondary" />,
        content: 'Architected granular Row Level Security (RLS) policies and Role-Based Access Control (RBAC). Enforced strict per-user scan limits and admin-only privileges to prevent resource abuse.',
    },
    {
        title: 'Backend Architecture',
        icon: <Server className="w-6 h-6 text-secondary" />,
        content: 'Designed a decoupled FastAPI microservices layer with protected API endpoints. Separated frontend logic from backend processing to ensure scalable, secure data orchestration.',
    },
    {
        title: 'Performance & Safety',
        icon: <Activity className="w-6 h-6 text-secondary" />,
        content: 'Implemented intelligent rate limiting and resource governing mechanisms. Built the architecture to handle concurrent traffic spikes while strictly enforcing usage quotes.',
    },
];

export const CONTACT_INFO = {
    email: 'sharmaarindam091@gmail.com',
    phone: '+91 8580705992',
    location: 'India',
};
