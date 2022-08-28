var temp = "";
var ac = "";
var op = "";

var display = document.getElementById("display");

const audio = new Audio("button-click.mp3");

function add(a) {

    audio.play();
    temp += a;
    ac += a;
    show();
    console.log(ac);
}

function addOp(op) {
    audio.play();
    ac += op;
    temp = "";
    console.log(ac);
}

function invert() {
    audio.play();
    temp = (parseFloat(temp) * -1).toString();
    show();
}

function calculate() {

    audio.play();
    temp = eval(ac);
    ac = temp;
    show();
    console.log(ac);
}

function clearAll() {
    audio.play();
    temp = ac = op = "";
    display.innerHTML = "0";
    console.log(ac);
}

function show() {
    display.innerHTML = temp;
}

function press(event) {
    key = event.key;
    if ((parseInt(key) >= 0 && parseInt(key)) || key == ".") {
        add(key);
    } else if (key == "+" || key == "-" || key == "*" || key == "/") {
        addOp(key);
    } else if (key == "=") {
        calculate();
    }
}

var form = document.forms["setColor"];
var calci = document.getElementsByClassName("calci")[0];
var switches = document.querySelectorAll(".calci input");

function setTheme() {
    document.body.style.backgroundColor = form["backgroundColor"].value;
    calci.style.backgroundColor = form["calciColor"].value;
    switches.forEach((obj) => {
        obj.style.backgroundColor = form["switchColor"].value;
        obj.style.color = form["textColor"].value;
    });
}



function randomChange(){
    document.body.style.backgroundColor = randomColor();
    calci.style.backgroundColor = randomColor();
    switches.forEach((obj) => {
        obj.style.backgroundColor = randomColor();
        obj.style.color = randomColor();
    });
    console.log("changed");
}

isPartyOn = false;
var partyInterval;

function party(){
    
    if(isPartyOn){
        isPartyOn = false;
        clearInterval(partyInterval);
    }else{
        isPartyOn = true;
        partyInterval =  setInterval(randomChange,100);
    }
}


function randomColor(){
    return("rgb("+Math.random()*256+","+Math.random()*256+","+Math.random()*256+")");
}
