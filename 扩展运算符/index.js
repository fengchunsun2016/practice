//es7草案，将rest参数/扩展运算符（...）引入对象

/*let {x,y,...z} = {x:'a',b:'b',c:'c',d:'d'};
console.log(x);//a
console.log(y);//undefined
console.log(z);//{b:'b',c:'c',d:'d'}


let obj = {...z};
console.log(obj);//{b:'b',c:'c',d:'d'}*/


//如果是null和undefined是自动忽略
let obj = {...null,...undefined}
console.log(obj);//{}


