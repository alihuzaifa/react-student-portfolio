import Reveal from "./Reveal";

/* The small tag, the big title and the grey line that every section starts
   with. Keeping it in one place is what makes the spacing identical from the
   top of the page to the bottom. */
export default function SectionHead({ tag, title, subtitle, id }) {
    return (
        <Reveal className="section-head">
            {tag && <span className="section-tag">{tag}</span>}
            <h2 className="section-title" id={id}>{title}</h2>
            {subtitle && <p className="section-sub">{subtitle}</p>}
        </Reveal>
    );
}
