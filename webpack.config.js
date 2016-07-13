
module.exports = {
    entry: './src/js/index.js',
    output: {
        path: './dist/js',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js/,
                loader: ['babel'],
                exclude: /node_modules/,
                query: {
                    presets: ['es2015'],
                    plugins: ['transform-object-rest-spread'],
                    cacheDirectory: './.webpack-cache'
                }
            }
        ]
    }
};