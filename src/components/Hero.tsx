import "./Hero.css";

const sdlc = ["Strategy", "Requirements", "Design", "Build", "Test", "Deploy", "Operate"];

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero__inner">
        <div className="hero__copy">
          <p className="eyebrow">Nikhil Raj</p>
          <h1 className="hero__headline">
            I turn complex technology into <em>confident outcomes.</em>
          </h1>
          <p className="hero__role">Technical Project Manager · AI · Data · Delivery</p>
          <p className="hero__sub">
            I lead complex technology programmes end to end — from framing the business problem through to governed,
            measurable delivery. I work across engineering, product and executive stakeholders to keep AI, data and
            digital transformation initiatives moving with clarity, discipline and accountability.
          </p>
          <div className="hero__cta">
            <a href="#work" className="btn btn-primary">View My Work <span className="btn-arrow" aria-hidden="true">→</span></a>
            <a href="#contact" className="btn btn-ghost">Let&rsquo;s Connect</a>
          </div>
        </div>

        <div className="hero__control" aria-label="Programme control dashboard showing SDLC and delivery controls">
          <div className="hero__control-grid" />
          <div className="hero__control-top">
            <div>
              <span className="hero__micro">PROGRAMME CONTROL</span>
              <strong>END-TO-END DELIVERY</strong>
            </div>
            <span className="hero__live"><i /> LIVE</span>
          </div>

          <div className="hero__architecture">
            <div className="hero__layer hero__layer--business">
              <span className="hero__layer-label">BUSINESS</span>
              <div className="hero__nodes">
                <span>Strategy</span><span>Product</span><span>Outcomes</span>
              </div>
            </div>

            <div className="hero__connector" />

            <div className="hero__layer hero__layer--technology">
              <span className="hero__layer-label">TECHNOLOGY</span>
              <div className="hero__nodes">
                <span>AI</span><span>DATA</span><span>DIGITAL</span><span>ENGINEERING</span>
              </div>
            </div>

            <div className="hero__connector" />

            <div className="hero__layer hero__layer--sdlc">
              <div className="hero__sdlc-head">
                <span className="hero__layer-label">SDLC</span>
                <span className="hero__sdlc-state">7 PHASES</span>
              </div>
              <div className="hero__sdlc">
                {sdlc.map((phase, i) => (
                  <span key={phase} className={i === 5 ? "is-active" : ""}>
                    <b>{String(i + 1).padStart(2, "0")}</b>{phase}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="hero__metrics">
            <div><span>TEAMS</span><strong>06</strong></div>
            <div><span>WORKSTREAMS</span><strong>12</strong></div>
            <div><span>RISKS</span><strong>02</strong></div>
            <div><span>DELIVERY</span><strong>87%</strong></div>
          </div>

          <div className="hero__control-footer">
            <span>DELIVERY</span><span>GOVERNANCE</span><span>DEPENDENCIES</span><span>QUALITY</span><span>STAKEHOLDERS</span>
          </div>
        </div>
      </div>
    </section>
  );
}
