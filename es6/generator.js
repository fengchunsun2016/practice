//调用generator函数后，该函数并不执行，返回的也不是函数运行结果，而是一个指向内部状态的指针对象(也就是Iterator Object)

//每次调用next方法，内部指针就从函数头部或上一次停下来的地方开始执行，直到遇见下一个yield语句或return，换言之，yield语句是暂停执行的标记，而next方法可以恢复执行。

/*

function* test() {
    yield 'hello';
    yield 'world';
    return 'end';
}

var myTest = test();
console.log(myTest.next());//{ value: 'hello', done: false }
console.log(myTest.next());//{ value: 'world', done: false }
console.log(myTest.next());//{ value: 'end', done: true }
console.log(myTest.next());//{ value: undefined, done: true }
*/



/*
function * gener() {
    console.log(1);
    yield console.log(2);
    console.log(3);
}
let fn = gener();
console.log(fn.next());//{ value: undefined, done: false }  并且打印1，2
console.log(fn.next());//{ value: undefined, done: true }   并且打印3
*/


/*function* step() {
    yield setTimeout(()=>console.log(500),500);
    yield setTimeout(()=>console.log(300),300);
}
let st = step();
st.next();
st.next();*/



/*async function step() {
    await setTimeout(()=>console.log(500),500);
    console.log(123);
    await setTimeout(()=>console.log(300),300);
    console.log(456);
}

step();*/





async function step() {
    let result1 = await fetch('https://www.easy-mock.com/mock/5a4340d2a3f8d40b6b2b3a1e/kratos/shop/goods/inventory#!method=get');
    console.log(result1);
    console.log(123);
    let result2 = await fetch('https://www.easy-mock.com/mock/5a4340d2a3f8d40b6b2b3a1e/kratos/shop/goods/inventory#!method=get');
    console.log(result2);
    console.log(456);
}

step();