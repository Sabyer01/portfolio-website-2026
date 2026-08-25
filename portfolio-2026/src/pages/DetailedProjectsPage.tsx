import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";
import { getProjectBySlug, getProjectNeighbours, type Project } from "../data/projects";

function ImageCarousel({ project }: { project: Project }) {
    const [active, setActive] = useState(0);
    const total = project.images.length;

    const goTo = (index: number) => {
        if (total === 0) return;
        setActive((index + total) % total);
    };

    // Arrow-key navigation for the gallery.
    useEffect(() => {
        if (total <= 1) return;

        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === "ArrowLeft") setActive((current) => (current - 1 + total) % total);
            if (event.key === "ArrowRight") setActive((current) => (current + 1) % total);
        };

        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [total]);

    if (total === 0) return null;

    const current = project.images[active];

    return (
        <div className="mt-6">

            {/* Frame */}
            <div className="group relative max-w-4xl h-108 mx-auto border border-th-line/30 bg-th-surface/30 rounded-sm flex justify-center items-center overflow-hidden">
                <img
                    key={current.src}
                    className="w-full h-full object-contain"
                    src={current.src}
                    alt={current.alt}
                />

                {total > 1 && (
                    <>
                        <button
                            type="button"
                            onClick={() => goTo(active - 1)}
                            aria-label="Previous image"
                            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-sm border border-th-line/30 bg-th-bg/70 p-2 text-th-muted
                            opacity-0 group-hover:opacity-100 hover:text-th-heading hover:border-th-line/60 transition duration-300 cursor-pointer"
                        >
                            <ChevronLeft size={18} />
                        </button>

                        <button
                            type="button"
                            onClick={() => goTo(active + 1)}
                            aria-label="Next image"
                            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-sm border border-th-line/30 bg-th-bg/70 p-2 text-th-muted
                            opacity-0 group-hover:opacity-100 hover:text-th-heading hover:border-th-line/60 transition duration-300 cursor-pointer"
                        >
                            <ChevronRight size={18} />
                        </button>
                    </>
                )}
            </div>

        </div>
    );
}

function NeighbourCard({
    project,
    direction,
}: {
    project: Project;
    direction: "previous" | "next";
}) {
    const cover = project.images[0];
    const isNext = direction === "next";

    return (
        <Link
            to={`/projects/${project.slug}`}
            className="group flex flex-col rounded-sm border border-th-line/30 bg-th-surface/30 hover:border-th-line/60 transition duration-300"
        >
            {/* The next card mirrors the previous one so it reads outward, like an index */}
            <div
                className={`flex flex-row items-center gap-1 px-3 pt-2 text-xs uppercase tracking-wide text-th-faint ${
                    isNext ? "justify-end" : "justify-start"
                }`}
            >
                {isNext ? (
                    <>
                        Next <ArrowRight size={12} />
                    </>
                ) : (
                    <>
                        <ArrowLeft size={12} /> Previous
                    </>
                )}
            </div>

            <div
                className={`grid justify-center items-center h-35 w-full p-3 gap-2 ${
                    isNext ? "grid-cols-[0.7fr_0.3fr]" : "grid-cols-[0.3fr_0.7fr]"
                }`}
            >
                {isNext ? (
                    <>
                        <section className="flex flex-col text-right items-end space-y-1.5">
                            <h3 className="text-th-heading text-md font-semibold">
                                {project.shortTitle}
                            </h3>
                            <p className="text-th-faint text-sm">{project.category}</p>
                            <p className="text-th-muted text-justify text-sm line-clamp-3">{project.summary}</p>
                        </section>

                        <img
                            src={cover?.src}
                            alt={cover?.alt ?? project.shortTitle}
                            className="w-full h-full rounded-sm object-cover group-hover:scale-105 transition duration-300"
                        />
                    </>
                ) : (
                    <>
                        <img
                            src={cover?.src}
                            alt={cover?.alt ?? project.shortTitle}
                            className="w-full h-full rounded-sm object-cover group-hover:scale-105 transition duration-300"
                        />

                        <section className="flex flex-col text-left items-start space-y-1.5">
                            <h3 className="text-th-heading text-md font-semibold">
                                {project.shortTitle}
                            </h3>
                            <p className="text-th-faint text-sm">{project.category}</p>
                            <p className="text-th-muted text-justify text-sm line-clamp-3">{project.summary}</p>
                        </section>
                    </>
                )}
            </div>
        </Link>
    );
}

