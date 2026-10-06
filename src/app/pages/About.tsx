import { site } from "../content/site";
import Reveal from "../components/Reveal";
import Split from "../components/Split";

// DRAFT copy — the story and principles were written for the mockup; check with the owner.
const principles = [
  ["01", "Simple first", "Open, tap, watch. No tutorials needed."],
  ["02", "Local by design", "Commands travel over your home Wi‑Fi, phone to TV."],
  ["03", "Built to last", "Regular updates as TVs and iOS change."],
];

export default function About() {
  return (
    <>
      <section className="hero hero--left">
        <div className="glow glow--left" aria-hidden="true" />
        <div className="container">
          <Reveal as="span" className="pill">About</Reveal>
          <Split as="h1" className="h-page" parts={[["We built the remote"], ["\n"], ["we kept wishing we had"]]} />
          <Reveal as="p" className="lead about__sub" delay={150}>
            {site.brand} started on a couch, with a lost remote and a phone in hand. It's a small, focused app made by a small team.
          </Reveal>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <Reveal className="approach" line>
            <span className="muted">Our approach</span>
            <div>
              <p className="h3">A remote should disappear in your hand. You think "volume up" — and it's done.</p>
              <p className="muted">So we kept the layout familiar, made every button large enough to hit without looking, and left out everything that doesn't help you watch.</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <div className="grid3">
            {principles.map(([n, t, d], i) => (
              <Reveal className="card principle" key={n} delay={i * 60}>
                <b className="principle__n">{n}</b>
                <div>
                  <h3 className="h4">{t}</h3>
                  <p className="muted">{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
