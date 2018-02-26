//let const
function fn(a){
    console.log('0----'+a);//1
    var zt = true;
    if(zt){
        console.log('1----'+ a);//1
        var a = 2;
        console.log('2----'+a);//2
    }
    console.log('3----'+a);//2
}
fn(1);

//let 优先使用局部的变量
let a = 5;
function fn2(){
    console.log(a);
    //let a = 6;  //加上这句 上面语句会优先使用局部的，但是局部在后面，所以报错 a is not defiend
}
fn2();

for(let i=0;i<5;i++){
    console.log('*******'+i+'******')
    for(let i=0;i<10;i++){
        console.log(i);
    }
}

/***对象冻结***/
let obj = {
    a: 1
};
Object.freeze(obj); //冻结对象，后面不能更改,注意与const区别
//obj.a = 2;
console.log(obj);

const obj2 = {
    a: 1
};
obj2.a = 2; //const内部值可以更改，不能改整个的引用
// obj2 = {    //这样操作则会报错
//     a: 2
// }
console.log(obj2);

/*******结构赋值******/
let [a1,a2,a3] = [1,2,3];
let [a4,[a5,a6]] = [7,[8,9]];//注意左右两边格式要保持一致
console.log(a1,a2,a3);
console.log(a4,a5,a6);
let json = {
    age: 30,
    name: 'wb'
}
let {age:old,name} = json;
console.log(old+'---'+name);
let {age:mage,name:mn,adress='暂无地址'} = json;    //默认值
console.log(mage+'--'+mn+'--'+adress);

let aa = 2;
let bb = 4;
[aa,bb] = [bb,aa];//此时aa与bb换值
console.log(aa+'-'+bb);


/*******字符串查找*******/
let str = 'sifjisdjfid';
console.log(str.includes('wb'));//false,字符串查找，返回true和false
console.log(str.startsWith('si'));//true
console.log(str.endsWith('wb'));//false
console.log(str.repeat(2));//重复次数 sifjisdjfidsifjisdjfid
let cc = 'wb';
console.log(str.padStart(str.length+cc.length,cc));
console.log(str);


/*******箭头函数，默认参数,扩展运算符********/
function xx(a=10){
    console.log(a);
}
xx();   //10
xx(1);  //1

function xxx(...a){
    console.log(a); //理解是展开的数组
}
xxx(1,2,3);

function xxxx(a,b,...c){
    console.log(a,b,c);
}
xxxx(1,2,3,4,5,6,7,8,9,0);

function yy(a,b,c){
    console.log(a,b,c);
}
yy(...[10,11,12]);  //...有展开的意思，将数组展开给a,b,c

let arrx = [1,2,3];
let arry = [...arrx];//arrx数组展开，赋值给arry，此时是数组复制
console.log(arry);

function zz(){
    //let arr = [...arguments];//伪数组转换为真数组
    let arr = Array.from(arguments);//也是伪数组转真数组
    console.log(arr);
}
zz(1,2,3,4,5,6,7)

let yyy=(...arr)=>{
    console.log(arr);//箭头函数里没有arguments，所以用...，将参数存储在这个数组变量里
}
yyy(1,2,3,4,5)

/*******数组*******/
let arz = [1,2,3,4];
arz.forEach((v,i,arr)=>{
    //forEach就是普通的for
    console.log(v+'-'+i+'-'+arr);
})

let arz2 = arz.map((v,i,arr)=>{
    //map是映射关系，返回新数组
    return v*20;
})
console.log(arz2);

let arz3 = arz.filter((v,i,arr)=>{
    //filter过滤返回true的数据
    return v%2 == 0;
})
console.log(arz3); //2,4

let bTrue = arz.some((v,i,arr)=>{
    //有一个满足则返回true，否则都不满足返回false
    return v == 1;
})
console.log(bTrue);

let bTrue2 = arz.every((v,i,arr)=>{
    //所有都满足才返回true，否则有一个不满足则返回false
    return v>1;
})
console.log(bTrue2);

let maa = Array.of(1,2,3);//将一组值转换为数组
console.log(maa);


/********对象*********/
let arrr1 = { a: 1};
let arrr2 = {a:2, b: 2};
let arrr3 = {c:1,b: 3};
let arrAll = Object.assign({},arrr1,arrr2,arrr3);   //对象合并，后面的覆盖前面的
console.log(arrAll);


/********模块化********/
// import * as MD from '../js-eg8/myModule.js';
// console.log(MD);
console.log(mydefault+'--'+ A); //import模块有提升作用，提升到顶部先执行
import mydefault,{a as A} from '../js-eg8/myModule.js'; //括号外的是默认的

setTimeout(() => {
    console.log(mydefault+'--'+ A);//内部引用变更，这里调用时，引用的也是变更后的值
}, 2000);

import('../js-eg8/myModule.js').then(res=>{
    console.log(res);
})