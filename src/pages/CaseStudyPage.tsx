import { useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { caseStudies } from "../data/content";
import "./CaseStudyPage.css";

const visualLabels: Record<string, string[]> = {
  "hitachi-lsh": ["ACCESS", "SERVICE", "PORTAL"],
  "expedia-loyalty-experience": ["LOYALTY", "BENEFITS", "EXPERIENCE"],
  "ford-credit": ["MOBILE", "FINANCE", "CUSTOMER"],
  "ttc-touring": ["SHOP", "CART", "BRANDS"],
  vituosica: ["STREAM", "CONNECT", "PAY"],
  "healthcare-workforce-platform": ["STAFF", "SHIFT", "CARE"],
  vixo: ["LIVE", "VR", "BLOCKCHAIN"],
  travx: ["DISCOVER", "OFFERS", "RETAIL"],
  "pmgsy-ommas": ["ROADS", "DATA", "GOVERNANCE"],
};

export default function CaseStudyPage() {
  const { slug } = useParams();
  const study = slug ? caseStudies[slug] : undefined;

  useEffect(() => {
    if (study) document.title = `${study.org} — ${study.title} | Nikhil Raj`;
  }, [study]);

  if (!study) return <Navigate to="/" replace />;

  const labels = visualLabels[study.slug] ?? ["DISCOVER", "DELIVER", "OUTCOME"];

  return (
    <>
      <Nav />
      <main id="main" className="case">
        <header className="case__hero">
          <div className="container case__hero-inner">
            <div>
              <Link to="/#work" className="case__back">← Back to work</Link>
              <p className="eyebrow">{study.org}</p>
              <h1>{study.title}</h1>
              <div className="case__meta">
                <span>{study.domain}</span><span>{study.role}</span>{study.period && <span>{study.period}</span>}
              </div>
            </div>
            <div className="case__visual" aria-hidden="true">
              <div className="case__visual-lines" />
              {labels.map((label, i) => (
                <div className={`case__visual-node case__visual-node--${i+1}`} key={label}>
                  <small>0{i+1}</small><strong>{label}</strong>
                </div>
              ))}
              <svg viewBox="0 0 500 300"><path d="M40 245 H150 V185 H250 V125 H350 V70 H460" /></svg>
            </div>
          </div>
        </header>

        <div className="container case__body">
          <section className="case__block case__lead">
            <p className="case__kicker">Project overview</p>
            <p>{study.challenge}</p>
          </section>

          <div className="case__two-col">
            <section className="case__block">
              <p className="case__kicker">My role</p>
              <ul>{study.myRole.map((r) => <li key={r}>{r}</li>)}</ul>
            </section>
            <section className="case__block">
              <p className="case__kicker">Delivery approach</p>
              <ul>{study.solution.map((s) => <li key={s}>{s}</li>)}</ul>
            </section>
          </div>

          <section className="case__block">
            <p className="case__kicker">Technology & complexity</p>
            <div className="case__tech-grid">
              <div><h3>Technology</h3><ul className="case__tags">{study.technology.map(t => <li key={t}>{t}</li>)}</ul></div>
              <div><h3>Complexity</h3><ul>{study.complexity.map(c => <li key={c}>{c}</li>)}</ul></div>
            </div>
          </section>

          <section className="case__outcome">
            <p className="case__kicker">Outcome</p>
            <h2>{study.outcome}</h2>
          </section>

          <section className="case__gallery">
            <div><p className="case__kicker">Project visual</p><h2>A visual snapshot of the problem, platform and delivery journey.</h2></div>
            <div className="case__gallery-grid">
              {labels.map((label, i) => (
                <div className={`case__gallery-card case__gallery-card--${i+1}`} key={label}>
                  <span>0{i+1}</span><strong>{label}</strong><small>{study.domain}</small>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="container case__footer-link">
          <Link to="/#work" className="btn btn-primary">View all projects <span>→</span></Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
