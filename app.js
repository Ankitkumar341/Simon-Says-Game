let gameSeq=[];
let playerSeq=[];

let btnsColor = ["red", "yellow", "green", "purple"];
let started= false;
let level=0;

let h2 = document.querySelector("h2");
document.addEventListener("keypress", function() {
   if(started == false){
    console.log("Game Started");
    started=true;
   }
   levelUp();
});

function GameFlash(btn) {
 btn.classList.add("flash");
 setTimeout(function(){
    btn.classList.remove("flash");
 },250);
}
function userFlash(btn) {
   btn.classList.add("userflash");
   setTimeout(function(){
      btn.classList.remove("userflash");
   },250);
  }
  

function levelUp (){
   playerSeq=[];
     level++;
     h2.innerText= `level ${level}`;

    let randomIdx =Math.floor(Math.random() * 3)
    let randomColor = btnsColor[randomIdx];
    let randombtn = document.querySelector(`.${randomColor}`);
      gameSeq.push(randomColor)     
      console.log(gameSeq)
      GameFlash(randombtn);
}  

function  checkAns(idx){
    
    if (playerSeq[idx]===gameSeq[idx]){
      if(playerSeq.length ==gameSeq.length){
         setTimeout(levelUp,1000);
      }
    }else{
      h2.innerHTML=  `Game Over ! Your Score was <b>${level}</b>  <br> Press Any key to Start`;
      document.querySelector("body").style.backgroundColor = "red";
      setTimeout( function(){
      document.querySelector("body").style.backgroundColor = "white";
  
      },150)
      reset();
    }
   

}  

function btnPress(){
   
   let btn = this;
   userFlash(btn);
   userColor =  btn.getAttribute("id");
   playerSeq.push(userColor); 
  
   checkAns(playerSeq.length-1);
}

let allbtn = document.querySelectorAll(".btn"); 
    for(btn of allbtn ) {
      btn.addEventListener("click",btnPress);
    }

function reset(){
started =false;
playerSeq =[];
gameSeq=[];
level=0;
}