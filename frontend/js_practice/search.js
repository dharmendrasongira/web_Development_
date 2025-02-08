var input = document.querySelector("input");

var data = [
    {name: "harsh", src: "./image.png"},
    {name: "dharmendra", src: "./image copy.png"},
    {name: "diksha", src: "./image.png"},
    {name: "gagan", src: "./image copy.png"}
];

var pers = ""; // Initialize the pers variable correctly

data.forEach(function(ele) {
    pers += ` 
    <div class="person">
        <div class="img">
            <img src="${ele.src}" alt="">
        </div>
        <h4>${ele.name}</h4>
    </div>`;
});

document.querySelector(".people").innerHTML = pers; // Display the generated HTML

input.addEventListener("input", function() {  // *** FIXED: Corrected placement of input event listener ***
    var matching = data.filter(function(e) {  // *** FIXED: The matching array is now inside the input event listener ***
        return e.name.startsWith(input.value);
    });

    var newuser = "";  // *** FIXED: The newuser variable is now inside the event listener ***

    matching.forEach(function(ele) {  // *** FIXED: Used matching inside the event listener ***
        newuser += ` 
        <div class="person">
            <div class="img">
                <img src="${ele.src}" alt="">
            </div>
            <h4>${ele.name}</h4>
        </div>`;
    });

    document.querySelector(".people").innerHTML = newuser;  // *** FIXED: Now updates the HTML with filtered data ***
});
