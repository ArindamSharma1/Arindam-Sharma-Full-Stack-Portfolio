import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github } from 'lucide-react';

import { PROJECTS } from '../constants';

const projects = PROJECTS;

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
			<div className="relative rounded-xl overflow-hidden bg-primary-surface aspect-video shadow-lg">
				<img
					src={project.image}
					alt={project.title}
					className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
				/>

				<div className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6 pt-8">
					<p className="text-txt-secondary text-sm mb-4 flex-shrink-0">
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
								className="p-2 rounded-lg bg-accent hover:bg-accent-hover transition-colors"
								aria-label={`Open ${project.title} demo`}
							>
								<ExternalLink size={16} className="text-white" />
							</a>
							<a
								href={project.repo}
								target="_blank"
								rel="noopener noreferrer"
								className="p-2 rounded-lg bg-secondary/80 hover:bg-secondary transition-colors"
								aria-label={`Open ${project.title} repository`}
							>
								<Github size={16} className="text-white" />
							</a>
						</div>
					</div>
				</div>
			</div>

			<div className="mt-4 space-y-2">
				<h3 className="text-lg font-bold text-txt-primary group-hover:text-accent transition-colors">
					{project.title}
				</h3>
				<div className="flex flex-wrap gap-2">
					{project.tech.map((tech) => (
						<span
							key={tech}
							className="px-3 py-1 bg-primary-surface text-txt-secondary text-xs font-semibold rounded-full"
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
			className="section-padding bg-primary"
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
						<h2 className="text-5xl md:text-6xl font-bold text-txt-primary mb-4">
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
