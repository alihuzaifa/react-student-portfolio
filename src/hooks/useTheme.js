import { useEffect, useState } from "react";

/* Dark and light theme.

   The very first choice is already made by the small script in index.html,
   which runs before the page paints so the colours never flash. This hook
   reads that starting point back, then keeps the html element and
   localStorage in step whenever the visitor flips the switch. */
export function useTheme() {
    const [theme, setTheme] = useState(() =>
        document.documentElement.classList.contains("dark") ? "dark" : "light"
    );

    useEffect(() => {
        document.documentElement.className = theme === "dark" ? "dark" : "";
        localStorage.setItem("portfolioTheme", theme);
    }, [theme]);

    function toggleTheme() {
        setTheme((current) => (current === "dark" ? "light" : "dark"));
    }

    return { theme, toggleTheme };
}
