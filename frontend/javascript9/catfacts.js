let url = "https://catfact.ninja/fact"; 

async function get() {
     try{
        let res= await axios.get(url);
        return res.data.fact;
     }
     catch(error){
        console.log(error);
     }
}
let btn = document.querySelector("button");
let para = document.querySelector("p");
btn.addEventListener(
    "click",async ()=>{
       let fact =await get()
        para.innerText=fact;
    }
)

