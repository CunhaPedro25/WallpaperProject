var tempo = 30;
var darktheme = false;
var selectedTimer = 1;      //Botao default é o segundo, 30 seconds
var selectedWallpaper = 0;  //Botao default é o primeiro, pictsum
var defaultTime = tempo;
var open = false;
var hidden = false;
var fullScreen = false;
let btns = document.querySelectorAll("[data-button]");
let timerBtns = document.querySelectorAll("[data-timer]");
let wallpaperBtns = document.querySelectorAll("[data-wallpaper]");
let theme = document.querySelectorAll("[data-theme]");
var canvas = document.getElementById("canvas").getContext("2d");

var divs = ["background-one", "background-two"];
var divAtual = 1;

var i = 1;
document.getElementById("background-one").style.backgroundImage = "url('https://picsum.photos/1920/1080?ramdom=" + i + "')";

i++;
document.getElementById("background-two").style.backgroundImage = "url('https://picsum.photos/1920/1080?ramdom=" + i + "')";
document.getElementById(divs[divAtual]).classList.toggle("toggleVisible");

function next(){
    tempo = defaultTime;

    if(selectedWallpaper == 0){
        let divProximo = divAtual;
        btns.enable = false;

        document.getElementById(divs[divAtual]).classList.toggle("toggleVisible");

        i++;
        divAtual = (divAtual + 1) % 2;
        document.getElementById(divs[divAtual]).classList.toggle("toggleVisible");
        document.getElementById(divs[divProximo]).style.backgroundImage = "url('https://picsum.photos/1920/1080?ramdom=" + i + "')";
    }else if(selectedWallpaper == 1){
        for(let i = 0; i < 200; i++){
            var coords = Math.floor(Math.random()*10)
            var tamanho = Math.floor((Math.random()*5) + 1)
            canvas.fillStyle="red";
            canvas.fillRect(coords, coords, tamanho, tamanho);
        }
    }else{
        console.log("LOL SLIMES GO BRRRRRRRR");
    }


    if(defaultTime >= 0)
        restartVisualTimer();
}

setInterval(function(){
    tempo--;

    if(tempo == 0){
        next();
    }
},1000);

function restartVisualTimer(){
    if(defaultTime <= 0){
        document.getElementById("circle-timer").style.display = "none";
    }else{
        document.getElementById("circle-timer").style.display = "flex";
    }

    document.getElementById("circle-timer").classList.remove("wrapper");
    document.getElementById("circle-left").classList.remove("circle");
    document.getElementById("circle-right").classList.remove("circle");
    setTimeout(function(){
        document.getElementById("circle-timer").classList.add("wrapper");
        document.getElementById("circle-left").classList.add("circle");
        document.getElementById("circle-right").classList.add("circle");
    }, 50);
}

/*---------------FullScreen------------------*/
function toggleFullscreen() {
    fullScreen = !fullScreen;

    if(fullScreen){
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) { /* Safari */
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) { /* IE11 */
            document.msExitFullscreen();
        }
    }else{
        if (document.body.requestFullscreen) {
            document.body.requestFullscreen();
        } else if (document.body.webkitRequestFullscreen) { /* Safari */
            document.body.webkitRequestFullscreen();
        } else if (document.body.msRequestFullscreen) { /* IE11 */
            document.body.msRequestFullscreen();
        }
    }
}

var isFireFox = typeof InstallTrigger !== 'undefined';

