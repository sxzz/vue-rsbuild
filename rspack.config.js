// @ts-check
const { VueLoaderPlugin } = require('vue-loader')

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
        loader: 'file-loader',
      },
    ],
  },
  plugins: [new VueLoaderPlugin()],
}
