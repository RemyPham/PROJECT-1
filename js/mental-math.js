/* ---- CHRONOMETER ---- */

let chronometer = 30;
let intervalID;
let score = 0;

let secDec = document.getElementById("secDec");
let secUni = document.getElementById("secUni");
let startBtn = document.getElementById("math-start-button")
let input = document.getElementById("math-answer")

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


/* ---- MATH PROBLEM ---- */

let sign = ["+", "-", "*"];
let mathProblem = document.getElementById("math-problem")
let calculResult;


//get random number between 0 - max
function randomNum(max){
    return Math.round(Math.random() * max);
}

//get a random sign from sign array
function randomSign(){
   return sign[randomNum(2)]
}  

//get the equation and store the result
function generateCalcul (){
    let number1 = randomNum(10);
    let number2 = randomNum(10);
    let operator = randomSign();

    if (operator === "+") {
        calculResult = number1 + number2
    } if (operator === "-") {
        calculResult = number1 - number2
    } if (operator === "*") {
        calculResult = number1 * number2
    }
    return `${number1} ${operator} ${number2}`
}

//push "enter" key while being in the input to give the answer, generate new calcul
input.onkeypress = function(event) {
    if (event.keyCode == 13 && input.value == calculResult) {
        score++;
        mathProblem.innerText = generateCalcul();
        input.value="";
    } else if (event.keyCode == 13 && input.value != calculResult) {
        mathProblem.innerText = generateCalcul();
        input.value="";
    }
}


//the player has a good score
function goodScore(){
    mathProblem.removeAttribute("id");
    mathProblem.setAttribute("id", "math-end");
    mathProblem.innerText = `${score} correct answers in 30sec. Great Job!`;
    document.getElementById("math-character").innerHTML = `<img src="./img/happy.png" alt="happy" id="happy">`
    mathProblem.innerHTML +=
    `
    <div id="end-button">
        <button><a href="mental-math.html">TRY AGAIN</a></button>
        <button><a href="menu.html">HOME</a></button>
    </div>
    `;
    input.onkeypress = function() {return ""}
}

//the player has a bad score
function badScore(){
    mathProblem.removeAttribute("id");
    mathProblem.setAttribute("id", "math-end");
    mathProblem.innerText = `${score} correct answers in 30sec. Keep Trying...`;
    document.getElementById("math-character").innerHTML = `<img src="./img/sad.png" alt="sad">`
    mathProblem.innerHTML +=
    `
    <div id="end-button">
        <button><a href="mental-math.html">TRY AGAIN</a></button>
        <button><a href="menu.html">HOME</a></button>
    </div>
    `;
    input.onkeypress = function() {return ""}
}


function mentalMath(){
    mathProblem.innerText = generateCalcul()
}


function startGame() {
    mentalMath();
    inputFocus();
    intervalID = setInterval(() => {
        chronometer--;
        printSeconds();
        if (chronometer === 0) {
            clearInterval(intervalID);
            if (score < 17) {
                badScore();
            } else goodScore();
        }
    },1000);
}


startBtn.onclick = startGame

