var htmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
    entry: {
        'abc':'./site/js/js-eg1/template.js',
        'jquery': './site/js/lib/jquery-1.11.3.min.js',
        'js-eg4': './site/js/js-eg4/app.js',
        'js-eg5': './site/js/js-eg5/app.js',
        'js-eg6': './site/js/js-eg6/app.js',
        'js-eg7': './site/js/js-eg7/app.js',
        'js-eg8': './site/js/js-eg8/app.js',
        'js-eg9': './site/js/js-eg9/app.js'
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
        }),
        new htmlWebpackPlugin({
            title: 'Promise研究1',
            chunks: ['js-eg4'],
            filename: 'promise1.html'
        }),
        new htmlWebpackPlugin({
            title: 'promise2',
            chunks: ['js-eg5'],
            filename: 'promise2.html'
        }),
        new htmlWebpackPlugin({
            title: 'promise链式操作',
            chunks: ['js-eg6'],
            filename: 'promise3.html'
        }),
        new htmlWebpackPlugin({
            title: '$.Deferred实例引用',
            chunks: ['js-eg7'],
            filename: 'deferred.html'
        }),
        new htmlWebpackPlugin({
            title: 'ES6语法综合学习',
            chunks: ['js-eg8'],
            filename: 'es6.html'
        }),
        new htmlWebpackPlugin({
            title: '综合学习',
            chunks: ['js-eg9'],
            filename: 'zh.html'
        })
    ]
}