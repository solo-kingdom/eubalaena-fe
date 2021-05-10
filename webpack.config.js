const webpack = require("webpack");
const path = require("path");
const HtmlWbpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: 'development',          // 指定开发模式
    devtool: false,                 // 不指定 source map
    entry: './src/index.tsx',       // 指定入口文件
    output: {                       // 输出文件
        path: path.join(__dirname, 'dist'),
        filename: '[name].[hash:5].js'        
    },
    devServer: {                    // 开发服务器配置
        hot: true,                  // 热更新
        contentBase: path.join(__dirname, 'dist'),   // 静态文件根目录
        historyApiFallback: {       // 历史 api 的备份 
            index: './index.html'   // browserHash 刷新重定向到index.html
        }
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"],     // 支持以下几种模块
        alias: {
            "@": path.resolve("src")
        }
    },
    module: {
        rules: [
            {
                test: /\.tst?$/,
                loader: 'ts-loader'
            }
        ]
    },
    plugins: [
        new HtmlWbpackPlugin({
            template: './src/index.html',
            filename: 'index.[hash:5].html'
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
}

// https://www.bilibili.com/video/BV1up4y1r7mv?from=search&seid=9270259727631991272
// 观看视频


