
//将已经报名的数据加载到我的列表
 allApplicationDataToDOM();

  function allApplicationDataToDOM(){
        //从本地读取对象数组(队名,及用户姓名)
        var personArray = getStorePersonArray('loginObj');
        //从本地读取对象数组(项目名)
        var itemName = getStorePersonArray('raceItem');
        //从数组获取值,并渲染
           getDataFromPersonArray(personArray,itemName);
        //itemName在personArray的数据被筛选渲染时,同步渲染itemName,定义在dataToDOM()里

    //报名四个状态,分别获取页面操作对象,需要循环添加事件,并用事件代理方式处理
    applicationStateHandle();
  }

  //定义加载本地数据的函数
function getStorePersonArray(key){
       personArray = localStorage.getItem(key);
       // 先判断本地存储有没有
       if(personArray==null||personArray==''){
         personArray = new Array();
       }else{
         personArray = JSON.parse(personArray);
       }
       // 返回解析的对象
       return personArray;
}

//定义一个从数组获取数组的函数
function getDataFromPersonArray(personArray,itemName){
  //此处定义了一个itemNameToDOM()的执行次数变化,index(引用数据解决了此问题)
    var userName = '',groupName = '',indexObj = {index:0};
       //循环获取对象,再验证
      for(var i=0;i<personArray.length;i++){
        if(personArray[i].userRealName != undefined){
          //获取用户姓名
          userName = personArray[i].userRealName;
          //获取获取用户的队名
          groupName = personArray[i].addGroupName;
          //渲染页面
          dataToDOM(userName,groupName,itemName,indexObj);
        }
      }
};

//定义渲染页面函数
function dataToDOM(userName,groupName,itemName,indexObj){
  //获取渲染页面的位置
  var divEle = document.getElementsByTagName("tbody")[0];
  //调用渲染项目名的函数
  var  endItemName = itemNameToDOM(itemName,indexObj);
  //最终渲染
  divEle.innerHTML += ` <tr  class="tr">
                          <td>${endItemName}</td>
                          <td>${groupName}/${userName}</td>
                          <td>100.0元</td>
                          <td>2018-08-20 13.06</td>
                          <td class="applicationState">
                            <span>缴费</span>
                            <span>点击继续完成</span>
                            <span>详情</span>
                            <span>删除报名表</span>
                         </td>
                      </tr>
                    `
};
   // 定义渲染项目名的函数
   function itemNameToDOM(itemName,indexObj){
   var temp = '',endItemName = '';
     //根据dataToDOM()被调用渲染页面,此函数同步将项目名渲染页面
       temp = itemName[indexObj.index].item;
       //截取部分字符内容为项目名
    endItemName=temp.slice(-12,-4);
       indexObj.index ++;
    return endItemName;
}

//定义报名状态处理的函数
  function applicationStateHandle(){
   var applicationState = document.getElementsByClassName('tr');
      for(let i=0;i<applicationState.length;i++){
           applicationState[i].onclick = function (e){
             if(e.target.innerHTML == '缴费'){
                 window.location.assign('feesPay.html');
             }
             if(e.target.innerHTML == '点击继续完成'){
               window.location.assign('gainNumber.html');
             }
             if(e.target.innerHTML == '详情'){
                alert('不好意思---此项开发中!')
             }
             if(e.target.innerHTML == '删除报名表'){
               //要删除的当前行,从页面移除
               var removedTr = applicationState[i];
                removedTr.parentNode.removeChild(removedTr);
                   var obj ={objIndex:i+1}
                // 再从本地删除
                removeFromLocalStorage(obj);

             }
           }
       }
  }
  //定义一个删除本地待删数据的函数(前面应该给对象数组每个对象里存一个index,这样根据此好删)
  function removeFromLocalStorage(obj){
    //获取本地数据
    var personArray = getStorePersonArray('loginObj');
    var itemArray = getStorePersonArray('raceItem');
    //匹配选取要删除的数据
    var newpersonArray = searchDataFOrDeletion(personArray,obj);
    var newitemArray = searchDataFOrDeletion(itemArray,obj);
     // 储存改动后的值
     localStorage.setItem('loginObj',JSON.stringify(newpersonArray));
     localStorage.setItem('raceItem',JSON.stringify(newitemArray));
  }

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

  function searchDataFOrDeletion(objArray,obj){
    for(var i=0;i<objArray.length;i++){

      if(objArray[i].objIndex == obj.objIndex){
        objArray.splice(i,1);
        return objArray;
      }
    }
  }
