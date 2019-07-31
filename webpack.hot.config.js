const path = require("path");
const webpack = require('webpack');
const SRC_DIR = path.resolve(__dirname, './src/');
const DIST_DIR = path.resolve(__dirname, 'dist'); 
const envConfig = require('./Config');

const HtmlWebpackPlugin = require('html-webpack-plugin')

/*
  The configuration defined in webpack.hot.config.ts is used to create a local, hot-reloading build.
  It generates an unminified, in-memory build
  Google Analytics event sending is, by default, disabled for this build.
  It should be used by project developers to assist in local development and testing, by use of the script:
  
    npm run start
*/

const config = (envArgs) => {
    console.log("webpack.hot.config.js envArgs=" + JSON.stringify(envArgs))
    const env = envConfig.generateConfig(envArgs);
    console.log("webpack.hot.config.js envArgs generate process.env as " + JSON.stringify(env))

    return {
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
        devServer: {
            contentBase: path.join(__dirname, 'dist'),
            hot: true,
            port: 8080
        },
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
                title: 'LOCAL(HOT) - Kidaptive-UI-Base',
                template: './src/index.html',
                filename: './index.html'
            }),
            new webpack.HotModuleReplacementPlugin(),
            new webpack.DefinePlugin(
                {'process.env': JSON.stringify(env)}
            )
        ] 
    }
}

module.exports = config