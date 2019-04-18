// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
  plugins: [
    {
      use: 'gridsome-plugin-tailwindcss',
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: './assets/**/*.svg',
        typeName: 'Logos',
      }
    },
  ],
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

    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule
      .use('vue-svg-loader')
      .loader('vue-svg-loader')
      .options({
        svgo: {
          plugins: [
            {
              cleanupIDs: false,
              prefixIds: true
            },
          ],
        },
      })
  }
}
