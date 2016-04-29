var webpack = require('webpack');
module.exports = {
    entry: {
        main: ['./src/main.js'],
        partial: ['./src/partial.js']
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
            test: /\.js$/,
            exclude:/node_modules/,
            loader: 'babel',
            query:{
                presets: ['react', 'es2015']
            }
        }, {
            test: /\.jsx$/,
            exclude:/node_modules/,
            loader: 'babel',
            query:{
                presets: ['react', 'es2015']
            }
        }]
    }
};