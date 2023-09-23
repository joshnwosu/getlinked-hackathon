import { useEffect, useState } from "react";
import { Container, Group, Burger, Image, Button } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import * as classes from "./Header.module.css";
import React from "react";
import { Link } from "gatsby";

const links = [
  { link: "#overview", label: "Overview" },
  { link: "#faqs", label: "FAQs" },
  { link: "#timeline", label: "Timeline" },
  //   { link: "/contact", label: "Contact" },
];

export default function Header() {
  const [opened, { toggle }] = useDisclosure(false);

  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    // Function to handle scroll event
    const handleScroll = () => {
      const sections = document.querySelectorAll("section"); // Select all sections

      // Iterate through sections to determine the active section
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const scrollPosition = window.scrollY;

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(section.id);
          console.log(section.id);
        }
      });
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Function to handle smooth scrolling to a section
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const yOffset = -70; // Adjust the offset if needed
      const y =
        section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y + 100, behavior: "smooth" });
    }
  };

  const items = links.map((link) => (
    <Link
      key={link.label}
      to={link.link}
      className={classes.link}
      data-active={`#${activeSection}` === link.link || undefined}
      onClick={(event) => {
        event.preventDefault();
        setActiveSection(link.link);
        scrollToSection(link.link.substring(1));
      }}
    >
      {link.label}
    </Link>
  ));

  return (
    <header className={classes.header}>
      <Container size="xl" className={classes.inner}>
        <Link to="/">
          <Image
            src={"../../../assets/images/getlinked.png"}
            alt="getlinked"
            style={{ width: 150 }}
          />
        </Link>
        <Group gap={5} visibleFrom="md">
          {items}
          <Link to={"/contact"} className={classes.link}>
            Contact
          </Link>

          <Button
            size="md"
            fz={"md"}
            variant="gradient"
            px={50}
            gradient={{ from: "#F534BF", to: "#903AFF", deg: 90 }}
            ml={"xl"}
            component={Link}
            to="/register"
          >
            Register
          </Button>
        </Group>

        <Burger opened={opened} onClick={toggle} hiddenFrom="md" size="sm" />
      </Container>
    </header>
  );
}
