import { profile, projects, skillGroups, socialLinks } from "../data";
import { useTypingText } from "../hooks/useTypingText";
import { Logo } from "./Navbar";

/* Adds up the skills inside every category, so the small card next to the
   photo can never fall out of step with the Skills section */
const TOTAL_SKILLS = skillGroups.reduce((total, group) => total + group.skills.length, 0);

export function SocialLinks() {
    return (
        <ul className="social-row" aria-label="Social profiles">
            {socialLinks.map((item) => (
                <li key={item.name}>
                    <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={item.name}
                        title={item.name}
                    >
                        {item.icon}
                    </a>
                </li>
            ))}
        </ul>
    );
}

export default function Hero() {
    const typedRole = useTypingText(profile.typingRoles);

    return (
        <section className="hero" id="home">
            <div className="hero-glow" aria-hidden="true" />

            <div className="container hero-inner">
                <div className="hero-text">
                    <span className="badge">
                        {profile.available ? (
                            <>
                                <span className="dot" /> Open to work
                            </>
                        ) : (
                            "Currently unavailable"
                        )}
                    </span>

                    <h1 className="hero-title"><Logo /></h1>

                    <p className="hero-role">
                        <span className="hero-role-static">I am a </span>
                        <span className="typing">{typedRole}</span>
                        <span className="cursor" aria-hidden="true">|</span>
                    </p>

                    <p className="hero-tagline">{profile.tagline}</p>

                    <div className="hero-btns">
                        <a href="#projects" className="btn btn-primary">View My Work</a>
                        <a href="#contact" className="btn btn-ghost">Hire Me</a>
                        <a href={profile.resume} className="btn btn-ghost" download>Download CV</a>
                    </div>

                    <SocialLinks />
                </div>

                <div className="hero-photo">
                    <div className="photo-ring">
                        <div className="photo-inner">
                            {profile.photo ? (
                                <img src={profile.photo} alt={"Photo of " + profile.name} />
                            ) : (
                                <div className="photo-initials">{profile.initials}</div>
                            )}
                        </div>
                    </div>

                    <div className="float-chip chip-1"><b>{TOTAL_SKILLS}+</b> Skills</div>
                    <div className="float-chip chip-2"><b>{projects.length}</b> Projects</div>
                </div>
            </div>

            <a href="#about" className="scroll-hint">Scroll down</a>
        </section>
    );
}
