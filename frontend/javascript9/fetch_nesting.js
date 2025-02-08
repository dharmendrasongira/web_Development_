let url= "https://catfact.ninja/fact";

fetch(url)
.then((response)=> {   
  return  response.json();
})
.then((data)=>{console.log("data1=>",data.fact);
    return fetch(url);
})
.then((response)=> {
  return  response.json();
})
.then(data=>{
    console.log("data2 =>",data.fact)
})
.catch((error) =>{
    console.log(error);
})