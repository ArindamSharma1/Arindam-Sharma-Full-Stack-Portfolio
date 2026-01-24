import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import TiltedCard from './TiltedCard';

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
                            Beyond code. Exploring the intersection of design, motion, and interactivity.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
                        {/* Large Card: UI/UX Design */}
                        <motion.div variants={itemVariants} className="md:col-span-2 relative h-[300px] md:h-full">
                            <TiltedCard
                                imageSrc="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=2670&auto=format&fit=crop"
                                altText="UI/UX Design in Figma"
                                captionText="UI/UX & Prototyping"
                                containerHeight="100%"
                                containerWidth="100%"
                                imageHeight="100%"
                                imageWidth="100%"
                                rotateAmplitude={10}
                                scaleOnHover={1.02}
                                showMobileWarning={false}
                                showTooltip={true}
                                displayOverlayContent={true}
                                overlayContent={
                                    <div className="absolute bottom-6 left-6 p-4 bg-primary/80 backdrop-blur-md border border-white/10 rounded-lg">
                                        <h3 className="text-xl font-bold text-white">UI/UX Design</h3>
                                        <p className="text-sm text-txt-secondary">Detailed prototyping in Figma</p>
                                    </div>
                                }
                            />
                        </motion.div>

                        {/* Tall Card: Video Editing */}
                        <motion.div variants={itemVariants} className="md:col-span-1 md:row-span-2 relative h-[300px] md:h-full">
                            <TiltedCard
                                imageSrc="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44c?q=80&w=2670&auto=format&fit=crop"
                                altText="Video Editing Timeline"
                                captionText="Motion Graphics & Editing"
                                containerHeight="100%"
                                containerWidth="100%"
                                imageHeight="100%"
                                imageWidth="100%"
                                rotateAmplitude={15}
                                scaleOnHover={1.05}
                                showMobileWarning={false}
                                showTooltip={true}
                                displayOverlayContent={true}
                                overlayContent={
                                    <div className="absolute bottom-6 left-6 p-4 bg-primary/80 backdrop-blur-md border border-white/10 rounded-lg w-[calc(100%-3rem)]">
                                        <h3 className="text-xl font-bold text-white">Video Editing</h3>
                                        <p className="text-sm text-txt-secondary">Visual storytelling & Motion</p>
                                    </div>
                                }
                            />
                        </motion.div>

                        {/* Standard Card: Gaming */}
                        <motion.div variants={itemVariants} className="md:col-span-1 relative h-[300px] md:h-full">
                            <TiltedCard
                                imageSrc="https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=2670&auto=format&fit=crop"
                                altText="Gaming Setup"
                                captionText="Competitive Gaming"
                                containerHeight="100%"
                                containerWidth="100%"
                                imageHeight="100%"
                                imageWidth="100%"
                                rotateAmplitude={12}
                                scaleOnHover={1.05}
                                showMobileWarning={false}
                                showTooltip={true}
                                displayOverlayContent={true}
                                overlayContent={
                                    <div className="absolute top-6 right-6 p-3 bg-accent/90 backdrop-blur rounded-lg">
                                        <span className="text-xs font-bold text-white uppercase tracking-wider">Strategic</span>
                                    </div>
                                }
                            />
                        </motion.div>

                        {/* Standard Card: Graphic Design */}
                        <motion.div variants={itemVariants} className="md:col-span-1 relative h-[300px] md:h-full">
                            <TiltedCard
                                imageSrc="https://images.unsplash.com/photo-1626785774573-4b7993143d2d?q=80&w=2670&auto=format&fit=crop"
                                altText="Graphic Design Art"
                                captionText="Graphic Arts"
                                containerHeight="100%"
                                containerWidth="100%"
                                imageHeight="100%"
                                imageWidth="100%"
                                rotateAmplitude={12}
                                scaleOnHover={1.05}
                                showMobileWarning={false}
                                showTooltip={true}
                                displayOverlayContent={true}
                                overlayContent={
                                    <div className="absolute top-6 right-6 p-3 bg-secondary/90 backdrop-blur rounded-lg">
                                        <span className="text-xs font-bold text-white uppercase tracking-wider">Creative</span>
                                    </div>
                                }
                            />
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
