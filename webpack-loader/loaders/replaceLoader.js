const loaderUtils = require('loader-utils');

module.exports = function (source) {
    console.log('replaceLoader');
    const options = loaderUtils.getOptions(this); // 推荐使用loader-utils来传参，获取loader配置信息
    const callback = this.async() // 1. 异步操作
    setTimeout(() => {
        const result = source.replace('world', options.name);
        // 第一个参数是错误，第二个是结果，第三个是sourcemap，第四个可以是任何内容（比如元数据）
        callback(null, result)
    }, 1000)
    // 1. 直接返回，可使用此API替代return
    // this.callback(null, result)
}
