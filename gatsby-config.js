module.exports = {
  siteMetadata: {
    title: `Motorówki Szczecin, Czarter Szczecin, Czarter Jachtów`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
  ],
};
