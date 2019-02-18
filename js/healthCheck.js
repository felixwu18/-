// 获取待操作对象
var submitBtn = document.getElementsByClassName('submitBtn')[0];
var healthSheetSubmit = document.getElementsByClassName('healthSheetSubmit')[0];
var healthSheetChecking = document.getElementsByClassName('healthSheetChecking')[0];
var wholeRoute = document.getElementsByClassName('wholeRoute')[0];
submitBtn.onclick = function(){
   //提交页面隐藏
   healthSheetSubmit.style.cssText = `display: none`;
   healthSheetChecking.style.cssText = `display: block`;
   wholeRoute.className+=` wholeRoute2`;
   setTimeout(function(){
     window.location.assign("gainNumber.html");
   },5000);
}
