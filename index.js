window.AudioContext = window.AudioContext || window.webkitAudioContext;  
var audioCtx = null;
var oscillator;
var start = false;
var heltz = 654;


function switchStart(to){
    start = to;
    var buttonEle =  document.getElementById("startButton");
    if (start) { 
        if (audioCtx == null) audioCtx = new window.AudioContext();
        buttonEle.value = "ストップ";
        buttonEle.parentNode.style.borderColor = "#F00";
        oscillator = audioCtx.createOscillator();
        oscillator.connect( audioCtx.destination );
        oscillator.type = "sine";
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
function onStartButtonClick(){
    switchStart(!start);
}