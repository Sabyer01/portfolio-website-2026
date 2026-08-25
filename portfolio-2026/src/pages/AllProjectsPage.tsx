import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, ChevronDown, ChevronUp } from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";
import { PROJECTS, type Project } from "../data/projects";

/** How many projects are shown before the user asks for more. */
const INITIAL_VISIBLE = 3;

/** Tech chips shown per card before collapsing the rest into a "+n". */
const MAX_VISIBLE_TECH = 4;

function ProjectRow({ project, index }: { project: Project; index: number }) {
    const cover = project.images[0];
    const visibleTech = project.tech.slice(0, MAX_VISIBLE_TECH);
    const hiddenTechCount = project.tech.length - visibleTech.length;

    return (
        <div className={`relative flex flex-row gap-6 ${index === 0 ? "mt-6" : "mt-12"}`}>

            {/* Background Number */}
            <span className="absolute bottom-0 right-0 text-8xl font-bold text-th-white/5 pointer-events-none select-none">
                {String(index + 1).padStart(2, "0")}
            </span>

            {/* Thumbnail */}
            <Link
                to={`/projects/${project.slug}`}
                className="shrink-0 rounded-sm border border-th-line/30 bg-th-surface/30 w-64 h-40 items-center justify-center flex overflow-hidden"
            >
                <img
                    src={cover?.src}
                    alt={cover?.alt ?? project.shortTitle}
                    className="w-full h-full object-cover hover:scale-105 transition duration-300"
                />
            </Link>

            {/* Details */}
            <div className="flex flex-1 flex-col justify-start gap-2">

                <div className="flex flex-row justify-between items-start gap-4">
                    <Link
                        to={`/projects/${project.slug}`}
                        className="text-xl font-bold text-th-text hover:text-th-heading transition duration-300"
                    >
                        {project.shortTitle}
                    </Link>

                    <Link
                        to={`/projects/${project.slug}`}
                        className="shrink-0 flex items-center gap-1 text-sm text-th-muted hover:text-th-heading transition duration-300"
                    >
                        View Details
                        <ArrowUpRight size={16} />
                    </Link>
                </div>

                <ul className="w-full flex flex-wrap items-start gap-2">
                    {visibleTech.map((tech) => (
                        <li
                            key={tech}
                            className="rounded-sm border border-th-line/30 text-xs text-th-muted py-1.5 px-3"
                        >
                            {tech}
                        </li>
                    ))}

                    {hiddenTechCount > 0 && (
                        <li className="rounded-sm border border-th-line/30 text-xs text-th-muted py-1.5 px-3">
                            +{hiddenTechCount}
                        </li>
                    )}
                </ul>

                <p className="text-th-muted line-clamp-3 mt-2">
                    {project.description}
                </p>

            </div>
        </div>
    );
}

export default function ProjectsPage() {
    const [searchParams] = useSearchParams();
    const sectionRef = useRef<HTMLDivElement>(null);

    // The list always starts collapsed to INITIAL_VISIBLE, however we arrived here.
    const [showAll, setShowAll] = useState(false);

    // ?section=projects (used by the Back link) only scrolls — it never expands.
    const scrollToSection = searchParams.get("section") === "projects";

    useEffect(() => {
        if (!scrollToSection) return;
        sectionRef.current?.scrollIntoView({ block: "start", behavior: "instant" });
    }, [scrollToSection]);

    const total = PROJECTS.length;
    const hiddenCount = Math.max(total - INITIAL_VISIBLE, 0);
    const visibleProjects = showAll ? PROJECTS : PROJECTS.slice(0, INITIAL_VISIBLE);

    return (
        <div id="projects" ref={sectionRef} className="w-full scroll-mt-8">
            <div className="w-full max-w-4xl mx-auto mt-20">

                <div className="justify-between flex flex-row">
                    <div className="text-lg tracking-wide font-bold uppercase text-th-heading">
                        Projects
                    </div>
                </div>

                {/* Top Divider */}
                <div className="footer-divider bg-th-line/40 h-px w-full mt-1" />

                {/* Projects */}
                <div className="flex flex-col">
                    {visibleProjects.map((project, index) => (
                        <ProjectRow key={project.slug} project={project} index={index} />
                    ))}
                </div>

                {/* Show More / Show Less — only rendered when something is actually hidden */}
                {hiddenCount > 0 && (
                    <div className="flex justify-center mt-12">
                        <button
                            onClick={() => setShowAll((previous) => !previous)}
                            className="w-full flex items-center justify-center gap-2 py-3 border rounded-sm border-th-line/30 text-sm text-th-muted hover:text-th-heading hover:border-th-line/60 transition duration-300 cursor-pointer"
                        >
                            {showAll ? (
                                <>
                                    Show Less
                                    <ChevronUp size={16} />
                                </>
                            ) : (
                                <>
                                    View More Projects ({hiddenCount})
                                    <ChevronDown size={16} />
                                </>
                            )}
                        </button>
                    </div>
                )}

                {/* Bottom Divider */}
                <div className="footer-divider bg-th-line/40 h-px w-full mt-6" />

            </div>
        </div>
    );
}
