import { defineConfig } from '@rspack/cli'
import { VueLoaderPlugin } from 'vue-loader'

const config = defineConfig({
  context: __dirname,
  entry: {
    main: './src/main.ts',
  },
  builtins: {
    html: [
      {
        template: './index.html',
      },
    ],
    define: {
      __VUE_OPTIONS_API__: JSON.stringify(true),
      __VUE_PROD_DEVTOOLS__: JSON.stringify(false),
    },
  },
  devServer: {
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          experimentalInlineMatchResource: true,
        },
      },
      {
        test: /\.(png|jpe?g|gif|svg)/i,
        type: 'asset',
      },
    ],
  },
  // @ts-expect-error
  plugins: [new VueLoaderPlugin()],
})
export = config
