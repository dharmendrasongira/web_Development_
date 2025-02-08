// Method 1: Simple setTimeout calls
let h1 = document.querySelector("h1");

// Change the color of the <h1> element to red after 1 second
setTimeout(() => { h1.style.color = "red"; }, 1000);

// Change the color of the <h1> element to green after 2 seconds
setTimeout(() => { h1.style.color = "green"; }, 2000);

// Change the color of the <h1> element to yellow after 3 seconds
setTimeout(() => { h1.style.color = "yellow"; }, 3000);

/*
In Method 1, we use multiple setTimeout calls to change the color of the <h1> element. 
Each call executes independently after a specified delay. 
This method does not ensure that one execution completes before starting the next; they are based purely on timing.
*/

// Method 2: Using a function to change color with a delay
function change(color, delay) {
    setTimeout(() => { h1.style.color = color; }, delay);
}

// Change the color to red after 1 second
change("red", 1000);
// Change the color to orange after 2 seconds
change("orange", 2000);
// Change the color to yellow after 3 seconds
change("yellow", 3000);

/*
In Method 2, we encapsulate the color change logic in a function. 
This makes the code more reusable and cleaner. 
However, the changes still happen independently, meaning they do not wait for the previous execution to complete before starting the next one.
*/

// Method 3: Chaining color changes
function colorchange(color, delay, nextcolor) {
    setTimeout(() => {
        h1.style.color = color; // Change the color
        if (nextcolor) nextcolor(); // Call the next color change if provided
    }, delay);
}

// Change to red after 1 second and then to blue after 2 seconds
colorchange("red", 1000, () => {
    colorchange("blue", 2000, () => {
        colorchange("green", 3000, () => {
            colorchange("pink", 4000); // Final color change to pink after 4 seconds
        });
    });
});

/*
In Method 3, we create a more structured approach to color changes by allowing the next color change function to be passed as an argument. 
This ensures that each execution waits for the previous one to complete before starting the next. 
This makes the sequence clear and ensures each color change is executed in order, enhancing readability and maintainability.
*/
