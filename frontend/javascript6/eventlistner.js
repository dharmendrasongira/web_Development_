
let element = document.querySelector("button");

let div = document.querySelector("div");

function say(){
alert("helllo!!!");
}
function ok(){
    alert("jai shree ram,");
}
element.addEventListener("click",say);
element.addEventListener("click",ok);
 
// dblclick is used for doubleclick
element.addEventListener("dblclick",say);


div.addEventListener("click",say)
