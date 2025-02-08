// Select the first <h1> element in the document and store it in the variable 'ok'
let ok = document.querySelector("h1");

// Get the current value of the 'ID' attribute of the <h1> element
ok.getAttribute("ID"); 
// If the <h1> has an ID like <h1 id="header">, it will return 'header'. 
// If there is no 'ID' attribute, it will return null.

// Set the 'ID' attribute of the <h1> element to 'spiderman'
ok.setAttribute('ID', 'spiderman');
// The <h1> element will now have <h1 id="spiderman">, which changes or adds an ID attribute.

// Set the 'class' attribute of the <h1> element to 'superhero'
ok.setAttribute('class', 'superhero');
// The <h1> element will now have <h1 id="spiderman" class="superhero">.
// This assigns or replaces any existing class with 'superhero'.

