const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const devMode = process.env.NODE_ENV !== 'production';

module.exports = {


    entry: {
        app: [
            "@babel/polyfill",
            './frontend/app.js'
        ]
    },


    output: {
        path: path.join(__dirname, 'backend/src/public'),
        filename: 'js/app.bundle.js',
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
            test: /\.sass/,
            use: [
                devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                'css-loader',
                'sass-loader'
            ]
        }]
    },

    plugins: [
        new HTMLWebpackPlugin({
            template: './frontend/index.html',
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true
            }
        }),
        new MiniCssExtractPlugin({
            filename: 'css/app.bundle.css',
        })
    ],
    devtool: 'source-map'
}