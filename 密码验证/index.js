/*// var a = {a:10};
var a = {a:{b:10}};
var b = a;
var c = {...a};

// b.a = 30;
// console.log(a,b);

 c.a.b = 20;
console.log(a,c);*/



var password = '12312432443Aa';
check(password);
check2(password);
check3(password);
function check(pswd) {
    /*
    * 1.长度必须大于八位
    * 2.必须包含数字和大小写字母
    * */
    if(!!pswd){
        if(pswd.length>8){

            var arr1 = ['0','1','2',3,4,5,6,7,8,9];
            var arr2 = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
            var arr3 = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

            if(arr1.some((item)=>password.indexOf(item)>-1)&&arr2.some((item)=>password.indexOf(item)>-1)&&arr3.some((item)=>password.indexOf(item)>-1)){
                console.log('ok');
                return false;
            }else{
                console.log('必须包含数字和字母大小写');
                return false;
            }
        }else{
            console.log('长度必须大于八位');
            return false;
        }
    }else{
        console.log('请输入密码');
        return false;
    }
}



function check2(pswd) {
    /*
    * 1.长度必须大于八位
    * 2.必须包含数字和大小写字母
    * */
    if(!!pswd){
        if(pswd.length>8){
            var str1 = '0123456789';
            var str2 = 'abcdefghijklmnopqrstuvwxyz';
            var str3 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';


            var flag1 = false;
            var flag2 = false;
            var flag3 = false;

             for(var i=0;i<pswd.length;i++){
                 if(str1.indexOf(pswd[i])>-1){
                     flag1 = true;
                 }
                 if(str2.indexOf(pswd[i])>-1){
                     flag2 = true;
                 }
                 if(str3.indexOf(pswd[i])>-1){
                     flag3 = true;
                 }

             }

             if(flag1&&flag2&&flag3){
                 console.log('ok');
                 return true;
             }else{
                 console.log('必须包含数字和字母大小写');
                 return false;
             }


        }else{
            console.log('长度必须大于八位');
            return false;
        }
    }else{
        console.log('请输入密码');
        return false;
    }
}


function check3(pswd) {
    /*
    * 1.长度必须大于八位
    * 2.必须包含数字和大小写字母
    * */
    if(!!pswd){
        if(pswd.length>8){

            var reg1 = /\d/g;
            var reg2 = /[a-z]/g;
            var reg3 = /[A-Z]/g;
            if(reg1.test(pswd)&&reg2.test(pswd)&&reg3.test(pswd)){
                console.log('ok,正则成功');
                return true;
            }else{
                console.log('必须包含大小写和数字（正则验证）');
                return false;
            }

        }else{
            console.log('长度必须大于八位');
            return false;
        }
    }else{
        console.log('请输入密码');
        return false;
    }
}