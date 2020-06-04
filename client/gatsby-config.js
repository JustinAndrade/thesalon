module.exports = {
  siteMetadata: {
    navbarLinks: [{ to: "/blog", name: "blog" }],
    title: "The Salon",
    description:
      "The Salon located in New Bedford, MA.  Your destination for hair, get the right look for you.",
    siteUrl: "https://tyra-starter.netlify.com",
    homepageHeader: "Welcome to The Salon - New Bedford",
    homepageAbout:
      "The Salon is your destination for the right look.  We take pride in customer satisfaction and making sure our clients leave with a smile on their face.",
    mailChimpUrl: "https://mailchimp.com",
    mailChimpToken: "MAILCHIMP TOKEN HERE",
    youtube: "", // YOUR YOUTUBE PROFILE HERE
    github: "", // YOUR GITHUB PROFILE HERE
    pinterest: "", // YOUR PINTEREST PROFILE HERE
    facebook: "https://www.facebook.com/The-Salon-119469766124032", // YOUR FACEBOOK PROFILE HERE
    instagram: "https://www.instagram.com/thesalon_nb/",
    twitter: "", // YOUR TWITTER PROFILE HERE
  },
  plugins: [
    "gatsby-plugin-sitemap",
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-feed",
      options: {
        query: `
        {
          site {
            siteMetadata {
              title
              description
              siteUrl
              site_url: siteUrl
            }
          }
        }
      `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map((edge) => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.frontmatter.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.frontmatter.slug,
                  custom_elements: [{ "content:encoded": edge.node.html }],
                });
              });
            },
            query: `
            {
              allMarkdownRemark(
                limit: 1000,
                sort: { order: DESC, fields: [frontmatter___date] },
                filter: {frontmatter: {type: {eq: "post"}}}
              ) {
                edges {
                  node {
                    excerpt
                    html
                    frontmatter {
                      slug
                      title
                      date
                    }
                  }
                }
              }
            }
          `,
            output: "/rss.xml",
            title: "Gatsby RSS Feed",
          },
        ],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/content`,
        name: "content",
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          "gatsby-remark-copy-linked-files",
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 1400,
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Karla", "Playfair Display", "Lora"],
        },
      },
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "",
        head: false,
        anonymize: true,
        respectDNT: true,
        exclude: ["/success"],
        cookieDomain: "tyra-starter.netlify.com",
      },
    },
  ],
};
