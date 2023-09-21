import { Container, Flex, Image, Text, Title } from "@mantine/core";
import React from "react";
import Reveal from "../widgets/Reveal";

export default function Partners() {
  return (
    <Container size={"lg"} py={100}>
      <Flex justify={"center"} align={"center"} direction={"column"}>
        <Title order={1} style={{ color: "white" }}>
          <Reveal>Partners and Sponsors</Reveal>
        </Title>
        <Text
          ta={"center"}
          w={500}
          maw={"100%"}
          mt={"xl"}
          style={{ color: "white" }}
        >
          <Reveal>
            Getlinked Hackathon 1.0 is honored to have the following major
            companies as its partners and sponsors
          </Reveal>
        </Text>
      </Flex>

      <Image
        src={"/static/assets/images/partner_and_sponsors.png"}
        style={{ width: "100%" }}
        alt="Trophy"
        mt={100}
      />
    </Container>
  );
}
