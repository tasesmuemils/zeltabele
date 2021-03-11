/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
require("dotenv").config({ path: ".env" });

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Zeltābele`,
    description: `Privātā pirmskolas izglītības iestāde "Zeltābele"`,
    siteUrl: `https://www.zeltabele.lv`,
    facebook: `@Privātā-pirmsskolas-izglītības-iestāde-Zeltābele-1455396878058055`,
    keywords: `zeltabele, zeltābele, Zeltābele, Zeltabele, bērnudārzs centrs, bērnudārzs ķengarags, bērnudārzs Rīga`,
  },
  // flags: { PRESERVE_WEBPACK_CACHE: true },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Nunito",
              variants: ["400", "700", "900"],
              subsets: ["latin", "latin-ext"],
            },
            {
              family: "Dancing Script",
              variants: ["400", "700"],
              subsets: ["latin", "latin-ext"],
            },
          ],
        },
      },
    },
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: `q0t4r1ze`,
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
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rules: {
          include: /assets/,
        },
      },
    },
  ],
};
