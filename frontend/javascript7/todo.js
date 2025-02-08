let task = document.querySelector("button");
let inp = document.querySelector("input");
let ul = document.querySelector("ul");


task.addEventListener("click" ,function(event){
     let li= document.createElement("li"); 
    li.innerText =inp.value;
    ul.appendChild(li);
    inp.value ="";
    let dlt = document.createElement("button");
    dlt.innerText= "delete";
    dlt.classList.add("delete");
    li.appendChild(dlt);
});

ul.addEventListener("click",function(event){
    if(event.target.nodeName == "BUTTON"){
        let listitem= event.target.parentElement;
        listitem.remove();
    }
});
 
