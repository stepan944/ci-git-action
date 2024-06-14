const path = require('path');
const webpack = require('webpack');

module.exports = {
  // Mode
  mode: 'production',

  // Entry point
  entry: './src/index.js', // Replace with your entry point file

  // Output configuration
  output: {
    filename: '[name].bundle.js', // Output file name
    path: path.resolve(__dirname, 'dist'), // Output directory
    publicPath: '/dist/', // Public path for assets (if applicable)
  },

  // Module configuration (loaders)
  module: {
    rules: [
      {
        test: /\.js$/, // Rule for JavaScript files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Use Babel loader for transpiling
          options: {
            // Your Babel configuration (presets, plugins)
          }
        }
      },
      // Add rules for other loaders (e.g., CSS, images) based on your project needs
    ]
  },

  // Plugins
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'), // Set environment variable for production mode
    })
    // Add other plugins based on your project needs (e.g., minification plugins)
  ]
};
