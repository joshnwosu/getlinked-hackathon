import {
  ActionIcon,
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Group,
  Text,
  TextInput,
  Textarea,
  Title,
  rem,
} from "@mantine/core";
import React from "react";
import TextHightlight from "../components/widgets/TextHightlight";
import {
  TbBrandTwitter,
  TbBrandInstagram,
  TbBrandFacebook,
  TbBrandLinkedin,
} from "react-icons/tb";
import { useForm } from "@mantine/form";

export default function contact() {
  const form = useForm({
    initialValues: {
      first_name: "",
      email: "",
      message: "",
    },
  });

  const handleSubmit = (data: any) => {
    console.log({ data });
  };
  return (
    <Container size={"lg"} py={200}>
      <Grid align="center" grow>
        <Grid.Col span={6}>
          <Title order={1}>
            <TextHightlight>Get in touch</TextHightlight>
          </Title>

          <Text c={"white"} mt={"md"}>
            Contact
            <br />
            information
          </Text>

          <Text c={"white"} mt={"md"} w={130}>
            27,Alara Street Yaba 100012 Lagos State
          </Text>

          <Text c={"white"} mt={"md"}>
            Call Us : 07067981819
          </Text>

          <Text c={"white"} mt={"md"}>
            we are open from Monday-Friday
            <br />
            08:00am - 05:00pm
          </Text>

          <Box mt={"xl"}>
            <Text fw={"bold"}>
              <TextHightlight>Share on</TextHightlight>
            </Text>
            <ActionIcon size="xl" color="gray" variant="subtle">
              <TbBrandInstagram
                style={{ width: rem(28), height: rem(28) }}
                strokeWidth={1.5}
              />
            </ActionIcon>
            <ActionIcon size="xl" color="gray" variant="subtle">
              <TbBrandTwitter
                style={{ width: rem(28), height: rem(28) }}
                strokeWidth={1.5}
              />
            </ActionIcon>
            <ActionIcon size="xl" color="gray" variant="subtle">
              <TbBrandFacebook
                style={{ width: rem(28), height: rem(28) }}
                strokeWidth={1.5}
              />
            </ActionIcon>
            <ActionIcon size="xl" color="gray" variant="subtle">
              <TbBrandLinkedin
                style={{ width: rem(28), height: rem(28) }}
                strokeWidth={1.5}
              />
            </ActionIcon>
          </Box>
        </Grid.Col>
        <Grid.Col span={6}>
          <Box
            style={{
              backgroundColor: "#1B142D",
              borderRadius: 10,
              width: "100%",
              minHeight: 200,
            }}
            p={60}
          >
            <Title order={3} lh={1.5}>
              <TextHightlight>
                Questions or need assistance?
                <br />
                Let us know about it!
              </TextHightlight>
            </Title>

            <form onSubmit={form.onSubmit((data) => handleSubmit(data))}>
              <Flex direction={"column"} align={"center"} gap={"lg"} mt={"xl"}>
                <TextInput
                  placeholder="First Name"
                  {...form.getInputProps("first_name")}
                  size="md"
                  w={"100%"}
                  styles={{
                    input: {
                      backgroundColor: "rgba(0,0,0,0.2)",
                    },
                  }}
                />
                <TextInput
                  placeholder="Email"
                  {...form.getInputProps("email")}
                  size="md"
                  w={"100%"}
                  styles={{
                    input: {
                      backgroundColor: "rgba(0,0,0,0.2)",
                    },
                  }}
                />
                <Textarea
                  placeholder="Message"
                  {...form.getInputProps("message")}
                  size="md"
                  w={"100%"}
                  styles={{
                    input: {
                      backgroundColor: "rgba(0,0,0,0.2)",
                    },
                  }}
                />

                <Button
                  type="submit"
                  size="lg"
                  fz={"sm"}
                  variant="gradient"
                  px={50}
                  gradient={{ from: "#F534BF", to: "#903AFF", deg: 90 }}
                >
                  Submit
                </Button>
              </Flex>
            </form>
          </Box>
        </Grid.Col>
      </Grid>
    </Container>
  );
}
