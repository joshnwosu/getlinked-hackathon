import React from "react";
import { Welcome } from "../components/Welcome/Welcome";
import { ColorSchemeToggle } from "../components/ColorSchemeToggle/ColorSchemeToggle";
import Timeline from "../components/Timeline/Timeline";
import Overview from "../components/Overview/Overview";
import FAQ from "../components/FAQ/FAQ";
import Reward from "../components/Reward/Reward";
import Partners from "../components/Partners/Partners";
import Privacy from "../components/Privacy/Privacy";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";

export default function HomePage() {
  return (
    <>
      <Header />
      <section id="welcome">
        <Welcome />
      </section>
      {/* <ColorSchemeToggle /> */}
      <section id="overview">
        <Overview />
      </section>

      <section id="faqs">
        <FAQ />
      </section>

      <section id="timeline">
        <Timeline />
      </section>

      <section id="reward">
        <Reward />
      </section>
      <Partners />
      <Privacy />
      <Footer />
    </>
  );
}
