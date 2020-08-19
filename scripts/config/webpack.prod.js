/* eslint-disable unicorn/prevent-abbreviations */
/* eslint-disable @typescript-eslint/no-var-requires */
const { merge } = require('webpack-merge')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  mode: 'production',
  devtool: 'none',
  plugins: [new CleanWebpackPlugin()],
})
