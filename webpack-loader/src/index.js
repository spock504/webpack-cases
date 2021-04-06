console.log('hello, world')
function asyncFunc() {
    console.log('asyncFunc');
    return 22
}
async function func() {
    let res = await asyncFunc()
    console.log(res);
}