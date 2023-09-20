import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `GetLinked Hackathon`,
  },
  graphqlTypegen: true,
  plugins: ["gatsby-plugin-postcss"],
};

export default config;
