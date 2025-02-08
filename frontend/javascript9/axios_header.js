// API endpoint that returns a random dad joke
const url = "https://icanhazdadjoke.com/";

// Asynchronous function to fetch a joke from the API
async function getJoke() {
    try {
        // Setting up the request header to specify JSON response format
        let config = { headers: { Accept: "application/json" } };
        
        // Sending GET request to the API with the config and waiting for the response
        let res = await axios.get(url, config);
        
        // Returning the data received from the API (joke in JSON format)
        return res.data;
    } catch (error) {
        // Logging any errors that occur during the request
        console.log(error);
    }
}

// Calling getJoke and handling the returned Promise to log the joke data
getJoke().then(joke => console.log(joke));
