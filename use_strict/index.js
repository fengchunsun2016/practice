/**
 * Created by fengchunsun on 2018/4/20.
 */


var o = {
  get v(){return 1},
  set v(val){return val}
}
console.log(o.v);
o.v = 2;
console.log(o.v);
