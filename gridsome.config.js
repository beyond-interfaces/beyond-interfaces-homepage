// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
  plugins: [],
  chainWebpack: config => {
    const sassLoaderRule = config.module.rule('sass-loader')
    sassLoaderRule.uses.clear()
    sassLoaderRule
      .test(/\.scss$/)
      .use('sass-loader')
      .loader('sass-loader')
      .options({
        data: `
          @import "@/scss/_variables.scss";
        `
      })
  }
}
