import { useEffect, useRef, useState } from "react";

/* Tells you when an element has scrolled into view.

   Returns a ref to attach to the element, and a true or false flag. Once the
   element has been seen the observer disconnects, so the fade in animation
   only ever runs a single time.

   Give it a ref, get back the flag:
       const [ref, isVisible] = useReveal();
       <div ref={ref} className={isVisible ? "reveal show" : "reveal"} /> */
export function useReveal(threshold = 0.15) {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        /* Older browsers without IntersectionObserver just show the content */
        if (typeof IntersectionObserver === "undefined") {
            setIsVisible(true);
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold }
        );

        observer.observe(element);
        return () => observer.disconnect();
    }, [threshold]);

    return [ref, isVisible];
}
