
module.exports = {

  plugins: [
    {
 
      resolve: `gatsby-source-wordpress`,
      options: {
        url:`https://tryscrumlive.vervebot.io/graphql`,
        schema: {
          timeout: 3000000,
        },
        type: {
          MediaItem: {
            localFile: {
              requestConcurrency: 50,
            },
          },
        },
      },
    },

    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-image`,
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `Gatsby Starter WordPress Blog`,
    //     short_name: `GatsbyJS & WP`,
    //     start_url: `/`,
    //     background_color: `#ffffff`,
    //     theme_color: `#663399`,
    //     display: `minimal-ui`,
    //     icon: `content/assets/gatsby-icon.png`,
    //   },
    // },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `@debiki/gatsby-plugin-talkyard`,
      options: {
        talkyardServerUrl: 'https://comments.tryscrum.com'
      }
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "UA-143505900-1", 
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-tidio-chat',
      options: {
        tidioKey: 'pbzbewb3asra5xsnf82odlboexsbj64x',
        enableDuringDevelop: true, // Optional. Disables Tidio chat widget when running Gatsby dev server. Defaults to true.
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.tryscrum.com',
        sitemap: 'https://www.tryscrum.com/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'en'
      }
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
          // shortname: `tryscrum-com`
          shortname: `tryscrum`
      }
    },
    {
      resolve: 'gatsby-plugin-load-script',
      options: {
        src: '/eb_widgets.js', 
      },
    },
    {
      resolve: "gatsby-plugin-antd",
      options: {
        style: true,
      },
    },
    {
      resolve: "gatsby-plugin-less",
      options: {
        javascriptEnabled: true,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
          rule: {
              include: `${__dirname}/src/svg/`,
          },
      },
    },
  ],
}
