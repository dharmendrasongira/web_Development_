var get= document.querySelector("#get")

function getuser(){
    fetch(`https://randomuser.me/api/`)
.then(raw => raw.json())
.then(result => {
    const{name,email,gender,picture}=result.results[0];
    document.querySelector("#parent").innerHTML += `
        <div class="card w-60 p-4 rounded-xl bg-zinc-800">
                    <div class="w-32 h-32 bg-zinc-500 rounded-2xl mb-3 overflow-hidden">
                        <img src="${picture.large}"class="w-full h-full fit-cover" alt="">
                    </div>
                    <h3 class="font-semibold text-2xl">${name.first}</h3>
                    <h5 class="text-sm font-semibold opacity-60">${gender}</h5>
                    <h6 class="text-sm  opacity-40">${email}</h6>
                    <p class="mt-5 text-xs font-semibold opacity-80">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem maxime, perferendis modi temporibus distinctio tenetur sapiente incidunt dicta quaerat, magnam eaque officiis asperiores perspiciatis, qui doloribus. Porro vitae suscipit tenetur!</p>
        </div>
    `;
})
}

get.addEventListener("click",()=>{getuser();});
