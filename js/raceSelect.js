
function saveItem(num){
    //判断选择了哪个项目,并存储本地
      whichItem(num);
}
//定义一个判断所选项目
  function whichItem(index){
       var person = {objIndex:0};
      if(index == 1){
        person.item = '蓉马2018-全程赛42.公里项目报名';
      }
      if(index == 2){
        person.item = '蓉马2018-全程赛21.公里项目报名';
      }
      if(index == 3){
        person.item = '蓉马2018-情侣跑4.5公里项目报名';
      }
      if(index == 4){
        person.item = '蓉马2018-家庭跑1.2公里项目报名';
      }

      //产生item选项后,再添加一个objIndex标记做处理,返回新的person
        addObjIndex(person);
       //选择项目后页面跳转
        window.location.assign('wholeRoute.html');
  }

   // 定义函数,添加objIndex
   function addObjIndex(person){
       //获取本地数组
       var personArray = getStorePersonArray('raceItem');

       //给objIndex加1,调用处理函数,
        handleObjIndex(personArray,person);
        //数据存储本地
       setStorePersonArray(personArray,person);
   }

// 定义加载本地数据
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
function handleObjIndex(personArray,person){
    var objIndexArray = [];
    //将本地的每个对象objIndex拉取出来村数组
     for(var i=0;i<personArray.length;i++){
       //存有其他类型数据,需要过滤
       if(personArray[i].objIndex!=undefined){
         objIndexArray.push(personArray[i].objIndex);
       }
     }


     //获取上次存储给的objIndex,最后一个objIndex
      getLatestObjIndex(objIndexArray,person);
     //在最后一个的objIndex基础上加1
     person.objIndex ++;
    return person;
}

//定义函数,获取上次最新所存的objIndex,并增加一
function getLatestObjIndex(objIndexArray,person){
      if(objIndexArray.length == 0){
           // 还没有此项,给他直接赋0开始
           person.objIndex = 0;
      }else{
        //获取最后一个的objIndex
        person.objIndex = objIndexArray[objIndexArray.length-1];
      }

      return person;
}

//定义存储函数
function setStorePersonArray(personArray,newPerson){
       //添加对象到数组
      personArray.push(newPerson);
     //注册信息存储本地
     localStorage.setItem('raceItem',JSON.stringify(personArray));
}
