var add = require('./add.js');
var expect = require('chai').expect;
// var asesrt = require('assert');

// console.log(assert,'assert');

describe('add函数测试',function () {
    it('1+1等于2',function () {
        expect(add(1,1)).to.be.equal(2);
    });
    it('2+2不等于5',function () {
        expect(add(2,2)).to.be.not.equal(5);
    })
})


