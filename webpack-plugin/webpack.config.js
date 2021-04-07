const path = require('path')
const CopyrightWebpackPlugin = require('./plugins/copyright-webpack-plugin')

module.exports = {
    mode: 'development', // 先设置为development，不压缩代码，方便调试
    plugins: [
        new CopyrightWebpackPlugin({
            name: 'myPlugin'
        })
    ]
}