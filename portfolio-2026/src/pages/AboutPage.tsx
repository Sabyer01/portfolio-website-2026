import { useState } from "react";
import Tabs from "../components/Tabs";

const TABS = ["Internship", "Education"];

export default function AboutPage() {
    const [activeTab, setActiveTab] = useState(TABS[0]);

    return (
        <main id="about" className="min-h-screen w-full bg-th-black flex flex-col items-center justify-center"
        >
            <div className="relative w-full max-w-4xl mx-auto">
                <div className='items-left justify-center py-5 text-lg tracking-[0.2em] font-bold uppercase text-th-owhite'>Experience </div>

                {/* Top Divider */}
                <div className="footer-divider bg-th-border h-px w-full" />

                {/* ================= ABOUT ME (STATIC) ================= */}

                <div className="grid grid-cols-[0.5fr_1.5fr] gap-10 items-center py-10">

                    <div className="m-4">
                        <div className="flex items-center justify-center">
                            <img
                                src="src/assets/diploma.jpg"
                                alt="Profile"
                                className="w-[180px] h-[200px] rounded-sm object-cover border border-th-descrip hover:scale-105 transition duration-300"
                            />
                        </div>
                    </div>

                    <div className="m-4 h-[200px]">
    <div className="flex h-full flex-col justify-between items-start">

        {/* Top */}
        <div>
            <span className="text-md font-bold text-th-white">
                About Me
            </span>
        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-10">
            <p className="text-sm font-medium text-justify text-th-owhite">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>

            <p className="text-sm font-medium text-justify text-th-owhite">
                Duis aute irure dolor in reprehenderit in voluptate velit
                esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident.
            </p>
        </div>
        </div>
    </div>
</div>

                {/* Divider */}
                
             

                {/* Tabs */}
                <Tabs
                    tabs={TABS}
                    activeTab={activeTab}
                    onChange={setActiveTab}
                    
                />
            

                {/* Divider */}
             

                {/* ================= CHANGING CONTENT ================= */}

                <div className="py-10">

                    {activeTab === "Internship" && (

                        <div className="grid grid-cols-[0.5fr_1.5fr] gap-10 items-center">

                            <div className="m-4">
                                <div className="flex items-center justify-center">
                                    <img
                                        src="src/assets/internship.jpg"
                                        alt="Internship"
                                        className="w-[180px] h-[143px] rounded-sm bg-th-white object-cover border border-th-descrip hover:scale-105 transition duration-300"
                                    />
                                </div>
                            </div>

                            <div className="m-4">
                                <div className="flex flex-col gap-3">

                                    <span className="text-md font-bold text-th-white">
                                        Internship
                                    </span>

                                    <time className="text-sm font-medium text-th-border">
                                        February – April 2026
                                    </time>

                                    <p className="text-sm font-medium text-justify text-th-owhite">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua.
                                    </p>

                                </div>
                            </div>

                        </div>

                    )}

                    {activeTab === "Education" && (

                        <div className="grid grid-cols-[0.5fr_1.5fr] gap-10 items-center">

                            <div className="m-4">
                                <div className="flex items-center justify-center">
                                    <img
                                        src="src/assets/dlsl.png"
                                        alt="College"
                                        className="w-[180px] h-[143px] rounded-sm bg-th-white object-cover border border-th-descrip hover:scale-105 transition duration-300"
                                    />
                                </div>
                            </div>

                            <div className="m-4">
                                <div className="flex flex-col gap-3">

                                    <span className="text-md font-bold text-th-white">
                                        Internship
                                    </span>

                                    <time className="text-sm font-medium text-th-border">
                                        February – April 2026
                                    </time>

                                    <p className="text-sm font-medium text-justify text-th-owhite">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua.
                                    </p>

                                </div>
                            </div>

                        </div>

                    )}

                </div>

                {/* Bottom Divider */}
                <div className="footer-divider bg-th-border h-px w-full" />

            </div>
        </main>
    );
}