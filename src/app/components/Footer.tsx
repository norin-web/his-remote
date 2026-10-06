import { Link } from "react-router";
import { app, nav, site } from "../content/site";
import { img } from "../utils/img";
import Btn from "./Btn";
import Reveal from "./Reveal";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="glow glow--footer" aria-hidden="true" />
      <Reveal className="footer__cta">
        <img className="footer__icon" src={img("/images/app-icon.png")} alt="" width={154} height={154} loading="lazy" />
        <h2 className="h-display footer__title">
          Pick up your phone.<br />Turn on the TV.
        </h2>
        <Btn href={app.url} size="md">Download on the App Store</Btn>
        <p className="muted small">For iPhone · iOS {app.minIOS.split(".")[0]}+</p>
      </Reveal>

      <div className="container">
        <div className="footer__card card">
          <div className="footer__top">
            <div className="footer__brand">
              <Link to="/" className="logo">
                <img src={img("/images/app-icon.png")} alt="" width={32} height={32} />
                <span>{site.brand}</span>
              </Link>
              <p className="muted">{site.disclaimer}</p>
              <a className="chip" href={`mailto:${site.email}`}>{site.email}</a>
            </div>
            <div className="footer__cols">
              <div>
                <span className="eyebrow">Product</span>
                <ul>
                  {nav.slice(0, 2).map((n) => (
                    <li key={n.to}><Link to={n.to}>{n.label}</Link></li>
                  ))}
                  <li><a href={app.url} target="_blank" rel="noopener noreferrer">App Store</a></li>
                </ul>
              </div>
              <div>
                <span className="eyebrow">Help</span>
                <ul>
                  <li><Link to="/support">Support</Link></li>
                  <li><Link to="/feedback">Feedback</Link></li>
                  <li><Link to="/privacy">Privacy Policy</Link></li>
                  <li><Link to="/terms">Terms of Use</Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer__copy">
            <span>© {site.year} {site.brand}. All rights reserved.</span>
            <button onClick={() => scrollTo({ top: 0, behavior: "smooth" })}>Back to top ↑</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
