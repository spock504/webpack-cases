const parser = require("@babel/parser")
const traverse = require("@babel/traverse").default
const t = require("@babel/types")
const core = require("@babel/core")

// *1. 声明语句: let res = await asyncFunc()
// *2. 赋值语句: res = await asyncFunc()
// *3. 单纯的表达式:  await asyncFunc()
// 三种方式对应的AST是不同的

// 给每个 await 语句添加一个 try/catch

module.exports = function (source) {
    let ast = parser.parse(source)

    // traverse：找到 await 表达式对应的 Node 节点
    traverse(ast, {
        AwaitExpression(path) {

            // 如果 await 语句已经被 try/catch 包裹则不会再次注
            if (path.findParent((path) => t.isTryStatement(path.node))) return
            const catchCode = 'e => `console.error(${e})`'
            const catchNode = parser.parse(catchCode).program.body;

            if (t.isVariableDeclarator(path.parent)) { // *1. 变量声明
                let variableDeclarationPath = path.parentPath.parentPath

                // 创建一个类型为 TryStatement 的 Node 节点，最后 await 放入其中
                let tryCatchAst = t.tryStatement(
                    // try 子句（必需项）
                    t.blockStatement([
                        variableDeclarationPath.node // Ast
                    ]),
                    // catch 子句
                    t.catchClause(
                        t.identifier('e'),
                        t.blockStatement(catchNode)
                    )
                )
                variableDeclarationPath.replaceWithMultiple([
                    tryCatchAst
                ])
            } else if (t.isAssignmentExpression(path.parent)) { // *2. 赋值表达式
                let expressionStatementPath = path.parentPath.parentPath
                let tryCatchAst = t.tryStatement(
                    t.blockStatement([
                        expressionStatementPath.node
                    ]),
                    t.catchClause(
                        t.identifier('e'),
                        t.blockStatement(catchNode)
                    )
                )
                expressionStatementPath.replaceWithMultiple([
                    tryCatchAst
                ])
            } else { // *3. await 表达式
                let tryCatchAst = t.tryStatement(
                    t.blockStatement([
                        t.expressionStatement(path.node)
                    ]),
                    t.catchClause(
                        t.identifier('e'),
                        t.blockStatement(catchNode)
                    )
                )
                path.replaceWithMultiple([
                    tryCatchAst
                ])
            }

        }
    })
    return core.transformFromAstSync(ast).code
}