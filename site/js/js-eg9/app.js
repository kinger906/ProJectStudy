//匿名函数自执行
let App = (function(c){
    let add = (a,b)=>{
        return a+b+c;
    }
    return {
        Add: add
    }
})(1)
console.log(App.Add(3,4));
console.log(typeof window.a);

let App2 = (function(a,undefined){
    console.log(arguments)
})(1,'a');