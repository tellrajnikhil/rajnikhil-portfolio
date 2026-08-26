import { Link } from "react-router-dom";
import { projects } from "../data/content";
import "./Projects.css";

const visualBySlug: Record<string, string> = {
  "hitachi-lsh": "Portal / Access",
  "expedia-loyalty-experience": "Loyalty / CX",
  "ford-credit": "Mobile / Finance",
  "ttc-touring": "Travel / Platform",
  vituosica: "Live / Streaming",
  "healthcare-workforce-platform": "Health / Workforce",
  vixo: "VR / Blockchain",
  travx: "Retail / Discovery",
  "pmgsy-ommas": "Gov / Infrastructure",
};

export default function Projects() {
  return (
    <section className="section section--dark projects" id="work">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Selected Projects</p>
          <h2>A body of work across AI, data, digital transformation and complex delivery.</h2>
        </div>

        <div className="projects__list">
          {projects.map((p) => (
            <Link
              to={`/work/${p.slug}`}
              key={p.slug}
              className={`project-card${p.featured ? " project-card--featured" : ""}`}
            >
              <div className="project-card__visual" aria-hidden="true">
                <span>{visualBySlug[p.slug]}</span>
                <i />
                <b />
              </div>
              <div className="project-card__content">
                <div className="project-card__top">
                  <span className="project-card__index">{p.index}</span>
                  <div className="project-card__heading">
                    <p>{p.org}</p>
                    <h3>{p.title}</h3>
                  </div>
                </div>
                <p className="project-card__domain">{p.domain}</p>
                <p className="project-card__desc">{p.description}</p>
                <ul className="project-card__tech" aria-label="Technology and complexity">
                  {p.tech.slice(0, 5).map((t) => <li key={t}>{t}</li>)}
                </ul>
                <span className="project-card__link">View Case Study <span aria-hidden="true">↗</span></span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
