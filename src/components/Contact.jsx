import { contactInfo, contactNote, profile } from "../data";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

/* There is no message form on purpose. A form needs a server behind it to
   deliver anything, and this is a static site, so the cards link straight to
   the real email address and phone number. */
export default function Contact() {
    return (
        <section className="section" id="contact" aria-labelledby="contactTitle">
            <div className="container">
                <SectionHead
                    id="contactTitle"
                    tag="Say Hello"
                    title="Contact Me"
                    subtitle="Have a project or a question? Here is how to reach me."
                />

                <Reveal as="ul" className="contact-cards">
                    {contactInfo.map((item) => (
                        <li key={item.label}>
                            <a className="contact-card" href={item.link}>
                                <span className="contact-icon" aria-hidden="true">{item.icon}</span>
                                <span>
                                    <small>{item.label}</small>
                                    <strong>{item.value}</strong>
                                </span>
                            </a>
                        </li>
                    ))}
                </Reveal>

                <Reveal className="contact-cta">
                    <p>{contactNote.text}</p>
                    <a className="btn btn-primary" href={"mailto:" + profile.email}>
                        {contactNote.buttonText}
                    </a>
                </Reveal>
            </div>
        </section>
    );
}
