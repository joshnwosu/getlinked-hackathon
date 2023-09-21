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

export function Welcome() {
  return (
    <Container size={"xl"}>
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
              <Title size={"60px"} pos={"relative"} style={{ color: "white" }}>
                getLinked Tech <br />
                Hackathon <span style={{ color: "#d434fe" }}>1.0</span>
              </Title>
              <Flex style={{ position: "absolute", right: 0, bottom: 0 }}>
                <Image
                  src={"/static/assets/images/chain.png"}
                  alt="Chain"
                  fit="contain"
                  width={50}
                  height={50}
                />
                <Image
                  src={"/static/assets/images/fire.png"}
                  alt="Fire"
                  fit="contain"
                  width={50}
                  height={50}
                />
              </Flex>
            </Box>

            <Text
              mt="md"
              fz={"20px"}
              style={{ color: "white" }}
              w={400}
              maw={"100%"}
              lh={2}
            >
              Participate in getlinked tech Hackathon 2023 stand a chance to win
              a Big prize
            </Text>

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
          <Flex
            justify={"flex-end"}
            align={"flex-end"}
            direction={"column"}
            style={{
              width: "100%",
            }}
            pb={"xl"}
          >
            <Title style={{ color: "white" }}>
              Igniting a Revolution in HR Innovation
            </Title>
            <Image
              src={"/static/assets/images/line.png"}
              alt="Line"
              fit="contain"
              style={{ width: 200 }}
            />
          </Flex>
          <Box
            style={{
              display: "flex",
              justifyContent: "flex-end",
              position: "relative",
            }}
          >
            <Image
              src={"/static/assets/images/man.png"}
              alt="Man wearing wearing smart glasses"
              width={"125%"}
              height={"120%"}
            />
            <Image
              src={"/static/assets/images/globe.png"}
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
