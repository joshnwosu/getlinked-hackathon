import { Box } from "@mantine/core";
import React from "react";

export default function TextHightlight({
  children,
  color,
}: {
  children: string | JSX.Element | any;
  color?: string;
}) {
  return <Box style={{ color: color || "#D434FE" }}>{children}</Box>;
}
