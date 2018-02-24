var htmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
    entry: {
        'abc':'./site/js/js-eg1/template.js',
        'jquery': './site/js/lib/jquery-1.11.3.min.js'
    },
    output: {
        path: path.resolve(__dirname,'site/build/'),
        filename: '[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                use: ['style-loader','css-loader']
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            title: 'first htmlwebpackplugin',
            chunks: ['abc']
        }),
        new htmlWebpackPlugin({
            title: '生成自定义html页面',
            chunks: ['jquery','abc'],
            filename: 'hh.html'
        })
    ]
}