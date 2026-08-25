import { FileText, Mail } from "lucide-react";
import phMap from "../assets/philippines.svg";

const EMAIL = "xaviergelligan.work@gmail.com";

/** Lives in public/, so it is served from the site root. */
const RESUME_URL = "/Gelligan_Resume.pdf";

/** Both actions are the same button, so the styling is declared once. */
const ACTION_CLASS =
    "flex items-center justify-center gap-2 py-1.5 px-3 border rounded-sm border-th-line/30 " +
    "text-sm text-th-muted hover:text-th-heading hover:border-th-line/60 transition duration-300 cursor-pointer";

/** Shared by the mask layer — the silhouette is drawn from the SVG's alpha. */
const MAP_MASK = {
    maskImage: `url(${phMap})`,
    WebkitMaskImage: `url(${phMap})`,
    maskRepeat: "no-repeat",
    WebkitMaskRepeat: "no-repeat",
    maskPosition: "center",
    WebkitMaskPosition: "center",
    maskSize: "contain",
    WebkitMaskSize: "contain",
} as const;

export default function ContactPage() {
    return (
        <div id="contact" className="w-full">
            <div className="w-full max-w-4xl mx-auto mt-20 px-5 sm:px-6 lg:px-8">

                <div className="text-lg tracking-wide font-bold uppercase text-th-heading">
                    Contact
                </div>

                {/* Top Divider */}
                <div className="footer-divider bg-th-line/40 h-px w-full mt-1" />

                <div className="relative overflow-hidden py-12 sm:py-20">

                    {/*
                        The map sits behind the content as a watermark. It is a CSS mask
                        rather than an <img>, so the silhouette takes a theme colour and
                        flips with dark/light like everything else.
                    */}
                    <div
                        aria-hidden
                        className="pointer-events-none absolute inset-0 bg-th-line/[0.05] dark:bg-th-line/[0.1]"
                        style={MAP_MASK}
                    />

                    {/* Centered content */}
                    <div className="relative flex flex-col items-center text-center">
                        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-th-heading">
                            Interested in collaboration?
                        </h2>

                        <p className="mt-4 max-w-xl text-md text-th-muted">
                            I&apos;m open to work and always glad to hear about new roles, freelance
                            projects, and opportunities to build something worthwhile.
                        </p>

                        {/* Side by side, wrapping only if the viewport is too narrow */}
                        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                            <a href={`mailto:${EMAIL}`} className={ACTION_CLASS}>
                                <Mail size={16} />
                                Email Me
                            </a>

                            <a
                                href={RESUME_URL}
                                target="_blank"
                                rel="noreferrer noopener"
                                className={ACTION_CLASS}
                            >
                                <FileText size={16} />
                                View Resume
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
