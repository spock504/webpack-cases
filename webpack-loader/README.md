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

