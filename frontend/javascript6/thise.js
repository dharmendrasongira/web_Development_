let p = document.querySelector("p");
let btn = document.querySelector("button");
let div = document.querySelector("div");

// The 'this' keyword refers to the element that triggered the event listener.

function colorchange(){
    this.innerText = "hii";
    this.style.backgroundColor = "pink"; // corrected typo
}

p.addEventListener("click", colorchange);
div.addEventListener("click", colorchange);
btn.addEventListener("click", colorchange);

// If you want to use anonymous functions, here's the corrected version of your commented code:

// p.addEventListener("click", function() {
//     this.innerText = "hiii";
//     this.style.backgroundColor = "red"; // corrected typo
// });

// div.addEventListener("click", function() {
//     this.innerText = "hiii";
//     this.style.backgroundColor = "red"; // corrected typo
// });

// btn.addEventListener("click", function() {
//     this.innerText = "hiii";
//     this.style.backgroundColor = "red"; // corrected typo
// });
 