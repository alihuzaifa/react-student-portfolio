import { skillGroups } from "../data";
import { useReveal } from "../hooks/useReveal";
import SectionHead from "./SectionHead";

/* One category card. The bars sit at zero width until the card is on screen,
   and the CSS transition does the rest of the work. */
function SkillCard({ group }) {
    const [ref, isVisible] = useReveal(0.3);

    return (
        <div className="skill-card" ref={ref}>
            <div className="skill-head">
                <div className="skill-icon" aria-hidden="true">{group.icon}</div>
                <h3>{group.category}</h3>
            </div>

            {group.skills.map((skill) => (
                <div className="skill-item" key={skill.name}>
                    <div className="skill-top">
                        <span>{skill.name}</span>
                        <span>{skill.percent}%</span>
                    </div>
                    <div className="bar">
                        <div
                            className="bar-fill"
                            style={{ width: isVisible ? skill.percent + "%" : "0%" }}
                        />
                    </div>
                </div>
            ))}
        </div>
    );
}

export default function Skills() {
    return (
        <section className="section section-alt" id="skills" aria-labelledby="skillsTitle">
            <div className="container">
                <SectionHead
                    id="skillsTitle"
                    tag="My Toolkit"
                    title="Skills"
                    subtitle="What I work with today and what I am learning next."
                />

                <div className="skills-grid">
                    {skillGroups.map((group) => (
                        <SkillCard key={group.category} group={group} />
                    ))}
                </div>
            </div>
        </section>
    );
}
