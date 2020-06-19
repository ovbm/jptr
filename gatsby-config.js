const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: 'JPTR',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: path.join(__dirname, 'src', 'images'),
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        includePaths: [
          require('path').resolve(__dirname, 'node_modules'),
        ],
      },
    },
  ],
};
