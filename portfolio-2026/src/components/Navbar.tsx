import { Moon, Sun } from "lucide-react";
import { Link } from "react-router-dom";
import { useTheme } from "../util/useTheme";
import { useSectionNav } from "../util/useSectionNav";

const SECTIONS = [
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
];

export default function Navbar() {
    const { theme, toggleTheme } = useTheme();
    const { goToSection, goHome } = useSectionNav();

    return (
        <header className="fixed top-0 left-0 right-0 z-50 border-b border-th-line/15 bg-th-bg/80 backdrop-blur-md">
            <nav className="mx-auto flex w-full max-w-4xl items-center justify-between py-4">

                {/* Back to the landing page. Kept as a Link so it stays a real
                    anchor (middle-click, open in new tab), with the scroll handled
                    on click for when we are already on home. */}
                <Link
                    to="/"
                    onClick={goHome}
                    className="text-md font-medium tracking-wide text-th-text hover:text-th-heading transition duration-300"
                >
                    XG | Xavier Gelligan
                </Link>

                <div className="flex items-center gap-1">
                    {SECTIONS.map((section) => (
                        <button
                            key={section.id}
                            type="button"
                            onClick={() => goToSection(section.id)}
                            className="rounded-sm px-3 py-1.5 text-sm text-th-muted font-medium hover:text-th-heading transition duration-300 cursor-pointer"
                        >
                            {section.label}
                        </button>
                    ))}

                    {/* Dark / light mode */}
                    <button
                        type="button"
                        onClick={toggleTheme}
                        aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
                        title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
                        className="ml-2 rounded-sm border border-th-line/70 p-2 text-th-muted hover:text-th-heading hover:border-th-line/60 transition duration-300 cursor-pointer"
                    >
                        {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
                    </button>
                </div>
            </nav>
        </header>
    );
}
