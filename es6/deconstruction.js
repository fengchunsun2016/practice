// 解构赋值
//对象{}不具备iterator接口
//es6允许代码块{}的存在，代码块里的变量可在全局直接访问

/*let obj = {a:1,b:2,c:3};
let {b} = obj;
console.log(b);//2*/

//解构赋值的机制，按照属性名查找，但真正赋值的是后面的属性值
/*let obj = {a:1,b:2,c:3};
let {b:ob} = obj;
// console.log(b);//b is not defined
console.log(ob);*/


//解构赋值可以有默认值,默认值生效条件是对象的属性值严格等于undefined
/*let {a = 10} = {};
console.log(a);//10

let {b = 100} = {b:undefined};
console.log(b);//100

let {c = 1000} = {c:null};
console.log(c);//null*/


//字符串也可以解构赋值,因为字符串是类数组，有length属性
/*const [a,b,c] = 'hello';
console.log(a,b,c);//h,e,l*/


//函数参数的解构赋值
/*function add([x,y]) {//add的参数实际上不是数组，而是通过结构得到的x和y
    return x + y;
}
console.log(add([1, 2]));//3

function plus({a = 10,b = 20} = {}) {//默认传的空对象，并且a默认10，b默认20
    return a + b;
}
console.log(plus());//30
console.log(plus({}));//30*/



//函数参数可设置默认值
function test(x,y = 'one') {
    return x + y;
}
