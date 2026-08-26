import "./Hero.css";

const phases = ["Discover", "Align", "Build", "Ship", "Operate"];

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero__inner">
        <p className="eyebrow">Nikhil Raj</p>

        <h1 className="hero__headline">
          I turn complex technology into <em>confident outcomes.</em>
        </h1>

        <p className="hero__role">Technical Project Manager · AI · Data · Delivery</p>

        <p className="hero__sub">
          Senior technology project leader with experience delivering AI, digital transformation, data and
          software programmes that align teams, manage complexity and turn business goals into measurable
          delivery.
        </p>

        <div className="hero__cta">
          <a href="#work" className="btn btn-primary">
            View My Work <span className="btn-arrow" aria-hidden="true">→</span>
          </a>
          <a href="#contact" className="btn btn-ghost">
            Let&rsquo;s Connect
          </a>
        </div>

        <div className="hero__rhythm" role="img" aria-label="Delivery rhythm: Discover, Align, Build, Ship, Operate">
          <svg viewBox="0 0 900 60" preserveAspectRatio="none" aria-hidden="true">
            <line x1="10" y1="30" x2="890" y2="30" className="rhythm-line" />
            {phases.map((_, i) => {
              const x = 10 + (i * 880) / (phases.length - 1);
              return <circle key={i} cx={x} cy="30" r="5" className="rhythm-dot" style={{ animationDelay: `${0.4 + i * 0.15}s` }} />;
            })}
          </svg>
          <div className="hero__rhythm-labels">
            {phases.map((p) => (
              <span key={p}>{p}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
