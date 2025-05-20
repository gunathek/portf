"use client";
import Particles from "@/components/ui/particles";
import React from "react";
import {SparklesCore} from "@/components/ui/sparkles";
// import Image from "next/image";
import { Timeline } from "@/components/ui/timeline";
import {BorderBeam} from "@/components/ui/border-beam";

export default function Work() {

    return (
        <div>
            <Particles
                className="absolute inset-0 -z-10"
                quantity={100}
            />
            <div className="flex min-h-screen w-full items-center justify-center p-4">
                <div
                    className="relative h-2/3 w-2/3 overflow-y-auto rounded-lg border bg-background p-4 md:shadow-xl">
                    <BorderBeam
                        size={300}
                        duration={15}
                        delay={0}
                    />
                    {/*<TimelineDemo/>*/}
                </div>
            </div>
        </div>
    );
}

// export function SparklesPreview() {
//     return (
//         <div className="h-[40rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
//             <h1 className="md:text-7xl text-3xl lg:text-9xl font-bold text-center text-white relative z-20">
//                 work
//             </h1>
//             <div className="w-[40rem] h-40 relative">
//                 {/* Gradients */}
//                 <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
//                 <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
//                 <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
//                 <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
//
//                 {/* Core component */}
//                 <SparklesCore
//                     background="transparent"
//                     minSize={0.4}
//                     maxSize={1}
//                     particleDensity={1200}
//                     className="w-full h-full"
//                     particleColor="#FFFFFF"
//                 />
//
//                 {/* Radial Gradient to prevent sharp edges */}
//                 <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
//             </div>
//         </div>
//     );
// }

// export function TimelineDemo() {
//     const data = [
//         {
//             title: "2024",
//             content: (
//                 <div>
//                     <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
//                         Built and launched Aceternity UI and Aceternity UI Pro from scratch
//                     </p>
//                     <div className="grid gap-4">
//                         <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
//                             Built and launched Aceternity UI and Aceternity UI Pro from scratch
//                         </p>
//                         <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
//                             Built and launched Aceternity UI and Aceternity UI Pro from scratch
//                         </p>
//                         <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
//                             Built and launched Aceternity UI and Aceternity UI Pro from scratch
//                         </p>
//                         <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
//                             Built and launched Aceternity UI and Aceternity UI Pro from scratch
//                         </p>
//                         <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
//                             Built and launched Aceternity UI and Aceternity UI Pro from scratch
//                         </p>
//                         <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
//                             Built and launched Aceternity UI and Aceternity UI Pro from scratch
//                         </p>
//                         <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
//                             Built and launched Aceternity UI and Aceternity UI Pro from scratch
//                         </p>
//                         <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
//                             Built and launched Aceternity UI and Aceternity UI Pro from scratch
//                         </p>
//                         <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
//                             Built and launched Aceternity UI and Aceternity UI Pro from scratch
//                         </p>
//                         <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
//                             Built and launched Aceternity UI and Aceternity UI Pro from scratch
//                         </p>
//                         <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
//                             Built and launched Aceternity UI and Aceternity UI Pro from scratch
//                         </p>
//                         <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
//                             Built and launched Aceternity UI and Aceternity UI Pro from scratch
//                         </p>
//                     </div>
//                 </div>
//             ),
//         },
//         {
//             title: "Early 2023",
//             content: (
//                 <div>
//                     <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
//                         I usually run out of copy, but when I see content this big, I try to
//                         integrate lorem ipsum.
//                     </p>
//                     <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
//                         Lorem ipsum is for people who are too lazy to write copy. But we are
//                         not. Here are some more example of beautiful designs I built.
//                     </p>
//                     <div className="grid grid-cols-2 gap-4">
//                         <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
//                             Built and launched Aceternity UI and Aceternity UI Pro from scratch
//                         </p>
//                         <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
//                             Built and launched Aceternity UI and Aceternity UI Pro from scratch
//                         </p>
//                         <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
//                             Built and launched Aceternity UI and Aceternity UI Pro from scratch
//                         </p>
//                         <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
//                             Built and launched Aceternity UI and Aceternity UI Pro from scratch
//                         </p>
//                         <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
//                             Built and launched Aceternity UI and Aceternity UI Pro from scratch
//                         </p>
//                         <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
//                             Built and launched Aceternity UI and Aceternity UI Pro from scratch
//                         </p>
//                         <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
//                             Built and launched Aceternity UI and Aceternity UI Pro from scratch
//                         </p>
//                         <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
//                             Built and launched Aceternity UI and Aceternity UI Pro from scratch
//                         </p>
//                         <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
//                             Built and launched Aceternity UI and Aceternity UI Pro from scratch
//                         </p>
//                         <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
//                             Built and launched Aceternity UI and Aceternity UI Pro from scratch
//                         </p>
//                         <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
//                             Built and launched Aceternity UI and Aceternity UI Pro from scratch
//                         </p>
//                         <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
//                             Built and launched Aceternity UI and Aceternity UI Pro from scratch
//                         </p>
//                     </div>
//                 </div>
//             ),
//         },
//         {
//             title: "Changelog",
//             content: (
//                 <div>
//                     <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
//                         Deployed 5 new components on Aceternity today
//                     </p>
//                     <div className="mb-8">
//                         <div
//                             className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
//                             ✅ Card grid component
//                         </div>
//                         <div
//                             className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
//                             ✅ Startup template Aceternity
//                         </div>
//                         <div
//                             className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
//                             ✅ Random file upload lol
//                         </div>
//                         <div
//                             className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
//                             ✅ Himesh Reshammiya Music CD
//                         </div>
//                         <div
//                             className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
//                             ✅ Salman Bhai Fan Club registrations open
//                         </div>
//                     </div>
//                     <div className="grid grid-cols-2 gap-4">
//                         <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
//                             Built and launched Aceternity UI and Aceternity UI Pro from scratch
//                         </p>
//                         <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
//                             Built and launched Aceternity UI and Aceternity UI Pro from scratch
//                         </p>
//                         <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
//                             Built and launched Aceternity UI and Aceternity UI Pro from scratch
//                         </p>
//                         <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
//                             Built and launched Aceternity UI and Aceternity UI Pro from scratch
//                         </p>
//                         <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
//                             Built and launched Aceternity UI and Aceternity UI Pro from scratch
//                         </p>
//                         <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
//                             Built and launched Aceternity UI and Aceternity UI Pro from scratch
//                         </p>
//                         <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
//                             Built and launched Aceternity UI and Aceternity UI Pro from scratch
//                         </p>
//                         <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
//                             Built and launched Aceternity UI and Aceternity UI Pro from scratch
//                         </p>
//                         <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
//                             Built and launched Aceternity UI and Aceternity UI Pro from scratch
//                         </p>
//                         <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
//                             Built and launched Aceternity UI and Aceternity UI Pro from scratch
//                         </p>
//                         <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
//                             Built and launched Aceternity UI and Aceternity UI Pro from scratch
//                         </p>
//                         <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
//                             Built and launched Aceternity UI and Aceternity UI Pro from scratch
//                         </p>
//                     </div>
//                 </div>
//             ),
//         },
//     ];
//     return (
//         <div className="w-full">
//             <Timeline data={data}/>
//         </div>
//     );
// }