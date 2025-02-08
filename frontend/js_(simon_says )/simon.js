let gameseq = [];
let userseq = [];
let level = 0;
let started = false;
let btns = ["yellow", "red", "green", "blue"];

let body = document.querySelector("body");

document.addEventListener("keydown", function () {
    if (started === false) {
        console.log("game started");
        started = true;
        levelup();
    }
});

function btnflash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 1000);
}

function levelup() {
    level++;
    let h3 = document.querySelector("h3");
    h3.innerText = `LEVEL ${level}`;
    let random = Math.floor(Math.random() * 4); // Corrected range to include all colors
    let randcolor = btns[random];
    let randbtn = document.querySelector(`.${randcolor}`);
    gameseq.push(randcolor);
    console.log(gameseq);

    btnflash(randbtn);
}

function btnpress(){
    console.log(this);
let btn = this;
btnflash(btn);

}

let allbtns = document.querySelectorAll(".btn");
for (btn of allbtns){
    btn.addEventListener("click",btnpress);
}