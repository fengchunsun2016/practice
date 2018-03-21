/*
* es5的对象属性名都是字符串，容易造成属性名的冲突，如果有一种机制能够保证每个属性的名字都独一无二就好了，这样就能避免属性名的冲突了。
* 这是就是es6引入symbol的原因！！！！
*
*
* */

//从此，基础数据类型增加为6种，symbol，number，boolean，string，null，undefined

let feng = Symbol('这是说明');
console.log(typeof feng);//symbol

console.dir(feng);//symbol(这是说明)

feng = 123;
console.log(feng);//123



let arr = ['a','b','c'];

for(let i in arr){
    console.log(i);//0,1,2
}
for(let v of arr){
    console.log(v);//a,b,c
}