if(isFireFox){
    document.addEventListener("mozfullscreenchange", function() {
        if(fullScreen){
            document.getElementById("fullscreen-icon").innerHTML = "<path d='M5.5 0a.5.5 0 0 1 .5.5v4A1.5 1.5 0 0 1 4.5 6h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 1 .5-.5zm5 0a.5.5 0 0 1 .5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 10 4.5v-4a.5.5 0 0 1 .5-.5zM0 10.5a.5.5 0 0 1 .5-.5h4A1.5 1.5 0 0 1 6 11.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 1-.5-.5zm10 1a1.5 1.5 0 0 1 1.5-1.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 0-.5.5v4a.5.5 0 0 1-1 0v-4z'/>"
        }else{
            document.getElementById("fullscreen-icon").innerHTML = "<path d='M1.5 1a.5.5 0 0 0-.5.5v4a.5.5 0 0 1-1 0v-4A1.5 1.5 0 0 1 1.5 0h4a.5.5 0 0 1 0 1h-4zM10 .5a.5.5 0 0 1 .5-.5h4A1.5 1.5 0 0 1 16 1.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 1-.5-.5zM.5 10a.5.5 0 0 1 .5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 0 14.5v-4a.5.5 0 0 1 .5-.5zm15 0a.5.5 0 0 1 .5.5v4a1.5 1.5 0 0 1-1.5 1.5h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 1 .5-.5z'/>"
        }
    });
}else{
    /* Standard syntax */
    document.addEventListener("fullscreenchange", function() {
        if(fullScreen){
            document.getElementById("fullscreen-icon").innerHTML = "<path d='M1.5 1a.5.5 0 0 0-.5.5v4a.5.5 0 0 1-1 0v-4A1.5 1.5 0 0 1 1.5 0h4a.5.5 0 0 1 0 1h-4zM10 .5a.5.5 0 0 1 .5-.5h4A1.5 1.5 0 0 1 16 1.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 1-.5-.5zM.5 10a.5.5 0 0 1 .5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 0 14.5v-4a.5.5 0 0 1 .5-.5zm15 0a.5.5 0 0 1 .5.5v4a1.5 1.5 0 0 1-1.5 1.5h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 1 .5-.5z'/>"
        }else{
            document.getElementById("fullscreen-icon").innerHTML = "<path d='M5.5 0a.5.5 0 0 1 .5.5v4A1.5 1.5 0 0 1 4.5 6h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 1 .5-.5zm5 0a.5.5 0 0 1 .5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 10 4.5v-4a.5.5 0 0 1 .5-.5zM0 10.5a.5.5 0 0 1 .5-.5h4A1.5 1.5 0 0 1 6 11.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 1-.5-.5zm10 1a1.5 1.5 0 0 1 1.5-1.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 0-.5.5v4a.5.5 0 0 1-1 0v-4z'/>"
        }
    });
}
/*------------------------------------------------*/


document.addEventListener("keydown",function(evt){
    switch(evt.keyCode) {
        case 70:
            toggleFullscreen();
        break;
        case 84:
            changeTheme();
        break;
        case 39:
            next();
        break;
        case 72:
            hideControls();
        break;
    }
});

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
        document.getElementById("button-line").style.opacity = 0;
        document.getElementById("button-line").style.visibility = "hidden";
        document.getElementById("dropdown-content").style.opacity = 0;
        document.getElementById("timer-background").style.opacity = 0;
        document.getElementById("timer-background").style.visibility = "hidden";

        if(darktheme == true)
            btns[0].style.backgroundColor = "#161b22";
        else
            btns[0].style.backgroundColor = "white"; 
        
        document.getElementById("dropdown-content").style.display = "none";    //Fechar o dropwdown-content 
        open = false;
    }else{
        document.getElementById("button-line").style.opacity = 1;
        document.getElementById("button-line").style.visibility = "visible";
        document.getElementById("dropdown-content").style.opacity = 1;
        document.getElementById("dropdown-content").style.visibility = "visible";
        document.getElementById("timer-background").style.opacity = 1;
        document.getElementById("timer-background").style.visibility = "visible";
    }
}


function changeTheme(){
    darktheme = !darktheme;

    if(darktheme == true){
        theme.forEach(element => element.style.backgroundColor = "#161b22");
        theme.forEach(element => element.style.color = "white");
        document.getElementById("timer-background").style.backgroundColor = "rgba(255, 255, 255, 0.5)";
        document.getElementById("circle-left").style.borderColor = "#161b22";
        document.getElementById("circle-right").style.borderColor = "#161b22"; 
    }else{
        theme.forEach(element => element.style.backgroundColor = "white");
        theme.forEach(element => element.style.color = "black");
        document.getElementById("timer-background").style.backgroundColor = "rgba(0, 0, 0, 0.5)";
        document.getElementById("circle-left").style.borderColor = "white";
        document.getElementById("circle-right").style.borderColor = "white"; 
    }

    if(open)
        btns[0].style.backgroundColor = "lightgrey";
}


