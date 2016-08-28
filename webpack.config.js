// webpack.config.js
var webpack = require('webpack');

module.exports = {
    entry: "./source/javascripts/index.js",
    output: {
        path: __dirname + '/.tmp/dist',
        filename: 'javascripts/all.js',
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            {
              test: /\.scss$/,
              loaders: ["style", "css", "sass"]
            },
            {
              test: /source\/assets\/javascripts\/.*\.js$/,
              exclude: /node_modules|\.tmp|vendor/,
              loader: 'babel-loader',
              query: {
                presets: ['es2015', 'stage-0']
              },
            },
            {
              test: /\.js$/,
              exclude: /(node_modules)/,
              loader: 'babel', // 'babel-loader' is also a legal name to reference
              query: {
                presets: ['es2015']
              }
            },
            {
              test: /.jsx?$/,
              loader: 'babel-loader',
              exclude: /node_modules/,
              query: {
                presets: ['es2015', 'react']
              }
            }
        ]
    }
};
