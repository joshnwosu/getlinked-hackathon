import { Box, Container, Flex, Text, Title } from "@mantine/core";
import React from "react";
import { timeline_data } from "./data";

export default function Timeline() {
  return (
    <Container size={"lg"} py={100}>
      <Flex align="center" direction="column">
        <Title order={1} style={{ color: "white" }}>
          Timeline
        </Title>
        <Text w={300} ta="center" mt={"md"} style={{ color: "white" }}>
          Here is the breakdown of the time we anticipate using for the upcoming
          event.
        </Text>
      </Flex>

      <Box mt={100}>
        {timeline_data.map((data, index) => {
          return (
            <Flex
              key={index.toString()}
              align="center"
              justify="space-between"
              style={{
                overflow: "hidden",
                position: "relative",
              }}
              py={40}
            >
              <Box
                style={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-end",
                }}
              >
                {index % 2 === 0 ? (
                  <>
                    <Title ta="right" style={{ color: "#D434FE" }} order={3}>
                      {data.title}
                    </Title>
                    <Text
                      ta="right"
                      mt="md"
                      fz="md"
                      w={"80%"}
                      maw={"100%"}
                      style={{ color: "white" }}
                    >
                      {data.content}
                    </Text>
                  </>
                ) : (
                  <Title
                    ta="right"
                    style={{
                      color: "#D434FE",
                    }}
                    order={3}
                  >
                    {data.date}
                  </Title>
                )}
              </Box>

              <Box
                style={{
                  flex: 0.3,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box
                  style={{
                    width: 3,
                    height: "100%",
                    backgroundColor: "#903AFF",
                    position: "absolute",
                    top:
                      index === 0
                        ? 100
                        : index === timeline_data.length - 1
                        ? -100
                        : 0,
                    zIndex: -1,
                  }}
                />
                <Box
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 50,
                    backgroundColor: "#903AFF",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    border: "10px solid #150E28",
                    position: "relative",
                  }}
                >
                  <Text size="md" style={{ color: "white" }} fw={500}>
                    {index + 1}
                  </Text>
                </Box>
              </Box>

              <Box
                style={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                {index % 2 === 0 ? (
                  <Title
                    style={{
                      color: "#D434FE",
                    }}
                    order={3}
                  >
                    {data.date}
                  </Title>
                ) : (
                  <>
                    <Title style={{ color: "#D434FE" }} order={3}>
                      {data.title}
                    </Title>
                    <Text
                      mt="md"
                      fz="md"
                      w={"80%"}
                      maw={"100%"}
                      style={{ color: "white" }}
                    >
                      {data.content}
                    </Text>
                  </>
                )}
              </Box>
            </Flex>
          );
        })}
      </Box>
    </Container>
  );
}
