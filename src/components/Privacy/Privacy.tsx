import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Grid,
  Image,
  List,
  Paper,
  Text,
  ThemeIcon,
  Title,
} from "@mantine/core";
import React from "react";
import TextHightlight from "../widgets/TextHightlight";
import { TbCircleCheck } from "react-icons/tb";
import ReadMoreBtn from "../widgets/ReadMoreBtn";
import Reveal from "../widgets/Reveal";

export default function Privacy() {
  return (
    <Container size={"lg"}>
      <Grid py={20} gutter={"xl"} align="center" grow>
        <Grid.Col span={6}>
          <Title order={1} style={{ color: "white" }}>
            <Reveal>
              Privacy Policy and
              <TextHightlight>Terms</TextHightlight>
            </Reveal>
          </Title>
          <Text my={20} fz={"lg"} lh={2} c={"dimmed"}>
            <Reveal>Last updated on September 12, 2023</Reveal>
          </Text>
          <Text mt={20} style={{ color: "white" }} fz={"md"} lh={2}>
            <Reveal>
              Below are our privacy & policy, which outline a lot of goodies. it
              s our aim to always take of our participant
            </Reveal>
          </Text>

          <Box
            p={50}
            mt={50}
            style={{ border: "1px solid #D434FE", borderRadius: 5 }}
          >
            <Text style={{ color: "white" }} fz={"md"} lh={2}>
              <Reveal>
                At getlinked tech Hackathon 1.0, we value your privacy and are
                committed to protecting your personal information. This Privacy
                Policy outlines how we collect, use, disclose, and safeguard
                your data when you participate in our tech hackathon event. By
                participating in our event, you consent to the practices
                described in this policy.
              </Reveal>
            </Text>

            <Box mt={"xl"}>
              <Title order={4}>
                <Reveal>
                  <TextHightlight>Licensing Policy</TextHightlight>
                </Reveal>
              </Title>
              <Title order={5} style={{ color: "white" }}>
                <Reveal>Here are terms of our Standard License:</Reveal>
              </Title>
            </Box>

            <Reveal>
              <List
                mt={"xl"}
                spacing="xs"
                size="sm"
                center
                icon={
                  <ThemeIcon color="teal" size={24} radius="xl">
                    <TbCircleCheck size="1rem" />
                  </ThemeIcon>
                }
              >
                <List.Item>
                  <Text style={{ color: "white" }} fz={"md"} lh={2}>
                    <Reveal>
                      The Standard License grants you a non-exclusive right to
                      navigate and register for our event
                    </Reveal>
                  </Text>
                </List.Item>

                <List.Item>
                  <Text style={{ color: "white" }} fz={"md"} lh={2}>
                    <Reveal>
                      You are licensed to use the item available at any free
                      source sites, for your project developement
                    </Reveal>
                  </Text>
                </List.Item>
              </List>
            </Reveal>

            <Center>
              <ReadMoreBtn />
            </Center>
          </Box>
        </Grid.Col>
        <Grid.Col span={6}>
          <Flex
            justify="flex-end"
            align="center"
            style={{ position: "relative" }}
          >
            <Image
              src={"../../../assets/images/gaurd.png"}
              style={{ width: "80%", position: "absolute", top: 0 }}
              alt="Gaurd"
            />

            <Reveal>
              <Image
                src={"../../../assets/images/lock.png"}
                style={{ width: "100%", marginTop: 100 }}
                alt="Gaurd"
              />
            </Reveal>
          </Flex>
        </Grid.Col>
      </Grid>
    </Container>
  );
}
