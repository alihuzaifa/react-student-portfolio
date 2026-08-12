import { useEffect, useState } from "react";
import { profile } from "../data";

/* The spinner that covers the page for a moment on the first paint */
export default function Loader() {
    const [isHidden, setIsHidden] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsHidden(true), 600);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={isHidden ? "loader hide" : "loader"}>
            <div className="loader-ring" />
            <p className="loader-text">{profile.name}</p>
        </div>
    );
}
