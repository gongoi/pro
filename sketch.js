let video; //비디오, 카메라 장치 저장
let cl; //우리가 학습시킨 머신러닝 모델을 가져와서 저장할 변수

//프로그램이 시작하기 전에 미리 준비
function preload(){
  //클라우드상에 있는 우리의 모델을 가져와  ml5코드를 통해 변수명 cl 에 저장
  cl=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/eqW64j39k/model.json")
}

//준비 하는 곳 1번만 실행
function setup() {
  //화면의 크기를 결정
  //화면 가득 채운 캔버스 생성
  createCanvas(window.innerWidth, window.innerHeight);
  //카메라, 비디오장치 가져오기 =>바로 화면에 사진이 출력
  video=createCapture(VIDEO)
  //사진 출력 막기
  video.hide();
  //상처를 비출동안 잠시 대기하기 5초
  //5초 후에 classify 함수를 실행
  setTimeout(classify,5000);
}

function classify(){
  //우리의 모델에 비디오, 카메라의 정보를 넣고, 그 결과로 result를 실행시킨다.
  cl.classify(video, result)
}

function result(e,r){
  //r은 판별 결과
  console.log(r);
  //0번은 제일 확률이 높은거
  //0번의 이름을 뺀다. 
  const 종류=r[0].label;
  if(종류==="찰과상"){
    open("병1.html","_self")
  } else if (종류==="화상"){
    open("병2.html","_self")
  } else if (종류==="타박상"){
    open("병3.html","_self")
  }
}

//항상실행되는 함수
function draw() {
  //배경을 220으로 색칠하고,(회색,
  background(220);
  //카메라의 정보를 캔버스(화면)에 띄운다.
  image(video,0,0,window.innerWidth, window.innerHeight)
}

