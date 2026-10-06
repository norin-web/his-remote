import { Outlet, useLocation } from "react-router";
import { useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { site } from "./content/site";
import { getLenis, useGlowFollow, useSmoothScroll } from "./utils/motion";

const titles: Record<string, string> = {
  "/app": "The App",
  "/about": "About",
  "/support": "Support",
  "/contact": "Contact",
  "/feedback": "Feedback",
  "/terms": "Terms of Use",
  "/privacy": "Privacy Policy",
};

export default function Root() {
  const { pathname } = useLocation();
  useSmoothScroll();
  useGlowFollow();

  useEffect(() => {
    getLenis()?.scrollTo(0, { immediate: true });
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    const t = titles[pathname.replace(/\/$/, "")];
    document.title = t ? `${t} — ${site.brand}` : `${site.brand} — TV remote for iPhone`;
  }, [pathname]);

  return (
    <>
      <a href="#main" className="skip">Skip to content</a>
      <Header />
      <main id="main" className="page" key={pathname}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
