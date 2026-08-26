import { experience } from "../data/content";
import "./Experience.css";

export default function Experience() {
  return (
    <section className="section experience" id="experience">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Career Experience</p>
          <h2>A decade building toward technology delivery leadership.</h2>
        </div>

        <ol className="experience__list">
          {experience.map((role) => (
            <li key={`${role.org}-${role.period}`} className="experience__item">
              <div className="experience__meta">
                <p className="experience__period">{role.period}</p>
                <p className="experience__org">{role.org}</p>
              </div>
              <div className="experience__detail">
                <h3>{role.title}</h3>
                <ul>
                  {role.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
