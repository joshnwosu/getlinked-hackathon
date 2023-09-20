import { Space, Title } from "@mantine/core";
import { Link } from "gatsby";
import React from "react";
import Reveal from "../components/widgets/Reveal";

export default function Register() {
  return (
    <>
      <div>
        <div>
          <Reveal>
            <Title order={1}>Register Page</Title>
          </Reveal>
          <Reveal>
            <Link to="/">Home</Link>
          </Reveal>
        </div>

        <Space h={700} />

        <Reveal>
          <Title order={1}>Content 1</Title>
        </Reveal>

        <Space h={700} />

        <Reveal>
          <Title order={1}>Content 2</Title>
        </Reveal>

        <Space h={700} />
      </div>
    </>
  );
}
