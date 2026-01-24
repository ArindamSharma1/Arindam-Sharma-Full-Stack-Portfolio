import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const { ref, inView } = useInView({
    threshold: 0.15,
    triggerOnce: true,
  });

  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus('sending');

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="contact"
      data-section="contact"
      className="section-padding"
      ref={ref}
    >
      <div className="section-max-width">
        <motion.div
          className="space-y-16"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.div variants={headerVariants} className="max-w-xl pl-6 border-l-2 border-accent relative">
            <h2 className="text-4xl md:text-5xl font-bold text-txt-primary mb-2">
              Get In Touch
            </h2>
            <p className="text-txt-secondary text-lg">
              Have a project in mind? Let's talk.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div className="space-y-8" variants={containerVariants}>
              <motion.div
                className="p-6 rounded-lg bg-primary-surface border border-secondary/10 hover:border-accent/30 transition-colors"
                variants={itemVariants}
                whileHover={{ x: 8 }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-secondary/10 mt-1">
                    <Mail size={20} className="text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-txt-primary">Email</h3>
                    <a
                      href={`mailto:sharmaarindam091@gmail.com`}
                      className="text-accent hover:text-accent-dark transition-colors mt-1"
                    >
                      sharmaarindam091@gmail.com
                    </a>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="p-6 rounded-lg bg-primary-surface border border-secondary/10 hover:border-accent/30 transition-colors"
                variants={itemVariants}
                whileHover={{ x: 8 }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-secondary/10 mt-1">
                    <Phone size={20} className="text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-txt-primary">Phone</h3>
                    <a
                      href="tel:+918580705992"
                      className="text-accent hover:text-accent-hover transition-colors mt-1"
                    >
                      +91 8580705992
                    </a>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="p-6 rounded-lg bg-primary-surface border border-secondary/10 hover:border-accent/30 transition-colors"
                variants={itemVariants}
                whileHover={{ x: 8 }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-secondary/10 mt-1">
                    <MapPin size={20} className="text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-txt-primary">Location</h3>
                    <p className="text-txt-secondary mt-1">
                      India
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.form
              ref={formRef}
              className="space-y-6"
              variants={containerVariants}
              onSubmit={handleSubmit}
            >
              <motion.div variants={itemVariants}>
                <label
                  htmlFor="user_name"
                  className="block text-sm font-semibold text-txt-primary mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="user_name"
                  name="user_name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-lg bg-primary-surface border border-secondary/10 text-txt-primary focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all placeholder:text-txt-secondary/50"
                  required
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label
                  htmlFor="user_email"
                  className="block text-sm font-semibold text-txt-primary mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="user_email"
                  name="user_email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-lg bg-primary-surface border border-secondary/10 text-txt-primary focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all placeholder:text-txt-secondary/50"
                  required
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-txt-primary mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message here..."
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-primary-surface border border-secondary/10 text-txt-primary focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all resize-none placeholder:text-txt-secondary/50"
                  required
                ></textarea>
              </motion.div>

              <motion.button
                type="submit"
                disabled={status === 'sending'}
                className="button-primary flex items-center gap-2 group w-full justify-center disabled:opacity-70 disabled:cursor-not-allowed"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {status === 'sending' ? 'Sending...' : status === 'success' ? 'Message Sent!' : status === 'error' ? 'Failed to Send' : 'Send Message'}
                <Send
                  size={20}
                  className={`group-hover:translate-x-1 transition-transform ${status !== 'idle' ? 'hidden' : ''
                    }`}
                />
              </motion.button>

              {status === 'success' && (
                <motion.div
                  className="p-4 rounded-lg bg-secondary/10 border border-green-500/50 text-green-400 text-center font-semibold"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  Thank you! I'll get back to you soon.
                </motion.div>
              )}
              {status === 'error' && (
                <motion.div
                  className="p-4 rounded-lg bg-red-500/10 border border-red-500/50 text-red-400 text-center font-semibold"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  Something went wrong. Please try again later.
                </motion.div>
              )}
            </motion.form>
          </div>
        </motion.div>
        <motion.div
          className="mt-12 text-center text-sm text-slate-500 flex justify-center"
          variants={itemVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/*centered logo/link */}
        </motion.div>
      </div>
    </section>
  );
};
