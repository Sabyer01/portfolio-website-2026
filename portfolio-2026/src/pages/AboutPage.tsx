import { useState } from "react";
import Tabs from "../components/Tabs";

const TABS = ["Internship", "Education"];

type TimelineEntry = {
    date: string;
    title: string;
    subtitle: string;
    description: string;
};

const TIMELINE: Record<string, TimelineEntry[]> = {
    Internship: [
        {
            date: "2026",
            title: "Internship",
            subtitle: "Company Name",
            description:
                "Worked on developing and maintaining web applications.",
        },
    ],
    
    Education: [
        {
            date: "2022 — 2026",
            title: "BS Information Technology",
            subtitle: "University Name",
            description:
                "Focused on web development, software engineering and databases.",
        },
        {
            date: "2020 — 2022",
            title: "Senior High School",
            subtitle: "School Name",
            description:
                "Information and Communications Technology strand.",
        },
    ],
};

export default function AboutPage() {
    const [activeTab, setActiveTab] = useState(TABS[0]);
    const entries = TIMELINE[activeTab] ?? [];

    return (
        <main id="about" className="min-h-screen w-full bg-th-black flex flex-col items-center justify-center">
            <div className="relative w-full max-w-4xl mx-auto">
                <div className='items-left justify-center py-5 text-lg tracking-[0.2em] font-bold uppercase text-th-owhite'>About </div>

                {/* Top Divider */}
                <div className="footer-divider bg-th-border h-px w-full" />

                {/* ================= ABOUT ME (STATIC) ================= */}

                <div className="grid grid-cols-[0.55fr_1.45fr] gap-3 items-start py-6">

                    <div className="m-2">
                        <div className="flex items-center justify-center">
                            <img
                                src="src/assets/diploma.jpg"
                                alt="Profile"
                                className="h-full w-auto rounded-sm object-cover border border-th-descrip hover:scale-105 transition duration-300"
                            />
                        </div>
                    </div>

                    <div className="m-3">
                        <div className="flex h-full flex-col justify-between items-start">

                            {/* Top */}
                            <div className='flex flex-col'>
                                <span className="text-md font-bold text-th-white">
                                    Xavier Gelligan
                                </span>

                                <time className="text-sm font-normal text-th-border">
                                    Fullstack Developer
                                </time>

                                {/* Bottom */}
                                <div className="flex flex-col gap-2 pt-4">
                                    <p className="text-sm font-normal text-justify text-th-owhite">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Sed do eiusmod tempor incididunt ut labore et dolore magna
                                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </p>

                                    <p className="text-sm font-normal text-justify text-th-owhite">
                                        Duis aute irure dolor in reprehenderit in voluptate velit
                                        esse cillum dolore eu fugiat nulla pariatur.
                                        Excepteur sint occaecat cupidatat non proident.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-divider bg-th-border h-px w-full" />

                {/* ================= TIMELINE (TABBED) ================= */}
                <div className='items-left justify-center py-5 text-lg tracking-[0.2em] font-bold uppercase text-th-owhite mt-20'>Experience </div>
                <div className="footer-divider bg-th-border h-px w-full" />
                <div className="flex flex-row gap-3 py-6 pb-20">
                    
                    

                    {/* Tabs stacked on the left, aligned to the text on the right */}
                    <div className="basis-[27.5%] shrink-0 pt-1.5">
                        <Tabs tabs={TABS} activeTab={activeTab} onChange={setActiveTab} />
                    </div>

                    {/* Timeline */}
                    <div className="flex-1">
                        {entries.map((entry) => (
                            <div
                                key={`${activeTab}-${entry.title}`}
                                className="flex flex-row gap-4"
                            >
                                {/* Rail */}
                                <div className="relative w-4 shrink-0 self-stretch">

                                    {/* Vertical line */}
                                    <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-th-border/50" />

                                    {/* Circle */}
                                    <div className="absolute left-1/2 -translate-x-1/2 top-[1.5rem] w-4 h-4 rounded-full bg-th-theme border-2 border-th-black z-10" />
                                </div>

                                {/* Text */}
                                <div className="py-6">
                                    <time className="text-xs text-th-border">
                                        {entry.date}
                                    </time>

                                    <h3 className="text-md font-semibold text-th-white mt-1">
                                        {entry.title}
                                    </h3>

                                    <span className="text-sm text-th-border">
                                        {entry.subtitle}
                                    </span>

                                    <p className="text-sm text-th-lgray/80 mt-2">
                                        {entry.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </main>
    );
}