/*------------------TIMER------------------------*/

function selectTimer(getTime, timerbutton){
    tempo = getTime;    //Passa a ser o tempo escolhido
    defaultTime = tempo;    //Tempo default passa para esse tempo (reset do timer)
    selectedTimer = timerbutton;    //Botão escolhido no timer
    document.querySelector("[data-anim~=wrapper]").style.animationDelay = tempo/2 + "s";
    document.querySelector("[data-anim~=right]").style.animationDuration = tempo/2 + "s";
    document.querySelector("[data-anim~=left]").style.animationDuration = tempo + "s";
    restartVisualTimer();

    timerBtns.forEach(element => element.style.backgroundColor = "transparent");

    timerBtns[selectedTimer].style.backgroundColor = "rgba(125, 125, 125, 0.5)";
}

function costumTimer(timerbutton){
    var Hours = parseInt("0" + document.getElementById("Hours").value);
    var Minutes = parseInt("0" + document.getElementById("Minutes").value);
    var Seconds = parseInt("0" + document.getElementById("Seconds").value);

    document.getElementById("Hours").value =  Hours;
    document.getElementById("Minutes").value =  Minutes;
    document.getElementById("Seconds").value =  Seconds;

    var costumTime = (Hours*3600) + (Minutes*60) + Seconds;
    selectTimer(costumTime, timerbutton);
    closeCostumTimeSelector();
}

/*------------------WALLPAPER---------------------*/
function selectWallpaper(wallpaperbutton){
    if(wallpaperbutton == selectedWallpaper){ return; }

    selectedWallpaper = wallpaperbutton;
    tempo = defaultTime;
    restartVisualTimer();

    if(wallpaperbutton == 0){
        for(let i in divs)
            document.getElementById(divs[i]).style.opacity = 1;
        document.getElementById("canvas").style.opacity = 0;
    }else{
        for(let i in divs)
            document.getElementById(divs[i]).style.opacity = 0;
        document.getElementById("canvas").style.opacity = 1;
    }
    next();

    wallpaperBtns.forEach(element => element.style.backgroundColor = "transparent");

    wallpaperBtns[selectedWallpaper].style.backgroundColor = "rgba(125, 125, 125, 0.5)";
}

/*--------------------TimeSelector---------------------*/
function openPopUp(content) {
    document.getElementById("popup").style.display = "flex";
    document.getElementById("TimerSelector-content").style.display = "none";
    document.getElementById("WallpaperSelector-content").style.display = "none";

    if(content == 0){
        document.getElementById("TimerSelector-content").style.display = "flex";
        timerBtns[selectedTimer].style.backgroundColor = "rgba(125, 125, 125, 0.5)";
    }else{
        document.getElementById("WallpaperSelector-content").style.display = "flex";
        wallpaperBtns[selectedWallpaper].style.backgroundColor = "rgba(125, 125, 125, 0.5)";
    }
}

function closePopUp() {
    document.getElementById("popup").style.display = "none";
}

/*--------------------CUSTOM TIMER---------------------*/
function openCostumTimeSelector() {
    tempo = 0;

    document.querySelector("[data-anim~=wrapper]").style.animationPlayState = "paused";
    document.querySelector("[data-anim~=right]").style.animationPlayState = "paused";
    document.querySelector("[data-anim~=left]").style.animationPlayState = "paused";

    document.getElementById("CustomTime").style.display = "flex";
}

function closeCostumTimeSelector() {
    tempo = defaultTime;

    document.querySelector("[data-anim~=wrapper]").style.animationPlayState = "running";
    document.querySelector("[data-anim~=right]").style.animationPlayState = "running";
    document.querySelector("[data-anim~=left]").style.animationPlayState = "running";

    document.getElementById("CustomTime").style.display = "none";
}

window.onclick = function(event) {
    if (event.target == document.getElementById("popup")) {
        closePopUp();
    }
    if (event.target == document.getElementById("CustomTime")) {
        closeCostumTimeSelector();
    }   
}