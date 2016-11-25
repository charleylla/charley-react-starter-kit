var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
    entry:  __dirname + "/app/main.js",
    output: {
        path: __dirname + "/public",
        filename: "[name]-[hash].js"
    },
    //配置生成Source Maps，选择合适的选项
    // 有多种选择，在生产环境不建议使用
    devtool: 'eval-source-map',
    devServer: {
        contentBase: "./public",//本地服务器所加载的页面所在的目录
        colors: true,//终端中输出结果为彩色
        historyApiFallback: true,//不跳转
        inline: true,//实时刷新
        hot:true
    },
    module: {
        loaders: [
            // json-loader 让 js 文件可以读取 JSON 文件的值
            // import xxx.json
            {
                test: /\.json$/,
                loader: "json"
            },

            // babel-loader
            {
                test: /\.js[x]?$/,
                exclude: /node_modules/,
                loader: 'babel',
            },

            // scss 处理
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('style', 'css?modules!sass')
            },

        ]
    },
    plugins: [
        // 版权信息
        new webpack.BannerPlugin("Copyright Charleylal 2016 inc."),
        new HtmlWebpackPlugin({
            template: __dirname + "/app/template"
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin(),
        // 分离 css 和 js 文件
        new ExtractTextPlugin("style.css")
    ],


}