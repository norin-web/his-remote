import { site } from "../content/site";
import MailForm from "../components/MailForm";
import Reveal from "../components/Reveal";
import Split from "../components/Split";

export default function Contact() {
  return (
    <section className="hero hero--left contact">
      <div className="glow glow--left" aria-hidden="true" />
      <div className="container contact__grid">
        <div className="contact__left">
          <Reveal as="span" className="pill">Contact &amp; Feedback</Reveal>
          <Split as="h1" className="h-page" parts={[["Say hello"]]} />
          <Reveal as="p" className="lead" delay={150}>
            Ideas, bugs, a TV model that doesn't connect — tell us. Feedback shapes every update.
          </Reveal>
          <Reveal className="contact__mail" delay={200}>
            <span className="muted small">Email</span>
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </Reveal>
        </div>
        <Reveal className="card contact__form" delay={200}>
          <MailForm
            subject={`${site.brand} — feedback`}
            submit="Send message"
            fields={[
              { name: "name", label: "Name", required: true, auto: "name" },
              { name: "email", label: "Email", type: "email", required: true, auto: "email" },
              { name: "tv", label: "TV model (optional)" },
              { name: "message", label: "Message", textarea: true, required: true },
            ]}
          />
        </Reveal>
      </div>
    </section>
  );
}
