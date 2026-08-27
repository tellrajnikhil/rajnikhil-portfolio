import { useEffect, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { caseStudies } from "../data/content";
import "./CaseStudyPage.css";

const projectImages: Record<string, string[]> = {"hitachi-lsh": ["/projects/LSH.png"], "expedia-loyalty-experience": ["/projects/Expedia.png"], "ford-credit": ["/projects/Ford Credit.png"], "ttc-touring": ["/projects/TTC.png"], "healthcare-workforce-platform": ["/projects/HatrikLanding.png", "/projects/HatrikMap.png", "/projects/HatrikMobileLanding.png", "/projects/HatrikMobile.png", "/projects/HatrikMobile1.png", "/projects/HatrikMobile2.png", "/projects/HatrikMobile3.png"], "pmgsy-ommas": ["/projects/PMGSY.png", "/projects/PMGSY1.png", "/projects/PMGSY_Ommas.png", "/projects/OmmasMobile.png"], "travx": ["/projects/Travx_Landing.png", "/projects/Travx.png", "/projects/Travx_Amex.png", "/projects/Travx_Amex1.png", "/projects/Travx_Amex2.png", "/projects/Travx_Cardadding.png", "/projects/Travx_Payment.png"], "vituosica": ["/projects/VirtuosicaLanding.png", "/projects/Virtuosica_Livestreaming.png", "/projects/Virtuosica_livestreaming1.png", "/projects/Virtuosica_Search.png", "/projects/VirtuosicaChat.png"], "vixo": ["/projects/Vixo.png", "/projects/VIXO1.png", "/projects/VIXO2.png", "/projects/VIXO3.png", "/projects/VIXO4.png", "/projects/VIXO5.png", "/projects/Vixo_Chat.png"]};

const visualMeta: Record<string, { labels: string[]; metrics: string[]; caption: string }> = {
  "hitachi-lsh": {
    labels: ["ACCESS", "SERVICE", "PORTAL"],
    metrics: ["TOOLS 18", "REQUESTS 42", "GOVERNED"],
    caption: "Enterprise service access and provisioning",
  },
  "expedia-loyalty-experience": {
    labels: ["LOYALTY", "BENEFITS", "CX"],
    metrics: ["MODULES 04", "QA ACTIVE", "ACCESSIBLE"],
    caption: "Customer journey and loyalty delivery",
  },
  "ford-credit": {
    labels: ["MOBILE", "PAYMENTS", "FINANCE"],
    metrics: ["IOS", "ANDROID", "RELEASE READY"],
    caption: "Cross-platform financial experience",
  },
  "ttc-touring": {
    labels: ["SHOP", "CART", "BRANDS"],
    metrics: ["CORE", "REUSE", "MULTI-BRAND"],
    caption: "Reusable travel commerce architecture",
  },
  vituosica: {
    labels: ["STREAM", "CONNECT", "PAY"],
    metrics: ["RTMP", "CRM", "PAYMENTS"],
    caption: "Live video, artist and audience workflows",
  },
  "healthcare-workforce-platform": {
    labels: ["STAFF", "SHIFT", "CARE"],
    metrics: ["WEB", "MOBILE", "REAL-TIME"],
    caption: "Workforce coordination across web and mobile",
  },
  vixo: {
    labels: ["LIVE", "VR", "BLOCKCHAIN"],
    metrics: ["360°", "AR", "WALLET"],
    caption: "Immersive live-performance architecture",
  },
  travx: {
    labels: ["DISCOVER", "OFFERS", "RETAIL"],
    metrics: ["WEB", "MOBILE", "DISCOVERY"],
    caption: "Mobile-oriented offer discovery",
  },
  "pmgsy-ommas": {
    labels: ["ROADS", "DATA", "GOVERNANCE"],
    metrics: ["SQL", "SSRS", "PFMS"],
    caption: "Public-sector reporting and programme delivery",
  },
};

export default function CaseStudyPage() {
  const { slug } = useParams();
  const study = slug ? caseStudies[slug] : undefined;
  const meta = slug ? visualMeta[slug] : undefined;

  useEffect(() => {
    if (study) document.title = `${study.org} — ${study.title} | Nikhil Raj`;
  }, [study]);

  if (!study) return <Navigate to="/" replace />;

  const images = slug ? (projectImages[slug] ?? []) : [];
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => { setActiveImage(0); }, [slug]);

  const visuals = meta ?? { labels: ["PROJECT", "DELIVERY", "OUTCOME"], metrics: ["PLAN", "BUILD", "SHIP"], caption: "Project delivery snapshot" };

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
              <div className="case__visual-grid" />
              <div className="case__visual-screen">
                <div className="case__visual-toolbar"><span>PROJECT SNAPSHOT</span><i /></div>
                <div className="case__visual-main">
                  <div className="case__visual-sidebar">
                    {visuals.labels.map((label, i) => <span key={label}><b>0{i+1}</b>{label}</span>)}
                  </div>
                  <div className="case__visual-canvas">
                    <div className="case__visual-diagram">
                      <span className="case__dot case__dot--a" />
                      <span className="case__dot case__dot--b" />
                      <span className="case__dot case__dot--c" />
                      <div className="case__line case__line--a" />
                      <div className="case__line case__line--b" />
                      <div className="case__line case__line--c" />
                    </div>
                    <div className="case__visual-metrics">
                      {visuals.metrics.map(m => <span key={m}>{m}</span>)}
                    </div>
                  </div>
                </div>
                <div className="case__visual-caption">{visuals.caption}</div>
              </div>
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

          {images.length > 0 && (
            <section className="case__gallery">
              <div>
                <p className="case__kicker">Project visuals</p>
                <h2>Project screens and delivery artefacts.</h2>
              </div>
              <div className="case__image-slider">
                <div className="case__image-frame">
                  <img src={images[activeImage]} alt={`${study.title} project visual ${activeImage + 1}`} />
                </div>
                {images.length > 1 && (
                  <div className="case__slider-controls">
                    <button type="button" aria-label="Previous image" onClick={() => setActiveImage(i => (i - 1 + images.length) % images.length)}>←</button>
                    <div className="case__slider-dots">
                      {images.map((_, i) => <button key={i} type="button" aria-label={`Show image ${i+1}`} className={i === activeImage ? "is-active" : ""} onClick={() => setActiveImage(i)} />)}
                    </div>
                    <button type="button" aria-label="Next image" onClick={() => setActiveImage(i => (i + 1) % images.length)}>→</button>
                  </div>
                )}
              </div>
            </section>
          )}
        </div>

        <div className="container case__footer-link">
          <Link to="/#work" className="btn btn-primary">View all projects <span>→</span></Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
