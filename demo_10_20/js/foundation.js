/*!
 * 
 * 
 * Jiayin Lin 2018-10-2
 */

function MsgBox() //声明标识符
{
  window.alert("Coming Soon!"); //弹出对话框
}


var baseText = null;

function showPopup(w,h){
    var popUp = document.getElementById("popupcontent");   
    
    
    
    
    
        //获取元素自身的宽度
//    var L1 = 800;
//    //获取元素自身的高度
//    var H1 = 500; 

    //获取实际页面的left值。（页面宽度减去元素自身宽度/2）
    var Left = (document.documentElement.clientWidth-w)/2;
    //获取实际页面的top值。（页面宽度减去元素自身高度/2）
    var top = (document.documentElement.clientHeight-h)/2;
    
//    popUp.style.top = "200px";  
//    popUp.style.left = "200px";
    popUp.style.top = top+ "px";  
    popUp.style.left = Left+ "px";
    popUp.style.width = w + "px";
    popUp.style.height = h + "px";
    if (baseText == null)
        baseText = popUp.innerHTML;
    popUp.innerHTML = baseText + "<div id=\"statusbar\"><button onclick=\"hidePopup();\">Close window<button></div>";
    var sbar = document.getElementById("statusbar");   
    sbar.style.marginTop = (parseInt(h)-40) + "px";   
    popUp.style.visibility = "visible";
}

function hidePopup(){ 
    var popUp = document.getElementById("popupcontent"); 
    popUp.style.visibility = "hidden"; 
}

function Iclose(){
			$("#keyven").remove();
		}
		</script>
		<style>
		div {
			margin: 10px;
			width: 15%;
			text-align: center;
			font-weight: bold;
showPopup}


//function e(obj){return document.getElementById(obj)}
//  e('tf').onclick=function(event){
//    e('con').style.display='block';
//    stopBubble(event); 
//    document.onclick=function(){
//      e('con').style.display='none';
//　　　　　　　document.onclick=null;　
//    }
//  }
//   
//  e('con').onclick=function(event){
//    //只阻止了向上冒泡，而没有阻止向下捕获，所以点击con的内部对象时，仍然可以执行这个函数
//    stopBubble(event); 
//  }
//  //阻止冒泡函数
//  function stopBubble(e){  
//    if(e && e.stopPropagation){
//      e.stopPropagation();  //w3c
//    }else{
//      window.event.cancelBubble=true; //IE
//    }
//  }