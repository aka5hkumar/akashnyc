var C = 60
var D = 72
var E = 80
var osc

function setup(){
    createCanvas(window.innerWidth, window.innerHeight);
    osc = new p5.TriOsc();
    // Start silent
    osc.start();
    osc.amp(0);
    textSize(50);
}

function draw(){
   
}
function playNote(note) {
    osc.freq(midiToFreq(note));
    setTimeout(function() {
        osc.fade(0,0.2);
      }, 200);
    }


function keyPressed(){
    clear()
    text(key,window.innerWidth/2, window.innerHeight/2)
    playNote(key)
}