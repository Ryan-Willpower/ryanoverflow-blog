require("dotenv").config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: `Ryanoverflow's Blog`,
    author: {
      name: `Surasak C.`,
      summary: `who has passion in programming and learning new things.`,
    },
    description: `Ryan's blog`,
    siteUrl: `https://ryanoverflow.com`,
    social: {
      linkedin: `https://www.linkedin.com/in/surasak-chaisurin-925199179`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Ryanoverflow's Blog`,
        short_name: `Ryanoverflow`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#e89bad`,
        display: `minimal-ui`,
        icon: `content/assets/gatsby-icon.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: process.env.STRAPI_API,
        contentTypes: ["article"],
        singleTypes: [`bio`],
        queryLimit: 1000,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
