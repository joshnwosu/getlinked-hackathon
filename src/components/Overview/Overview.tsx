import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Image,
  Text,
  Title,
} from "@mantine/core";
import React from "react";
import { images, key_attributes_data } from "./data";
import TextHightlight from "../widgets/TextHightlight";
import ReadMoreBtn from "../widgets/ReadMoreBtn";
import Reveal from "../widgets/Reveal";

export default function Overview() {
  return (
    <Container size="lg">
      <Grid py={20} gutter={"xl"} align="center" grow>
        <Grid.Col span={6}>
          <Flex justify="flex-start">
            <Image
              src={images[0]}
              style={{ width: "100%" }}
              alt="The Big Idea"
            />
          </Flex>
        </Grid.Col>
        <Grid.Col span={6}>
          <Reveal>
            <Title order={1} style={{ color: "white" }}>
              Introduction to getlinked tech
              <TextHightlight>Hackathon 1.0</TextHightlight>
            </Title>

            <Reveal>
              <Text mt={20} style={{ color: "white" }} fz={"md"} lh={2}>
                Our tech hackathon is a melting pot of visionaries, and its
                purpose is as clear as day: to shape the future. Whether you're
                a coding genius, a design maverick, or a concept wizard, you'll
                have the chance to transform your ideas into reality. Solving
                real-world problems, pushing the boundaries of technology, and
                creating solutions that can change the world, that's what we're
                all about!
              </Text>
            </Reveal>
          </Reveal>
        </Grid.Col>
      </Grid>

      <Grid py={20} gutter={"xl"} align="center" grow>
        <Grid.Col span={6}>
          <Reveal>
            <Title order={1} style={{ color: "white" }}>
              Rules and <TextHightlight>Guidelines</TextHightlight>
            </Title>
            <Reveal>
              <Text mt={20} style={{ color: "white" }} fz={"md"} lh={2}>
                Our tech hackathon is a melting pot of visionaries, and its
                purpose is as clear as day: to shape the future. Whether you're
                a coding genius, a design maverick, or a concept wizard, you'll
                have the chance to transform your ideas into reality. Solving
                real-world problems, pushing the boundaries of technology, and
                creating solutions that can change the world, that's what we're
                all about!
              </Text>
            </Reveal>
          </Reveal>
        </Grid.Col>
        <Grid.Col span={6}>
          <Flex justify="flex-end">
            <Image
              src={images[1]}
              style={{ width: "100%" }}
              alt="The Big Idea"
            />
          </Flex>
        </Grid.Col>
      </Grid>

      <Grid py={20} gutter={"xl"} align="center" grow>
        <Grid.Col span={6}>
          <Flex justify="flex-start">
            <Image
              src={images[2]}
              style={{ width: "100%" }}
              alt="The Big Idea"
            />
          </Flex>
        </Grid.Col>
        <Grid.Col span={6}>
          <Reveal>
            <Title order={1} style={{ color: "white" }}>
              Judging Criteria <TextHightlight>Key attributes</TextHightlight>
            </Title>

            <Box>
              {key_attributes_data.map((data, index) => {
                return (
                  <Box key={index.toString()} my={"lg"}>
                    <Reveal>
                      <Text fw={"bold"} fz={"lg"} lh={2}>
                        <TextHightlight color="#F534BF">
                          {data.title}:
                        </TextHightlight>
                      </Text>
                      <Text style={{ color: "white" }} fz={"md"} lh={2}>
                        {data.content}
                      </Text>
                    </Reveal>
                  </Box>
                );
              })}
            </Box>
          </Reveal>

          <ReadMoreBtn />
        </Grid.Col>
      </Grid>
    </Container>
  );
}
