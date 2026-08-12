import { useEffect, useState } from "react";
import { navLinks, profile } from "../data";

/* Splits the full name so the second word can carry the brand gradient */
export function Logo() {
    const parts = profile.name.split(" ");

    if (parts.length === 1) return <span>{parts[0]}</span>;

    return (
        <>
            {parts[0]} <span>{parts.slice(1).join(" ")}</span>
        </>
    );
}

export default function Navbar({ isStuck, activeId, theme, onToggleTheme }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    /* Escape closes the mobile menu, which is what keyboard users expect */
    useEffect(() => {
        function onKeyDown(event) {
            if (event.key === "Escape") setIsMenuOpen(false);
        }

        document.addEventListener("keydown", onKeyDown);
        return () => document.removeEventListener("keydown", onKeyDown);
    }, []);

    return (
        <header className={isStuck ? "navbar stuck" : "navbar"}>
            <div className="container nav-inner">
                <a href="#home" className="logo"><Logo /></a>

                <nav aria-label="Main navigation">
                    <ul className={isMenuOpen ? "nav-menu open" : "nav-menu"} id="navMenu">
                        {navLinks.map((item) => {
                            const isActive = item.link === "#" + activeId;

                            return (
                                <li key={item.link}>
                                    <a
                                        href={item.link}
                                        className={isActive ? "active" : ""}
                                        aria-current={isActive ? "true" : undefined}
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {item.title}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </nav>

                <div className="nav-right">

                    {/* Dark and light theme switch */}
                    <button
                        type="button"
                        className={theme === "dark" ? "theme-switch on" : "theme-switch"}
                        role="switch"
                        aria-checked={theme === "dark"}
                        aria-label="Switch between dark and light theme"
                        onClick={onToggleTheme}
                    >
                        <span className="switch-track">
                            <svg className="switch-icon icon-sun" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <circle cx="12" cy="12" r="4.2" />
                                <path d="M12 2v2.4M12 19.6V22M2 12h2.4M19.6 12H22M4.9 4.9l1.7 1.7M17.4 17.4l1.7 1.7M19.1 4.9l-1.7 1.7M6.6 17.4l-1.7 1.7" />
                            </svg>
                            <svg className="switch-icon icon-moon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <path d="M20 13.5A8.2 8.2 0 1 1 10.5 4a6.6 6.6 0 0 0 9.5 9.5z" />
                            </svg>
                            <span className="switch-knob" />
                        </span>
                    </button>

                    {/* Mobile menu button */}
                    <button
                        type="button"
                        className={isMenuOpen ? "menu-btn open" : "menu-btn"}
                        aria-label={isMenuOpen ? "Close the menu" : "Open the menu"}
                        aria-expanded={isMenuOpen}
                        aria-controls="navMenu"
                        onClick={() => setIsMenuOpen((open) => !open)}
                    >
                        <span /><span /><span />
                    </button>
                </div>
            </div>
        </header>
    );
}
