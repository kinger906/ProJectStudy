let obj = {
    fn1: 1
}
let fn1 = (res,rej)=>{
    setTimeout(() => {
        if(obj.fn1 === 1){
            res('success');
        }
        else{
            rej('error');
        }
    }, 10000*Math.random());
}

new Promise(fn1).then(res=>{
    console.log(res);
}).catch(res=>{
    console.log(res);
})

let ajlx =(res)=>{
    setTimeout(() => {
        res('ajlx')
    }, 1000);
}
let ajxz =(res)=>{
    setTimeout(() => {
        res('ajxz')
    }, 2000);
}

//链式操作模拟
new Promise(ajlx).then(res=>{
    console.log(res+'加载成功');
    return new Promise(ajxz);
}).then(res=>{
    console.log(res+'加载成功');
})