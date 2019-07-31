const path = require("path");
const webpack = require('webpack');
const SRC_DIR = path.resolve(__dirname, './src/');
const DIST_DIR = path.resolve(__dirname, 'dist'); 
const envConfig = require('./Config');

const HtmlWebpackPlugin = require("html-webpack-plugin");

/*
  The configuration defined in webpack.dev.config.ts is used to create a build for deployment to the ALP dev environment.
  It generates a minified build, with Google Analytics event sending enabled using the development project key.
  It should be built for dev deployment by use of maven, using the command:
  
    mvn -Dprofile=dev clean install
*/

const env = envConfig.devConfig;
console.log("webpack.dev.config.ts defining process.env as " + JSON.stringify(env));

const config = {
    entry: {
        app: [
            SRC_DIR + '/index.jsx'
        ]
    },
    output: {
        path: DIST_DIR,
        filename: 'bundle.js'
    },
    devtool: 'source-map',
    // cnovak - 2019-03-27: This webpack config is intended for builds to be deployed to our development environment. 
    // In practice this is treated as a staging deployment, since it is seen by external partners.
    // Hence, we use mode: 'production' in the following config.
    mode: 'production',
    module: {
      rules: [
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        },
        {
            test: /\.css$/,
            loaders: ['style-loader', 'css-loader']
        }
      ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'DEV - Kidaptive-UI-Base',
            template: './src/index.html',
            filename: './index.html'
        }),
        new webpack.DefinePlugin(
            {'process.env': JSON.stringify(env)}
        )
    ] 
  };

  module.exports = config;