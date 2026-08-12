/* The round button in the bottom corner. It only appears once the visitor
   has scrolled past the first screen. */
export default function BackToTop({ isVisible }) {
    return (
        <button
            type="button"
            className={isVisible ? "top-btn show" : "top-btn"}
            aria-label="Back to top"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path d="M12 19V5M5 12l7-7 7 7" />
            </svg>
        </button>
    );
}
