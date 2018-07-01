module.exports = {
  pathPrefix: "/jptr",
  siteMetadata: {
    title: 'JPTR',
  },
  plugins: [
    'gatsby-plugin-react-helmet', 
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        includePaths: [
          require('path').resolve(__dirname, 'node_modules')
        ]
      }
    },
  ],
}
