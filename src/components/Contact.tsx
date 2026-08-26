import { contactInfo } from "../data/content";
import "./Contact.css";

export default function Contact() {
  return (
    <section className="section section--dark contact" id="contact">
      <div className="container contact__inner">
        <p className="eyebrow">Contact</p>
        <h2>Have a technology challenge or opportunity?</h2>

        <div className="contact__signature">
          <p className="contact__name">Nikhil Raj</p>
          <p className="contact__title">Technical Project Manager</p>
        </div>

        <div className="contact__links">
          <a href={`mailto:${contactInfo.email}`} className="btn btn-primary">
            Email Nikhil <span className="btn-arrow" aria-hidden="true">→</span>
          </a>
          <a href={contactInfo.linkedin} className="btn btn-ghost" target="_blank" rel="noreferrer">
            Connect on LinkedIn
          </a>
        </div>

        <p className="contact__editable-note">
          Replace <code>{contactInfo.email}</code> and <code>{contactInfo.linkedin}</code> in{" "}
          <code>src/data/content.ts</code> with your real details.
        </p>
      </div>
    </section>
  );
}
