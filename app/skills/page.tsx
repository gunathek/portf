"use client";
import Particles from "@/components/ui/particles";
import { motion } from "framer-motion";

const skills = [
    { name: "TypeScript", x: 0.6, y: 0.7 },
    { name: "React", x: 0.8, y: 0.8 },
    { name: "Next.js", x: 0.7, y: 0.6 },
    { name: "AWS", x: -0.4, y: 0.5 },
    { name: "PostgreSQL", x: 0.5, y: -0.3 },
    { name: "Docker", x: -0.6, y: -0.4 },
];

export default function Skills() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen w-full overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black p-4">
            <Particles
                className="absolute inset-0 -z-10"
                quantity={100}
            />
            
            <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative w-full max-w-[800px] aspect-square backdrop-blur-sm"
            >
                {/* X and Y axes */}
                <motion.div 
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/0 via-purple-500/30 to-purple-500/0" 
                />
                <motion.div 
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-purple-500/0 via-purple-500/30 to-purple-500/0" 
                />
                
                {/* Axis labels */}
                <motion.span 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                    className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 text-zinc-400 tracking-wider text-xs sm:text-sm font-light"
                >
                    Generalist
                </motion.span>
                <motion.span 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                    className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 text-zinc-400 tracking-wider text-xs sm:text-sm font-light"
                >
                    Specialist
                </motion.span>
                <motion.span 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="absolute top-2 sm:top-6 left-1/2 -translate-x-1/2 text-zinc-400 tracking-wider text-xs sm:text-sm font-light"
                >
                    More-relevant
                </motion.span>
                <motion.span 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="absolute bottom-2 sm:bottom-6 left-1/2 -translate-x-1/2 text-zinc-400 tracking-wider text-xs sm:text-sm font-light"
                >
                    Less-relevant
                </motion.span>
                
                {/* Plot points */}
                {skills.map((skill, index) => (
                    <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ 
                            delay: 0.8 + index * 0.1,
                            type: "spring",
                            stiffness: 260,
                            damping: 20
                        }}
                        whileHover={{ 
                            scale: 1.1,
                            transition: { duration: 0.2 }
                        }}
                        className="absolute transform -translate-x-1/2 -translate-y-1/2"
                        style={{
                            left: `${(skill.x + 1) * 50}%`,
                            top: `${(-skill.y + 1) * 50}%`,
                        }}
                    >
                        <div className="relative flex items-center justify-center">
                            <div className="absolute -inset-px bg-purple-500 rounded-full blur-lg opacity-75 animate-pulse" />
                            <div className="relative bg-purple-500 text-white px-2 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium shadow-lg border border-purple-400/50 backdrop-blur-sm whitespace-nowrap">
                                {skill.name}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}
