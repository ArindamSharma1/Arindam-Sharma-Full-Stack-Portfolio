import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface HoverCardProps {
    title: string;
    subtitle: string;
    icon?: LucideIcon;
    image: string;
    className?: string; // For layout (col-span, etc.)
}

export const HoverCard = ({ title, subtitle, icon: Icon, image, className = '' }: HoverCardProps) => {
    return (
        <motion.div
            className={`relative group overflow-hidden rounded-2xl bg-primary-surface border border-white/5 ${className}`}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
        >
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />
            </div>

            {/* Content */}
            <div className="absolute bottom-0 left-0 w-full p-6 z-10 flex flex-col items-start justify-end h-full">
                {Icon && (
                    <div className="mb-4 p-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 text-white group-hover:bg-accent group-hover:border-accent transition-colors duration-300">
                        <Icon size={24} />
                    </div>
                )}

                <h3 className="text-2xl font-bold text-white mb-1 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    {title}
                </h3>
                <p className="text-sm text-gray-300 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-75">
                    {subtitle}
                </p>
            </div>

            {/* Hover visual cue (border glow) */}
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-accent/50 rounded-2xl transition-colors duration-300 z-20 pointer-events-none" />
        </motion.div>
    );
};
