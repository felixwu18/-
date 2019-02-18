//表单点击颜色变化
function bgColorToggle(e){
  e.style.cssText=`background-color:rgb(204,255,161);
                   box-shadow:0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px rgba(102, 175, 233, 0.6)
                   `
}
function bgColorRemove(e){
  e.style.cssText=`background-color:white`;
}
