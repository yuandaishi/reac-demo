const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: 'development',
    devtool: 'evel-sourcr-map',
    context: path.resolve(__dirname, '../'),//解析__dirname到什么路劲，__dirname='../'
    entry: './app/index.js',
    watch: true,
    output: {
        path: path.resolve(__dirname, '../dist'),
        publicPath: path.resolve(__dirname, '../dist'),//按需加载(on-demand-load)或加载外部资源(external resources)
        filename: 'bundle.js',
        chunkFilename: '[name].js'
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            include: [
                path.resolve(__dirname, '../app')
            ],
            exclude: [
                path.resolve(__dirname, '../node_modules')
            ],
            loader: 'babel-loader',
        }]
    },
    plugins:[
        new HtmlWebpackPlugin({//会自动打包到出output.path
            title:'react+antd+mobx',
            template:'./app/index.html'
        }),
        // new webpack.DllReferencePlugin({//当需要使用第三方依赖的时候，会使用 DllReferencePlugin插件去读取第三方依赖库
        //     manifest: require('.././dist/manifest.json')
        // })
    ],
    resolve: {
        extensions: ['.json', '.js', '.jsx','.less']
    },
    devtool: 'source-map',
    devServer: {
        contentBase: '../dist',
        inline: true,
        port: 8080,
    }
};
