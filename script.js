var tempo = 30;
var darktheme = false;
var selectedTimer = 1;
var defaultTime = tempo;
var open = false;
var hidden = false;
let btns = document.querySelectorAll("[data-button]");
let timerBtns = document.querySelectorAll("[data-timer]");
var i = 2;

function next(){
    tempo = defaultTime;
    if(i == 1000)
        i = 1;

    if(i == 2)
        document.getElementById("background-visible").style.backgroundImage = "url('https://picsum.photos/1920/1080?random=2')"
    else
        document.getElementById("background-visible").style.backgroundImage = document.getElementById("background-notvisible").style.backgroundImage; 

    i++
    document.getElementById("background-notvisible").style.backgroundImage = "url('https://picsum.photos/1920/1080?random=" + i + "')";
}

if(tempo != -1){
    setInterval(function(){
        tempo--;

        if(tempo == 0){
            next();
        }
    },1000);
}

function menu(){
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

function hideControls(){
    hidden = !hidden;

    if(hidden){
        document.getElementById("eye").innerHTML = "<path d='M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z'/><path d='M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z'/><path d='M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884l-12-12 .708-.708 12 12-.708.708z'/>"
        document.getElementById("button-line").style.opacity = 0;
        document.getElementById("button-line").style.visibility = "hidden";
        document.getElementById("dropdown-content").style.opacity = 0;
        document.getElementById("dropdown-content").style.visibility = "hidden";
    }else{
        document.getElementById("eye").innerHTML = "<path d='M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z'/><path d='M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z'/>"
        document.getElementById("button-line").style.opacity = 1;
        document.getElementById("button-line").style.visibility = "visible";
        document.getElementById("dropdown-content").style.opacity = 1;
        document.getElementById("dropdown-content").style.visibility = "visible";
    }
}


function changeTheme(){
    darktheme = !darktheme;

    if(darktheme == true){
        document.body.style.backgroundColor = "#161b22";
        document.body.style.color = "white";
        btns.forEach(element => element.style.backgroundColor = "#161b22");
        btns.forEach(element => element.style.color = "white");

        //TimerSelector
        document.getElementById("TimerSelector-content").style.backgroundColor = "#161b22";
        document.getElementById("TimerSelector-content").style.color = "white";
        timerBtns.forEach(element => element.style.backgroundColor = "#161b22");
    }else{
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
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
