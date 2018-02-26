//import $ from '../lib/jquery-1.11.3.min.js';
const $ = require('../lib/jquery-1.11.3.min.js');
console.log($.inArray(2,[1,2,3]));

//ajax自1.5版本后，返回deferred对象
$.ajax('test.html').done(res=>{
    console.log('success:'+res);
}).fail(err=>{
    console.log('error:'+err);
}).always(()=>{
    console.log('执行完毕！');
})

let wait = ()=>{
    let dtd = $.Deferred();
    setTimeout(() => {
        dtd.resolve(1);
    }, 2000);
    return dtd.promise();
}
$.when(wait()).done(res=>{
    console.log('success:'+res);
})


let wait2 = ()=>{
    let dtd = $.Deferred();
    setTimeout(() => {
        dtd.resolve(1);
    }, 2000);
}
//
$.Deferred(wait2).done(res=>{
    console.log('success2:'+res);
})