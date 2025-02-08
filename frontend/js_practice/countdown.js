var start = document.querySelector("#start");
var stop =document.querySelector("#stop");
var h= document.querySelector("h3");
 var int;
start.addEventListener("click",function(){
    var count=0;
   int= setInterval(function(){
        count++;
        h.innerText=count;
    },1000);
});
 
stop.addEventListener("click",function(){
    clearInterval(int);
})