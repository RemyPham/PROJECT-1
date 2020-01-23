/* ---- CHRONOMETER ---- */

let chronometer = 0;
let intervalID;
let score = 0;

let secDec = document.getElementById("secDec");
let secUni = document.getElementById("secUni");
var minDec = document.getElementById('minDec');
var minUni = document.getElementById('minUni');
let startBtn = document.getElementById("next-start-button")
let input = document.getElementById("next-answer")
let winMusic = document.getElementById("win")
let loseMusic = document.getElementById("lose")
let endSound = document.getElementById("end-sound")

winMusic.currentTime = 1;

function printTime() {
    printMinutes();
    printSeconds();
}

function getMinutes() {
    return Math.floor(chronometer / 60)
   }

function getSeconds() {
   return chronometer % 60
  }

function twoDigits(val) {
    if (val < 10) {
        return `0${val}`
    } else return `${val}`
};

function printMinutes() {
    let minutes = getMinutes(chronometer);
    let twoDigitsMinutes = twoDigits(minutes);
     minDec.textContent = twoDigitsMinutes[0];
     minUni.textContent = twoDigitsMinutes[1];
 }


function printSeconds() {
    let seconds = getSeconds(chronometer);
    let twoDigitsSeconds = twoDigits(seconds);
    secDec.textContent = twoDigitsSeconds[0];
    secUni.textContent = twoDigitsSeconds[1];
}

function inputFocus(){
    input.focus();
}

/* ---- WHAT'S NEXT GAME ---- */

let testArr = [
    {question: `<div id="question-container" style="background-image: url(./img/next1.jpg); background-position: center;">
    </div>`, answer: 3},
    {question: `<div id="question-container" style="background-image: url(./img/next2.jpg); background-position: center;">
    </div>`, answer: 1},
    {question: `<div id="question-container" style="background-image: url(./img/next3.jpg); background-position: center;">
    </div>`, answer: 5},
    {question: `<div id="question-container" style="background-image: url(./img/next4.jpg); background-position: center;">
    </div>`, answer: 4},
    {question: `<div id="question-container" style="background-image: url(./img/next5.jpg); background-position: center;">
    </div>`, answer: 3},
    {question: `<div id="question-container" style="background-image: url(./img/next6.jpg); background-position: center;">
    </div>`, answer: 6},
    {question: `<div id="question-container" style="background-image: url(./img/next7.jpg); background-position: center;">
    </div>`, answer: 4},
    {question: `<div id="question-container" style="background-image: url(./img/next8.jpg); background-position: center;">
    </div>`, answer: 3},
    {question: `<div id="question-container" style="background-image: url(./img/next9.jpg); background-position: center;">
    </div>`, answer: 1},
    {question: `<div id="question-container" style="background-image: url(./img/next10.jpg); background-position: center;">
    </div>`, answer: 5},
    {question: `<div id="question-container" style="background-image: url(./img/next11.jpg); background-position: center;">
    </div>`, answer: 2},
    {question: `<div id="question-container" style="background-image: url(./img/next12.jpg); background-position: center;">
    </div>`, answer: 3},
    {question: `<div id="question-container" style="background-image: url(./img/next13.jpg); background-position: center;">
    </div>`, answer: 3},
    {question: `<div id="question-container" style="background-image: url(./img/next14.jpg); background-position: center;">
    </div>`, answer: 1},
    {question: `<div id="question-container" style="background-image: url(./img/next15.jpg); background-position: center;">
    </div>`, answer: 3},
    {question: `<div id="question-container" style="background-image: url(./img/next16.jpg); background-position: center;">
    </div>`, answer: 2},
    {question: `<div id="question-container" style="background-image: url(./img/next17.jpg); background-position: center;">
    </div>`, answer: 5},
    {question: `<div id="question-container" style="background-image: url(./img/next18.jpg); background-position: center;">
    </div>`, answer: 2},
    {question: `<div id="question-container" style="background-image: url(./img/next19.jpg); background-position: center;">
    </div>`, answer: 4},
    {question: `<div id="question-container" style="background-image: url(./img/next20.jpg); background-position: center;">
    </div>`, answer: 1},
    {question: `<div id="question-container" style="background-image: url(./img/next21.jpg); background-position: center;">
    </div>`, answer: 4},
    {question: `<div id="question-container" style="background-image: url(./img/next22.jpg); background-position: center;">
    </div>`, answer: 2},
    {question: `<div id="question-container" style="background-image: url(./img/next23.jpg); background-position: center;">
    </div>`, answer: 1},
    {question: `<div id="question-container" style="background-image: url(./img/next24.jpg); background-position: center;">
    </div>`, answer: 3},
    {question: `<div id="question-container" style="background-image: url(./img/next25.jpg); background-position: center;">
    </div>`, answer: 4},
    {question: `<div id="question-container" style="background-image: url(./img/next26.jpg); background-position: center;">
    </div>`, answer: 1},
    {question: `<div id="question-container" style="background-image: url(./img/next27.jpg); background-position: center;">
    </div>`, answer: 4},
]

