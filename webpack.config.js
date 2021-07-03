const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

var babelOptions = {
    presets: ['@babel/env', '@babel/react'],
}

module.exports = {
    entry: './src/apple.js',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'apple.[contenthash].bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [{ loader: 'babel-loader', options: babelOptions }],
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader: 'css-loader'
                    }
                ]
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
        new MiniCssExtractPlugin({
            filename: 'style.bundle.css'
        })
    ],
    resolve: {
        extensions: ['.js', '.jsx'],
    },
}
