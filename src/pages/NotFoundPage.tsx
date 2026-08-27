import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <main style={{ minHeight: "70vh", display: "flex", flexDirection: "column", justifyContent: "center" }}>
      <div className="container">
        <p className="eyebrow">404</p>
        <h1 style={{ marginTop: "1rem", fontSize: "var(--step4)" }}>Page not found.</h1>
        <p style={{ marginTop: "1rem", color: "var(--ink-soft)" }}>
          <Link to="/">Return to the homepage →</Link>
        </p>
      </div>
    </main>
  );
}
