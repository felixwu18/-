
//获取表单
// var form = document.getElementsByTagName('form')[0];
 function fn(){
   var form = document.getElementsByTagName('form')[0];
   var telNumber = form.getElementsByTagName('input')[0].value;
   var checkCode = form.getElementsByTagName('input')[1].value;
   var loginCode = form.getElementsByTagName('input')[2].value;
   var codeConfirm = form.getElementsByTagName('input')[3].value;
   var email = form.getElementsByTagName('input')[4].value;
   var checkBox = form.getElementsByTagName('input')[5];
   if(telNumber == ''){
     alert('请输入手机号');
     return false;
   }
   //输入验证码
   var checkCodeReg = checkCode.match(/\d{4}/);
   if(checkCodeReg == null || checkCode == '') {
     alert("验证码应该输入4位数字");
     return false;
   }
   //登录密码
   var loginCodeReg = loginCode.match(/\w{8}/);
   if(loginCodeReg == null) {
     alert("密码只能为8位【数字或字母或下划线】");
     return false;
   }
   //登录密码确认
   if(codeConfirm != loginCode) {
     alert("两次输入不一致");
     return false;
   }
   //邮箱简单验证
   var emailReg = email.match(/@/);
   if(emailReg == null) {
     alert("邮箱输入有一个@");
     return false;
   }
   //同意协议
   if(checkBox.checked == false) {
     alert("需要同意用户协议");
     return false;
   }
   // 电话号码,邮箱,密码存本地
    var person = {
                  loginName1:telNumber,
                  loginName2:email,
                  loginCode:codeConfirm
                 };
    var personArray = getStorePersonArray('loginObj');
    //判断是否已经注册
     var trueOrFalse = isRegistered(telNumber,email);
     if(trueOrFalse == false){
       personArray.push(person);
    // //注册信息存储本地
    localStorage.setItem('loginObj',JSON.stringify(personArray));
    //注册成功,让表单跳转
    return true;
     }
     // 注册未成功阻止表单跳转
     return false;
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


   //判断是否注册
   function isRegistered(telNumber,email){
     var localTelNumber = 0,localEmail = '';
     for(var i = 0;i<personArray.length;i++){
       //获取本地对象数组里每个对象的用户电话
       localTelNumber = personArray[i].loginName1;
       //获取本地对象数组里每个对象的邮箱地址
       localEmail = personArray[i].loginName2;
       //获取本地对象数组里每个对象的登录密码
       if(localTelNumber == telNumber){
           alert('电话已被注册!');
           return true;
       }
       if(localEmail == email){
         alert('邮箱已被注册!');
         return true;
       }
     }
     return false;
   }
