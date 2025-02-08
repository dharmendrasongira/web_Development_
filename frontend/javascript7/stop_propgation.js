const { futimes } = require("fs");

let div=document.querySelector("div");
let ul=document.querySelector("ul");
let li=document.querySelectorAll("li");

div.addEventListener("click",function( event){
    event.stopPropagation();
    console.log(" div triggered");
})

ul.addEventListener("click",function( event){
    event.stopPropagation();
    console.log(" ul triggered");
})

li.addEventListener("click",function( event){
    event.stopPropagation();
    console.log(" li triggered");
})