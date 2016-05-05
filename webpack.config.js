var webpack = require('webpack');
module.exports = {
    entry: {
        main: ['./src/main.js']
    },
    output: {
        path: './build',
        filename: '[name].js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [{
            test: /\.(js|jsx)$/,
            exclude:/node_modules/,
            loader: 'babel'                  
        },{
            test: /\.css$/,
            exclude:/node_modules/,
            loader: 'style-loader!css-loader'
        },{
            test: /\.(png|jpg)$/,
            exclude:/node_modules/,
            loader: 'url-loader?limit=8192'
        }]
    }
};