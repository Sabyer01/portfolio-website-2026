import { getTechMeta } from "../data/techIcons";

const STACKS: { group: string; items: string[] }[] = [
    {
        group: "Frontend",
        items: ["JavaScript", "TypeScript", "React", "React Native", "Vite", "Tailwind CSS"],
    },
    {
        group: "Backend",
        items: ["Python", "Node.js", "FastAPI", "Flask", "Laravel"],
    },
    {
        group: "Database",
        items: ["MongoDB", "MySQL", "MariaDB"],
    },
    {
        group: "AI & Machine Learning",
        items: ["NumPy", "Pandas", "Scikit-learn", "TensorFlow", "Keras", "PyTorch", "Ollama"],
    },
    {
        group: "Developer Tools",
        items: ["Git", "GitHub", "Figma", "Postman", "Vercel", "Render", "Railway"],
    },
];

function StackChip({ label }: { label: string }) {
    const meta = getTechMeta(label);

    return (
        <span
            className="group flex flex-row items-center gap-2 rounded-sm border border-th-line/30 bg-transparent px-3 py-1.5
            text-[13px] text-th-muted hover:border-th-line/60 hover:text-th-heading transition duration-300"
        >
            {meta && (
                <meta.Icon
                    size={14}
                    style={{ color: meta.color }}
                    className="shrink-0 opacity-70 group-hover:opacity-100 transition duration-300"
                    aria-hidden
                />
            )}
            {label}
        </span>
    );
}

export default function ExpertisePage() {
    return (
        <div id="expertise" className='w-full'>
            <div className='w-full max-w-4xl mx-auto mt-20 px-5 sm:px-6 lg:px-8'>
                <div className='items-left justify-center text-lg tracking-wide font-bold uppercase text-th-heading'>Expertise</div>

                {/* Top Divider */}
                <div className="footer-divider bg-th-line/40 h-px w-full mt-1" />

                <div className='py-6 tracking-wide'>
                    {STACKS.map((stack, index) => (
                        <div key={stack.group} className={index === 0 ? "" : "mt-6"}>
                            <div className='text-sm font-semibold uppercase tracking-wide text-th-text'>
                                {stack.group}
                            </div>

                            <section className='flex flex-wrap gap-3 py-2'>
                                {stack.items.map((item) => (
                                    <StackChip key={`${stack.group}-${item}`} label={item} />
                                ))}
                            </section>
                        </div>
                    ))}

                    <div className="footer-divider bg-th-line/40 h-px w-full mt-6" />
                </div>
            </div>
        </div>
    );
}
