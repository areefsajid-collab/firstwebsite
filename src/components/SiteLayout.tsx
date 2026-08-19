import { Link, useNavigate, useRouterState } from "@tanstack/react-router";
import type { ReactNode } from "react";

const NAV = [
  { label: "Home", to: "/" },
  { label: "About Me", to: "/about" },
  { label: "Contact", to: "/contacts" },
  { label: "Favs", to: "/favs" },
] as const;

const DECOR = ["/pictures/skull.png", "/pictures/icons8-pixel-cat-100.png", "/pictures/icons8-pixel-star-100.png"];

export function SiteLayout({ children }: { children: ReactNode }) {
  const navigate = useNavigate();
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <>
      <div className="header">
        <div className="hamburger">
          <img src="/pictures/hamburger.png" className="hampic" alt="Menu" />
        </div>
        <div className="name">Areef|عریف</div>
        <div className="socials">
          <a
            href="https://github.com/areefsajid-collab"
            target="_blank"
            rel="noreferrer"
            className="social-link"
            aria-label="GitHub"
          >
            <img src="/pictures/icons8-github-96.png" alt="GitHub" />
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="social-link"
            aria-label="LinkedIn"
          >
            <img src="/pictures/icons8-linkedin-120.png" alt="LinkedIn" />
          </a>
        </div>
      </div>

      <div className="sidebar">
        {NAV.map((item, i) => (
          <div key={item.to} className="nav-item">
            <button
              className={pathname === item.to ? "nav-btn is-active" : "nav-btn"}
              onClick={() => navigate({ to: item.to })}
            >
              {item.label}
            </button>
            {DECOR[i] ? <img src={DECOR[i]} className="sidebar-decor" alt="" /> : null}
          </div>
        ))}
        <Link to="/" className="sr-only">
          Home
        </Link>
      </div>

      <div key={pathname} className="page-transition">
        {children}
      </div>
    </>
  );
}
