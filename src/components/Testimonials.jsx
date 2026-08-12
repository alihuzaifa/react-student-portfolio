import { testimonials } from "../data";
import SectionHead from "./SectionHead";

export default function Testimonials() {
    return (
        <section className="section section-alt" id="testimonials" aria-labelledby="testimonialsTitle">
            <div className="container">
                <SectionHead
                    id="testimonialsTitle"
                    tag="Kind Words"
                    title="Testimonials"
                    subtitle="What people I have worked with have said."
                />

                <div className="testi-grid">
                    {testimonials.map((item) => (
                        <figure className="testi-card" key={item.name}>
                            <div className="quote" aria-hidden="true">&ldquo;</div>

                            <blockquote>
                                <p>{item.message}</p>
                            </blockquote>

                            <figcaption className="testi-person">
                                {/* The round avatar shows the first letter of the person's name */}
                                <div className="avatar" aria-hidden="true">{item.name.charAt(0)}</div>
                                <div>
                                    <h4>{item.name}</h4>
                                    <span>{item.role}</span>
                                </div>
                            </figcaption>
                        </figure>
                    ))}
                </div>
            </div>
        </section>
    );
}
