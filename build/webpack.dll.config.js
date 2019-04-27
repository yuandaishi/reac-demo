const path = require("path");
const webpack = require("webpack");
const CleanWabpackPlugin=require('clean-webpack-plugin');
// const {
//     BundleAnalyzerPlugin
// } = require('webpack-bundle-analyzer')

const vendor = [
    "react",
    "react-dom",
    "react-router-dom",
    "mobx"
];

module.exports = {
    entry: {
        dll: vendor
    },
    output: {
        path: path.join(__dirname, '../dist'),
        filename: "[name].js",
        library: "_dll_[name]"
    },
    plugins: [
        new CleanWabpackPlugin(),
        new webpack.DllPlugin({//供DllReferencePlugin使用
            name: "_dll_[name]",
            path: path.join(__dirname, '../dist', 'manifest.json'),
        }),
        // new BundleAnalyzerPlugin({
        //     analyzerMode: 'static'
        // }),
    ]
}