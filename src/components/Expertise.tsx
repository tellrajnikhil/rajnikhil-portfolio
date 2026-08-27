import { expertise } from "../data/content";
import "./Expertise.css";

export default function Expertise() {
  return (
    <section className="section expertise">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Areas of Expertise</p>
          <h2>Where delivery leadership adds the most value.</h2>
        </div>

        <ul className="expertise__list">
          {expertise.map((e) => (
            <li key={e.index} className="expertise__item">
              <span className="expertise__index">{e.index}</span>
              <span className="expertise__title">{e.title}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
