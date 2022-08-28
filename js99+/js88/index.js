var count;
var temp=-1;
var end_count;
var can_edit=false;

// R.P.Raiyani


let speech = new SpeechSynthesisUtterance();
speech.lang = "en";



const a = document.getElementById("count");
const start = document.getElementById("start");
const end = document.getElementById("stop");
const content = document.getElementById("list");
const mybody = document.getElementById("mybody");
const stat = document.getElementById("start-btn");
flag = false;

a.innerHTML="0";

function activCount(blue){
    blue.blur();
    if(flag==false && !can_edit){
        if(temp == parseInt(start.value)){
            flag = true;
            end_count=parseInt(end.value);
            stat.classList.add("stop-btn");
            stat.innerHTML="Stop";
        }else{
            count=parseInt(start.value);
            temp=count;
            end_count=parseInt(end.value);
            flag = true;
            stat.classList.add("stop-btn");
            stat.innerHTML="Stop";
        }
    }else{
        flag=false;
        stat.classList.remove("stop-btn");
        stat.innerHTML="Start";

    }

}

function up(){
    if(count>end_count){
        flag=false;
        stat.classList.remove("stop-btn");
        stat.innerHTML="Start";
        temp = -1;
        return 0;
    }
    a.innerHTML = count;

    if(count>99 && count%100!=0){
        c_temp = count - Math.floor(count/100)*100;
        speech.text = c_temp.toString();
        window.speechSynthesis.speak(speech);
    }else{
        speech.text = count.toString();
        window.speechSynthesis.speak(speech);
    }
    count++;
}


function move(event){
    if(flag==true && !can_edit){
        if(event.key==="Enter"){
            up();
        }else if(event.key==="Backspace"){
            content.innerHTML+= ((count-1).toString())+","+" ";
            up();

        }
    }
}

function clearall(){
    content.innerHTML="";
}


function printall(){

    var divContents = content.innerHTML;
    var a = window.open('', '', 'height=500, width=500');
    a.document.write('<html><body > <h1>absent students<br><br>'+divContents+'</body></html>');
    a.document.close();
    a.print();
    a.window.close();
}


function make_edit(editbtn){
    if(can_edit){
        editbtn.innerHTML="edit";
        content.setAttribute("contentEditable","false");
        can_edit=false;
        flag=true;
        if(end_count!=parseInt(a.innerHTML) && end.value!=="" && a.innerHTML!=="0"){
            stat.classList.add("stop-btn");
            stat.innerHTML="Stop";
        }
    }else{
        editbtn.innerHTML="save";
        content.setAttribute("contentEditable","true");
        content.focus();
        can_edit=true;
        flag=false;
        if(end_count!=parseInt(a.innerHTML) && end.value!=="" && a.innerHTML!=="0"){
            stat.classList.remove("stop-btn");
            stat.innerHTML="Start";
        }
    }
}


function getFocus(){
    flag=false;
    stat.classList.remove("stop-btn");
    stat.innerHTML="Start";
}








