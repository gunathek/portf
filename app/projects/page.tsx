import Particles from "@/components/ui/particles";
import {BorderBeam} from "@/components/ui/border-beam";

export default function Projects() {

    return (
        <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
            <Particles
                className="absolute inset-0 -z-10"
                quantity={100}
            />
            <div className="absolute flex h-2/3 w-2/3 flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
            <BorderBeam
                size={300} duration={15} delay={0}/>
            </div>
        </div>
    );
}