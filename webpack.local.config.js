const path = require("path");
const webpack = require('webpack');
const SRC_DIR = path.resolve(__dirname, './src/');
const DIST_DIR = path.resolve(__dirname, 'dist'); 
const envConfig = require('./Config');

const HtmlWebpackPlugin = require("html-webpack-plugin");

/*
  The configuration defined in webpack.local.config.ts is used to create a build for deployment to a developer's local ALP VM.
  It generates an unminified build for deployment on a local ALP VM. Google Analytics event sending is disabled for this build.
  It should be used by project developers to assist in local integration testing. For deployment to a local VM,
  it should be invoked by use of the following maven command:
  
    mvn -Dprofile=local clean install
*/

const env = envConfig.localConfig;
console.log("webpack.local.config.js defining process.env as " + JSON.stringify(env));

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
    devtool: 'inline-source-map',
    mode: 'development',
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
            title: 'LOCAL - Kidaptive-UI-Base',
            template: './src/index.html',
            filename: './index.html'
        }),
        new webpack.DefinePlugin(
            {'process.env': JSON.stringify(env)}
        )
    ] 
  };

  module.exports = config;