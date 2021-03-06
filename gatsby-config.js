require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` })

module.exports = {
  siteMetadata: {
    title: `Working Title`,
    description: `The infamous review of IMDB's top 250 English language movies.`,
    author: `Working Title`,
    menuLinks: [
      {
        name: `Home`,
        url: `/`,
      },
      {
        name: `List`,
        url: `/list`,
      },
      {
        name: 'Rankings',
        url: '/rankings',
      },
      {
        name: 'Reviewers',
        url: '/reviewers',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `working-title`,
        short_name: `working-title`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-theme-ui',
    // `gatsby-plugin-graphql-codegen`, // disabled as this doesn't play nice with contentful
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `akilq4l3k7d2`,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
