import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router";
import { nav, app, site } from "../content/site";
import { img } from "../utils/img";
import Btn from "./Btn";

/** Floating pill header: hides while scrolling down, returns on scroll up. */
export default function Header() {
  const { pathname } = useLocation();
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    addEventListener("keydown", onKey);
    return () => removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    let last = scrollY;
    let raf = 0;
    const update = () => {
      raf = 0;
      const y = scrollY;
      setHidden(y > 300 && y > last);
      last = y;
    };
    const onScroll = () => {
      if (document.hidden) update();
      else if (!raf) raf = requestAnimationFrame(update);
    };
    addEventListener("scroll", onScroll, { passive: true });
    return () => {
      removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [pathname]);

  return (
    <>
      <header className={`header${hidden && !open ? " is-hidden" : ""}`}>
        <div className="header__bar">
          <Link to="/" className="logo" aria-label={`${site.brand} home`}>
            <img src={img("/images/app-icon.png")} alt="" width={32} height={32} />
            <span>{site.brand}</span>
          </Link>
          <nav className="header__nav" aria-label="Main">
            {nav.map((n) => (
              <NavLink key={n.to} to={n.to} className={({ isActive }) => `navlink${isActive ? " is-active" : ""}`}>
                {n.label}
              </NavLink>
            ))}
          </nav>
          <Btn href={app.url} variant="white" size="sm" className="header__cta">
            <span className="only-wide">Download</span>
            <span className="only-narrow">Get</span>
          </Btn>
          <button
            className={`burger${open ? " is-open" : ""}`}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mmenu"
            onClick={() => setOpen(!open)}
          >
            <span />
            <span />
          </button>
        </div>
      </header>
      <div id="mmenu" className={`mmenu${open ? " is-open" : ""}`} aria-hidden={!open}>
        <Link to="/" className="mmenu__link" tabIndex={open ? 0 : -1}>Home</Link>
        {nav.map((n) => (
          <Link key={n.to} to={n.to} className="mmenu__link" tabIndex={open ? 0 : -1}>
            {n.label}
          </Link>
        ))}
        <Btn href={app.url} variant="white">Download on the App Store</Btn>
      </div>
    </>
  );
}
