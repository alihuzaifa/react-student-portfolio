import { useEffect, useState } from "react";
import { navLinks } from "../data";

/* The ids of every section the menu points at, worked out once from the data */
const SECTION_IDS = navLinks.map((item) => item.link.replace("#", ""));

/* Everything the page needs to know about the current scroll position:

     progress  how far down the page we are, as a percentage
     isStuck   true once the page has moved, so the navbar gets its background
     isPastTop true after the first screen, so the back to top button appears
     activeId  the id of the section on screen, so its menu link lights up

   The work is wrapped in requestAnimationFrame so it runs at most once per
   frame instead of on every single scroll event. */
export function useScrollInfo() {
    const [scroll, setScroll] = useState({
        progress: 0,
        isStuck: false,
        isPastTop: false,
        activeId: ""
    });

    useEffect(() => {
        let frame = 0;

        function readScroll() {
            const top = window.scrollY;
            const scrollable = document.body.scrollHeight - window.innerHeight;

            let activeId = "";
            SECTION_IDS.forEach((id) => {
                const section = document.getElementById(id);
                if (!section) return;

                const box = section.getBoundingClientRect();
                if (box.top <= 140 && box.bottom > 140) activeId = id;
            });

            setScroll({
                progress: scrollable > 0 ? (top / scrollable) * 100 : 0,
                isStuck: top > 30,
                isPastTop: top > 400,
                activeId
            });
        }

        function onScroll() {
            cancelAnimationFrame(frame);
            frame = requestAnimationFrame(readScroll);
        }

        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", onScroll);
        readScroll();

        return () => {
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", onScroll);
            cancelAnimationFrame(frame);
        };
    }, []);

    return scroll;
}
