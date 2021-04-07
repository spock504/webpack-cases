class CopyrightWebpackPlugin {
    constructor(options) {
        // options获取参数
        console.log('插件被使用了', options)
        this.options = options
    }
    apply(compiler) { // 其中compiler为webpack实例
        // console.log('this.options ', this.options);
        compiler.hooks.emit.tapAsync('CopyrightWebpackPlugin', (compilation, callback) => {
            // compilation代表在当前打包时的相关配置 

            /* 文件
            *  1. 我们打包要生成的文件，实际上是放在* compilation.assets * 中的 
            *  2. 生成一个文件： source代表里面的内容（代码），size代表文件的大小
            */
            compilation.assets['Copyright.txt'] = {
                source: function () {
                    return '这是一个版权文件'
                },
                size: function () {
                    return 8
                }
            }
            console.log('生成资源到 output 目录之前', compilation.assets)
            callback()
        })
    }
}
module.exports = CopyrightWebpackPlugin