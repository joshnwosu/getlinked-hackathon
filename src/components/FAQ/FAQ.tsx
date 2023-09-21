import {
  Accordion,
  Container,
  Flex,
  Grid,
  Image,
  Space,
  Text,
  Title,
} from "@mantine/core";
import React from "react";
import TextHightlight from "../widgets/TextHightlight";
import { faq_data } from "./data";
import classes from "./FAQ.module.css";
import Reveal from "../widgets/Reveal";

export default function FAQ() {
  return (
    <Container size={"lg"}>
      <Grid py={20} gutter={"xl"} align="center" grow>
        <Grid.Col span={6}>
          <Reveal>
            <Title order={1} style={{ color: "white" }}>
              Frequently Ask <TextHightlight>Questions</TextHightlight>
            </Title>
            <Reveal>
              <Text
                mt={20}
                style={{ color: "white" }}
                fz={"md"}
                lh={2}
                w={400}
                maw={"100%"}
              >
                We got answers to the questions that you might want to ask about
                getlinked Hackathon 1.0
              </Text>
            </Reveal>
          </Reveal>

          <Reveal>
            <Accordion
              defaultValue="item-0"
              mt={50}
              // classNames={{ chevron: classes.chevron }}}
            >
              {faq_data.map((data, index) => {
                return (
                  <Accordion.Item
                    key={index.toString()}
                    value={`item-${index}`}
                    style={{ borderBottom: "1px solid #D434FE" }}
                  >
                    <Accordion.Control
                      py={"sm"}
                      px={0}
                      style={{ backgroundColor: "transparent" }}
                    >
                      <Title order={4} fw={400} style={{ color: "white" }}>
                        {data.title}
                      </Title>
                    </Accordion.Control>
                    <Accordion.Panel>
                      <Text fz={"md"}>{data.content}</Text>
                    </Accordion.Panel>
                  </Accordion.Item>
                );
              })}
            </Accordion>
          </Reveal>
        </Grid.Col>
        <Grid.Col span={6}>
          <Flex justify="flex-end">
            <Image
              src={"/static/assets/images/faq.png"}
              style={{ width: "100%" }}
              alt="FAQs"
            />
          </Flex>
        </Grid.Col>
      </Grid>
    </Container>
  );
}
