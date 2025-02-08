let url = "http://universities.hipolabs.com/search?name="; 

// Function to fetch college data from the API based on country name
async function getcollege(country) {
     try {
        // Sends an HTTP GET request to the API with the specified country
        let res = await axios.get(url + country);
        return res.data; // Returns the response data (an array of colleges)
     } catch (error) {
        console.log(error); // Logs any errors that occur during the request
     }
}

let btn = document.querySelector("button"); // Selects the button element to attach event

// Adds a click event listener to the button
btn.addEventListener(
    "click", async () => {
        let country = document.querySelector("input").value; // Retrieves user input for country
        let colleges = await getcollege(country); // Calls getcollege with the country name
        show(colleges); // Displays the fetched colleges in the UI
    }
)

// Function to display college names in a list
function show(colleges) {
    let ul = document.querySelector("ul"); // Selects the <ul> element to display results
    // let ul = document.querySelector("#result");  // Alternative: Selects the ul by its id
    for (let college of colleges) { // Loops through each college in the array
        let li = document.createElement("li"); // Creates a new <li> element for each college
        li.innerText = college.name; // Sets the college name as the text of the <li>
        ul.appendChild(li); // Appends the <li> to the <ul>
    }  
}
