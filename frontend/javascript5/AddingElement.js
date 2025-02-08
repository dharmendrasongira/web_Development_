// Select the first element with the class 'box' (likely a <div>) and assign it to 'div'
let div = document.querySelector(".box");

// Create a new <button> element
let btn = document.createElement("button");

// Set the text inside the button element (use `innerText` or `textContent`, not as a method)
btn.innerText = "click me!";

// Append the button as a child to the 'div' (correct syntax: `appendChild`, not `append.chlid`)
div.appendChild(btn);

// Append additional text "yup!" inside the button element (correct usage of `append`)
btn.append(" yup!");  // The button text will now be: "click me! yup!"

// Prepend the button as the first child of the 'div' (use `prepend` instead of `prepand`)
div.prepend(btn);

// Insert the button into the 'div' using `insertAdjacentElement` at different positions:

// 1. Insert the button at the beginning of the 'div' (just after the opening tag)
div.insertAdjacentElement("afterbegin", btn);

// 2. Insert the button right before the 'div' itself (before the opening tag)
div.insertAdjacentElement("beforebegin", btn);

// 3. Insert the button right after the 'div' (after the closing tag)
div.insertAdjacentElement("afterend", btn);

// 4. Insert the button at the end of the 'div' (just before the closing tag)
div.insertAdjacentElement("beforeend", btn);
