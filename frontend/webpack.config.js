const HtmlWebpackPlugin = require("html-webpack-plugin");
const BundleTracker = require('webpack-bundle-tracker')
const MiniCss = require('mini-css-extract-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');


module.exports = env => ([
  {
    entry: {
      index: path.resolve(__dirname, "src", "index.js")
    },
    output: {
      path: path.resolve(__dirname, "..", "backend", "assets", "bundles"),
      filename: "index.[contenthash].js",
      publicPath: env.NODE_ENV === 'django' ? '/static/bundles/' : ''
    },
    plugins: [
      new CleanWebpackPlugin(),
      new VueLoaderPlugin(),
      new MiniCss({
        filename: 'index.[contenthash].css',
      }),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "src", "index.html")
      }),
      new BundleTracker({
        filename: '../backend/assets/bundles/webpack-stats.json'
      })
    ],
    module: {
      rules: [
        {
          test: /\.(jpe?g|png|gif|svg|eot|woff|ttf|svg|woff2)$/,
          use: [{loader: 'file-loader'}]
        },
        {
          test: /\.vue$/,
          loader: 'vue-loader'
        },
        {
          test: /\.css$/,
          use: [MiniCss.loader, "css-loader"]
        },
        {
          test: /\.s(c|a)ss$/,
          use: [
            MiniCss.loader,
            'css-loader',
            {
              loader: 'sass-loader',
              options: {
                implementation: require('sass'),
                sassOptions: {
                  indentedSyntax: true // optional
                }
              }
            }
          ]
        }
      ]
    },
    devServer: {
      https: false,
      disableHostCheck: true,
      historyApiFallback: true,
      watchOptions: {
        ignored: [
          path.resolve(__dirname, 'node_modules')
        ]
      }
    },
    resolve: {
      alias: {
       'vue$': 'vue/dist/vue.esm.js',
       '@': path.resolve( __dirname, 'src')
      }
    },
    optimization: {
        sideEffects: true,
        minimize: true,
        minimizer: [
            new TerserPlugin({
                extractComments: false
            }),
            new CssMinimizerPlugin(),
        ],
    }
  }
])
