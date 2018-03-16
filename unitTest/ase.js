//node内置模块assert

/*
*
  命令行输入：
  mocha [文件名]
* */


var assert = require('assert');
// console.log(assert);


describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
        assert.equal(-1, [1, 2, 3].indexOf(4))
    })
})

