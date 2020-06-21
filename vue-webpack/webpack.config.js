const path = require('path') //node.js
    //导入生成预览页面的插件，得到一个构造函数
const HtmlWebpackPlugin = require('html-webpack-plugin')
    //创建实例对象
const htmlPlugin = new HtmlWebpackPlugin({
    template: './src/index.html',
    filename: 'index.html'
})
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    //编译模式
    mode: 'development', //development（开发模式）；production（项目上线）
    entry: path.join(__dirname, './src/index.js'), //自定义入口文件的路径
    output: {
        path: path.join(__dirname, './dist'), //自定义出口文件的存放路径
        filename: 'bundle.js' //自定义出口文件的名称
    },
    plugins: [htmlPlugin, new VueLoaderPlugin()],
    module: {
        rules: [
            { test: /\.css$/, use: ['style-loader', 'css-loader', 'postcss-loader'] },
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
            { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
            { test: /\.jpg|png|gif|bmp|ttf|eot|svg|woff|woff2$/, use: ['url-loader?limit=10000000'] },
            { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
            { test: /\.vue$/, use: 'vue-loader' }

        ]
    }
}