import { Link, useNavigate } from "@tanstack/react-router";
import type { ReactNode } from "react";

export function SiteLayout({ children }: { children: ReactNode }) {
  const navigate = useNavigate();

  return (
    <>
      <div className="header">
        <div className="hamburger">
          <img src="/pictures/hamburger.png" className="hampic" alt="Menu" />
        </div>
        <div className="name">Areef|عریف</div>
        <div className="socials">
          <img src="/pictures/icons8-github-96.png" alt="GitHub" />
          <img src="/pictures/icons8-linkedin-120.png" alt="LinkedIn" />
        </div>
      </div>

      <div className="sidebar">
        <div className="aboutme">
          <button onClick={() => navigate({ to: "/about" })}>About Me</button>
        </div>
        <div>
          <img src="/pictures/skull.png" className="skull" alt="" />
        </div>
        <div className="contact">
          <button onClick={() => navigate({ to: "/contacts" })}>Contact</button>
        </div>
        <div>
          <img src="/pictures/icons8-pixel-cat-100.png" className="cat" alt="" />
        </div>
        <div className="favs">
          <button onClick={() => navigate({ to: "/favs" })}>Favs</button>
        </div>
        <div>
          <img src="/pictures/icons8-pixel-star-100.png" className="star" alt="" />
        </div>
        <div>
          <Link to="/" className="sr-only">
            Home
          </Link>
        </div>
      </div>

      {children}
    </>
  );
}
