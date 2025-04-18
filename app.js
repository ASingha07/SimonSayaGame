let gamesqe = [];
let usersqe = [];
let btns = ["yellow", "red", "purple", "green"];

let started = false;
let level = 0;
let highestScore = 0;

let h2 = document.querySelector("h2");
let hs = document.querySelector("#hscore");

document.addEventListener("keypress", function() {
    if(started == false) {
        started = true;
        levelUp();
    }
});

function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    }, 250);
}

function levelUp() {
    usersqe = [];
    level++;
    h2.innerText = `Level ${level}`;
    hs.innerText = `Highest Score ${highestScore}`;
    let randIdx = Math.floor(Math.random() * 4);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gamesqe.push(randColor);
    btnFlash(randBtn);
}

function checkAns(idx) {
    if(gamesqe[idx] === usersqe[idx]) {
        if(gamesqe.length == usersqe.length) {
            setTimeout(levelUp, 1000);
        }
    } else {
        h2.innerHTML = `Game Over! Your score was <b>${level}</b> <br> Press any key to restart`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function() {
            document.querySelector("body").style.backgroundColor = "white";
        }, 200);
        if(highestScore < level) {
            highestScore = level;
            hs.innerText = `Highest Score ${highestScore}`;
        }
        reset();
    }
}

function btnPress() {
    let btn = this;
    btnFlash(btn);
    userColor = btn.getAttribute("id");
    usersqe.push(userColor);
    checkAns(usersqe.length - 1);
}

let btnAll = document.querySelectorAll(".btn");
for(btn of btnAll) {
    btn.addEventListener("click", btnPress);
}

function reset() {
    started = false;
    gamesqe = [];
    usersqe = [];
    level = 0;
}

