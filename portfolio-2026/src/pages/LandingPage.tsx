import { FileText, Mail, MapPin } from "lucide-react";
import {
    SiFastapi,
    SiGit,
    SiMongodb,
    SiNodedotjs,
    SiPython,
    SiPytorch,
    SiReact,
    SiScikitlearn,
    SiTailwindcss,
    SiTypescript,
    SiVite,
} from "react-icons/si";
import gradImg from "../assets/grad.webp";
import TextType from "../../@/components/TextType";

const FLOATING_STACK = [
    { Icon: SiReact, top: "14%", left: "7%", size: 64, delay: "0s", duration: "11s" },
    { Icon: SiTypescript, top: "26%", left: "84%", size: 52, delay: "1.4s", duration: "13s" },
    { Icon: SiPython, top: "68%", left: "12%", size: 58, delay: "0.8s", duration: "12s" },
    { Icon: SiTailwindcss, top: "78%", left: "78%", size: 60, delay: "2.1s", duration: "14s" },
    { Icon: SiNodedotjs, top: "44%", left: "91%", size: 40, delay: "0.4s", duration: "10s" },
    { Icon: SiMongodb, top: "84%", left: "44%", size: 38, delay: "1.9s", duration: "15s" },
    { Icon: SiFastapi, top: "10%", left: "62%", size: 34, delay: "2.6s", duration: "12s" },
    { Icon: SiPytorch, top: "58%", left: "3%", size: 32, delay: "3.2s", duration: "13s" },
    { Icon: SiScikitlearn, top: "88%", left: "22%", size: 30, delay: "1.1s", duration: "16s" },
    { Icon: SiVite, top: "18%", left: "36%", size: 28, delay: "2.4s", duration: "11s" },
    { Icon: SiGit, top: "82%", left: "62%", size: 26, delay: "0.6s", duration: "14s" },
];

const ROLES = [
    "Fullstack Developer",
    "AI / ML Engineer",
    "Creative Thinker",
];

export default function LandingPage() {
    return (
        <section
            id="home"
            className="relative w-full min-h-[calc(100vh-4rem)] overflow-hidden bg-th-bg flex items-center"
        >
            {/* ---------- Background: grid ---------- */}
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-[0.5]"
                style={{
                    backgroundImage:
                        "linear-gradient(to right, var(--th-grid) 1px, transparent 1px), linear-gradient(to bottom, var(--th-grid) 1px, transparent 1px)",
                    backgroundSize: "64px 64px",
                    maskImage:
                        "radial-gradient(ellipse 80% 60% at 50% 45%, #000 40%, transparent 100%)",
                    WebkitMaskImage:
                        "radial-gradient(ellipse 80% 60% at 50% 45%, #000 40%, transparent 100%)",
                }}
            />

            {/* ---------- Background: floating stack marks ---------- */}
            <div aria-hidden className="pointer-events-none absolute inset-0">
                {FLOATING_STACK.map(({ Icon, top, left, size, delay, duration }, index) => (
                    <Icon
                        key={index}
                        size={size}
                        className={`absolute text-th-line/[0.1] animate-hero-float ${size >= 40 ? "hidden sm:block" : ""}`}
                        style={{
                            top,
                            left,
                            animationDelay: delay,
                            animationDuration: duration,
                        }}
                    />
                ))}
            </div>

            {/* ---------- Content ---------- */}
            <div className="relative w-full max-w-4xl mx-auto px-5 py-16 sm:px-6 sm:py-24 lg:px-8">
                {/* items-stretch keeps the portrait level with the text column */}
                <div className="grid grid-cols-1 items-stretch gap-10 md:grid-cols-[1fr_0.65fr] md:gap-20 lg:gap-35">

                    {/* ============ LEFT ============ */}
                    <div className="flex flex-col justify-center text-left">
                        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-th-heading">
                            Xavier Gelligan
                        </h1>

                        

                        <TextType
                            as="p"
                            text={ROLES}
                            typingSpeed={75}
                            deletingSpeed={35}
                            pauseDuration={1900}
                            showCursor
                            cursorCharacter={<span className="ml-1 inline-block h-[1.1em] w-[2px] translate-y-[0.18em] bg-th-theme" />}
                            cursorClassName="animate-cursor-blink"
                            cursorBlinkDuration={0.55}
                            loop
                            className="mt-3 text-lg sm:text-xl text-th-muted"
                        />

                        <div className="footer-divider bg-th-line/40 h-px w-full mt-6" />

                        {/* Both rows live between the two dividers */}
                        <div className="flex flex-col gap-3 py-6 text-sm">

                            {/* First floor — where I am, and whether I'm available */}
                            <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                                <span className="flex items-center gap-2 text-th-muted">
                                    <MapPin size={15} className="text-th-theme" />
                                    Batangas, Philippines
                                </span>

                                <span className="flex items-center gap-2 text-th-muted">
                                    <span className="relative flex h-1.5 w-1.5">
                                        <span className="absolute inline-flex h-full w-full rounded-full bg-th-theme opacity-75 animate-ping" />
                                        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-th-theme" />
                                    </span>
                                    Open to Work
                                </span>
                            </div>

                            {/* Second floor — the two actions */}
                            <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                                <a
                                    href="mailto:xaviergelligan.work@gmail.com"
                                    className="flex items-center gap-2 text-th-muted hover:text-th-heading transition duration-300"
                                >
                                    <Mail size={15} />
                                    Contact
                                </a>

                                <a
                                    href="/Gelligan_Resume.pdf"
                                    target="_blank"
                                    rel="noreferrer noopener"
                                    className="flex items-center gap-2 text-th-muted hover:text-th-heading transition duration-300"
                                >
                                    <FileText size={15} />
                                    View Resume
                                </a>
                            </div>
                        </div>

                        <div className="footer-divider bg-th-line/40 h-px w-full" />
                    </div>

                    {/* ============ RIGHT ============ */}
                    {/* The mask dissolves the bottom of the portrait into the page */}
                    <div className="relative mx-auto w-full max-w-[15rem] md:max-w-none">
                        <img
                            src={gradImg}
                            alt="Xavier Gelligan"
                            className="h-full w-full rounded-sm object-cover"
                            style={{
                                maskImage:
                                    "linear-gradient(to bottom, #000 55%, rgba(0,0,0,0.55) 75%, transparent 100%)",
                                WebkitMaskImage:
                                    "linear-gradient(to bottom, #000 55%, rgba(0,0,0,0.55) 75%, transparent 100%)",
                            }}
                        />
                    </div>

                </div>
            </div>
        </section>
    );
}
