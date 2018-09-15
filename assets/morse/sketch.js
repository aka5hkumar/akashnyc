
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
    A=loadImage("https://akash.nyc/assets/CORS/a.png")
    B=loadImage("https://akash.nyc/assets/CORS/b.png")
    C=loadImage("https://akash.nyc/assets/CORS/c.png")
    D=loadImage("https://akash.nyc/assets/CORS/d.png")
    E=loadImage("https://akash.nyc/assets/CORS/e.png")
    F=loadImage("https://akash.nyc/assets/CORS/f.png")
    G=loadImage("https://akash.nyc/assets/CORS/g.png")
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
}
function keyPressed(){
    clear()
    text(key,window.innerWidth/2 , window.innerHeight/5);

}
