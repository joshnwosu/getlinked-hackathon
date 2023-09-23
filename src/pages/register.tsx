import {
  ActionIcon,
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Group,
  Image,
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
import * as classes from "../styles/register.module.css";

export default function Register() {
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
    <Container size={"lg"} py={100}>
      <Grid align="center" grow>
        <Grid.Col span={5}>
          <Flex justify="flex-start">
            <Image
              src={"../../assets/images/register.png"}
              style={{ width: "100%" }}
              alt="The Big Idea"
              className={classes.image}
            />
          </Flex>
        </Grid.Col>
        <Grid.Col span={7}>
          <Box className={classes.box}>
            <Title order={3} lh={1.5}>
              <TextHightlight>Register</TextHightlight>
            </Title>

            <Text c={"white"} my={"md"}>
              Be part of this movement............
            </Text>

            <Title order={3} lh={1.5} c={"white"} fw={"600"}>
              CREATE YOUR ACCOUNT
            </Title>

            <form onSubmit={form.onSubmit((data) => handleSubmit(data))}>
              <Flex gap={"lg"} mt={"xl"} direction={"column"}>
                <TextInput
                  label="Team's Name"
                  placeholder="Enter the name of your group"
                  {...form.getInputProps("team_name")}
                  size="md"
                  variant="default"
                  styles={{
                    input: {
                      backgroundColor: "rgba(0,0,0,0.2)",
                    },
                  }}
                />
                <TextInput
                  label="Phone"
                  placeholder="Enter your phone number"
                  {...form.getInputProps("phone")}
                  size="md"
                  styles={{
                    input: {
                      backgroundColor: "rgba(0,0,0,0.2)",
                    },
                  }}
                />

                <TextInput
                  label="Email"
                  placeholder="Enter your email address"
                  {...form.getInputProps("email")}
                  size="md"
                  styles={{
                    input: {
                      backgroundColor: "rgba(0,0,0,0.2)",
                    },
                  }}
                />

                <TextInput
                  label="Project Topic"
                  placeholder="What is your group project topic"
                  {...form.getInputProps("email")}
                  size="md"
                  styles={{
                    input: {
                      backgroundColor: "rgba(0,0,0,0.2)",
                    },
                  }}
                />

                <Button
                  size="lg"
                  fz={"sm"}
                  variant="gradient"
                  px={50}
                  fullWidth
                  gradient={{ from: "#F534BF", to: "#903AFF", deg: 90 }}
                >
                  Register Now
                </Button>
              </Flex>
            </form>
          </Box>
        </Grid.Col>
      </Grid>
    </Container>
  );
}
