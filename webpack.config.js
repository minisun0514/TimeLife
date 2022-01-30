const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: {
        index: './src/index.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.css$/i,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader'], 
            },
            {
                test: /\.ts/i,
                exclude: /node_modules/,
                use: 'ts-loader',
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ 
            template: './src/index.html',
            favicon: path.resolve('./src/j.ico') 
        })
    ],
    devServer: {
        static: './dist',
        hot: true
    },
    resolve: {
        extensions:['.js', '.jsx']
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    }
}