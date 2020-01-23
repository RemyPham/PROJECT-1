let aside = document.getElementById("main-aside");
let math = document.getElementById("game-1");
let color = document.getElementById("game-2");
let mnemo = document.getElementById("game-3");
let next = document.getElementById("game-4");
let selectSound = document.getElementById("select-sound");

let music = document.getElementById("menu-music");
setTimeout(function(){
    music.play();
}, 1200)
music.volume = 0.1;
music.currentTime = 101;

function mathRules(){
    selectSound.play();
    aside.innerHTML = `<img alt="math-screen" src="./img/mental-math.jpg">
    <div id="rules-container">
        <p id="main-explanation">
        Try to resolve a maximum of these math problems in 30 seconds.<br>
        Think fast, don't hesitate!<br>
        <br>
        <span style="font-weight: bold;">Command :</span> Num. pad, Enter key<br>
        <span style="font-weight: bold;">How to win :</span> Get at least 17 correct answers!
        </p>
    </div>`
}

function colorRules(){
    selectSound.play();
    aside.innerHTML = `<img alt="color-screen" src="./img/colormix.jpg">
    <div id="rules-container">
        <p id="main-explanation">
        What you see is not what they are.<br>
        Give the FONT COLOR of the word!<br>
        <br>
        <span style="font-weight: bold;">Command :</span> keyboard, Enter key<br>
        <span style="font-weight: bold;">How to win :</span> Get at least 13 correct answers!
        </p>
    </div>`
}

function mnemoRules(){
    selectSound.play();
    aside.innerHTML = `<img alt="mnemo-screen" src="./img/mnemo.jpg">
    <div id="rules-container">
        <p id="main-explanation">
        A list of words :<br>
        1min to memorize them, 2min to quote a max of them!<br>
        <br>
        <span style="font-weight: bold;">Command :</span> keyboard, Enter key<br>
        <span style="font-weight: bold;">How to win :</span> Get at least 10 correct words!
        </p>
    </div>`
}

function nextRules(){
    selectSound.play();
    aside.innerHTML = `<img alt="next-screen" src="./img/next.jpg">
    <div id="rules-container">
        <p id="main-explanation">
        Test your logic and try to guess the next pattern.<br>
        <br>
        <span style="font-weight: bold;">Command :</span> keyboard, Enter key<br>
        <span style="font-weight: bold;">How to win :</span> Get at least 4 correct answers, in less than 5min!
        </p>
    </div>`
}

function init(){
    aside.innerHTML = "";
}


math.onmouseover = mathRules;
color.onmouseover = colorRules;
mnemo.onmouseover = mnemoRules;
next.onmouseover = nextRules;


math.onmouseout = init;
color.onmouseout = init;
mnemo.onmouseout = init;
next.onmouseout = init;