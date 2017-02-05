var HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: [
        './app/index.js'
    ],
    output: {
        path: __dirname + '/dist',
        filename: "index.bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"
            }
        ]
    }
}