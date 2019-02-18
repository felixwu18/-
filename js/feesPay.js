var submitBtn=document.getElementById('submitBtn');
var form1=document.getElementsByTagName('form')[0];
var feesPayCheck=document.getElementsByClassName('feesPayCheck')[0];
var feesPayOk=document.getElementsByClassName('feesPayOk')[0];
var makeCircleRun = document.getElementsByClassName('feesPayCheck')[0].getElementsByTagName('span')[0];
submitBtn.onclick=function(){
  form1.style.cssText=`display:none;`;
   feesPayCheck.style.cssText=`display:block;`;
   // 支付跳转页面
   var obj={num:1,id:0,flag:1};
       (function makeCircle(){
         if(obj.flag == 0){
           return;
         }
         if(obj.num == 5){
           makeCircleRun.innerHTML = '';
            obj.num = 1;
         }
        makeCircleRun.innerHTML += ` .`;
        obj.num++;
        setTimeout(makeCircle,500);
      })();
      //延时5秒转换到缴费成功页面
     setTimeout(function(){
       var  progressInfo_span=document.getElementById('progressInfo').getElementsByTagName('span');
       var  progressId_span=document.getElementById('progressId').getElementsByTagName('span');
       obj.flag = 0;
       feesPayCheck.style.cssText=`display:none;`;
        feesPayOk.style.cssText=`display:block;`;

        progressInfo_span[2].style.cssText=`color:rgb(36,155,221);`;
        progressInfo_span[3].style.cssText=`background-color:rgb(36,155,221);
                                                       color: white;
                                           `;
        for(var i=0;i<7;i++){
          if(i >= 4 && i <= 6){
            console.log(i);
            progressId_span[i].style.cssText=`background-color:rgb(36,155,221);`;
          }
        }
     },5000)
}
