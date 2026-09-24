import type { IconType } from "react-icons";
import {
    SiFastapi,
    SiFigma,
    SiFlask,
    SiGit,
    SiGithub,
    SiJavascript,
    SiKeras,
    SiLaravel,
    SiMariadb,
    SiMongodb,
    SiMysql,
    SiNodedotjs,
    SiNumpy,
    SiOllama,
    SiPandas,
    SiPostman,
    SiPython,
    SiPytorch,
    SiRailway,
    SiReact,
    SiRender,
    SiScikitlearn,
    SiStreamlit,
    SiTailwindcss,
    SiTensorflow,
    SiTypescript,
    SiVercel,
    SiVite,
    SiDocker,
    SiPostgresql
} from "react-icons/si";

export type TechMeta = {
    Icon: IconType;
    /** Brand colour, used at low opacity so it stays inside the theme. */
    color: string;
};

/** Keyed by the exact label rendered in the UI. */
export const TECH_ICONS: Record<string, TechMeta> = {
    JavaScript: { Icon: SiJavascript, color: "#f7df1e" },
    TypeScript: { Icon: SiTypescript, color: "#3178c6" },
    React: { Icon: SiReact, color: "#61dafb" },
    "React Native": { Icon: SiReact, color: "#61dafb" },
    Vite: { Icon: SiVite, color: "#a259ff" },
    "Tailwind CSS": { Icon: SiTailwindcss, color: "#38bdf8" },

    Python: { Icon: SiPython, color: "#3776ab" },
    "Node.js": { Icon: SiNodedotjs, color: "#5fa04e" },
    FastAPI: { Icon: SiFastapi, color: "#009688" },
    Flask: { Icon: SiFlask, color: "#e5e5e5" },
    Laravel: { Icon: SiLaravel, color: "#ff2d20" },

    MongoDB: { Icon: SiMongodb, color: "#47a248" },
    MySQL: { Icon: SiMysql, color: "#4479a1" },
    MariaDB: { Icon: SiMariadb, color: "#c0765a" },

    NumPy: { Icon: SiNumpy, color: "#4dabcf" },
    Pandas: { Icon: SiPandas, color: "#e70488" },
    "Scikit-learn": { Icon: SiScikitlearn, color: "#f89939" },
    TensorFlow: { Icon: SiTensorflow, color: "#ff6f00" },
    Keras: { Icon: SiKeras, color: "#d00000" },
    PyTorch: { Icon: SiPytorch, color: "#ee4c2c" },
    Ollama: { Icon: SiOllama, color: "#e5e5e5" },
    Streamlit: { Icon: SiStreamlit, color: "#ff4b4b" },

    Git: { Icon: SiGit, color: "#f05032" },
    GitHub: { Icon: SiGithub, color: "#e5e5e5" },
    Figma: { Icon: SiFigma, color: "#f24e1e" },
    Postman: { Icon: SiPostman, color: "#ff6c37" },
    Vercel: { Icon: SiVercel, color: "#e5e5e5" },
    Render: { Icon: SiRender, color: "#46e3b7" },
    Railway: { Icon: SiRailway, color: "#c1c1ff" },
    Docker: { Icon: SiDocker, color: "#2496ed" },
    PostgreSQL: { Icon: SiPostgresql, color: "#336791" },
};

export function getTechMeta(label: string): TechMeta | undefined {
    return TECH_ICONS[label];
}
