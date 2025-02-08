// Select the first element with the class 'box' and assign it to the variable 'op'
let op = document.querySelector(".box");

// Create a new <button> element and assign it to the variable 'btn'
let btn = document.createElement("button");

// Remove the <p> element from the 'op' ('.box') container
// Use 'querySelector' to select the first <p> inside the .box and remove it using 'removeChild'
op.removeChild(op.querySelector('p'));

// Remove the 'btn' element from the DOM (although it's not attached yet, this would work if it was)
btn.remove();
