import { approach } from "../data/content";
import "./Approach.css";

export default function Approach() {
  return (
    <section className="section section--dark approach">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Professional Approach</p>
          <h2>A consistent operating framework for complex delivery.</h2>
        </div>

        <div className="approach__grid">
          {approach.map((a) => (
            <div key={a.index} className="approach__card">
              <span className="approach__index">{a.index}</span>
              <h3>{a.title}</h3>
              <p>{a.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
