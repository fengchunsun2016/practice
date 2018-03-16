
//let、const、class声明的全局变量不再属于全局对象的属性！！！！！！

/*//let和const 同一作用域，不可重复声明，没有变量提升
var f = 100;
let f = 200;//Identifier 'f' has already been declared*/


/*
//暂时性死区（一进入当前作用域变量已经存在，但不可获取，直到生命变量的那行代码出现才能获取和使用）
var a = 10;
if(true){
    a = 20;//a is not defined
    let a;
}
*/



let a = 10;
function test(b = a) {
    let a = 20;
    console.log(b);//10
}
test();




