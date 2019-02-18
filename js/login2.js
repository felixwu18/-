//表单验证
function fn(telNumber,email,loginCode){
   // 获取登录表单
var submitIpt=document.querySelectorAll('input[class="input"]');
// 读取localStorage
var personArray = getStorePersonArray('loginObj');
// 循环获取对象,再验证
return isUser(personArray,submitIpt);
}

 //加载本地数据
function getStorePersonArray(key){
   personArray = localStorage.getItem(key);
   // 先判断本地存储有没有
   if(personArray==null||personArray==''){
     personArray = new Array();
   }else{
     personArray = JSON.parse(personArray);
   }
   return personArray;
}

// ajax
// function getAjaxPersonArray(submitIpt){
//  // 创建一个ajax对象
//    var xhr=new XMLHttpRequest();
//    // 创建用一个Ajax请求
//    xhr.open('get','8-16--Ajax.json');
//     // 发送get请求,连接服务器
//    xhr.send();
//
//    var objArray = {},flag = false;
//    // 监听请求状态,在请求成功之后,处理请求得到的数据
//     xhr.onreadystatechange=function(){
//      if(xhr.readyState==4&&xhr.status==200){
//        // 事件完成,成功返回结果
//    var values=xhr.responseText;//responseText属性 获取后端返回的文本(字符串)
//    objArray=JSON.parse(values);//将后端返回的字符串数据转换为对象数组
//    console.log(objArray)
//       flag = isUser(objArray,submitIpt);
//       console.log(flag)
//       // return flag;
//     }
//    // console.log(flag)
//   }
//   // console.log(flag)
//   // alert('ok');
//   // console.log(flag)
//   setTimeout(function(){
//     console.log(flag)
//     return flag;
//   },3)
// }
//

//定义验证函数
function isUser(personArray,submitIpt){
  if(submitIpt[0].value == '' && submitIpt[1].value == ''){
    alert('请输入用户名及密码');
    return false;
  }else{
    for(var i=0;i<personArray.length;i++){
      //获取对象数组里每个对象的用户电话
     var telNumber = personArray[i].loginName1;
      //获取me对象数组里每个对象的邮箱地址
      var email = personArray[i].loginName2;
      //获取me对象数组里每个对象的登录密码
      var loginCode = personArray[i].loginCode;
      //验证户名
      if((submitIpt[0].value == telNumber || submitIpt[0].value == email) && submitIpt[1].value == loginCode){
        return true;
      }
   }
   //本地无记录,发出提醒
       alert('请正确填写用户名及密码!');
     return false;
  }
}
