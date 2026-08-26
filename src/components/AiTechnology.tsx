import { aiTechnology } from "../data/content";
import "./AiTechnology.css";

export default function AiTechnology() {
  return (
    <section className="section ai-tech" id="technology">
      <div className="container ai-tech__grid">
        <div>
          <p className="eyebrow">AI & Technology</p>
          <h2>I understand the technology deeply enough to lead complex delivery.</h2>
          <p className="ai-tech__note">
            Nikhil brings technical fluency across the AI and data stack to project leadership — not as a
            full-time AI engineer, but as a delivery lead who can talk architecture, evaluate trade-offs and
            hold engineering teams to account.
          </p>
        </div>

        <ul className="ai-tech__list">
          {aiTechnology.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
