import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HoverCard } from './HoverCard';
import { Figma, Film, Gamepad2, Palette } from 'lucide-react';

export const Hobbies = () => {
    const { ref, inView } = useInView({
        threshold: 0.1,
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
            transition: { duration: 0.6 },
        },
    };

    return (
        <section
            id="hobbies"
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
                    <div className="max-w-xl pl-6 border-l-2 border-accent relative">
                        <h2 className="text-4xl md:text-5xl font-bold text-txt-primary mb-2">
                            The Creative Arsenal
                        </h2>
                        <p className="text-txt-secondary text-lg">
                            Hybrid skills at the intersection of design, motion, and strategy.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">

                        {/* 1. UI/UX Design (Large: 2x1) */}
                        <motion.div variants={itemVariants} className="md:col-span-2 h-[300px]">
                            <HoverCard
                                title="UI/UX Design"
                                subtitle="Translating complex logic into intuitive interfaces."
                                icon={Figma}
                                image="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=2670&auto=format&fit=crop"
                                className="h-full"
                            />
                        </motion.div>

                        {/* 2. Video Editing (Tall: 1x2) */}
                        <motion.div variants={itemVariants} className="md:col-span-1 md:row-span-2 h-[300px] md:h-full">
                            <HoverCard
                                title="Video Editing"
                                subtitle="Visual storytelling, pacing, and motion graphics."
                                icon={Film}
                                image="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44c?q=80&w=2670&auto=format&fit=crop"
                                className="h-full"
                            />
                        </motion.div>

                        {/* 3. Gaming (Standard: 1x1) */}
                        <motion.div variants={itemVariants} className="md:col-span-1 h-[300px]">
                            <HoverCard
                                title="Competitive Gaming"
                                subtitle="Strategic thinking under pressure."
                                icon={Gamepad2}
                                image="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2670&auto=format&fit=crop"
                                className="h-full"
                            />
                        </motion.div>

                        {/* 4. Graphic Design (Standard: 1x1) */}
                        <motion.div variants={itemVariants} className="md:col-span-1 h-[300px]">
                            <HoverCard
                                title="Graphic Design"
                                subtitle="Composition, color theory, and branding."
                                icon={Palette}
                                image="https://images.unsplash.com/photo-1626785774573-4b7993143d2d?q=80&w=2670&auto=format&fit=crop"
                                className="h-full"
                            />
                        </motion.div>

                    </div>
                </motion.div>
            </div>
        </section>
    );
};