export default function DetailedProjectsPage() {
    const { slug } = useParams<{ slug: string }>();
    const project = getProjectBySlug(slug);
    const { previous, next } = getProjectNeighbours(slug);

    // Landing on a new project should start at the top of the page.
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "instant" });
    }, [slug]);

    if (!project) {
        return <Navigate to="/" replace />;
    }

    return (
        <div className="w-full">
            <div className="w-full max-w-4xl mx-auto mt-6 pb-20">

                <div className="justify-between flex flex-wrap items-center">
                    {/* Back to the projects section of the home page */}
                    <Link
                        to="/?section=projects"
                        className="flex flex-row items-center gap-2 rounded-sm bg-th-black -mx-3 px-3 py-1.5
                            text-sm font-medium text-th-heading hover:bg-th-owhite/30 transition duration-300"
                    >
                        <ArrowLeft size={14} />
                        Back
                    </Link>

                    {/* Only projects with a public deployment get this button */}
                    {project.liveUrl && (
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noreferrer noopener"
                            className="flex flex-row items-center gap-2 rounded-sm bg-th-black -mx-3 px-3 py-1.5
                            text-sm font-medium text-th-heading hover:bg-th-owhite/30 transition duration-300"
                        >
                            Visit Live
                            <ExternalLink size={14} />
                        </a>
                    )}
                </div>


                <h1 className="block font-medium text-th-heading text-2xl text-justify mt-6">
                    {project.title}
                </h1>

                {/* Keyed on the slug so the gallery resets to frame one per project */}
                <ImageCarousel key={project.slug} project={project} />

                <div className="py-3">

                    {/* Date and Tech Stack */}
                    <div className="flex flex-row">
                        <section className="mt-6 flex flex-wrap items-center gap-3">
                            <span className="rounded-sm border border-th-line/30 max-w-xs bg-transparent px-3 py-1.5 font-normal
                                text-[13px] text-th-muted hover:border-th-line/60 hover:text-th-heading transition duration-300">
                                {project.period}
                            </span>

                            <div className="footer-divider bg-th-line/40 w-px self-stretch" />

                            {project.tech.map((tech) => (
                                <span
                                    key={tech}
                                    className="rounded-sm border border-th-line/30 max-w-xs bg-transparent px-3 py-1.5 font-normal
                                    text-[13px] text-th-muted hover:border-th-line/60 hover:text-th-heading transition duration-300"
                                >
                                    {tech}
                                </span>
                            ))}
                        </section>
                    </div>

                    {/* Description */}
                    <div className="mt-6">
                        <h2 className="text-th-heading text-md font-semibold mb-2">Description</h2>
                        <p className="text-th-muted text-justify text-md">{project.description}</p>
                    </div>

                    {/* Contributions */}
                    <div className="mt-6">
                        <h2 className="text-th-heading text-md font-semibold mb-2">Contributions</h2>
                        <ul className="px-5 flex flex-col gap-2 text-md list-disc">
                            {project.contributions.map((contribution) => (
                                <li key={contribution} className="text-th-muted text-justify">
                                    {contribution}
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>

                <div className="mt-6 footer-divider bg-th-line/40 h-px w-full" />

                {/* Wrap-around index: the project before and after this one */}
                <div className="mt-6">
                    <span className="text-th-heading text-md font-semibold mb-2">Other Projects</span>

                    <div className="grid grid-cols-2 gap-10 mt-3">
                        {previous && <NeighbourCard project={previous} direction="previous" />}
                        {next && <NeighbourCard project={next} direction="next" />}
                    </div>
                </div>

            </div>
        </div>
    );
}
