const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, '/public'),
        publicPath: '/',
        filename: '[name].bundle.js',
    },
    devtool: 'inline-source-map',// source-map // This is for error tracking in console
    // plugins: [
    //     // new CleanWebpackPlugin(['public']),
    //     new HtmlWebpackPlugin({
    //         title: 'Sample Title in Webpack'
    //     })
    // ],
    devServer: {
        contentBase: path.join(__dirname, '/public'),
        compress: true,
        port: 9000,
        disableHostCheck: true,
        historyApiFallback: true
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.scss$/,
                use: [
                    "css-loader", // translates CSS into CommonJS
                    "sass-loader" // compiles Sass to CSS
                ]
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    }
};