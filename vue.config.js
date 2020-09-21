module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/assets/_variables.scss";`,
      },
    },
  },
  publicPath: '/vue-food-recipes/'
};
