import "./Summary.css";

const capabilities = [
  "End-to-end technology delivery",
  "Cross-functional leadership",
  "Product & engineering collaboration",
  "AI & GenAI",
  "Digital transformation",
  "Data & analytics",
  "Agile delivery",
  "Executive stakeholder management",
  "Governance",
  "Risk & dependency management",
];

export default function Summary() {
  return (
    <section className="section summary">
      <div className="container summary__grid">
        <div className="section-head">
          <p className="eyebrow">Professional Summary</p>
          <h2>Delivery leadership for work that changes how organisations operate.</h2>
        </div>

        <div className="summary__body">
          <p>
            I lead complex technology programmes end to end — from framing the business problem through
            to governed, measurable delivery. I work across engineering, product and executive stakeholders
            to keep AI, data and digital transformation initiatives moving with clarity, discipline and
            accountability.
          </p>

          <ul className="summary__list" aria-label="Capabilities">
            {capabilities.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
