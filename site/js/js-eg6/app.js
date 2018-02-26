let promise = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve('1---success')
    }, 2000);
})

promise.then(data=>{
    console.log('第一个then，回调：'+ data);
    setTimeout(() => {
        return 22;      //此时没有返回
    }, 2000);
    return 2;   //默认任务结束，返回给给下一个then
}).then(data=>{
    console.log('第二个then，回调：'+ data);
    //return Promise.reject('3-error');   //方法一
    return new Promise((resolve,reject)=>{
        reject('3-error2');
    })
}).then(res=>{
    console.log(res)
},err=>{
    console.log(err)
}).catch(err=>{
    console.log('catch-'+err);
})


setTimeout(() => {
    let arr = [1,2,3];
    let promises = arr.map((val,index)=>{
        //return Promise.resolve('success-'+val+'-'+index);
        return new Promise((resolve,reject)=>{
            if(index === 3){
                reject('error-'+val+'-'+index);
            }
            else{
                resolve('success-'+val+'-'+index);
            }
        })
    })

    Promise.all(promises).then(res=>{
        let arr = [...res];
        console.log(arr);
    }).catch(err=>{
        console.log(err);
    })
}, 5000);