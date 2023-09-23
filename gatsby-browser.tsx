import "@mantine/core/styles.css";
import React from "react";
import { MantineProvider } from "@mantine/core";
import { theme } from "./src/theme";
import "./src/styles/style.css";
import Header from "./src/components/Header/Header";
import Footer from "./src/components/Footer/Footer";

export const wrapPageElement = ({ element }) => {
  return (
    <MantineProvider theme={theme}>
      <Header />
      {element}
      <Footer />
    </MantineProvider>
  );
};
