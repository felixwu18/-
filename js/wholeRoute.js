
  // var personGroup = {objIndex:0};
 //表单验证
function fn() {
  //获取存储对象
  var userName = document.getElementById('userName').value;
  var groupName = document.getElementById('groupName').value;
  var checkBox = document.getElementById('checkBox');
     if(userName == ''){
      alert('请输入姓名');
      return false;
     }
     if(groupName == ''){
       alert('请输入队名');
       return false;
     }
     //同意协议
     if(checkBox.checked == false) {
       alert("需要同意用户协议");
       return false;
     }
     //获取本地数组
  var personArray = getStorePersonArray('loginObj');
    //验证完后,objIndex加1,调用处理函数,
     var personGroup = addObjIndex(personArray,userName,groupName);
      //数据存储本地
      setStorePersonArray(personArray,personGroup);
    return ture;
}
  //定义加载本地数据
 function getStorePersonArray(key){
       //这里忘记声明personArray了
     var personArray = localStorage.getItem(key);
     // 先判断本地存储有没有
     if(personArray == null || personArray == ''){
       personArray = new Array();
     }else{
       personArray = JSON.parse(personArray);
     }
     return personArray;
}

//定义一个objIndex加1的函数
  function addObjIndex(personArray,userName,groupName){
    //将用户输入封装到对象
  var personGroup = {
                     objIndex:0,
                     userRealName:userName,
                     addGroupName:groupName
                    };

    var objIndexArray = [];
    //将本地的每个对象objIndex拉取出来村数组
      for(var i=0;i<personArray.length;i++){
        //存有其他类型数据,需要过滤
        if(personArray[i].objIndex!=undefined){
          objIndexArray.push(personArray[i].objIndex);
        }
      }
      //获取上次所存的objIndex
      personGroup = getLatestObjIndex(objIndexArray,personGroup);
      //在最后一个的objIndex基础上加1
      personGroup.objIndex ++;
     return personGroup;
  }

  //定义存储函数
  function setStorePersonArray(personArray,newPersonGroup){
        //添加对象到数组
       personArray.push(newPersonGroup);
      //注册信息存储本地
      localStorage.setItem('loginObj',JSON.stringify(personArray));
  }

   //定义函数,获取上次最新所存的objIndex,并增加一
  function getLatestObjIndex(objIndexArray,personGroup){

    if(objIndexArray.length == 0){
       // 还没有此项,给他直接赋0开始
       personGroup.objIndex = 0;
    }else{
      //获取最后一个的objIndex,此处将=变成成==,需要细心
      personGroup.objIndex = objIndexArray[objIndexArray.length-1];
    }
    return personGroup;
  }
