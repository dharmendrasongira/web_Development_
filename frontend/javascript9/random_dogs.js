let url = "https://dog.ceo/api/breeds/image/random"; 

async function get() {
     try{
        let res= await axios.get(url);
        return res.data.message;
     }
     catch(error){
        console.log("image not found");
     }
}
let btn = document.querySelector("button");
let image= document.querySelector("img");
btn.addEventListener(
    "click",async ()=>{
       let photo =await get()
        image.src=photo;
        //or we can also use
        // image.setAttribute("src", photo);
    }
)

