let video;
let cl;

function preload(){
  cl=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/eqW64j39k/model.json")
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  video=createCapture(VIDEO)
  video.hide();

  setTimeout(classify,5000);
}

function classify(){
  cl.classify(video, result)
}

function result(e,r){
  console.log(r);
  const 종류=r[0].label;
  if(종류==="찰과상"){
    open("병1.html","_self")
  } else if (종류==="화상"){
    open("병2.html","_self")
  } else if (종류==="타박상"){
    open("병3.html","_self")
  }
}

function draw() {
  background(220);
  image(video,0,0,window.innerWidth, window.innerHeight)
}

