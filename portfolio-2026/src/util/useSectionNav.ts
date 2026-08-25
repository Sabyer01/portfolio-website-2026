import { useLocation, useNavigate } from "react-router-dom";

/** Sentinel scroll target meaning "the top of the page", not an element id. */
export const TOP = "top";

/**
 * Sections (#about, #experience, #projects, #contact) all live on the home page.
 * From home we scroll straight to them; from anywhere else we route home first
 * and hand the target to HomeRoute, which scrolls once it has mounted.
 *
 * Shared by the navbar and the footer's quick links.
 */
export function useSectionNav() {
    const location = useLocation();
    const navigate = useNavigate();

    const onHome = location.pathname === "/";

    const goToSection = (id: string) => {
        if (onHome) {
            document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
            return;
        }

        navigate("/", { state: { scrollTo: id } });
    };

    /**
     * The wordmark goes back to the landing page — the very top of home, not a
     * section anchor, so it ignores the navbar's scroll-padding offset.
     *
     * Meant for the onClick of a <Link to="/">. It takes over the navigation so
     * the Link cannot follow up with a stateless one and drop the scroll target,
     * but it leaves modified clicks (ctrl/cmd/middle) to the browser so
     * "open in new tab" still works.
     */
    const goHome = (event: React.MouseEvent<HTMLAnchorElement>) => {
        const modified =
            event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0;

        if (event.defaultPrevented || modified) return;

        event.preventDefault();

        if (onHome) {
            window.scrollTo({ top: 0, behavior: "smooth" });
            return;
        }

        navigate("/", { state: { scrollTo: TOP } });
    };

    return { onHome, goToSection, goHome };
}
