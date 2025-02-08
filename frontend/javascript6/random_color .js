let div= document.querySelector("div");
let btn= document.querySelector("button")


function randomColor(){
    let red=Math.floor(Math.random()*255);
    let blue=Math.floor(Math.random()*255);
    let green =Math.floor(Math.random()*255);
   let color =  `rgb(${red},${blue},${green})`; 
  return color;


}

btn.addEventListener("click",function(){
    let h1 = document.querySelector("h1");
    let rcolor= randomColor();
    h1.innerText= rcolor;
    console.log("color updated");

    div.style.backgroundColor=randomColor();



});

