import { app, scenarios, stats, steps, ticker } from "../content/site";
import { img } from "../utils/img";
import Btn from "../components/Btn";
import Marquee from "../components/Marquee";
import Reveal from "../components/Reveal";
import Split from "../components/Split";
import Stat from "../components/Stat";
import { useScrollVar } from "../utils/motion";

const Check = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12l5 5 9-10" />
  </svg>
);

export default function Home() {
  const mockRef = useScrollVar<HTMLElement>();
  const f1 = useScrollVar<HTMLDivElement>();
  const f2 = useScrollVar<HTMLDivElement>();
  return (
    <>
      {/* S01 Hero */}
      <section className="hero hero--home">
        <div className="glow glow--hero" aria-hidden="true" />
        <Reveal className="badge">
          <span className="badge__tag"><i />Utilities</span>
          TV Remote for iPhone
        </Reveal>
        <Split as="h1" className="h-hero" parts={[["Your TV,"], ["\n"], ["in your pocket"]]} />
        <Reveal as="p" className="lead hero__sub" delay={150}>
          Control your Hisense smart TV from iPhone over Wi‑Fi. Volume, channels, apps and typing — no lost remote, no setup.
        </Reveal>
        <Reveal className="hero__cta" delay={220}>
          <Btn href={app.url}>Download on the App Store</Btn>
          <span className="muted small">Free on the App Store · iOS {app.minIOS.split(".")[0]}+</span>
        </Reveal>
      </section>

      {/* S02 Mockup */}
      <section className="mockup" aria-label="The app on iPhone" ref={mockRef}>
        <img src={img("/images/hero-hand.png")} alt="A hand holding an iPhone with the TV remote screen open" width={2000} height={1333} />
      </section>

      {/* S03 Ticker */}
      <Marquee time={40} className="ticker" label={ticker.join(", ")}>
        {ticker.map((t) => (
          <span key={t} className="ticker__item">{t}<i aria-hidden="true" /></span>
        ))}
      </Marquee>

      {/* S04 Features */}
      <section className="section">
        <div className="container">
          <div className="heading">
            <Reveal as="span" className="pill">Features</Reveal>
            <Split as="h2" className="h2" parts={[["Every button you reach for."], ["\n"], ["None you lose in the couch."]]} />
          </div>

          <div className="fcards">
            <div ref={f1} className="parallax"><Reveal className="fcard fcard--wide card">
              <div className="fcard__text">
                <span className="tag">Auto‑discovery</span>
                <h3 className="h3">Finds your TV<br />on its own</h3>
                <p className="muted">Open the app on the same Wi‑Fi and your TV shows up in the list. Tap it once — you're connected.</p>
                <ul className="checks">
                  <li><Check />No IR blaster, no pairing codes</li>
                  <li><Check />Remembers every TV in the house</li>
                </ul>
              </div>
              <img className="fcard__phone" src={img("/images/phone-discovery.png")} alt="Connect to Your TV screen listing Hisense TVs on the network" loading="lazy" />
            </Reveal></div>

            <div ref={f2} className="parallax"><Reveal className="fcard fcard--wide fcard--flip card">
              <div className="fcard__text">
                <span className="tag">Touchpad</span>
                <h3 className="h3">Swipe through menus<br />instead of clicking</h3>
                <p className="muted">Flip to the touchpad and glide across rows of shows with your thumb. Tap anywhere to select.</p>
                <ul className="checks">
                  <li><Check />Haptic feedback on every move</li>
                  <li><Check />One‑hand friendly</li>
                </ul>
              </div>
              <img className="fcard__phone" src={img("/images/phone-remote.png")} alt="Remote screen with the touchpad tab open" loading="lazy" />
            </Reveal></div>

            <div className="fcards__row">
              <Reveal className="fcard fcard--small card">
                <span className="tag">Keyboard</span>
                <h3 className="h3 h3--sm">Type searches and passwords with your iPhone keyboard</h3>
                <div className="kbd" aria-hidden="true">
                  <div className="kbd__field">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><circle cx="11" cy="11" r="7" /><path d="M20 20l-4-4" /></svg>
                    nature documentar<b />
                  </div>
                  <div className="kbd__keys">{Array.from({ length: 7 }, (_, i) => <span key={i} />)}</div>
                </div>
              </Reveal>
              <Reveal className="fcard fcard--small fcard--grow card" delay={120}>
                <span className="tag">App launcher</span>
                <h3 className="h3 h3--sm">Open streaming apps<br />straight from your phone</h3>
                <img className="fcard__photo" src={img("/images/living-room.jpg")} alt="A smart TV in a dark living room showing a row of streaming apps" loading="lazy" />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* S06 Principles — DRAFT figures */}
      <section className="section section--tight">
        <div className="container">
          <div className="stats">
            {stats.map((s, i) => (
              <Stat key={s.label} {...s} delay={i * 60} />
            ))}
          </div>
        </div>
      </section>

      {/* S07 How to start */}
      <section className="section">
        <div className="container">
          <div className="heading">
            <Reveal as="span" className="pill">How to start</Reveal>
            <Split as="h2" className="h2" parts={[["Three steps to the couch"]]} />
          </div>
          <div className="steps">
            {steps.map((s, i) => (
              <Reveal className="step card" key={s.n} delay={i * 60}>
                {i === 0 ? (
                  <img className="step__icon step__icon--app" src={img("/images/app-icon.png")} alt="" width={108} height={108} loading="lazy" />
                ) : (
                  <span className="step__icon">
                    {i === 1 ? (
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M2 9a15 15 0 0 1 20 0" /><path d="M5.5 12.5a10 10 0 0 1 13 0" /><path d="M9 16a5 5 0 0 1 6 0" /><circle cx="12" cy="19.5" r="1" fill="currentColor" /></svg>
                    ) : (
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"><rect x="2" y="4" width="20" height="13" rx="2" /><path d="M8 21h8" strokeLinecap="round" /></svg>
                    )}
                  </span>
                )}
                <div>
                  <span className="muted small">{s.n}</span>
                  <h3 className="h4">{s.title}</h3>
                  <p className="muted">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* S08 Scenarios */}
      <section className="section">
        <div className="container">
          <div className="heading">
            <Reveal as="span" className="pill">Made for real evenings</Reveal>
            <Split as="h2" className="h2" parts={[["When the remote isn't there"]]} />
          </div>
          <div className="scenes">
            {scenarios.map((s, i) => (
              <Reveal className="scene" key={s.title} delay={i * 60}>
                <img src={img(s.img)} alt="" loading="lazy" />
                <div className="scene__text">
                  <h3 className="h4">{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
