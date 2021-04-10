<!--
 * @Author: liujian
 * @Date: 2021-03-24 16:43:36
 * @Description: file content
 * @LastEditors: liujian
 * @LastEditTime: 2021-04-10 11:03:22
-->
# webpack-cases
webpack 测试使用

# webpack-loader
编写一个 Webpack 的 loader
```
安装：npm i -D webpack webpack-cli loader-utils
创建配置文件： webpack.config.js
```
**Loader负责文件转换，Plugin便是负责功能扩展**

## 编写loader的思路
**遵循规范：**  

        1. 返回值必须是标准的JS代码字符串，以保证下一个loader能够正常工作
        2. 同时在开发上需要严格遵循“单一职责”，只关心loader的输出以及对应的输出
**loader的执行顺序：**  

        1. loader的加载从右往左进行
        2. Webpack选择了compose方式

# webpack-externals
Webpack 构建的代码中不用被打包的模块，在使用第三方库时可以直接使用cnd（Script 中引入）上的资源。   



