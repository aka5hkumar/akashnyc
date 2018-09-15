
// var A;
// var B;
// var C;
// var D;
// var E;
// var F;
// var G;

// function preload() {
//     A = loadSound("assets/A.mp3");
//     B = loadSound("assets/B.mp3");
//     C = loadSound("assets/C.mp3");
//     D = loadSound("assets/D.mp3");
//     E = loadSound("assets/E.mp3");
//     F = loadSound("assets/F.mp3");
//     G = loadSound("assets/G.mp3");
//     keyList = [A, B, C, D, E, F, G];
// }
function preload(){
    A=loadImage("assets/a.png")
    B=loadImage("assets/b.png")
    C=loadImage("assets/c.png")
    D=loadImage("assets/d.png")
    E=loadImage("assets/e.png")
    F=loadImage("assets/f.png")
    G=loadImage("assets/g.png")
    Asound = loadSound("assets/A.mp3");
    Bsound = loadSound("assets/B.mp3");
    Csound = loadSound("assets/C.mp3");
    Dsound = loadSound("assets/D.mp3");
    Esound = loadSound("assets/E.mp3");
    Fsound = loadSound("assets/F.mp3");
    Gsound = loadSound("assets/G.mp3");
}
function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    textSize(100);
    textAlign(CENTER);
    
    
}

function draw() {
  fill(0,0,255)
  noStroke()
  console.log(key)
  image(key, window.innerWidth/2,window.innerHeight/2)
  var sound=key+'sound'
  sound.play()
}
function keyPressed(){
    clear()
    text(key,window.innerWidth/2 , window.innerHeight/5);

}
