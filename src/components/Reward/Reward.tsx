import { Container, Flex, Grid, Image, Text, Title } from "@mantine/core";
import React from "react";
import TextHightlight from "../widgets/TextHightlight";

export default function Reward() {
  return (
    <Container size={"lg"}>
      <Grid py={20} gutter={"xl"} align="center">
        <Grid.Col span={6}>
          <Flex justify="flex-start">
            <Image
              src={"/static/assets/images/trophy.png"}
              style={{ width: "100%" }}
              alt="Trophy"
            />
          </Flex>
        </Grid.Col>
        <Grid.Col span={6}>
          <Title order={1} style={{ color: "white" }}>
            Price and
            <TextHightlight>Rewards</TextHightlight>
          </Title>
          <Text
            mt={20}
            style={{ color: "white" }}
            fz={"lg"}
            lh={2}
            w={400}
            maw={"100%"}
          >
            Highlight of the prizes or rewards for winners and for participants.
          </Text>

          <Image
            src={"/static/assets/images/rewards.png"}
            style={{ width: "100%" }}
            alt="Trophy"
            mt={100}
          />
        </Grid.Col>
      </Grid>
    </Container>
  );
}
