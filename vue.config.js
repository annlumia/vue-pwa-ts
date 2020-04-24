const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')

// Build output directory
const BUILD_OUTPUT = 'dist'
// Static directory
const STATIC_DIR = 'ui/public'
// Template file
const TEMPLATE_FILE = 'index.html'

module.exports = {
  outputDir: BUILD_OUTPUT,
  transpileDependencies: ['vue-echarts', 'resize-detector'],

  configureWebpack: (config) => {
    config.plugins.push(
      new CopyWebpackPlugin([
        {
          from: path.join(process.cwd(), STATIC_DIR),
          to: path.join(process.cwd(), BUILD_OUTPUT),
          ignore: ['index.html', '.DS_Store'],
        },
      ])
    )
  },

  chainWebpack: (config) => {
    config
      .entry('app')
      .clear()
      .add('./ui/main.ts')
      .end()
    config.resolve.alias.set('@', path.join(__dirname, './ui'))

    config.plugin('html').tap((args) => {
      args[0].template = path.join(process.cwd(), STATIC_DIR, TEMPLATE_FILE)
      return args
    })
  },

  devServer: {
    proxy: {
      '^/api': {
        target: process.env.API_SERVER,
        ws: true,
        changeOrigin: true,
      },
    },
  },
}
