import { contactInfo } from "../data/content";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div>
          <p className="footer__name">Nikhil Raj</p>
          <p className="footer__title">Technical Project Manager</p>
        </div>

        <nav className="footer__nav" aria-label="Footer">
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
          <a href="#technology">Technology</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="footer__contact">
          <a href={contactInfo.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={`mailto:${contactInfo.email}`}>Email</a>
        </div>
      </div>

      <div className="container">
        <p className="footer__copy">© 2026 Nikhil Raj</p>
      </div>
    </footer>
  );
}
