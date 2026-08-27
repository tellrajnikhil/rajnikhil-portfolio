import { Link } from "react-router-dom";
import { projects } from "../data/content";
import "./Projects.css";

const visualBySlug: Record<string, string> = {
  "hitachi-lsh": "PORTAL / ACCESS",
  "expedia-loyalty-experience": "LOYALTY / CX",
  "ford-credit": "MOBILE / FINANCE",
  "ttc-touring": "TRAVEL / PLATFORM",
  vituosica: "LIVE / STREAMING",
  "healthcare-workforce-platform": "HEALTH / WORKFORCE",
  vixo: "VR / BLOCKCHAIN",
  travx: "RETAIL / DISCOVERY",
  "pmgsy-ommas": "GOV / INFRASTRUCTURE",
};

const globalLogicSlugs = ["hitachi-lsh", "expedia-loyalty-experience", "ford-credit", "ttc-touring"];

function ProjectCard({ p }: { p: (typeof projects)[number] }) {
  return (
    <Link to={`/work/${p.slug}`} className="project-card">
      <div className="project-card__visual" aria-hidden="true">
        <span>{visualBySlug[p.slug]}</span>
        <i /><b />
        <div className="project-card__visual-ui"><em>PROJECT</em><strong>{p.index}</strong></div>
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
        <ul className="project-card__tech" aria-label="Technology and delivery areas">
          {p.tech.slice(0, 5).map((t) => <li key={t}>{t}</li>)}
        </ul>
        <span className="project-card__link">View project details <span aria-hidden="true">↗</span></span>
      </div>
    </Link>
  );
}

export default function Projects() {
  const globalLogic = projects.filter((p) => globalLogicSlugs.includes(p.slug));
  const other = projects.filter((p) => !globalLogicSlugs.includes(p.slug));

  return (
    <section className="section section--dark projects" id="work">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Selected Projects</p>
          <h2>A body of work across AI, data, digital transformation and complex delivery.</h2>
        </div>

        <section className="projects__group">
          <div className="projects__group-head">
            <div>
              <p className="eyebrow">Hitachi GlobalLogic</p>
              <h3>Four distinct programmes. Four separate delivery stories.</h3>
            </div>
            <p>
              My GlobalLogic portfolio spans enterprise service management, travel experience, automotive finance
              and multi-brand platform modernisation. Each project below opens its own case study.
            </p>
          </div>
          <div className="projects__grid">
            {globalLogic.map((p) => <ProjectCard key={p.slug} p={p} />)}
          </div>
        </section>

        <section className="projects__group projects__group--other">
          <div className="projects__group-head">
            <div>
              <p className="eyebrow">Earlier & Selected Work</p>
              <h3>Technology projects across streaming, healthcare, emerging tech and public-sector delivery.</h3>
            </div>
            <p>Selected work from earlier delivery roles, each with its own project detail page.</p>
          </div>
          <div className="projects__grid">
            {other.map((p) => <ProjectCard key={p.slug} p={p} />)}
          </div>
        </section>
      </div>
    </section>
  );
}
