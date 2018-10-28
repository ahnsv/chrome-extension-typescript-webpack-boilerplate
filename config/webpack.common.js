const path = require('path')
let resolve = dir => path.join(__dirname, '..', dir)
module.exports = {
    entry: {
        tab: resolve('./tab'),
        popup: resolve('./popup'),
        options: resolve('./options'),
        content: resolve('./content'),
        devtools: resolve('./devtools'),
        background: resolve('./background'),
    },
    output: {
        path: path.join(__dirname, '..', 'dist'),
        publicPath: '/',
        filename: '[name]/[name].js',
        chunkFilename: '[name]/[id].[name].js?[hash]',
        library: '[name]'
    },
    resolve: {
        extensions: ['.js', '.ts', '.json'],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(html)$/,
                use: {
                    loader: 'html-loader',
                    options: {
                        attrs: [':data-src'],
                        minimize: true
                    }
                }
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'img/[name].[hash:7].[ext]'
                }
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'media/[name].[hash:7].[ext]'
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'fonts/[name].[hash:7].[ext]'
                }
            }
        ]
    }
}