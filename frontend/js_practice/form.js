// Form ko select karne ke liye form variable banaya
var form = document.querySelector("form");



//~ Approach-1: Specific inputs ko validate karte hain ~//
    // Limitation: Yeh sirf tab kaam karega jab input fields fixed aur known 
    //jada honge toh sahi ni hai
var inp1 = document.querySelector("#input1");
var inp2 = document.querySelector("#input2");

//~ Approach-2 aur 3 ke liye inputs array ko select karenge ~//
var inps = document.querySelectorAll("input"); // Saare input fields select karte hain
var h4 = document.querySelector("h4"); // Error ya success message dikhane ke liye h4 ko select kiya

// Form submit hone par event listener lagaya
form.addEventListener("submit", function (e) {
    e.preventDefault(); // Default behavior ko roka (page reload na ho)

//~ Approach-1: Specific inputs validate karte hain ~//
    if (inp1.value.trim() === "" || inp2.value.trim() === "") {
        h4.textContent = "Error"; // Error message set kiya
        h4.style.color = "red"; // Error color red set kiya
    } else {
        h4.textContent = ""; // Error clear kar diya
        h4.style.color = "black"; // Color reset kar diya
    }
});

//~ Approach-2: Saare inputs par loop lagate hain forEach ke saath ~//


    // Limitation: 
    // - Loop saare inputs ko check karta hai, chahe pehle error mil jaye
    // - Performance kam ho sakti hai agar inputs zyada ho

form.addEventListener("submit", function (e) {
    e.preventDefault(); // Default behavior roka

    inps.forEach(function (ele) {
        if (ele.value.trim() === "") { // Agar kisi input ka value blank hai
            h4.textContent = "Error"; // Error message set
            h4.style.color = "red"; // Error color red
            return; // Loop se exit
        } else {
            h4.textContent = ""; // Error clear kar diya
            h4.style.color = "black"; // Color reset
        }
    });
});

//~ Approach-3: Saare inputs par for loop lagate hain ~//
form.addEventListener("submit", function (e) {
    e.preventDefault(); // Default behavior roka

    for (var i = 0; i < inps.length; i++) {
        if (inps[i].value.trim() === "") { // Agar input blank hai
            h4.textContent = "Error"; // Error message set
            h4.style.color = "red"; // Error color red
            break; // Loop ko break karte hain
        } else {
            h4.textContent = ""; // Error clear kar diya
            h4.style.color = "black"; // Color reset
        }
          // Advantage:
    // - Efficient, loop pehle error milte hi stop ho jata hai
    // - Saare inputs ko dynamic tarike se handle karta hai
    // - Clear aur maintainable logic
    }
});
