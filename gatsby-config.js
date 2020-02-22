module.exports = {
  siteMetadata: {
    title: `Empuls3`,
    description: `Empuls3 is a Frisco digital marketing agency helping our clients grow. We specialize in web design, marketing, branding &amp; search engine optimization. Contact us to learn more!`,
    author: `@empuls3`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/my-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint: '610613414e1dbea2ce9e55cf8&amp;id=900bdfe01c'
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // replace "UA-XXXXXXXXX-X" with your own Tracking ID
        trackingId: "UA-128663001-1",
      },
    },
    {
      resolve: `gatsby-plugin-facebook-analytics`,
      options: {
        // Required - set this to the ID of your Facebook app.
        appId: `125595254169358`,

        // Which version of the SDK to load.
        version: `v3.3`,

        // Determines whether XFBML tags used by social plugins are parsed.
        xfbml: true,

        // Determines whether a cookie is created for the session or not.
        cookie: false,

        // Include Facebook analytics in development.
        // Defaults to false meaning the library will only be loaded in production.
        includeInDevelopment: false,

        // Include debug version of sdk
        // Defaults to false meaning the library will load sdk.js
        debug: false,

        // Select your language.
        language: `en_US`,
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-P8VS69B",

        // Include GTM in development.
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,

        // datalayer to be set before GTM is loaded
        // should be an object or a function that is executed in the browser
        // Defaults to null
        defaultDataLayer: { platform: "gatsby" },

        // Specify optional GTM environment details.
        gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING",
        gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME",
        dataLayerName: "YOUR_DATA_LAYER_NAME",
      },
    },
  ],
}
