let aside = document.getElementById("main-aside");
let gameScreen = document.getElementById("game-screen");
let rules = document.getElementById("main-explanation")

function mathRules(){
    aside.innerHTML = `<img alt="math-screen" src="./img/mental-math.jpg">
    <div id="rules-container">
        <p id="main-explanation">
        Try to resolve a maximum of these math problems in 30 seconds.<br>
        Think fast, don't hesitate!<br>
        <br>
        <span style="font-weight: bold;">Command :</span> Num. pad, Enter key
        </p>
    </div>`
}

//object.onmouseout = function
//object.onmouseover = function