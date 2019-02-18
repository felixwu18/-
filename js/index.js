  //轮播开始(立即执行函数)
(function(){
    //得到元素
    var circles=document.getElementById('list').getElementsByTagName('li');
    var bg=document.getElementById('bg').getElementsByTagName('li');
    //全局信号量
    var index=0;
    play();//封装了自动播放功能，后面用play()直接调用即可
    //自动播放事件
    function play(){
      //将定时器装在一个中转变量里
    auto=setInterval(function(){
    //判断特殊点正常轮播，循环播放
    index++;
    if(index>circles.length-1){
      index=0;
    }
    //先排他
    for(var i=0;i<circles.length;i++){
      circles[i].className='';
      bg[i].className='';
    }
      //再对应
      circles[index].className='cur';
      bg[index].className='cur';
    },2000);
    }
    //鼠标悬停circles事件
    for(var i=0;i<circles.length;i++){
      var idx=0;
      //避开es5的bug,每个对应的圆点对象有个自己的索引号
      circles[i].idx=i;
      circles[i].onmouseover=function(){
      clearInterval(auto)//发生鼠标悬停事件，清除定时器，停止自动播放
      //先排他
     for(var i=0;i<circles.length;i++){
      circles[i].className='';
      bg[i].className='';
         }
         //再操作
         circles[this.idx].className='cur';
         bg[this.idx].className='cur';
       }
    //按钮悬停移除
      circles[i].onmouseout=function(){
        index=this.idx;
      play();//鼠标移除，重新调用定时器功能，自动播放
      }
    }
})();

//倒计时时钟的实现(立即执行函数)
  (function countTime() {
        //获取当前时间
        var date = new Date();
        var now = date.getTime();
       //设置截止时间
       var str="2020/12/31 00:00:00";
       var endDate = new Date(str);
       var end = endDate.getTime();

       //时间差
       var leftTime = end-now;
       //定义变量 d,h,m,s保存倒计时的时间
       var d,h,m,s;
       if (leftTime>=0) {
           d = Math.floor(leftTime/1000/60/60/24);
           h = Math.floor(leftTime/1000/60/60%24);
           m = Math.floor(leftTime/1000/60%60);
           s = Math.floor(leftTime/1000%60);
       }
       //将倒计时赋值到div中
       document.getElementById("_d").innerHTML = d;
       document.getElementById("_h").innerHTML = h;
       document.getElementById("_m").innerHTML = m;
       document.getElementById("_s").innerHTML = s;
       //递归每秒调用countTime方法，显示动态时间效果
       setTimeout(countTime,1000);
   })();
