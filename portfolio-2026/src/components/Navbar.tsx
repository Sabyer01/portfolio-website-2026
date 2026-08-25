import { useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
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
    const [menuOpen, setMenuOpen] = useState(false);

    // Picking a section from the mobile sheet should also dismiss it.
    const handleSectionClick = (id: string) => {
        setMenuOpen(false);
        goToSection(id);
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 border-b border-th-line/15 bg-th-bg/80 backdrop-blur-md">
            <nav className="mx-auto flex w-full max-w-4xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">

                {/* Back to the landing page. Kept as a Link so it stays a real
                    anchor (middle-click, open in new tab), with the scroll handled
                    on click for when we are already on home. */}
                <Link
                    to="/"
                    onClick={(event) => {
                        setMenuOpen(false);
                        goHome(event);
                    }}
                    className="text-md font-medium tracking-wide text-th-text hover:text-th-heading transition duration-300"
                >
                    {/* The full wordmark does not fit a 320px viewport */}
                    <span className="sm:hidden">XG</span>
                    <span className="hidden sm:inline">XG | Xavier Gelligan</span>
                </Link>

                <div className="flex items-center gap-1">

                    {/* Desktop / tablet links */}
                    <div className="hidden items-center gap-1 md:flex">
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
                    </div>

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

                    {/* Mobile menu trigger */}
                    <button
                        type="button"
                        onClick={() => setMenuOpen((open) => !open)}
                        aria-label={menuOpen ? "Close menu" : "Open menu"}
                        aria-expanded={menuOpen}
                        className="ml-1 rounded-sm border border-th-line/70 p-2 text-th-muted hover:text-th-heading hover:border-th-line/60 transition duration-300 cursor-pointer md:hidden"
                    >
                        {menuOpen ? <X size={16} /> : <Menu size={16} />}
                    </button>
                </div>
            </nav>

            {/* Mobile sheet */}
            {menuOpen && (
                <div className="border-t border-th-line/15 md:hidden">
                    <div className="mx-auto flex w-full max-w-4xl flex-col px-5 py-2 sm:px-6">
                        {SECTIONS.map((section) => (
                            <button
                                key={section.id}
                                type="button"
                                onClick={() => handleSectionClick(section.id)}
                                className="rounded-sm py-3 text-left text-sm font-medium text-th-muted hover:text-th-heading transition duration-300 cursor-pointer"
                            >
                                {section.label}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
}
