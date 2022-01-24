const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'lifetime.bundle.js',
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
                use: ['style-loader', 'css-loader'], 
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({template: './src/index.html'})
    ],
    mode: 'production',
    devServer: {
        static:{
            directory: path.join(__dirname,'dist')
        }
    }
}