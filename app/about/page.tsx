"use client";
import Particles from "@/components/ui/particles";
// import ShineBorder from "@/components/ui/shine-border";
// import {AuroraText} from "@/components/ui/aurora-text";

export default function About() {

    return (
        <div
            className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
            <Particles
                className="absolute inset-0 -z-10"
                quantity={100}
            />
            {/*<ShineBorder*/}
            {/*    className="absolute flex h-2/3 w-2/3 flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl"*/}
            {/*    color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}>*/}
            {/*</ShineBorder>*/}
        </div>
    );
}

// export function AuroraTextDemo() {
//     return (
//         <h1 className="text-4xl font-bold tracking-tighter md:text-5xl lg:text-7xl">
//             Ship <AuroraText>beautiful</AuroraText>
//         </h1>
//     );
// }

// import { WarpBackground } from "@/components/ui/warp-background";
// import {
//     Card,
//     CardContent,
//     CardDescription,
//     CardTitle,
// } from "@/components/ui/card";
//
// export function ExampleComponentDemo() {
//     return (
//         <WarpBackground>
//             <Card className="w-80">
//                 <CardContent className="flex flex-col gap-2 p-4">
//                     <CardTitle>Congratulations on Your Promotion!</CardTitle>
//                     <CardDescription>
//                         Your hard work and dedication have paid off. We&apos;re thrilled to
//                         see you take this next step in your career. Keep up the fantastic
//                         work!
//                     </CardDescription>
//                 </CardContent>
//             </Card>
//         </WarpBackground>
//     );
// }