let arr5 = [];
let nextProblem = document.getElementById("next-problem");
let rightAnswer;

//get random number between 0 - max
function randomNum(max){
    return Math.round(Math.random() * max);
}

function fillArr(){
    let newArr = [...testArr];
    let index;
    for (let i=0; i<5; i++){
        index = randomNum(newArr.length-i);
        arr5.push(newArr[index]);
        newArr.splice(index,1)
    }
}


function questionAppear(){
    nextProblem.innerHTML = arr5[0].question;
    rightAnswer = arr5[0].answer;
}


input.onkeypress = function(event) {
    if (event.keyCode == 13 && input.value == rightAnswer) {
        score++;
        arr5.shift();
        questionAppear();
        input.value="";
    } else if (event.keyCode == 13 && input.value != rightAnswer) {
        arr5.shift();
        questionAppear();
        input.value="";
    }
}


//the player has a good score
function goodScore(){
    nextProblem.removeAttribute("id");
    nextProblem.setAttribute("id", "next-win");
    nextProblem.innerText = `${minDec.textContent}${minUni.textContent}:${secDec.textContent}${secUni.textContent} to get ${score}/5 good answers. Great Job!`;
    document.getElementById("next-character").innerHTML = `<img src="./img/happy.png" alt="happy" id="happy">`
    nextProblem.innerHTML +=
    `
    <div id="end-button">
        <button><a href="next.html">TRY AGAIN</a></button>
        <button><a href="menu.html">HOME</a></button>
    </div>
    `;
    endSound.play()
    winMusic.play();
    input.onkeypress = function() {return ""}
}


//the player has a bad score
function badScore(){
    nextProblem.removeAttribute("id");
    nextProblem.setAttribute("id", "next-lose");
    nextProblem.innerText = `${minDec.textContent}${minUni.textContent}:${secDec.textContent}${secUni.textContent} to get ${score}/5 good answers. Keep Trying...`;
    document.getElementById("next-character").innerHTML = `<img src="./img/sad.png" alt="sad">`
    nextProblem.innerHTML +=
    `
    <div id="end-button">
        <button><a href="next.html">TRY AGAIN</a></button>
        <button><a href="menu.html">HOME</a></button>
    </div>
    `;
    endSound.play()
    loseMusic.play();
    input.onkeypress = function() {return ""}
}


function startGame() {
    fillArr();
    questionAppear();
    inputFocus();
    intervalID = setInterval(() => {
        chronometer++;
        printTime();
        if (arr5.length === 0) {
            clearInterval(intervalID);
            if (chronometer < 250 && score >= 4) {
                goodScore();
            } else badScore();
        }
    },1000);
}

startBtn.onclick = startGame;