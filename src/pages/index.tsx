import React from "react";
import { Welcome } from "../components/Welcome/Welcome";
import { ColorSchemeToggle } from "../components/ColorSchemeToggle/ColorSchemeToggle";
import Timeline from "../components/Timeline/Timeline";
import Overview from "../components/Overview/Overview";
import FAQ from "../components/FAQ/FAQ";

export default function HomePage() {
  return (
    <>
      {/* <Welcome /> */}
      {/* <ColorSchemeToggle /> */}
      <Overview />
      <FAQ />
      <Timeline />
    </>
  );
}
