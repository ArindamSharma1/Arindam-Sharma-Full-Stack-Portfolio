import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Check } from 'lucide-react';

const features = [
  'Product-Focused Development',
  'Responsive Interfaces',
  'Backend API Integration',
  'Performance Optimization',
  'Clean Architecture',
  'Accessible UI Design'
];

export const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section
      id="about"
      data-section="about"
      className="section-padding"
      ref={ref}
    >
      <div className="section-max-width">
        <motion.div
          className="space-y-12"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.div variants={itemVariants}>
            <h2 className="text-5xl md:text-6xl font-bold text-txt-primary mb-4">
              About Me.
            </h2>
            <div className="w-24 h-1 bg-accent rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              className="space-y-6"
              variants={containerVariants}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
            >
              <motion.p
                className="text-lg text-txt-secondary leading-relaxed"
                variants={itemVariants}
              >
                I’m passionate about building reliable, user-centric web applications that balance clean frontend experiences with well-structured backend systems. My approach focuses on clarity, performance, and scalability across the full stack.
              </motion.p>

              <motion.p
                className="text-lg text-txt-secondary leading-relaxed"
                variants={itemVariants}
              >
                Whether I’m designing responsive React interfaces, developing RESTful APIs with Node and Express, or managing data with MongoDB, I pay close attention to structure, performance, and maintainability. I value clean, readable code that can scale and evolve over time.
              </motion.p>

              <motion.p
                className="text-lg text-txt-secondary leading-relaxed"
                variants={itemVariants}
              >
                With a strong foundation in modern web technologies and a commitment to continuous learning, I keep improving my workflow and staying current with best practices to deliver practical, production-ready solutions.
              </motion.p>
            </motion.div>

            <motion.div
              className="space-y-4"
              variants={containerVariants}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  className="flex items-center gap-4 p-4 rounded-lg bg-primary-surface hover:bg-secondary/10 transition-colors"
                  variants={itemVariants}
                  whileHover={{ x: 8 }}
                >
                  <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                    <Check size={16} className="text-white" />
                  </div>
                  <span className="text-txt-primary font-medium">{feature}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
