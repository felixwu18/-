
// 读取数据并渲染页面
getItem('raceItem');

function getItem(key){
  var itemArray=localStorage.getItem(key);
     if(itemArray==null||itemArray==''){
         itemArray = new Array();
       }else{
            // 解析成对象数组
         itemArray = JSON.parse(itemArray);
       }
       //将新存下的数据读出来
   var dataObj = itemArray[itemArray.length-1]
  // 渲染页面
  dateToPage(dataObj);
}

//定义渲染页面的函数
function dateToPage(dataObj){
 var wholeRouteHead = document.getElementsByClassName('wholeRouteHead')[0];
 wholeRouteHead.innerHTML = dataObj.item;
}
