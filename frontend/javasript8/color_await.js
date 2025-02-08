function colorchange(color, delay) {
    return new Promise(( resolve, reject) => {

    setTimeout(() => {
      let h1 = document.querySelector("h1");
        h1.style.color = color; // Change the color
        resolve("color changed");
    }, delay);
})
}

await colorchange("red",1000);
await colorchange("pink",1000);
await colorchange("yello",1000);