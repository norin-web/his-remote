import { useState } from "react";
import { faq, site } from "../content/site";
import Btn from "../components/Btn";
import Reveal from "../components/Reveal";
import Split from "../components/Split";

const Chevron = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M6 9l6 6 6-6" />
  </svg>
);

export default function Support() {
  const [open, setOpen] = useState(0);
  return (
    <>
      <section className="hero hero--page">
        <div className="glow glow--hero" aria-hidden="true" />
        <Reveal as="span" className="pill">Support</Reveal>
        <Split as="h1" className="h-page" parts={[["How can we help?"]]} />
        <Reveal as="p" className="lead hero__sub" delay={150}>
          Answers to the most common questions. Still stuck? Write to us — a real person reads every email.
        </Reveal>
      </section>

      <section className="section section--tight">
        <div className="container container--narrow">
          <div className="faq">
            {faq.map((f, i) => {
              const on = open === i;
              return (
                <Reveal className={`faq__item card${on ? " is-open" : ""}`} key={f.q} delay={i * 60}>
                  <button className="faq__q" aria-expanded={on} aria-controls={`faq-${i}`} onClick={() => setOpen(on ? -1 : i)}>
                    <span>{f.q}</span>
                    <Chevron />
                  </button>
                  <div className="faq__a" id={`faq-${i}`} role="region" aria-hidden={!on} {...({ inert: on ? undefined : "" } as object)}>
                    <div className="faq__inner">
                      <p>{f.a}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal className="card mailbox">
            <div>
              <span className="muted">Didn't find your answer?</span>
              <a className="mailbox__mail" href={`mailto:${site.email}`}>{site.email}</a>
            </div>
            <Btn href={`mailto:${site.email}`}>Write to us</Btn>
          </Reveal>
        </div>
      </section>
    </>
  );
}
