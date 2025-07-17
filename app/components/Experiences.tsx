import { Briefcase, GraduationCap } from "lucide-react";
import experiences from "@/app/lib/experiences.json";
import BlurText from "./external/BlurText";

const iconMap = {
    internship: Briefcase,
    education: GraduationCap,
};

export default function Experiences() {
    const internships = experiences.filter((item) => item.type === "internship");
    const pors = experiences.filter((item) => item.type === "por");

    const education = {
        type: "education",
        year: "2023 -- 2027",
        title: "Bachelor of Technology in Engineering Physics",
        organization: "Indian Institute of Technology, Delhi",
        icon: "GraduationCap",
        skills: [],
    };

    return (
        <section id="experiences" className="relative z-10 -mt-36 flex w-full flex-col items-center justify-center overflow-hidden py-16 md:py-20 lg:py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="max-w-4xl">
                    <BlurText
                        text="Experiences"
                        delay={30}
                        animateBy="words"
                        direction="top"

                        className="text-4xl font-bold tracking-tight text-white sm:text-5xl"
                    />
                    <BlurText
                        text="A brief overview of my professional and academic journey so far."
                        delay={30}
                        animateBy="words"
                        direction="top"

                        className="mt-4 max-w-2xl text-lg leading-8 text-zinc-400"
                    />
                </div>

                <div className="relative mt-12 grid gap-x-12">
                    <div className="absolute left-6 top-0 hidden w-px bg-zinc-800 md:block" />

                    {/* Internships */}
                    {internships.map((item, index) => {
                        const Icon = iconMap[item.type as keyof typeof iconMap];
                        return (
                            <div key={index} className="group relative flex items-start">
                                <div className="absolute -left-0.5 top-2 hidden h-2 w-2 rounded-full bg-white md:block" />
                                <div className="absolute -left-12 top-2 hidden text-white md:block">
                                    <Icon className="h-6 w-6" />
                                </div>
                                <div className="ml-0 md:ml-6">
                                    <BlurText
                                        text={item.title}
                                        delay={30}
                                        animateBy="words"
                                        direction="top"

                                        className="text-base font-semibold text-zinc-300"
                                    />
                                    <BlurText
                                        text={item.organization}
                                        delay={30}
                                        animateBy="words"
                                        direction="top"

                                        className="mt-1 text-xs text-zinc-400"
                                    />
                                    <BlurText
                                        text={item.year}
                                        delay={30}
                                        animateBy="words"
                                        direction="top"

                                        className="mt-1 text-xs text-zinc-500"
                                    />
                                    <BlurText
                                        text={item.description}
                                        delay={30}
                                        animateBy="words"
                                        direction="top"

                                        className="mt-2 text-sm text-zinc-400"
                                    />
                                </div>
                            </div>
                        );
                    })}

                    {/* Education */}
                    <div className="group relative flex items-start">
                        <div className="absolute -left-0.5 top-2 hidden h-2 w-2 rounded-full bg-white md:block" />
                        <div className="absolute -left-12 top-2 hidden text-white md:block">
                            <GraduationCap className="h-6 w-6" />
                        </div>
                        <div className="ml-0 md:ml-6">
                            <BlurText
                                text={education.title}
                                delay={30}
                                animateBy="words"
                                direction="top"

                                className="text-base font-semibold text-zinc-300"
                            />
                            <BlurText
                                text={education.organization}
                                delay={30}
                                animateBy="words"
                                direction="top"

                                className="mt-1 text-xs text-zinc-400"
                            />
                            <BlurText
                                text={education.year}
                                delay={30}
                                animateBy="words"
                                direction="top"

                                className="mt-1 text-xs text-zinc-500"
                            />
                            

                            {/* PoRs */}
                            <div className="mt-4">
                                <BlurText
                                    text="Positions of Responsibility"
                                    delay={30}
                                    animateBy="words"
                                    direction="top"

                                    className="text-lg font-semibold text-zinc-200"
                                />
                                <div className="relative mt-4 grid gap-x-8">
                                    <div className="absolute left-4 top-0 hidden w-px bg-zinc-700 md:block" />
                                    {pors.map((por, idx) => (
                                        <div key={idx} className="group relative flex items-start pl-8">
                                            <div className="absolute -left-0.5 top-2.5 h-2 w-2 rounded-full bg-zinc-400" />
                                            <div>
                                                <BlurText
                                                    text={por.title}
                                                    delay={30}
                                                    animateBy="words"
                                                    direction="top"

                                                    className="text-base font-semibold text-zinc-300"
                                                />
                                                <BlurText
                                                    text={por.organization}
                                                    delay={30}
                                                    animateBy="words"
                                                    direction="top"

                                                    className="mt-1 text-xs text-zinc-400"
                                                />
                                                <BlurText
                                                    text={por.year}
                                                    delay={30}
                                                    animateBy="words"
                                                    direction="top"

                                                    className="mt-1 text-xs text-zinc-500"
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
