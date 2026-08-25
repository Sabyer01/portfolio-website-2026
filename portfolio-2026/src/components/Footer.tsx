import type { IconType } from "react-icons";
import { SiGithub } from "react-icons/si";
// Simple Icons dropped LinkedIn's mark, so that one comes from Font Awesome.
import { FaLinkedinIn } from "react-icons/fa6";
import { useSectionNav } from "../util/useSectionNav";

const QUICK_LINKS = [
    { id: "about", label: "About" },
    { id: "expertise", label: "Expertise" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
];

const SOCIAL_LINKS: { label: string; href: string; Icon: IconType }[] = [
    { label: "GitHub", href: "https://github.com/Sabyer01", Icon: SiGithub },
    // TODO: swap in the real profile URLs.
    { label: "LinkedIn", href: "https://www.linkedin.com/in/xaviergelligan", Icon: FaLinkedinIn },
];

export default function Footer() {
    const { goToSection } = useSectionNav();

    return (
        <div className="relative w-full mt-20 pb-10">
            <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8">
                <div className="footer-divider bg-th-line/40 h-px w-full" />

                <div className="flex flex-col sm:flex-row sm:justify-between gap-10 sm:gap-20 mt-6">

                    {/* Left */}
                    <div className="justify-start items-start flex flex-col gap-2">
                        <h1 className="text-md font-medium text-th-text">
                            XG | Xavier Gelligan
                        </h1>

                        <p className="text-sm text-th-muted">
                            2026 Xavier Gelligan. All rights reserved.
                        </p>
                    </div>

                    {/* Right */}
                    <div className="grid grid-cols-2 gap-6 sm:gap-10">

                        {/* Quick Links */}
                        <div className="justify-start items-start flex flex-col gap-1">
                            <h1 className="text-md font-medium tracking-snug text-th-text uppercase">
                                Quick Links
                            </h1>

                            <ul className="flex flex-col gap-3 mt-2">
                                {QUICK_LINKS.map((link) => (
                                    <li key={link.id}>
                                        <button
                                            type="button"
                                            onClick={() => goToSection(link.id)}
                                            className="text-sm text-th-muted hover:text-th-heading transition duration-300 cursor-pointer"
                                        >
                                            {link.label}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Social Links */}
                        <div className="justify-start items-start flex flex-col gap-1">
                            <h1 className="text-md font-medium tracking-snug text-th-text uppercase">
                                Social Links
                            </h1>

                            <ul className="flex flex-col gap-3 mt-2">
                                {SOCIAL_LINKS.map(({ label, href, Icon }) => (
                                    <li key={label}>
                                        <a
                                            href={href}
                                            target="_blank"
                                            rel="noreferrer noopener"
                                            className="group flex items-center gap-2 text-sm text-th-muted hover:text-th-heading transition duration-300"
                                        >
                                            <Icon
                                                size={15}
                                                className="shrink-0 opacity-70 group-hover:opacity-100 transition duration-300"
                                                aria-hidden
                                            />
                                            {label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
