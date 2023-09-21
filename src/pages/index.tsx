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

export default function HomePage() {
  return (
    <>
      <Welcome />
      {/* <ColorSchemeToggle /> */}
      <Overview />
      <FAQ />
      <Timeline />
      <Reward />
      <Partners />
      <Privacy />
      <Footer />
    </>
  );
}
