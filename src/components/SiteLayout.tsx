import { Link, useNavigate, useRouterState } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";

const NAV = [
  { label: "Home", to: "/" },
  { label: "About Me", to: "/about" },
  { label: "Contact", to: "/contacts" },
  { label: "Favs", to: "/favs" },
] as const;

const DECOR = ["/pictures/skull.png", "/pictures/icons8-pixel-cat-100.png", "/pictures/icons8-pixel-star-100.png"];

const LINKEDIN_URL =
  "https://www.linkedin.com/in/areef-sajid-732640329?utm_source=share_via&utm_content=profile&utm_medium=member_android";

export function SiteLayout({ children }: { children: ReactNode }) {
  const navigate = useNavigate();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(true);

  return (
    <div className={open ? "shell sidebar-open" : "shell sidebar-closed"}>
      <div className="header">
        <button
          type="button"
          className={open ? "hamburger is-open" : "hamburger"}
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <span className="ham-bar" />
          <span className="ham-bar" />
          <span className="ham-bar" />
        </button>
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
            href={LINKEDIN_URL}
            target="_blank"
            rel="noreferrer"
            className="social-link"
            aria-label="LinkedIn"
          >
            <img src="/pictures/icons8-linkedin-120.png" alt="LinkedIn" />
          </a>
        </div>
      </div>

      <div className="sidebar" aria-hidden={!open}>
        {NAV.map((item, i) => (
          <div key={item.to} className="nav-item">
            <button
              className={pathname === item.to ? "nav-btn is-active" : "nav-btn"}
              onClick={() => navigate({ to: item.to })}
              tabIndex={open ? 0 : -1}
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
    </div>
  );
}
