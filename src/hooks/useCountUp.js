import { useEffect, useState } from "react";

/* Counts from zero up to a target number.

   Nothing happens until isRunning turns true, which the About section does
   the moment its stat cards scroll into view. */
export function useCountUp(target, isRunning, steps = 45, speed = 25) {
    const [value, setValue] = useState(0);

    useEffect(() => {
        if (!isRunning) return;

        let current = 0;
        const step = target / steps;

        const timer = setInterval(() => {
            current = current + step;

            if (current >= target) {
                current = target;
                clearInterval(timer);
            }

            setValue(Math.floor(current));
        }, speed);

        return () => clearInterval(timer);
    }, [target, isRunning, steps, speed]);

    return value;
}
