/* ---- CHRONOMETER ---- */

let chronometer = 30;
let intervalID;
let score = 0;

let secDec = document.getElementById("secDec");
let secUni = document.getElementById("secUni");
let startBtn = document.getElementById("cm-start-button")
let input = document.getElementById("cm-answer")

function twoDigits(chronometer) {
    if (chronometer < 10) {
        return `0${chronometer}`
    } else return `${chronometer}`
};

function printSeconds() {
    let twoDigitsSeconds = twoDigits(chronometer);
    secDec.textContent = twoDigitsSeconds[0];
    secUni.textContent = twoDigitsSeconds[1];
}

function inputFocus(){
    input.focus();
}



/* ---- COLOR GAME ---- */

let word = ["RED", "BLUE", "YELLOW", "GREEN", "BLACK"]
let colorChoice = [
    {valeur: "red", hex: "#FF0000"},
    {valeur: "blue", hex: "#0500FF"},
    {valeur: "yellow", hex: "#FFE300"},
    {valeur: "green", hex: "#00DA05"},
    {valeur: "black", hex: "#000000"}
]
let colorValue;

let cmProblem = document.getElementById("cm-problem");

//get random number between 0 - max
function randomNum(max){
    return Math.round(Math.random() * max);
}

//get random word from array
function randomWord(){
    return word[randomNum(4)]
 }  

 //get random color from array
 function randomColor(){
    return colorChoice[randomNum(4)]
 } 


 //get random word with random color and put it ine the problem
 function generateWord(){
    let mainWord = randomWord();
    let color = randomColor();
    let colorHex = color.hex;
    colorValue = color.valeur;

    cmProblem.innerHTML += `<p style="color:${colorHex}">${mainWord}</p>`;
 }


 //push "enter" key while being in the input to give the answer, generate new word
input.onkeypress = function(event) {
    if (event.keyCode == 13 && input.value.toUpperCase() == colorValue.toUpperCase()) {
        score++;
        cmProblem.innerHTML = ""
        generateWord();
        input.value="";
    } else if (event.keyCode == 13 && input.value.toUpperCase() != colorValue.toUpperCase()) {
        cmProblem.innerHTML = ""
        generateWord();
        input.value="";
    }
}


//the player has a good score
function goodScore(){
    cmProblem.removeAttribute("id");
    cmProblem.setAttribute("id", "cm-end");
    cmProblem.innerText = `${score} correct answers in 30sec. Great Job!`;
    document.getElementById("cm-character").innerHTML = `<img src="./img/happy.png" alt="happy" id="happy">`
    cmProblem.innerHTML +=
    `
    <div id="end-button">
        <button><a href="color-mix.html">TRY AGAIN</a></button>
        <button><a href="menu.html">HOME</a></button>
    </div>
    `;
    input.onkeypress = function() {return ""}
}



//the player has a bad score
function badScore(){
    cmProblem.removeAttribute("id");
    cmProblem.setAttribute("id", "cm-end");
    cmProblem.innerText = `${score} correct answers in 30sec. Keep Trying...`;
    document.getElementById("cm-character").innerHTML = `<img src="./img/sad.png" alt="sad">`
    cmProblem.innerHTML +=
    `
    <div id="end-button">
        <button><a href="color-mix.html">TRY AGAIN</a></button>
        <button><a href="menu.html">HOME</a></button>
    </div>
    `;
    input.onkeypress = function() {return ""}
}



function startGame() {
    generateWord();
    inputFocus();
    intervalID = setInterval(() => {
        chronometer--;
        printSeconds();
        if (chronometer === 0) {
            clearInterval(intervalID);
            if (score < 13) {
                badScore();
            } else goodScore();
        }
    },1000);
}


startBtn.onclick = startGame