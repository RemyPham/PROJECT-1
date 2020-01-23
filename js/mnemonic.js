/* ---- CHRONOMETER ---- */

let chronometer = 180;
let intervalID;
let score = 0;

let secDec = document.getElementById("secDec");
let secUni = document.getElementById("secUni");
var minDec = document.getElementById('minDec');
var minUni = document.getElementById('minUni');
let startBtn = document.getElementById("mnemo-start-button")
let input = document.getElementById("mnemo-answer")

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

/* ---- MNEMONIC GAME ---- */

let words = [
    "wiggly",
    "clammy",
    "picayune",
    "light",
    "earthquake",
    "ring",
    "press",
    "puncture",
    "spooky",
    "ice",
    "unkempt",
    "produce",
    "deeply",
    "hammer",
    "mute",
    "acoustic",
    "dislike",
    "pear",
    "step",
    "dinosaurs",
    "wash",
    "train",
    "distribution",
    "milky",
    "lace",
    "tricky",
    "glossy",
    "secretary",
    "fantastic",
    "cold",
    "secret",
    "toothbrush",
    "copy",
    "cloth",
    "thick",
    "fire",
    "hang",
    "opposite",
    "rice",
    "round",
    "complex",
    "call",
    "rescue",
    "income",
    "intend",
    "crime",
    "stop",
    "command",
    "feeble",
    "van",
    "obedient",
    "trouble",
    "anxious",
    "teeny",
    "plate",
    "gaudy",
    "permit",
    "wonder",
    "mark",
    "mushy",
    "habitual",
    "end",
    "deliver",
    "trees",
    "truck",
    "boot",
    "language",
    "cap",
    "grotesque",
    "godly",
    "cart",
    "prevent",
    "scary",
    "peaceful",
    "consider",
    "handsome",
    "true",
    "whine",
    "examine",
    "instinctive",
    "gainful",
    "cat",
    "greet",
    "lush",
    "x-ray",
    "birds",
    "club",
    "unit",
    "tickle",
    "energetic",
    "grin",
    "shape",
    "ruthless",
    "invent",
    "loutish",
    "vengeful",
    "flowers",
    "arm",
    "wiry",
    "fair",
    "glorious",
    "pull",
    "zoom",
    "vulgar",
    "amusing",
    "valuable",
    "itchy",
    "shiver",
    "guarded",
    "yak",
    "like",
    "curved",
    "boring",
    "squirrel",
    "pot",
    "dinner",
    "care",
    "onerous",
    "cuddly",
    "real",
    "kind",
    "black",
    "foolish",
    "versed",
    "skirt",
    "soap",
    "jelly",
    "white",
    "ruin",
    "dead",
    "eggs",
    "obnoxious",
    "sloppy",
    "memory",
    "bad",
    "ants",
    "attach",
    "plucky",
    "confused",
    "deer",
    "crate",
    "deceive",
    "smart",
    "thread",
    "parallel",
    "fearful",
    "reply",
    "birth",
    "walk",
    "absorbed",
    "badge",
    "holiday",
    "gamy",
    "sack",
    "suppose",
    "attraction",
    "savory",
    "watery",
    "tangible",
    "veil",
    "unnatural",
    "approval",
    "lettuce",
    "violent",
    "oceanic",
    "oval",
    "dirty",
    "mass",
    "fixed",
    "flap",
    "dolls",
    "ambiguous",
    "even",
    "fragile",
    "ear",
    "daughter",
    "roasted",
    "bore",
    "pop",
    "notebook",
    "weather",
    "plan",
    "spoon",
    "green",
    "smile",
    "judicious",
    "agreement",
    "bottle",
    "calculate",
    "venomous",
    "unique",
    "petite",
    "guess",
    "unbecoming",
    "fireman",
    "homeless",
    "yarn",
    "wide",
    "fry",
    "pretend"
]

let words36 = [];
let mnemoProblem = document.getElementById("mnemo-problem");


function randomNum(max){
    return Math.round(Math.random() * max);
}

function fillArr(){
    let copyOfWords = [...words];
    let index;
    for (let i=0; i<36; i++){
        //36 = words36 length wanted / 199 = words length -1 / -i cause splice the pushing word so we don't have repetitions
        index = randomNum(199-i);
        words36.push(copyOfWords[index]);

        copyOfWords.splice(index,1)
    }
};

//fill the screen
function arrAppear(){
    for (let i=0; i<words36.length; i++) {
        mnemoProblem.innerHTML += `<p>${words36[i]}</p>`
    }
}

//empty the screen
function arrDisappear(){
    mnemoProblem.innerHTML = "";
    mnemoProblem.removeAttribute("id");
    mnemoProblem.setAttribute("id", "mnemo-problem-wait")
}


// press Enter to validate the word
input.onkeypress = function(event) {
    if (event.keyCode == 13 && words36.includes(input.value.toLowerCase())) {
        score++;
        input.value="";
    } else if (event.keyCode == 13 && words36.includes(input.value.toLowerCase()) === false) {
        input.value="";
    }
}


//the player has a good score
function goodScore(){
    mnemoProblem.removeAttribute("id");
    mnemoProblem.setAttribute("id", "mnemo-end");
    mnemoProblem.innerText = `${score}/36 correct answers. Great Job!`;
    document.getElementById("mnemo-character").innerHTML = `<img src="./img/happy.png" alt="happy" id="happy">`
    mnemoProblem.innerHTML +=
    `
    <div id="end-button">
        <button><a href="mnemonic.html">TRY AGAIN</a></button>
        <button><a href="menu.html">HOME</a></button>
    </div>
    `;
    input.onkeypress = function() {return ""}
}


//the player has a bad score
function badScore(){
    mnemoProblem.removeAttribute("id");
    mnemoProblem.setAttribute("id", "mnemo-end");
    mnemoProblem.innerText = `${score}/36 correct answers. Keep Trying...`;
    document.getElementById("mnemo-character").innerHTML = `<img src="./img/sad.png" alt="sad">`
    mnemoProblem.innerHTML +=
    `
    <div id="end-button">
        <button><a href="mnemonic.html">TRY AGAIN</a></button>
        <button><a href="menu.html">HOME</a></button>
    </div>
    `;
    input.onkeypress = function() {return ""}
}



function startGame() {
    fillArr();
    arrAppear();
    intervalID = setInterval(() => {
        chronometer--;
        printTime();
        if (chronometer === 120) {
            arrDisappear();
            input.removeAttribute("type");
            input.setAttribute("type", "text");
            inputFocus();
        } if (chronometer === 0) {
            clearInterval(intervalID);
            if (score < 10) {
                badScore();
            } else goodScore();
        }
    },1000);
}


startBtn.onclick = startGame