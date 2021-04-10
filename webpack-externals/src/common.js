// 导入node_modules中的jquery框架
let $ = require('jquery')
function get(content) {
    // 2.使用jQuery的 ajax 发起网络请求
    $.ajax({
        url: "/api/4/news/latest",
        success: function (result) {
            console.log('result=', result)
        },
        error: function (error) {
            console.log('error=', error)
        }
    })
}
export {
    get
}
