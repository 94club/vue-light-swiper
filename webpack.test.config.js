// This is the webpack config used for unit tests.

var webpack = require('webpack')
var merge = require('webpack-merge')
var baseConfig = require('./webpack.config')

var webpackConfig = merge(baseConfig, {
    // use inline sourcemap for karma-sourcemap-loader
    devtool: '#inline-source-map',
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.common.js',
            // necessary to to make lang="scss" work in test when using vue-loader's ?inject option
            // see discussion at https://github.com/vuejs/vue-loader/issues/724
            'scss-loader': 'sass-loader'
        }
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"testing"'
            }
        })
    ]
})

// no need for app entry during tests
delete webpackConfig.entry

module.exports = webpackConfig
