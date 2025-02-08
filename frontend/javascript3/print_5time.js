let ID = setInterval(()=> {console.log("hello")},2000);
// YE 2 SEC ME PRINT KARYEGA HELLO

// YE 10 SEC BAAD USKO ROK DEGA EXACT
setTimeout(()=> {clearInterval(ID)},10000);
