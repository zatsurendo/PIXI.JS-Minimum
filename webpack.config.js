const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    mode: 'development',
    entry: './src/js/app.js',
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'assets/js/bundle.js',
    },
    devServer: {
        open: true,
        port: 9000,
        static: './public',
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                { from: './src/images', to: './assets/images'}
            ],
        }),
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ["@babel/preset-env"]
                        }
                    }
                ],
            },
        ],
    },
};

