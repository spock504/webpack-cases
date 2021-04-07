1. 增加自定义loader
在`webpack.config.js`中配置resolveLoader，会依次在node_modules、loaders文件夹中查找是否存在对应loader
```
    resolveLoader: {
        modules: ['node_modules', './loaders']
    },
```
这样loader就可以直接使用
2. 为async 函数增加`try catch`
[AST工具](https://astexplorer.net/#/Z1exs6BWMq)
`catchLoader2.js`：在await中递归向上找异步函数的 node 节点，只给最外层的 async 函数包裹 try/catch(更优解)
`catachLoader.js`：给每个 await 语句添加一个 try/catch

> 1. loader的开发需要遵循一些规范，比如返回值必须是标准的JS代码字符串，遵循“单一职责”，只关心loader的输出以及对应的输出
> 2. loader函数中的this上下文由webpack提供，可以通过this对象提供的相关属性