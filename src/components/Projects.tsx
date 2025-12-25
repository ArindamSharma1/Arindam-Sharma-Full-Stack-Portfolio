import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
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

const ProjectCard = ({
	project,
	index,
}: {
	project: (typeof projects)[0];
	index: number;
}) => {
	const containerVariants = {
		hidden: { opacity: 0, y: 30 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.6,
				delay: index * 0.1,
			},
		},
	};

	return (
		<motion.div
			className="group"
			variants={containerVariants}
			whileHover={{ y: -8 }}
		>
			<div className="relative rounded-xl overflow-hidden bg-slate-200 aspect-video shadow-lg">
				<img
					src={project.image}
					alt={project.title}
					className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
				/>

				<div className="absolute inset-0 bg-slate-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6 pt-8">
					<p className="text-slate-200 text-sm mb-4 flex-shrink-0">
						{project.description}
					</p>
					<div className="flex items-center justify-between">
						<div className="flex flex-wrap gap-2">
							{project.tech.slice(0, 3).map((tech) => (
								<span
									key={tech}
									className="px-2 py-1 bg-white/20 text-white text-xs rounded-full backdrop-blur"
								>
									{tech}
								</span>
							))}
						</div>
						<div className="flex items-center gap-2">
							<a
								href={project.demo}
								target="_blank"
								rel="noopener noreferrer"
								className="p-2 rounded-lg bg-accent hover:bg-accent-dark transition-colors"
								aria-label={`Open ${project.title} demo`}
							>
								<ExternalLink size={16} className="text-white" />
							</a>
							<a
								href={project.repo}
								target="_blank"
								rel="noopener noreferrer"
								className="p-2 rounded-lg bg-slate-700 hover:bg-slate-600 transition-colors"
								aria-label={`Open ${project.title} repository`}
							>
								<Github size={16} className="text-white" />
							</a>
						</div>
					</div>
				</div>
			</div>

			<div className="mt-4 space-y-2">
				<h3 className="text-lg font-bold text-slate-900 group-hover:text-accent transition-colors">
					{project.title}
				</h3>
				<div className="flex flex-wrap gap-2">
					{project.tech.map((tech) => (
						<span
							key={tech}
							className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-semibold rounded-full"
						>
							{tech}
						</span>
					))}
				</div>
			</div>
		</motion.div>
	);
};

export const Projects = () => {
	const { ref, inView } = useInView({
		threshold: 0.15,
		triggerOnce: true,
	});

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
				delayChildren: 0.2,
			},
		},
	};

	const headerVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.6 },
		},
	};

	return (
		<section
			id="projects"
			data-section="projects"
			className="section-padding bg-gradient-to-b from-white to-slate-50"
			ref={ref}
		>
			<div className="section-max-width">
				<motion.div
					className="space-y-12"
					variants={containerVariants}
					initial="hidden"
					animate={inView ? 'visible' : 'hidden'}
				>
					<motion.div variants={headerVariants}>
						<h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-4">
							Selected Projects
						</h2>
						<div className="w-24 h-1 bg-accent rounded-full"></div>
					</motion.div>

					<motion.div
						className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
						variants={containerVariants}
					>
						{projects.map((project, index) => (
							<ProjectCard
								key={project.title}
								project={project}
								index={index}
							/>
						))}
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
};
