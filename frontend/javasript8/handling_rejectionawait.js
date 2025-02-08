function colorchange(color, delay) {
    return new Promise(( resolve, reject) => {

    setTimeout(() => {
        let rand = Math.floor(Math.random() * 10) + 1; // Generate a random number between 1 and 10
         if (rand>3){ reject( "promise rejceted");}

      let h1 = document.querySelector("h1");
        h1.style.color = color; // Change the color
        resolve("color changed");
    }, delay);
})
}

try{
await colorchange("red",1000);
await colorchange("pink",1000);
await colorchange("yello",1000);}
catch(error){
console(error);
}