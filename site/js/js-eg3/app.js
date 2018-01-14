//CMD写法
var mathModule = require('./testModule.js');
console.log(mathModule.add(3,8));

var jquery = require('../lib/jquery-1.11.3.min.js');
console.log(1);

var util = require('./testCommonJS.js');
console.log(util.add(20,20));
util.getByName('p')[0].style.backgroundColor = 'red';


//AMD写法
require(['../lib/jquery-1.11.3.min.js'],function($){
    console.log(4);
});


//ES6写法
import {PI,Area} from './es6.js';
console.log(Area(5));