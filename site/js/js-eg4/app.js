import { setTimeout } from "timers";

let a = 10;
let promise = new Promise(function(resolve,reject){
    if(a==10){
        resolve('success')
    }
    else{
        reject('error')
    }
});
promise.then(function(res){
    console.log(res);
},function(err){
    console.log(err);
})


/**********模拟加载案件类型和值班员********* */
let loadAJLX = (resolve,reject)=>{
    setTimeout(() => {
        resolve('ajlx加载成功')
    }, 2000);
}
let loadZBY = (resolve,reject)=>{
    setTimeout(() => {
        resolve('zby加载成功');
    }, 1000);
}
let p1 = new Promise(loadAJLX);
let p2 = new Promise(loadZBY);
Promise.all([p1,p2]).then(res=>{
    let [res1,res2] = res;
    console.log(res1,res2);
})


/****************模拟项目******************/
let loadMap = (resolve,reject)=>{
    console.log('map开始加载')
    setTimeout(() => {
        resolve('map加载完成')
    }, 10000*Math.random());
}
let loadSearchBy = (resolve,reject)=>{
    console.log('search by开始加载')
    setTimeout(() => {
        resolve('Search By加载完成')
    }, 10000*Math.random());
}

Promise.all([new Promise(loadMap),new Promise(loadSearchBy)]).then(res=>{
    console.log(res);
})