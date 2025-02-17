"use client";
import Particles from "@/components/ui/particles";

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
        <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
            <Particles
                className="absolute inset-0 -z-10"
                quantity={100}
            />
            
            <div className="relative w-[800px] h-[800px] backdrop-blur-sm">
                {/* X and Y axes */}
                <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/0 via-purple-500/30 to-purple-500/0" />
                <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-purple-500/0 via-purple-500/30 to-purple-500/0" />
                
                {/* Axis labels */}
                <span className="absolute left-6 top-1/2 -translate-y-1/2 text-zinc-500 tracking-wider text-sm font-light">Generalist</span>
                <span className="absolute right-6 top-1/2 -translate-y-1/2 text-zinc-500 tracking-wider text-sm font-light">Specialist</span>
                <span className="absolute top-6 left-1/2 -translate-x-1/2 text-zinc-500 tracking-wider text-sm font-light">More-relevant</span>
                <span className="absolute bottom-6 left-1/2 -translate-x-1/2 text-zinc-500 tracking-wider text-sm font-light">Less-relevant</span>
                
                {/* Plot points */}
                {skills.map((skill) => (
                    <div
                        key={skill.name}
                        className="absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 hover:scale-110"
                        style={{
                            left: `${(skill.x + 1) * 50}%`,
                            top: `${(-skill.y + 1) * 50}%`,
                        }}
                    >
                        <div className="relative flex items-center justify-center">
                            <div className="absolute -inset-px bg-purple-500 rounded-full blur-md opacity-75" />
                            <div className="relative bg-purple-500 text-white px-4 py-1.5 rounded-full text-sm font-medium shadow-lg border border-purple-400/50">
                                {skill.name}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
