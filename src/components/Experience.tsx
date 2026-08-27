import { Link } from "react-router-dom";
import { experience } from "../data/content";
import "./Experience.css";

const globalLogicProjects = [
  ["01", "Hitachi LSH — Lumada Solution", "Enterprise service portal", "hitachi-lsh"],
  ["02", "Expedia Loyalty Experience", "Customer experience & loyalty", "expedia-loyalty-experience"],
  ["03", "Ford Credit", "Mobile financial experience", "ford-credit"],
  ["04", "TTC Touring", "Travel shopping & cart modernisation", "ttc-touring"],
] as const;

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
                  {role.points.map((pt) => <li key={pt}>{pt}</li>)}
                </ul>

                {role.org === "Hitachi GlobalLogic" && (
                  <div className="experience__projects">
                    <div className="experience__projects-head">
                      <span>Selected client programmes</span>
                      <span>04 projects</span>
                    </div>
                    <div className="experience__project-grid">
                      {globalLogicProjects.map(([index, title, label, slug]) => (
                        <Link to={`/work/${slug}`} className="experience__project" key={slug}>
                          <span>{index}</span>
                          <div><strong>{title}</strong><small>{label}</small></div>
                          <b>↗</b>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
