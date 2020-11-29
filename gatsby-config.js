module.exports = {
  siteMetadata: {
    title: `Hamish`,
    description: `Gatsby's default starter, but remodeled for my preferences.`,
    author: `@oldmannseamus`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require(`sass`),
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content`,
      },
    },
    `gatsby-plugin-mdx`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-hamish`,
        short_name: `hamish`,
        start_url: `/`,
        background_color: `#0b474a`,
        theme_color: `#0b474a`,
        display: `minimal-ui`,
        icon: `src/assets/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
