import "@mantine/core/styles.css";
import React from "react";
import { MantineProvider } from "@mantine/core";
import { theme } from "./src/theme";
import "./src/styles/style.css";

export const wrapPageElement = ({ element }) => {
  return <MantineProvider theme={theme}>{element}</MantineProvider>;
};
