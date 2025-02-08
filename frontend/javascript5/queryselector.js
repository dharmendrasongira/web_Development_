document.querySelector("p");
// The 'querySelector' method returns the first <p> element in the document.
// If multiple <p> elements exist, only the first one encountered will be returned.

document.querySelector('#myid');
// This 'querySelector' searches for an element with the ID 'myid' and returns it.
// IDs are unique, so this will return the single element with that ID.

document.querySelector('.myclass');
// This 'querySelector' searches for the first element with the class 'myclass' and returns it.
// If there are multiple elements with this class, only the first one will be selected.

document.querySelectorAll("p");
// The 'querySelectorAll' method returns a NodeList of all <p> elements in the document.
// Unlike 'querySelector', which selects only the first match, this will return all <p> elements found.
