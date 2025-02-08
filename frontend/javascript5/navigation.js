// Select the first element with the class 'box' (likely a <div>) and assign it to the variable 'div'
let div = document.querySelector(".box");

// Select the first <h2> element inside the element with the class 'box' and assign it to the variable 'H1'
let H1 = document.querySelector(".box h2");

// Log the number of child elements (not including text nodes or comments) inside the 'div' element
console.dir(div.childElementCount);
// This will return the number of direct child elements the 'div' contains (e.g., if there are 3 child elements inside the <div> with the class "box", it will return 3).

// Log the next sibling element of the 'H1' element in the DOM tree
console.dir(H1.nextElementSibling);
// This returns the next sibling element after the <h2> inside the same parent.
// If the <h2> is followed by, for example, a <p> tag, it will return that <p> element.
// If there’s no sibling element, it returns null.

// Log the parent element of the 'H1' element
console.log(H1.parentElement);
// This returns the parent element of the <h2> (likely the 'div' with the class "box").
// In this case, it will log the <div> element that contains the <h2>.
