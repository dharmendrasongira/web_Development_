// ye same set timeout jesa hai but diffrence yahi hai ki ye 
// multiple time exucte hote jayega agar roka nahi toh

setInterval( () => {console.log("hellooo!");},2000);

/**------------------------------------------------------------------------------------------- */

/// but ye infinite time chalte hi jayega isko rokne ke lieye hum ID dete hai

let ID = setInterval( () => {console.log("I AM DHARMENDRA ");},2000);

//  OR USKE BAAD CLEARINTERVAL use karke rokte hai
clearInterval(ID);
