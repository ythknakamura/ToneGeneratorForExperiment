window.AudioContext = window.AudioContext || window.webkitAudioContext;  
var audioCtx = new window.AudioContext();
var oscillator = audioCtx.createOscillator();
oscillator.type = document.getElementById("typeSelect").value;
var start = false;
var heltz;

onResetButtonClick();

function changeHeltz(diff){
   heltz += diff;
   heltz = Math.min(heltz, 20000);
   heltz = Math.max(heltz, 20);
   document.getElementById("hz").innerHTML = heltz;
   oscillator.frequency.value = heltz;
}

function switchStart(to){
    start = to;
    var buttonEle =  document.getElementById("startButton");
    if(start){ 
        buttonEle.value = "ストップ";
        buttonEle.parentNode.style.borderColor = "red";
        oscillator = audioCtx.createOscillator();
        oscillator.connect( audioCtx.destination );
        oscillator.type =  document.getElementById("typeSelect").value;
        oscillator.frequency.value = heltz;
        oscillator.start();
    }
    else{
        buttonEle.value = "スタート";
        buttonEle.parentNode.style.borderColor = "#888";
        oscillator.stop(0);
    }
}

//イベント
function onTypeChanged(){
    for (var n in oscillator) {
        oscillator.type = document.getElementById("typeSelect").value;
    }
}

function onStartButtonClick(){
    switchStart(!start);
}

function onResetButtonClick(){
    if(start)switchStart(false);
    heltz = 440;
    changeHeltz(0);
}
