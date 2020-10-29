/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
require("dotenv").config({ path: ".env" });

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Zeltabele`,
    description: `Kindergarten "Zeltabele"`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`varela round`],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: `ser6tj1m`,
        dataset: `production`,
        // a token with read permissions is required
        // if you have a private dataset
        token: process.env.SANITY_TOKEN,
        watchMode: true,
        // If the Sanity GraphQL API was deployed using `--tag <name>`,
        // use `graphqlTag` to specify the tag name. Defaults to `default`.
        // graphqlTag: "default",
      },
    },
  ],
};
