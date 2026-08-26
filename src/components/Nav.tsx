import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const links = [
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#technology", label: "Technology" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className={`nav${scrolled ? " nav--scrolled" : ""}`}>
        <div className="container nav__inner">
          <Link to="/" className="nav__mark" onClick={() => setOpen(false)}>
            NIKHIL RAJ
          </Link>

          <nav className="nav__links" aria-label="Primary">
            {links.map((l) => (
              <a key={l.href} href={l.href}>
                {l.label}
              </a>
            ))}
          </nav>

          <a href="#contact" className="btn btn-primary nav__cta">
            Let&rsquo;s Connect
          </a>

          <button
            className="nav__toggle"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
          </button>
        </div>
      </header>

      <div className={`nav__mobile${open ? " nav__mobile--open" : ""}`}>
        <nav aria-label="Mobile">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href="#contact" className="btn btn-primary" onClick={() => setOpen(false)}>
            Let&rsquo;s Connect
          </a>
        </nav>
      </div>
    </>
  );
}
