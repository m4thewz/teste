module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/teste/'
    : '/',
    css: {
      loaderOptions: {
        sass: {
          additionalData: `
            @import "@/assets/_variables.scss";
          `
        }
      }
    }
}