/**
 * Created by fengchunsun on 2018/4/24.
 */

//冒泡排序
function bubbleSort(arr){
  if(!arr) return;
  for(var i = 0;i<arr.length;i++){
    for(var j = 0;j<arr.length;j++){
      if(arr[j]>arr[j+1]){
        var temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }
  }
  return arr;
}

var arr = [3,2,6,8,4,5];
// console.log(bubbleSort(arr));
// console.log(insertSort(arr));
console.log(quickSort(arr));


//插入排序
/*function insertSort(arr) {
  if(!arr) return;
  var newArr = [arr[0]];
  for(var i=1;i<arr.length;i++){
    var flag = true;
    for(var j=0;j<newArr.length;j++){
      if(arr[i]<newArr[j]){
        newArr.splice(j,0,arr[i]);
        flag = false;
        break;
      }
    }
    if(flag){
      newArr.push(arr[i]);
    }
  }
  return newArr;
}*/

function insertSort(arr) {
  if(!arr) return;
  var newArr = [arr[0]];
  for(var i=1;i<arr.length;i++){
    var flag = true;
    console.log(newArr);
    for(var j=newArr.length-1;j>0;j--){
      if(arr[i]>newArr[j]){
        newArr.splice(j+1,0,arr[i]);
        flag = false;
        break;
      }
    }
    if(flag){
      newArr.unshift(arr[i]);
    }
  }
  return newArr;
}


//快速排序
function quickSort(arr) {
  if(arr.length<=1) return arr;
  var midV = arr.splice(Math.floor(arr.length/2),1)[0];
  var left = [];
  var right = [];

  for(var i=0;i<arr.length;i++){
    if(midV>arr[i]){
      left.push(arr[i]);
    }else{
      right.push(arr[i])
    }
  }

  return quickSort(left).concat([midV],quickSort(right));

}

