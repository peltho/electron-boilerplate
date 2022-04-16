const rules = require('./webpack.rules');
const plugins = require('./webpack.plugins');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const assets = [ 'assets' ]; // asset directories


rules.push({
  test: /\.css$/,
  use: [{ loader: 'style-loader' }, { loader: 'css-loader' }, { loader: 'postcss-loader' }],
});

rules.push({
  test: /\.(png|jpe?g|gif)$/i,
  use: [{ loader: 'url-loader' }]
})

module.exports = {
  module: {
    rules,
  },
  plugins: assets.map(asset => {
    return new CopyWebpackPlugin({
      patterns: [{
        from: path.resolve(__dirname, 'src', asset),
        to: path.resolve(__dirname, '.webpack/renderer', asset)
      }]
    });
  }),
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css'],
  },
};
