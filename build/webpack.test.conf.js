// This is the webpack config used for unit tests.

let utils = require('./utils'),
    webpack = require('webpack'),
    merge = require('webpack-merge'),
    baseConfig = require('./webpack.base.conf')

let webpackConfig = merge(baseConfig, {
    // use inline sourcemap for karma-sourcemap-loader
    module: {
        rules: utils.styleLoaders()
    },
    devtool: '#inline-source-map',
    plugins: [
        new webpack.DefinePlugin({
            'process.env': require('../config/test.env')
        })
    ]
});

// no need for app entry during tests
delete webpackConfig.entry;

module.exports = webpackConfig;
