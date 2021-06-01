module.exports = {
  pathPrefix: "/Zaat.dev-Blog-React-Gatsby",
  siteMetadata: {
    title: `Zaat.dev Blog`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    
    
    {
      resolve: `gatsby-source-git`,
      options: {
        name: `blog`,
        remote: `https://github.com/zaatdev/blog.git`,
        branch: `main`,
        // Only import the docs folder from a codebase.
       
      }
    },
    `gatsby-plugin-image`,
    
   
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#9ede73`,
        theme_color: `#ffffff`,
        display: `minimal-ui`,
        icon: `src/images/logo_zaat.jpg`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    
      `gatsby-transformer-remark`,
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `pages`,
          path: `${__dirname}/src/images/logo_zaat.jpg`,
        },
      },

      
      
      `gatsby-transformer-sharp`,
      `gatsby-plugin-sharp`,
      
       
     
    
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
  
}

