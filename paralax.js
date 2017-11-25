/* 
		 *********************************
		**Site criado por Julio Lira(Kefa)**
		**https://github.com/Jul10l1r4    **
		**Facebook.com/julio.lira.555     **
		**Jul10l1r4@gmail.com             **
     **********************************
*/
function alerte(){
  const dis = document.getElementById("nav-bar");//  id nav-bar
  const das = document.getElementById("a");// repetindo vários códigos
  const das1 = document.getElementById("b");
  const das2 = document.getElementById("c");
  const das3 = document.getElementById("d");
  const das4 = document.getElementById("e");

  if(window.pageYOffset > 100){
    dis.style = "box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12);display:block";
    das.style = "transition-duration:0.5s;color:#000;";
    das1.style = "transition-duration:0.7s;color:#000;";
    das2.style = "transition-duration:0.9s;color:#000;";
    das3.style = "transition-duration:1s;color:#000;";
    das4.style = "transition-duration:1.5s;color:#000;";

  }else{
    dis.style = "box-shadow:none;transition-duration:0.5s;display:contents";
    das.style = "color:#777777;transition-duration:0.5s";
    das1.style = "color:#777777;transition-duration:0.5s";
    das2.style = "color:#777777;transition-duration:0.5s";
    das3.style = "color:#777777;transition-duration:0.5s";
    das4.style = "color:#777777;transition-duration:0.5s";
  }
}
window.addEventListener("scroll",alerte);
