import { useState } from "react";
import Tabs from "../components/Tabs";

const TABS = ["Internship", "Education"];

type TimelineEntry = {
    date: string;
    title: string;
    subtitle: string;
    description: React.ReactNode;
};

const TIMELINE: Record<string, TimelineEntry[]> = {
    Internship: [
        {
            date: "February 2026 - April 2026",
            title: "Asia United Bank Corporation",
            subtitle: "IT Intern - AI Model Engineer",
            description:
            <>
                ● Developed and evaluated multiple machine learning models, including Logistic Regression,
                Neural Network, XGBoost, RandomForest, and LightGBM, to predict good or bad behavior based
                on their demographics, and etc.
                <br/>
                ● Implemented an interactive dashboard using Streamlit and integrated using FastAPI for efficient
                and scalable deployment within the company.


            </>
        },
    ],
    
    Education: [
        {
            date: "2022 — 2026",
            title: "De La Salle Lipa",
            subtitle: "Bachelor of Science in Computer Science",
            description:
            <>
                • Graduated and got my diploma in Bachelor of Science major in Internet of Things
                <br />
                • Consistent Dean's Lister 
                <br />
                • Best Thesis Awardee (Bronze)
            </>
       
        },
        {
            date: "2020 — 2022",
            title: "First Asia Institute of Technology and Humanities",
            subtitle: "Senior High School - STEM",
            description:
                <>
                • Developed my interest in programming and technology through various projects and coursework.
                <br />
                • Consistent Honor Student 
            </>

        },
    ],
};

export default function AboutPage() {
    const [activeTab, setActiveTab] = useState(TABS[0]);
    const entries = TIMELINE[activeTab] ?? [];

    return (
        <main id="about" className="min-h-screen w-full bg-th-black flex flex-col items-center justify-center">
            <div className="relative w-full max-w-4xl mx-auto">
                <div className='items-left justify-center text-lg tracking-wide font-bold uppercase text-th-owhite/90'>About </div>

                {/* Top Divider */}
                <div className="footer-divider bg-th-border/40 h-px w-full mt-1" />

                {/* ================= ABOUT ME (STATIC) ================= */}

                <div className="grid grid-cols-[0.5fr_1.5fr] items-start py-6">

                    <div className="m-2">
                        <div className="flex items-center justify-center">
                            <img
                                src="src/assets/diploma.jpg"
                                alt="Profile"
                                className="h-auto w-48 rounded-sm object-cover border border-th-descrip hover:scale-105 transition duration-300"
                            />
                        </div>
                    </div>

                    <div className="m-2">
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
                                    <p className="text-md font-normal text-justify text-th-owhite">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Sed do eiusmod tempor incididunt ut labore et dolore magna
                                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </p>

                                    <p className="text-md font-normal text-justify text-th-owhite">
                                        Duis aute irure dolor in reprehenderit in voluptate velit
                                        esse cillum dolore eu fugiat nulla pariatur.
                                        Excepteur sint occaecat cupidatat non proident.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-divider bg-th-border/40 h-px w-full" />

                {/* ================= TIMELINE (TABBED) ================= */}
                <div className='items-left justify-center text-lg tracking-wide font-bold uppercase text-th-owhite/90 mt-10'>Experience </div>
                <div className="footer-divider bg-th-border/40 h-px w-full mt-1" />
                <div className="flex flex-row gap-3 py-0">
                    
                    

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
                                    <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[0.1px] bg-th-border/40" />

                                    {/* Circle */}
                                    
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

                                    <p className="text-sm text-th-lgray/80 mt-2 gap-1 leading-relaxed">
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
