const path = require("path");
const webpack = require('webpack');
const SRC_DIR = path.resolve(__dirname, './src/');
const DIST_DIR = path.resolve(__dirname, 'dist'); 
const envConfig = require('./Config');

const HtmlWebpackPlugin = require("html-webpack-plugin");

/*
  The configuration defined in webpack.prod.config.ts is used to create a build for deployment to the ALP production environment.
  It generates a minified build, with Google Analytics event sending enabled using the production project key.
  It should be built for production deployment by use of maven, using the command:
  
    mvn -Dprofile=prod clean install
*/

const env = envConfig.prodConfig;
console.log("webpack.prod.config.js defining process.env as " + JSON.stringify(env));

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
            title: 'PROD - Kidaptive-UI-Base',
            template: './src/index.html',
            filename: './index.html'
        }),
        new webpack.DefinePlugin(
            {'process.env': JSON.stringify(env)}
        )
    ] 
  };

  module.exports = config;