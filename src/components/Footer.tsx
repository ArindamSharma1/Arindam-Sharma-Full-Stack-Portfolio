import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Heart } from 'lucide-react';
import { SOCIALS } from '../constants';

const socials = SOCIALS;

export const Footer = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <footer
      className="bg-primary-surface text-txt-primary section-padding"
      ref={ref}
    >
      <div className="section-max-width">
        <motion.div
          className="space-y-12"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <div className="grid md:grid-cols-3 gap-12">
            <motion.div className="space-y-4" variants={itemVariants}>
              <h3 className="text-2xl font-bold">Arindam.</h3>
              <p className="text-txt-secondary leading-relaxed">
                Crafting beautiful digital experiences through clean code and thoughtful design.
              </p>
            </motion.div>

            <motion.div className="space-y-4" variants={itemVariants}>
              <h4 className="text-lg font-semibold">Quick Links</h4>
              <ul className="space-y-2">
                {['Home', 'About Me', 'Experience', 'Projects', 'Contact'].map(
                  (link) => (
                    <li key={link}>
                      <a
                        href={`#${link.toLowerCase().replace(' ', '-')}`}
                        className="text-txt-secondary hover:text-accent transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </motion.div>

            <motion.div className="space-y-4" variants={itemVariants}>
              <h4 className="text-lg font-semibold">Connect With Me</h4>
              <div className="flex items-center gap-4">
                {socials.map((social) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className="p-3 rounded-lg bg-secondary/10 text-secondary hover:bg-accent hover:text-white transition-all"
                      whileHover={{ scale: 1.15, rotate: 12 }}
                    >
                      <Icon size={20} />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </div>

          <motion.div
            className="pt-8 border-t border-primary/20 flex flex-col md:flex-row items-center justify-between gap-4 text-txt-secondary text-sm"
            variants={itemVariants}
          >
            <div className="flex items-center gap-2">
              <span>Made with</span>
              <Heart size={16} className="text-accent fill-accent" />
              <span>By Arindam Sharma</span>
            </div>
            <span>&copy; 2025 All rights reserved.</span>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};
