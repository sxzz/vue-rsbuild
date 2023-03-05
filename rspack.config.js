// @ts-check
const { VueLoaderPlugin } = require('vue-loader')
const { default: htmlPlugin } = require('@rspack/plugin-html')

/** @type import('@rspack/core').Configuration */
module.exports = {
  entry: {
    app: './src/index.ts',
  },
  module: {
    rules: [
      { test: /\.vue$/, use: 'vue-loader' },
      {
        test: /\.(png|jpe?g|gif)$/i,
        exclude: /\.vue$/,
        type: 'asset',
      },
    ],
  },
  plugins: [
    new htmlPlugin({
      template: './index.html',
      publicPath: '/',
    }),
    new VueLoaderPlugin(),
  ],
}
