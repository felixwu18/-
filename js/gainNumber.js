var btnStart = document.getElementsByTagName('button')[0];
var btnGet = document.getElementsByTagName('button')[1];
btnGet.disabled = true;
// 数据封装对象
var flagObj = {flag:1,id:0,randomIndex:0};
  btnStart.onclick = function(){
    var numberShow = document.getElementsByClassName('numberShow')[0];
    //获取渲染对象
    btnStart.innerHTML = `点击停止`;
    if(flagObj.flag == 0){
      clearInterval(flagObj.id);
      btnStart.disabled = true;
      btnGet.disabled = false;

      var  progressInfo_span=document.getElementById('progressInfo').getElementsByTagName('span');
      var  progressId_span=document.getElementById('progressId').getElementsByTagName('span');
      progressInfo_span[6].style.cssText=`color:rgb(36,155,221);`;
      progressInfo_span[7].style.cssText=`background-color:rgb(36,155,221);
                                                     color: white;
                                         `;
      progressId_span[11].style.cssText=`background-color:rgb(36,155,221);`;
      return;
    }

    //控制信号归0
      flagObj.flag = 0;
        flagObj.id = setInterval(function(){
          // 产生随机数下标
          flagObj.randomIndex = Math.round(Math.random()*10000);
          //渲染页面
          numberShow.innerHTML = `<span>${flagObj.randomIndex}</span>`;
        },100)
    }

     //切换报名成功页面
    btnGet.onclick = function(){
     var congratulation = document.getElementsByClassName('congratulation')[0];
     var generateNumber = document.getElementsByClassName('generateNumber')[0];
     var gainNumber = document.getElementsByClassName('congratulation')[0].getElementsByTagName('p')[1]
     var  progressId_span=document.getElementById('progressId').getElementsByTagName('span');
     progressId_span[12].style.cssText=`background-color:rgb(36,155,221);`;
     progressId_span[13].style.cssText=`color:rgb(36,155,221);`;
        //操作两个板块的出现与隐藏
       congratulation.style.cssText = `display:block`;
       generateNumber.style.cssText = `display:none`;
       gainNumber.innerHTML += `<span style="font-size:3em;color:rgb(255,0,0);font-weight:bold;margin-left:.5em">${flagObj.randomIndex}</span>`;
    }
