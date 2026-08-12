import { useState } from "react";
import { projects } from "../data";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

/* Every category used in the data, with no repeats, worked out once */
const CATEGORIES = ["All", ...new Set(projects.map((item) => item.category))];

function ProjectCard({ item }) {
    return (
        <article className="project-card">
            {item.featured && <span className="star">Featured</span>}

            <div className="project-top" aria-hidden="true">{item.icon}</div>

            <div className="project-body">
                <span className="project-cat">{item.category}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>

                <div className="tech-row">
                    {item.tech.map((name) => (
                        <span className="tech-tag" key={name}>{name}</span>
                    ))}
                </div>

                <div className="project-links">
                    <a
                        href={item.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={"Live demo of " + item.title}
                    >
                        Live Demo
                    </a>
                    <a
                        href={item.code}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={"Source code of " + item.title}
                    >
                        Source Code
                    </a>
                </div>
            </div>
        </article>
    );
}

export default function Projects() {
    const [activeCategory, setActiveCategory] = useState("All");

    const shown = activeCategory === "All"
        ? projects
        : projects.filter((item) => item.category === activeCategory);

    return (
        <section className="section" id="projects" aria-labelledby="projectsTitle">
            <div className="container">
                <SectionHead
                    id="projectsTitle"
                    tag="My Work"
                    title="Projects"
                    subtitle="A few things I have built while learning."
                />

                <Reveal className="filter-row" role="group" aria-label="Filter projects by category">
                    {CATEGORIES.map((category) => (
                        <button
                            type="button"
                            key={category}
                            className={category === activeCategory ? "filter-btn active" : "filter-btn"}
                            aria-pressed={category === activeCategory}
                            onClick={() => setActiveCategory(category)}
                        >
                            {category}
                        </button>
                    ))}
                </Reveal>

                <div className="projects-grid">
                    {shown.length === 0 ? (
                        <p className="empty-note">There are no projects in this category yet.</p>
                    ) : (
                        shown.map((item) => <ProjectCard key={item.title} item={item} />)
                    )}
                </div>
            </div>
        </section>
    );
}
