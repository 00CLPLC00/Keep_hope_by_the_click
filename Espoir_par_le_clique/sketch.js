// If you want hope to appear, click your mouse as fast as possible.
// Is there hope? Is he small? Big? Is a little hope enough? Does it take energy to keep just a little bit of hope?
//Blue : Hope
//Purple : uncertainty

//code made by CLPLC
//Instagram / Bandcamp
// Code! Programming with p5.js

//Bleu : l'espoir.
//Violet : l'incertitude. 

// Si tu veux que l'espoir apparaisse, clique le plus vite possible sur ta souris.
//L'espoir est-il au rendez-vous? Est-il petit? Grand? Un petit espoir suffit-il? Faut-il de l'energie pour garder rien qu'un tout petit espoir? 

let x;
let speed = 0.03;
let color;
let y;


function setup() {
  createCanvas(400, 400);
   background(0);
}

function draw() {
  //background(0);
  
  x = random(0,400);
  y = random(0,400),
  color = random(0,255);
  
  noStroke()
  fill(color,0,color,random(0,255));
  circle(x,y,random(3,100),50);

}
//KEEP HOPE ///////////////  Garder l'espoir//////
function mousePressed(){
  noStroke()
  fill(0,0,color,random(0,255));
  circle(x,y,random(3,100),50);
  
}