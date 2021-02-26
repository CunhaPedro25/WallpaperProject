var tempo = 30;
var darktheme = false;
var selectedTimer = 1;
var defaultTime = tempo;
var open = false;
let btns = document.querySelectorAll("[data-button]");
let timerBtns = document.querySelectorAll("[data-timer]");
var i = 1;

function next(){
    tempo = defaultTime;
    i++

    document.body.style.backgroundImage = "url('https://picsum.photos/1920/1080?random=" + i + "')";
}

if(tempo != -1){
    setInterval(function(){
        tempo--;

        if(tempo == 0){
            next();
        }
    },1000);
}

function info(){
    open = !open
    btns[0].style.backgroundColor = "lightgrey";

    if(open == true){ 
        document.getElementById("dropdown-content").style.display = "flex";
    }else{
        document.getElementById("dropdown-content").style.display = "none";
        if(darktheme == true)
            btns[0].style.backgroundColor = "#161b22";
        else
            btns[0].style.backgroundColor = "white";
    }
}

function changeTheme(){
    darktheme = !darktheme;

    if(darktheme == true){
        document.getElementById("dropdown-content").style.backgroundColor = "#161b22";
        document.getElementById("dropdown-content").style.color = "white";
        btns.forEach(element => element.style.backgroundColor = "#161b22");
        btns.forEach(element => element.style.color = "white");

        //TimerSelector
        document.getElementById("TimerSelector-content").style.backgroundColor = "#161b22";
        document.getElementById("TimerSelector-content").style.color = "white";
        timerBtns.forEach(element => element.style.backgroundColor = "#161b22");
    }else{
        document.getElementById("dropdown-content").style.backgroundColor = "white";
        document.getElementById("dropdown-content").style.color = "black";
        btns.forEach(element => element.style.backgroundColor = "white");
        btns.forEach(element => element.style.color = "black");

        //TimerSelector
        document.getElementById("TimerSelector-content").style.backgroundColor = "white";
        document.getElementById("TimerSelector-content").style.color = "black";
        timerBtns.forEach(element => element.style.backgroundColor = "white");
    }

    btns[0].style.backgroundColor = "lightgrey";
}

function selectTimer(getTime, timerbutton){
    tempo = getTime;    //Passa a ser o tempo escolhido
    defaultTime = tempo;    //Tempo default passa para esse tempo (reset do timer)
    selectedTimer = timerbutton;    //Botão escolhido no timer

    if(darktheme == true)
        timerBtns.forEach(element => element.style.backgroundColor = "#161b22");
    else
        timerBtns.forEach(element => element.style.backgroundColor = "white");

    timerBtns[selectedTimer].style.backgroundColor = "rgba(125, 125, 125, 0.5)";
}

function costumTimer(timerbutton){
    var x = prompt("Enter a Custom Timer (In Seconds)", "0");
    var costumNum = parseInt(x);

    selectTimer(costumNum, timerbutton);
}

function openTimerSelector() {
    document.getElementById("TimerSelector").style.display = "flex";

    timerBtns[selectedTimer].style.backgroundColor = "rgba(125, 125, 125, 0.5)";
}

function closeTimerSelector() {
    document.getElementById("TimerSelector").style.display = "none";
}

window.onclick = function(event) {
    if (event.target == document.getElementById("TimerSelector")) {
        document.getElementById("TimerSelector").style.display = "none";
    }
}

/**
 * Testes de leitura
 */
//let btns = document.querySelectorAll("[data-button]")
//btns.forEach(element => element.style.backgroundColor = "black")
//Inline
//document.querySelectorAll("[data-button]").forEach(element => element.style.backgroundColor = "black")