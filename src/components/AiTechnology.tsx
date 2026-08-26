import { aiTechnology } from "../data/content";
import "./AiTechnology.css";

const groups = [
  { title: "AI & Data", items: aiTechnology.slice(0, 9) },
  { title: "Delivery & Engineering", items: aiTechnology.slice(9, 13) },
  { title: "Product & Experience", items: aiTechnology.slice(13) },
];

export default function AiTechnology() {
  return (
    <section className="section ai-tech" id="technology">
      <div className="container ai-tech__grid">
        <div>
          <p className="eyebrow">AI & Technology</p>
          <h2>I understand the technology deeply enough to lead complex delivery.</h2>
          <p className="ai-tech__note">
            I bring technical fluency across the AI and data stack to project leadership — not as a full-time
            AI engineer, but as a delivery lead who can talk architecture, evaluate trade-offs and hold
            engineering teams to account.
          </p>
        </div>

        <div className="ai-tech__groups">
          {groups.map((group) => (
            <div className="ai-tech__group" key={group.title}>
              <p className="ai-tech__group-title">{group.title}</p>
              <ul className="ai-tech__list">
                {group.items.map((t) => <li key={t}>{t}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
