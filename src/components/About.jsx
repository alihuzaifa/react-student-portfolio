import { aboutFacts, aboutText, stats } from "../data";
import { useCountUp } from "../hooks/useCountUp";
import { useReveal } from "../hooks/useReveal";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

/* One stat card. The number stays at zero until the card is on screen. */
function StatCard({ item, isRunning }) {
    const value = useCountUp(item.number, isRunning);

    return (
        <div className="stat-card">
            <div className="stat-num">{value}{item.suffix}</div>
            <div className="stat-label">{item.label}</div>
        </div>
    );
}

export default function About() {
    const [statsRef, areStatsVisible] = useReveal();

    return (
        <section className="section" id="about" aria-labelledby="aboutTitle">
            <div className="container">
                <SectionHead
                    id="aboutTitle"
                    tag="Introduction"
                    title="About Me"
                    subtitle="A short look at who I am and what I am studying."
                />

                <div className="about-grid">
                    <Reveal className="about-left">
                        <div className="about-copy">
                            {aboutText.map((paragraph) => (
                                <p key={paragraph.slice(0, 30)}>{paragraph}</p>
                            ))}
                        </div>

                        <ul className="fact-list">
                            {aboutFacts.map((fact) => (
                                <li key={fact.label}>
                                    <b>{fact.label}</b>
                                    {fact.value}
                                </li>
                            ))}
                        </ul>
                    </Reveal>

                    <div
                        ref={statsRef}
                        className={areStatsVisible ? "stats-grid reveal show" : "stats-grid reveal"}
                    >
                        {stats.map((item) => (
                            <StatCard key={item.label} item={item} isRunning={areStatsVisible} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
