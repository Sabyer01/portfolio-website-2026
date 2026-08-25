import internship from "../assets/internship.jpg";
import seventyOne from "../assets/71.jpg";
import moviedexDashboard from "../assets/moviedex_dashboard.png";
import moviedexAddMovie from "../assets/moviedex_addmovie.png";
import moviedexEditMovie from "../assets/moviedex_editmovie.png";
import moviedexLogin from "../assets/moviedex_login.png";
import moviedexRegister from "../assets/moviedex_register.png";
import homesenseThumb from "../assets/homesense/thumb.png";
import homesenseLanding from "../assets/homesense/landing.png";
import homesenseAppliances from "../assets/homesense/appliances.png";
import homesenseBills from "../assets/homesense/bills.png";
import homesenseModes from "../assets/homesense/modes.png";
import homesenseRecos from "../assets/homesense/recos.png";
import geltechHero from "../assets/geltech/hero.png";
import geltechAbout from "../assets/geltech/about.png";
import geltechProduct from "../assets/geltech/product.png";
import geltechContact from "../assets/geltech/contact.png";

export type ProjectImage = {
    src: string;
    alt: string;
};

export type Project = {
    /** URL segment used by /projects/:slug */
    slug: string;
    /** Full title shown on the detailed page */
    title: string;
    /** Short title used in cards and the "Other Projects" index */
    shortTitle: string;
    /** e.g. Full-Stack, Machine Learning */
    category: string;
    /** One-liner used inside cards */
    summary: string;
    /** Paragraph shown under "Description" */
    description: string;
    period: string;
    tech: string[];
    images: ProjectImage[];
    contributions: string[];
    /**
     * Public deployment. Omit it for anything without a live site — internal
     * tools, mobile apps, research models — and the "Visit Live" button is
     * simply not rendered for that project.
     */
    liveUrl?: string;
};

