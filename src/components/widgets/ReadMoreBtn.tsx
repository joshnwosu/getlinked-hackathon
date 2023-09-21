import { Button } from "@mantine/core";
import React from "react";

export default function ReadMoreBtn() {
  return (
    <Button
      mt={"xl"}
      size="lg"
      fz={"md"}
      variant="gradient"
      px={50}
      gradient={{ from: "#F534BF", to: "#903AFF", deg: 90 }}
    >
      Read More
    </Button>
  );
}
