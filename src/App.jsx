import { useEffect } from "react";
import { profile } from "./data";
import { useScrollInfo } from "./hooks/useScrollInfo";
import { useTheme } from "./hooks/useTheme";

import About from "./components/About";
import BackToTop from "./components/BackToTop";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";

/* Draws the tab icon from the initials in data.js, so there is no image file
   to keep in step with the name */
function makeFavicon(initials) {
    return "data:image/svg+xml," +
        "%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E" +
        "%3Crect width='100' height='100' rx='22' fill='%234f46e5'/%3E" +
        "%3Ctext x='50' y='69' font-family='Arial' font-size='50' font-weight='bold' " +
        "fill='white' text-anchor='middle'%3E" + encodeURIComponent(initials) + "%3C/text%3E%3C/svg%3E";
}

export default function App() {
    const { theme, toggleTheme } = useTheme();
    const { progress, isStuck, isPastTop, activeId } = useScrollInfo();

    /* Tab title, search description and tab icon, all from the profile object */
    useEffect(() => {
        document.title = profile.name + " | " + profile.role;

        const description = document.querySelector("meta[name='description']");
        if (description) description.setAttribute("content", profile.tagline);

        const icon = document.querySelector("link[rel='icon']");
        if (icon) icon.setAttribute("href", makeFavicon(profile.initials));
    }, []);

    return (
        <>
            <Loader />

            <div className="scroll-bar" style={{ width: progress + "%" }} />

            <Navbar
                isStuck={isStuck}
                activeId={activeId}
                theme={theme}
                onToggleTheme={toggleTheme}
            />

            <main>
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Education />
                <Services />
                <Testimonials />
                <Contact />
            </main>

            <Footer />

            <BackToTop isVisible={isPastTop} />
        </>
    );
}
