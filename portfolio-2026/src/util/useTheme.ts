import { useEffect, useState } from "react";

export type Theme = "dark" | "light";

const STORAGE_KEY = "xg-theme";

/**
 * Reads the theme the same way the inline bootstrap script in index.html does:
 * an explicit choice wins, otherwise fall back to the OS preference.
 */
function readInitialTheme(): Theme {
    try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored === "light" || stored === "dark") return stored;
    } catch {
        // Private mode / blocked storage — fall through to the OS preference.
    }

    return window.matchMedia?.("(prefers-color-scheme: light)").matches ? "light" : "dark";
}

export function useTheme() {
    const [theme, setTheme] = useState<Theme>(readInitialTheme);

    // Sync the choice out to the DOM and to storage (both external systems).
    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);

        try {
            localStorage.setItem(STORAGE_KEY, theme);
        } catch {
            // Nothing to do — the theme still applies for this session.
        }
    }, [theme]);

    const toggleTheme = () => setTheme((current) => (current === "dark" ? "light" : "dark"));

    return { theme, toggleTheme };
}
