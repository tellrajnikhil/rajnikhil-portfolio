import { Link } from "react-router-dom";
import { projects } from "../data/content";
import "./Projects.css";

export default function Projects() {
  return (
    <section className="section section--dark projects" id="work">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Selected Projects</p>
          <h2>Selected work that moved organisations forward.</h2>
        </div>

        <div className="projects__list">
          {projects.map((p) => {
            const CardInner = (
              <>
                <div className="project-card__top">
                  <span className="project-card__index">{p.index}</span>
                  <div className="project-card__heading">
                    <p className="project-card__org">{p.org}</p>
                    <h3>{p.title}</h3>
                  </div>
                </div>

                <p className="project-card__domain">{p.domain}</p>
                <p className="project-card__role">{p.role}</p>
                <p className="project-card__desc">{p.description}</p>

                <ul className="project-card__tech" aria-label="Technology and complexity">
                  {p.tech.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>

                {p.hasCaseStudy && (
                  <span className="project-card__link">
                    View Case Study <span aria-hidden="true">→</span>
                  </span>
                )}
              </>
            );

            return p.hasCaseStudy ? (
              <Link
                to={`/work/${p.slug}`}
                key={p.slug}
                className={`project-card${p.featured ? " project-card--featured" : ""}`}
              >
                {CardInner}
              </Link>
            ) : (
              <div key={p.slug} className="project-card">
                {CardInner}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
