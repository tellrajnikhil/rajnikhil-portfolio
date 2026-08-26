import "./Education.css";

export default function Education() {
  return (
    <section className="section education">
      <div className="container education__grid">
        <div className="section-head">
          <p className="eyebrow">Education & Certifications</p>
          <h2>Foundation</h2>
        </div>

        <div className="education__body">
          <div className="education__item">
            <p className="education__label">Education</p>
            <h3>Birla Institute of Technology, Mesra</h3>
            <p className="education__degree">Bachelor&rsquo;s Degree, Computer Science Engineering</p>
          </div>

          <div className="education__item education__item--placeholder">
            <p className="education__label">Certifications</p>
            <p className="education__placeholder-text">Certifications to be added.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
