let btn=document.querySelector("button");
 //onclick ka matlab hum click kar tab trigeer ho jayegii
// method 1
btn.onclick = function(){
    console.log("you clicked button");
};

//method 2
 function say(){
 alert("hiiiiiiiiiii");
 }

btn.onclick=say;


  //multiple button selection
  let buttons =document.querySelector("button");
   
  for(bttn of buttons){
    bttn.onclick = say;
  }

//same for mouseenter

function greet(){
    console.log("good morning")
}

let btn=document.querySelector("button");

btn.onmouseenter=greet;//on mouse enter ka matlab jab mouse se hover kare tab trigger ho jayegi ye property

