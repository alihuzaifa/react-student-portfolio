import { services } from "../data";
import SectionHead from "./SectionHead";

export default function Services() {
    return (
        <section className="section" id="services" aria-labelledby="servicesTitle">
            <div className="container">
                <SectionHead
                    id="servicesTitle"
                    tag="How I Can Help"
                    title="Services"
                    subtitle="The kind of work I take on right now."
                />

                <div className="services-grid">
                    {services.map((item) => (
                        <div className="service-card" key={item.title}>
                            <div className="service-num" aria-hidden="true">{item.icon}</div>
                            <h3>{item.title}</h3>
                            <p>{item.detail}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
