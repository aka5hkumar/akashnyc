// The midi notes of a scale
// var notes = [58,  60, 62, 64, 65, 67, 69, 71, 72];
var notes ={
    C: 58,
    D: 60,
    E: 62,
    F: 64,
    G: 66,
    H: 68,
    A: 70,
    B: 72
};

// var C = 0
// var D = 1
// var E = 2
// var F = 3 
// var G = 4
// var A = 5
// var B = 6
// For automatically playing the song
var index = 0;
var song = [
  { note: 4, duration: 400, display: "D" },
  { note: 0, duration: 200, display: "G" },
  { note: 1, duration: 200, display: "A" },
  { note: 2, duration: 200, display: "B" },
  { note: 3, duration: 200, display: "C" },
  { note: 4, duration: 400, display: "D" },
  { note: 0, duration: 400, display: "G" },
  { note: 0, duration: 400, display: "G" }
];
var trigger = 0;
var autoplay = false;
var osc;
var background;

function preload(){
  background = loadImage("assets/final.png");
  // three = loadImage("assets/Asset 3.svg"); 
  // four = loadImage("assets/Asset 4.svg"); 
  // five = loadImage("assets/Asset 5.svg"); 
  // six = loadImage("assets/Asset 6.svg"); 
  // seven = loadImage("assets/Asset 7.svg"); 
  // eight = loadImage("assets/Asset 8.svg"); 
  // nine = loadImage("assets/Asset 9.svg"); 
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  var div = createDiv("Click to play notes or ")
  div.id("instructions");
  var button = createButton("play song automatically.");
  button.parent("instructions");
  // Trigger automatically playing
  button.mousePressed(function() {
    if (!autoplay) {
      index = 0;
      autoplay = true;
    }
  });

  // A triangle oscillator
  osc = new p5.TriOsc();
  // Start silent
  osc.start();
  osc.amp(0);
}

// A function to play a note
function playNote(note, duration) {
  osc.freq(midiToFreq(note));
  osc.amp(10);
  // Fade it in

  // If we sest a duration, fade it out
  if (duration) {
    setTimeout(function() {
      osc.fade(0,0.2);
    }, duration-50);
  }
}

function draw() {
  image(background, 0, 0);
  // If we are autoplaying and it's time for the next note
  if (autoplay && millis() > trigger){
    playNote(notes[song[index].note], song[index].duration);
    trigger = millis() + song[index].duration;
    // Move to the next note
    index ++;
  // We're at the end, stop autoplaying.
  } else if (index >= song.length) {
    autoplay = false;
  }


  // Draw a keyboard

  // The width for each key
  var w = width / Object.keys(notes).length;
  for (var i = 0; i < Object.keys(notes).length; i++) {
    var x = i * w;
    // If the mouse is over the key
    if (mouseX > x && mouseX < x + w && mouseY < height) {
      // If we're clicking
      if (mouseIsPressed) {
        fill(100,255,200);
      // Or just rolling over
      } else {
        fill(127);
      }
    } else {
      fill(200);
    }

    // Or if we're playing the song, let's highlight it too
    if (autoplay && i === song[index-1].note) {
      fill(100,255,200);
    }

    // Draw the key
    //rect(x, 0, w-1, height-1);


  }

}

// When we click
function keyPressed() {
  
  // Map mouse to the key index
  console.log(key, notes, notes[key])
//   alert(key)
  playNote(notes[key]);
  fill(255,0,255)
  image(imgAsset, 0, 0);
  


  var imgAsset= document.createElement("img") 
  imgAsset.src = "./assets/"+key+'.svg'
  imgAsset.id = "childImg"
  var x = document.getElementById('x')
  x.appendChild(imgAsset);
  setTimeout(removeImage, 5000)


}

// Fade it out when we release
function keyReleased() {
  osc.fade(0,2.5);
}

function removeImage(){
  if(document.getElementById('textIn').value!='');
  {
    document.getElementById('textIn').value='';
    var x = document.getElementById('x');
    var y = document.getElementById('childImg');
    x.removeChild(y);
  }

}

