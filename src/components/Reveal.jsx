import { useReveal } from "../hooks/useReveal";

/* Wraps anything that should fade and lift into view as you scroll.

   Use it like a normal tag. The "as" prop picks which tag it renders:
       <Reveal>...</Reveal>              becomes a div
       <Reveal as="ul" className="x">    becomes a ul */
export default function Reveal({ as: Tag = "div", className = "", children, ...rest }) {
    const [ref, isVisible] = useReveal();
    const classes = ["reveal", isVisible ? "show" : "", className].filter(Boolean).join(" ");

    return (
        <Tag ref={ref} className={classes} {...rest}>
            {children}
        </Tag>
    );
}
