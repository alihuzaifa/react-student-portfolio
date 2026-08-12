import { contactInfo, footerInfo, navLinks, services } from "../data";
import { SocialLinks } from "./Hero";
import { Logo } from "./Navbar";

/* Read from the clock, so the footer never shows a stale year */
const YEAR = new Date().getFullYear();

export default function Footer() {
    return (
        <footer className="footer">

            {/* Call to action card that sits on top of the footer */}
            <div className="container">
                <div className="footer-cta">
                    <div className="footer-cta-text">
                        <h2>{footerInfo.ctaText}</h2>
                        <p>{footerInfo.ctaSub}</p>
                    </div>
                    <a href="#contact" className="btn btn-light">{footerInfo.ctaButton}</a>
                </div>
            </div>

            <div className="container footer-main">

                {/* Column 1: name, short description, social icons */}
                <div className="footer-col footer-brand">
                    <a href="#home" className="logo"><Logo /></a>
                    <p className="footer-about">{footerInfo.about}</p>
                    <SocialLinks />
                </div>

                {/* Column 2: the same page links used in the navigation bar */}
                <div className="footer-col">
                    <h3 className="footer-heading">{footerInfo.linksHeading}</h3>
                    <ul className="footer-list">
                        {navLinks.map((item) => (
                            <li key={item.link}><a href={item.link}>{item.title}</a></li>
                        ))}
                    </ul>
                </div>

                {/* Column 3: the service names, taken from the services array */}
                <div className="footer-col">
                    <h3 className="footer-heading">{footerInfo.servicesHeading}</h3>
                    <ul className="footer-list">
                        {services.map((item) => (
                            <li key={item.title}><a href="#services">{item.title}</a></li>
                        ))}
                    </ul>
                </div>

                {/* Column 4: contact details */}
                <div className="footer-col">
                    <h3 className="footer-heading">{footerInfo.contactHeading}</h3>
                    <ul className="footer-list footer-contact">
                        {contactInfo.map((item) => (
                            <li key={item.label}>
                                <span className="footer-label">{item.label}</span>
                                <a href={item.link}>{item.value}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container footer-bottom-inner">
                    <p>&copy; {YEAR} {footerInfo.owner}. {footerInfo.rights}</p>
                    <p>{footerInfo.builtWith}</p>
                </div>
            </div>
        </footer>
    );
}
