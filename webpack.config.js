const path = require('path');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: process.env.NODE_ENV == 'production' ? 'production' : 'development',
    entry: ['./index.jsx', './src/design/custom.scss'],
    output: {
        filename: 'default.js',
        path: `${__dirname}/public`
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        allowedHosts: 'all',
        compress: true,
        port: 3000
    },
    optimization: {},
    plugins: [
        new MiniCSSExtractPlugin({
            filename: 'default.css'
        })
    ],
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },{
                test: /\.s?[ac]ss$/,
                use: [
                    MiniCSSExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ],
                include: path.resolve(__dirname, 'src', 'design'),
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
    }
}