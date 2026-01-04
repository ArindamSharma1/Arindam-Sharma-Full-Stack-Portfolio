import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { TECH_CATEGORIES } from '../constants';

const techCategories = TECH_CATEGORIES;

const TechItem = ({ tech, index }: { tech: any; index: number }) => {
  const Icon = tech.icon;
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        delay: index * 0.05,
      },
    },
  };

  return (
    <motion.div
      className="tech-icon cursor-pointer group"
      variants={containerVariants}
      whileHover={{
        scale: 1.15,
        boxShadow: '0 12px 24px rgba(56, 189, 248, 0.2)',
      }}
    >
      <div className="flex flex-col items-center gap-2">
        <Icon
          size={32}
          className="text-secondary group-hover:text-accent transition-colors"
        />
        <span className="text-xs font-semibold text-txt-secondary group-hover:text-txt-primary text-center transition-colors">
          {tech.name}
        </span>
      </div>
    </motion.div>
  );
};

export const TechStack = () => {
  const { ref, inView } = useInView({
    threshold: 0.15,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      className="section-padding bg-primary"
      ref={ref}
    >
      <div className="section-max-width">
        <motion.div
          className="space-y-16"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.div variants={categoryVariants}>
            <h2 className="text-5xl md:text-6xl font-bold text-txt-primary mb-4">
              Tech Stack
            </h2>
            <div className="w-24 h-1 bg-accent rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {techCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.name}
                className="space-y-6"
                variants={categoryVariants}
              >
                <h3 className="text-2xl font-bold text-txt-primary">
                  {category.name}
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {category.techs.map((tech, index) => (
                    <TechItem
                      key={tech.name}
                      tech={tech}
                      index={categoryIndex * category.techs.length + index}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
