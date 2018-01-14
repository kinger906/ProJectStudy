module.exports = {
    entry:{
        'build-eg1':'./site/js/js-eg1/template.js',
        'build-eg2':'./site/js/js-eg2/app.js',
        'build-eg3':'./site/js/js-eg3/app.js'
    },
    output:{
        filename:'./site/build/[name].js'
    },
    module:{
        loaders:[
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    }
}