// Select the first <p> element in the document and assign it to the variable 'para'
let para = document.querySelector("p");

// Display the text inside the <p> element without HTML, ignoring hidden elements
console.log(para.innerText); // Example: "Hello World!"

// Display the complete text inside the <p> element, including hidden text and preserving spacing
console.log(para.textContent); // Example: "Hello World!"

// Display the HTML inside the <p> element, including any HTML tags
console.log(para.innerHTML); // Example: "Hello <b>World</b>!"

// Change the visible text of the <p> element (it will remove any HTML inside)
para.innerText = "This is plain text without HTML.";

// Changing the content of the <p> element using innerHTML, allowing for HTML tags to be included
para.innerHTML = "This is <b>bold</b> and <i>italic</i> text.";

// Theory behind key concepts:

// 1. innerText: 
// Retrieves and sets the visible text inside an element. If an element has hidden text
// (e.g., display: none or visibility: hidden), innerText will ignore it. It's a good choice
// for manipulating plain visible text.

// 2. textContent:
// Unlike innerText, textContent gets and sets the full text content of the element, including hidden text.
// It also preserves whitespace and doesn't parse or render HTML. It's faster than innerText because 
// it doesn't compute the layout to figure out visible text.

// 3. innerHTML:
// This retrieves and sets the HTML content inside an element, including any HTML tags.
// It is useful when you need to add or modify HTML structure dynamically. However, be cautious of security risks like
// XSS (cross-site scripting) attacks when using innerHTML, especially with user input.

// Example of a dynamic HTML update with innerHTML:
para.innerHTML = "<a href='https://example.com'>Click here</a>"; // Dynamically adding a link inside the <p> element
