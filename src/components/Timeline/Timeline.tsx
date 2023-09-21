import { Box, Container, Flex, Image, Text, Title } from "@mantine/core";
import React from "react";
import { timeline_data } from "./data";
import Reveal from "../widgets/Reveal";

export default function Timeline() {
  return (
    <Container size={"lg"} py={100} pos={"relative"}>
      <Flex align="center" justify={"center"} direction="column">
        <Title order={1} style={{ color: "white" }}>
          <Reveal>Timeline</Reveal>
        </Title>

        <Text
          w={400}
          maw={"100%"}
          ta="center"
          mt={"md"}
          size="lg"
          style={{ color: "white" }}
        >
          <Reveal>
            Here is the breakdown of the time we anticipate using for the
            upcoming event.
          </Reveal>
        </Text>
      </Flex>

      <Box mt={100} pos={"relative"}>
        <Image
          src={"/static/assets/images/star_purple.png"}
          alt="Star"
          style={{
            width: 20,
            height: 20,
            position: "absolute",
            top: 0,
            left: 150,
          }}
        />
        <Image
          src={"/static/assets/images/star_white.png"}
          alt="Star"
          style={{
            width: 20,
            height: 20,
            position: "absolute",
            top: "50%",
            right: 0,
          }}
        />
        <Image
          src={"/static/assets/images/star_grey.png"}
          alt="Star"
          style={{
            width: 20,
            height: 20,
            position: "absolute",
            bottom: 100,
            left: 100,
          }}
        />

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
              py={30}
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
                      <Reveal>{data.title}</Reveal>
                    </Title>

                    <Text
                      ta="right"
                      mt="md"
                      fz="md"
                      w={"80%"}
                      maw={"100%"}
                      style={{ color: "white" }}
                    >
                      <Reveal>{data.content}</Reveal>
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
                    <Reveal>{data.date}</Reveal>
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
                    width: 4,
                    height: "100%",
                    backgroundColor: "#D434FE",
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
                    width: 80,
                    height: 80,
                    borderRadius: "50%",

                    background: "linear-gradient(to right,#D434FE, #903AFF)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    border: "10px solid #150E28",
                    position: "relative",
                  }}
                >
                  <Text size="xl" style={{ color: "white" }} fw={500}>
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
                    <Reveal>{data.date}</Reveal>
                  </Title>
                ) : (
                  <>
                    <Title style={{ color: "#D434FE" }} order={3}>
                      <Reveal>{data.title} </Reveal>
                    </Title>

                    <Text
                      mt="md"
                      fz="md"
                      w={"80%"}
                      maw={"100%"}
                      style={{ color: "white" }}
                    >
                      <Reveal>{data.content}</Reveal>
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
