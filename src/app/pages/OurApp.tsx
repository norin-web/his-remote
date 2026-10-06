import { app, appFeatures } from "../content/site";
import { img } from "../utils/img";
import Btn from "../components/Btn";
import Reveal from "../components/Reveal";
import Split from "../components/Split";

const phones = [
  { src: "/images/phone-discovery.png", alt: "Connect to Your TV screen with the list of TVs found on Wi‑Fi" },
  { src: "/images/phone-remote.png", alt: "Remote screen with streaming shortcuts, media keys, volume and channels" },
  { src: "/images/phone-cast.png", alt: "Cast screen for sending photos, videos and files to the TV" },
];

export default function OurApp() {
  const specs: [string, string][] = [
    ["Category", app.category],
    ["Compatibility", `iPhone · iOS ${app.minIOS} or later`],
    ["Size", app.size],
    ["Languages", app.languages],
    ["Age rating", app.age],
    ["Price", app.price],
  ];
  return (
    <>
      <section className="hero hero--page">
        <div className="glow glow--hero" aria-hidden="true" />
        <Reveal as="span" className="pill">The app</Reveal>
        <Split as="h1" className="h-page" parts={[["A remote that"], ["\n"], ["lives on your iPhone"]]} />
        <Reveal as="p" className="lead hero__sub" delay={150}>
          Buttons, touchpad, keyboard and cast — everything your TV remote does, laid out for one thumb.
        </Reveal>
        <Reveal className="hero__cta" delay={220}>
          <Btn href={app.url}>Download on the App Store</Btn>
        </Reveal>
      </section>

      <section className="reel" aria-label="App screenshots">
        {phones.map((p, i) => (
          <div key={p.src} className={`reel__phone reel__phone--${i}`}>
            <img src={img(p.src)} alt={p.alt} />
          </div>
        ))}
      </section>

      <section className="section section--tight">
        <div className="container">
          <div className="grid2">
            {appFeatures.map((f, i) => (
              <Reveal className="card fbox" key={f.title} delay={(i % 2) * 60}>
                <span className="tag">{f.tag}</span>
                <h3 className="h4">{f.title}</h3>
                <p className="muted">{f.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container container--narrow">
          <Split as="h2" className="h2 center" parts={[["Details"]]} />
          <Reveal as="dl" className="specs">
            {specs.map(([k, v]) => (
              <div key={k}>
                <dt>{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </Reveal>
        </div>
      </section>
    </>
  );
}
