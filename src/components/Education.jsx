import { certificates, timeline } from "../data";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

export default function Education() {
    return (
        <section className="section section-alt" id="education" aria-labelledby="educationTitle">
            <div className="container">
                <SectionHead
                    id="educationTitle"
                    tag="My Journey"
                    title="Education & Experience"
                    subtitle="Where I have studied and where I have worked."
                />

                <div className="timeline">
                    {timeline.map((entry, index) => (
                        /* Even entries sit left of the line, odd entries sit right of it.
                           On a phone the stylesheet moves them all to one side. */
                        <div className={index % 2 === 0 ? "tl-item" : "tl-item right"} key={entry.title}>
                            <span className="tl-dot" aria-hidden="true" />
                            <div className="tl-card">
                                <span className="tl-year">{entry.year}</span>
                                <h3>{entry.title}</h3>
                                <div className="tl-place">{entry.place}</div>
                                <p>{entry.detail}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <Reveal className="section-head cert-head">
                    <h3 className="section-title small">Certificates</h3>
                </Reveal>

                <div className="cert-grid">
                    {certificates.map((item) => (
                        <a
                            className="cert-card"
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            key={item.title}
                        >
                            <span className="cert-year">{item.year}</span>
                            <h4>{item.title}</h4>
                            <p>{item.issuer}</p>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
