import "./Hero.css";


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
            I lead complex technology programmes end to end — from framing the business problem through to governed, measurable delivery.
            I work across engineering, product and executive stakeholders to keep AI, data and digital transformation initiatives moving with clarity, discipline and accountability.
          </p>
          <div className="hero__cta">
            <a href="#work" className="btn btn-primary">View My Work <span className="btn-arrow" aria-hidden="true">→</span></a>
            <a href="#contact" className="btn btn-ghost">Let&rsquo;s Connect</a>
          </div>
        </div>

        <div className="hero__visual" aria-label="Delivery framework: Discover, Align, Deliver, Outcome">
          <div className="hero__visual-grid" />
          <svg viewBox="0 0 520 430" role="img" aria-hidden="true">
            <path d="M42 350 H160 V275 H255 V200 H350 V125 H474" className="hero__path" />
            <path d="M42 350 H160 V275 H255 V200 H350 V125 H474" className="hero__path hero__path--soft" />
            {[["42","350"],["160","275"],["255","200"],["350","125"],["474","125"]].map(([cx,cy], i) => (
              <circle key={i} cx={cx} cy={cy} r={i === 4 ? 8 : 6} className="hero__node" />
            ))}
          </svg>
          <div className="hero__phase hero__phase--1"><span>01</span>Discover</div>
          <div className="hero__phase hero__phase--2"><span>02</span>Align</div>
          <div className="hero__phase hero__phase--3"><span>03</span>Deliver</div>
          <div className="hero__phase hero__phase--4"><span>04</span>Outcome</div>
        </div>
      </div>
    </section>
  );
}