export const PROJECTS: Project[] = [
    {
        slug: "geltech",
        title: "Geltech Corporation: A fully responsive business website with a custom design system and routing layer",
        shortTitle: "Geltech",
        category: "Frontend",
        summary:
            "This site — a hand-built portfolio with a custom design system, routed project pages, and no template underneath.",
        description:
            "A personal portfolio built from an empty Vite project. It uses a custom Tailwind theme, a data-driven project index that generates every detailed page from a single source, and a routing layer that lets each project link forward and backward through the catalogue.",
        period: "July 2026",
        tech: ["React", "TypeScript", "Tailwind CSS", "Vite", "Vercel"],
        images: [
            { src: geltechHero, alt: "Portfolio landing page" },
            { src: geltechAbout, alt: "Portfolio projects index" },
            { src: geltechProduct, alt: "Portfolio projects index" },
            { src: geltechContact, alt: "Portfolio projects index" },
        ],
        contributions: [
            "Designed responsive web interfaces optimized for mobile, tablet, and desktop, featuring a filterable product catalog with category/material filters, multi-image galleries, and detail views",
            "Implemented custom client-side routing logic (React Router) with smooth hash-based scroll navigation between pages and page sections",
        ],
        // TODO: add the deployment URL to show the "Visit Live" button.
         liveUrl: "https://geltech-corp.vercel.app",
    },
    {
        slug: "credit-card-behavior-model",
        title: "Credit Card Behavior Model: Predicting Cardholder Risk with Gradient Boosted Trees",
        shortTitle: "Credit Card Behavior Model",
        category: "Machine Learning",
        summary:
            "A scoring model that flags good and bad credit-card behavior from demographic and transactional signals, served through an interactive dashboard.",
        description:
            "A credit risk model built during my internship at Asia United Bank. It compares Logistic Regression, Neural Networks, XGBoost, RandomForest, and LightGBM to classify cardholder behavior from demographic and transactional features, then exposes the winning model through an internal dashboard so analysts can score cohorts without touching a notebook.",
        period: "February 2026 - April 2026",
        tech: ["Python", "TensorFlow", "Scikit-learn", "Streamlit", "FastAPI"],
        images: [
            { src: internship, alt: "Model evaluation dashboard" },
            { src: seventyOne, alt: "Feature importance breakdown" },
        ],
        contributions: [
            "Developed and evaluated multiple machine learning models — Logistic Regression, Neural Network, XGBoost, RandomForest, and LightGBM — to predict good or bad cardholder behavior.",
            "Engineered and cleaned demographic and transactional features, handling class imbalance to keep recall on high-risk cardholders usable.",
            "Built an interactive dashboard with Streamlit so analysts could run scoring and inspect feature importance directly.",
            "Wrapped the trained model in a FastAPI service for efficient and scalable deployment within the company.",
        ],
        // Internal bank tool — no public deployment.
    },
    {
        slug: "homesense",
        title:
            "HomeSense: An IoT-Based Household Electricity Monitoring System with Bill Prediction using Linear Regression and Recommendation System",
        shortTitle: "HomeSense",
        category: "Full-Stack / IoT",
        summary:
            "An IoT system that turns smart-plug readings into appliance-level insight, monthly bill forecasts, and savings recommendations.",
        description:
            "A mobile app that reads data from smart plugs — outlet adapters that measure each appliance's consumption to give households real-time, appliance-level insight into their electricity use, predicting monthly bills with machine learning and recommending simple ways to cut costs.",
        period: "August 2025 - April 2026",
        tech: ["React Native", "TypeScript", "Python", "FastAPI", "Scikit-learn", "MongoDB"],
        images: [
            { src: homesenseThumb, alt: "HomeSense thumbnail overview" },
            { src: homesenseLanding, alt: "HomeSense dashboard overview" },
            { src: homesenseAppliances, alt: "HomeSense smart plug hardware setup" },
            { src: homesenseBills, alt: "HomeSense monthly bill forecast" },
            { src: homesenseModes, alt: "HomeSense appliance modes" },
            { src: homesenseRecos, alt: "HomeSense savings recommendations" },
        ],
        contributions: [
            "Developed the frontend of the mobile application using React Native and TypeScript, ensuring a responsive and user-friendly interface.",
            "Implemented the bill prediction feature using linear regression, allowing users to forecast their monthly electricity expenses based on historical data.",
            "Integrated a recommendation system that provides users with actionable insights to reduce energy consumption and lower their electricity bills.",
            "Collaborated with the backend team to ensure seamless data flow between the mobile app and the smart plug devices, enhancing real-time monitoring capabilities.",
        ],
        // Mobile app — no public web deployment.
    },
    {
        slug: "moviedex",
        title: "MovieDex: A Full-Stack Movie Catalogue and Review Platform",
        shortTitle: "MovieDex",
        category: "Full-Stack",
        summary:
            "A movie catalogue with authentication, full CRUD, and a dashboard for tracking everything you have watched.",
        description:
            "MovieDex is a full-stack web application for cataloguing films. It ships with token-based authentication, complete create/read/update/delete flows for movie entries, and a dashboard that summarises a user's library at a glance.",
        period: "June 2025 - September 2025",
        tech: ["React", "TypeScript", "Tailwind CSS", "Laravel", "MariaDB"],
        images: [
            { src: moviedexLogin, alt: "MovieDex login screen" },
            { src: moviedexRegister, alt: "MovieDex registration screen" },
            { src: moviedexDashboard, alt: "MovieDex dashboard" },
            { src: moviedexAddMovie, alt: "MovieDex add movie form" },
            { src: moviedexEditMovie, alt: "MovieDex edit movie form" },
            
        ],
        contributions: [
            "Designed and built the entire frontend in React and TypeScript, styled with Tailwind CSS for a consistent design system.",
            "Implemented authentication with protected routes, session persistence, and form-level validation.",
            "Built the REST API in Node.js with MongoDB, covering full CRUD for movie records.",
            "Created the dashboard view that aggregates a user's catalogue into readable summaries.",
        ],
        // TODO: add the deployment URL to show the "Visit Live" button.
        liveUrl: "https://moviedex-website.vercel.app",
    },
    
];

export function getProjectBySlug(slug: string | undefined): Project | undefined {
    return PROJECTS.find((project) => project.slug === slug);
}

/** Returns the neighbouring projects, wrapping around the ends of the list. */
export function getProjectNeighbours(slug: string | undefined) {
    const index = PROJECTS.findIndex((project) => project.slug === slug);

    if (index === -1) {
        return { index, previous: undefined, next: undefined };
    }

    const total = PROJECTS.length;

    return {
        index,
        previous: PROJECTS[(index - 1 + total) % total],
        next: PROJECTS[(index + 1) % total],
    };
}
