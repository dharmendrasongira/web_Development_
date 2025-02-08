let body= document.querySelector("body");

let p = document.createElement("p");
let h3 =document.createElement('h3');
let div = document.createElement("div");
let dh1 = document.createElement("h1");
let dp = document.createElement("p");

p.innerText="HEY i'm red!";
h3.innerText= "i'm blue h3!";
dh1.innerText="i'm in div";
dp.innerText="ME TOO!";

div.style.backgroundColor="pink";
div.style.border="2px solid black";

body.appendChild(p);
body.appendChild(h3);
body.appendChild(div);
div.appendChild(dh1);
div.appendChild(dp);




