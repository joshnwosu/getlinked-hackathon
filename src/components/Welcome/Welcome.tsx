import React from "react";
import {
  Title,
  Text,
  Anchor,
  Container,
  Grid,
  Box,
  Image,
  Flex,
} from "@mantine/core";
import * as classes from "./Welcome.module.css";
import TextHightlight from "../widgets/TextHightlight";
import ReadMoreBtn from "../widgets/ReadMoreBtn";
import Reveal from "../widgets/Reveal";

export function Welcome() {
  return (
    <Container size={"lg"} pt={100} pos={"relative"}>
      <Flex
        justify={"flex-end"}
        align={"flex-end"}
        direction={"column"}
        style={{
          width: "100%",
          position: "absolute",
        }}
        pb={"xl"}
      >
        <Title order={3} style={{ color: "white" }}>
          <Reveal>Igniting a Revolution in HR Innovation</Reveal>
        </Title>
        <Reveal>
          <Image
            src={"../../../assets/images/line.png"}
            alt="Line"
            fit="contain"
            style={{ width: 150 }}
          />
        </Reveal>
      </Flex>
      <Grid
        // gutter={"xl"}
        justify="space-between"
        align="center"
        py={"5rem"}
        grow
      >
        <Grid.Col span={5}>
          <Box w={"100%"} pt={"50px"} pos={"relative"}>
            <Box style={{ position: "relative" }}>
              <Reveal>
                <Title
                  size={"60px"}
                  pos={"relative"}
                  style={{ color: "white" }}
                >
                  getlinked Tech <br />
                  <Reveal>
                    Hackathon <span style={{ color: "#d434fe" }}>1.0</span>
                  </Reveal>
                </Title>
              </Reveal>

              <Flex style={{ position: "absolute", right: -70, bottom: 0 }}>
                <Reveal>
                  <Image
                    src={"../../../assets/images/chain.png"}
                    alt="Chain"
                    fit="contain"
                    width={50}
                    height={50}
                  />
                </Reveal>
                <Reveal>
                  <Image
                    src={"../../../assets/images/fire.png"}
                    alt="Fire"
                    fit="contain"
                    width={50}
                    height={50}
                  />
                </Reveal>
              </Flex>
            </Box>

            <Reveal>
              <Text
                mt="md"
                fz={"20px"}
                style={{ color: "white" }}
                w={400}
                maw={"100%"}
                lh={2}
              >
                Participate in getlinked tech Hackathon 2023 stand a chance to
                win a Big prize.
              </Text>
            </Reveal>

            <ReadMoreBtn />

            <Flex gap={20} mt={"xl"}>
              <Text size="50px" c={"white"}>
                00<sub style={{ fontSize: 12 }}>H</sub>
              </Text>
              <Text size="50px" c={"white"}>
                00<sub style={{ fontSize: 12 }}>M</sub>
              </Text>
              <Text size="50px" c={"white"}>
                00<sub style={{ fontSize: 12 }}>S</sub>
              </Text>
            </Flex>
          </Box>
        </Grid.Col>
        <Grid.Col span={7}>
          <Box
            style={{
              display: "flex",
              justifyContent: "flex-end",
              position: "relative",
            }}
          >
            <Image
              src={"../../../assets/images/man.png"}
              alt="Man wearing wearing smart glasses"
              width={"100%"}
              height={"100%"}
            />
            <Image
              src={"../../../assets/images/globe.png"}
              alt="Globe"
              width={"100%"}
              height={"100%"}
              style={{ position: "absolute" }}
            />
          </Box>
        </Grid.Col>
      </Grid>
    </Container>
  );
}
