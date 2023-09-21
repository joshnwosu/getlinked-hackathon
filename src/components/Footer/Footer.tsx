import {
  Text,
  Container,
  ActionIcon,
  Group,
  rem,
  Image,
  Flex,
  Center,
  Box,
} from "@mantine/core";
import {
  TbBrandTwitter,
  TbBrandInstagram,
  TbBrandFacebook,
  TbBrandLinkedin,
} from "react-icons/tb";
import * as classes from "./Footer.module.css";
import React from "react";
import { link_data } from "./data";
import { Link } from "gatsby";

export function Footer() {
  const groups = link_data.map((group) => {
    const links = group.links.map((link, index) => (
      <Text
        key={index}
        className={classes.link}
        component="a"
        href={link.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </Text>
    ));

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    );
  });

  return (
    <footer className={classes.footer}>
      <Container className={classes.inner} size={"lg"}>
        <div className={classes.logo}>
          {/* <MantineLogo size={30} /> */}
          <Image
            src={"/static/assets/images/getlinked.png"}
            alt="getlinked"
            style={{ width: 150 }}
            mb={"md"}
          />
          <Text size="md" c="white" lh={2} className={classes.description}>
            Getlinked Tech Hackathon is a technology innovation program
            established by a group of organizations with the aim of showcasing
            young and talented individuals in the field of technology
          </Text>
        </div>
        <div className={classes.groups}>{groups}</div>
      </Container>
      <Container className={classes.afterFooter} size={"lg"}>
        <Flex>
          <Link to="#">
            <Text
              c="white"
              size="sm"
              style={{
                borderRight: "4px solid #d434fe",
                padding: "0 10px 0 0",
                textDecoration: "none",
              }}
            >
              Terms of Use
            </Text>
          </Link>
          <Link to="#">
            <Text
              c="white"
              size="sm"
              style={{
                padding: "0 0 0 10px",
                textDecoration: "none",
              }}
            >
              Privacy Policy
            </Text>
          </Link>
        </Flex>

        <Group
          gap={0}
          className={classes.social}
          justify="flex-end"
          wrap="nowrap"
        >
          <Text c={"#d434fe"}>Follow us</Text>
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
        </Group>
      </Container>

      <Container size={"lg"}>
        <Center>
          <Text c="white" size="sm" ta={"center"}>
            All rights reserved. © getlinked Ltd.
          </Text>
        </Center>
      </Container>
    </footer>
  );
}
