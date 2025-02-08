// Function that returns a promise that resolves with a random number after a delay
function getnum() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let rand = Math.floor(Math.random() * 10) + 1; // Generate a random number between 1 and 10
            console.log(rand); // Log the random number to the console
            resolve(); // Resolve the promise after logging the number
        }, 1000); // 1 second delay before executing the callback
    });
}

// Await calls to getnum to ensure each call completes before the next starts
// 'await' pauses the execution of the function until the promise is resolved or rejected.
// 'await' can only be used inside an 'async' function.
// It allows writing asynchronous code that looks synchronous, improving readability.
await getnum(); // Wait for the first random number
await getnum(); // Wait for the second random number
await getnum(); // Wait for the third random number
await getnum(); // Wait for the fourth random number
