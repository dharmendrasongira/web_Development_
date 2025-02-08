let url = "https://catfact.ninja/fact"; // This is the API URL that gives a random cat fact

// fetch makes a network request to the URL and returns a promise (a way to handle results that take time).
fetch(url)
    .then((response) => {
        console.log(response); // Logs the full response object we got from the server
        // response.json() reads the data from the response and turns it into a JavaScript object.
        return response.json(); // It also returns a promise, so we can handle the data when it's ready
    })
    .then((data) => {
        console.log(data); // Logs the JSON data we received, now as an object we can use
    })
    .catch((error) => {
        // If there's an error with the fetch or turning it into JSON, .catch() handles it here.
        console.log(error); // Logs any error that happens along the way
    });
