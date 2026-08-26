import { useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { caseStudies } from "../data/content";
import "./CaseStudyPage.css";

export default function CaseStudyPage() {
  const { slug } = useParams();
  const study = slug ? caseStudies[slug] : undefined;

  useEffect(() => {
    if (study) {
      document.title = `${study.org} — ${study.title} | Nikhil Raj`;
    }
  }, [study]);

  if (!study) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <Nav />
      <main id="main" className="case">
        <header className="case__hero">
          <div className="container">
            <Link to="/#work" className="case__back">
              ← Back to work
            </Link>
            <p className="eyebrow">{study.org}</p>
            <h1>{study.title}</h1>
            <div className="case__meta">
              <span>{study.domain}</span>
              <span>{study.role}</span>
              {study.period && <span>{study.period}</span>}
            </div>
          </div>
        </header>

        <div className="container case__body">
          <section className="case__block">
            <h2>Challenge</h2>
            <p>{study.challenge}</p>
          </section>

          <section className="case__block">
            <h2>My Role</h2>
            <ul>
              {study.myRole.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
          </section>

          <section className="case__block">
            <h2>Solution / Delivery Approach</h2>
            <ul>
              {study.solution.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </section>

          <section className="case__block">
            <h2>Technology & Complexity</h2>
            <div className="case__tags-group">
              <p className="case__subhead">Technology</p>
              <ul className="case__tags">
                {study.technology.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
            <div className="case__tags-group">
              <p className="case__subhead">Complexity</p>
              <ul>
                {study.complexity.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </div>
          </section>

          <section className="case__block case__outcome">
            <h2>Outcome</h2>
            <p>{study.outcome}</p>
          </section>
        </div>

        <div className="container">
          <Link to="/#work" className="btn btn-ghost case__cta">
            View all projects
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
