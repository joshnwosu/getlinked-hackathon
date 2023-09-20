import { Box, Center, Container, Flex, Text, Title } from "@mantine/core";
import React from "react";

export default function Timeline() {
  return (
    <Container size={"xl"}>
      <Flex align="center" direction="column">
        <Title order={1}>Timeline</Title>
        <Text w={300} ta="center" mt={"xl"}>
          Here is the breakdown of the time we anticipate using for the upcoming
          event.
        </Text>
      </Flex>

      <Box mt={100}>
        <Flex align="center" justify="space-between">
          <Box style={{ flex: 1 }}>
            <Title ta="right" style={{ color: "#D434FE" }}>
              Hackathon Announcement
            </Title>
            <Text ta="right" mt="md" fz="sm">
              The getlinked tech hackathon 1.0 is formally announced to the
              general public and teams begin to get ready to register
            </Text>
          </Box>

          <Box
            style={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              style={{
                width: 50,
                height: 50,
                borderRadius: 50,
                backgroundColor: "#903AFF",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                border: "5px solid transparent",
                position: "relative",
              }}
            >
              <Box
                style={{
                  width: 4,
                  height: 70,
                  backgroundColor: "#903AFF",
                  position: "absolute",
                  bottom: 50,
                  zIndex: -1,
                }}
              />
              <Text size="xl" style={{ color: "white" }} fw="bolder">
                1
              </Text>
            </Box>
          </Box>

          <Box style={{ flex: 1 }}>
            <Text
              style={{ color: "#D434FE", fontSize: 30, fontWeight: "bolder" }}
            >
              November 18, 2023
            </Text>
          </Box>
        </Flex>
      </Box>
    </Container>
  );
}
