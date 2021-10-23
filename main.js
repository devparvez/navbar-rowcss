const playerOneScoreDisplay = document.getElementById('playerOneScore');
const playerTowScoreDisplay = document.getElementById('playerTwoScore');
const winningScoreDisplay = document.querySelector('p span')
const inputScore = document.getElementById('inputScore');
const playerOneBtn = document.getElementById('player1Btn');
const playerTwoBtn = document.getElementById('player2Btn');
const resetBtn = document.getElementById('resetBtn');
let p1Score = 0;
let p2Score = 0;
const winingScore = 5;
let gameOver = false;

playerOneBtn.addEventListener('click',()=>{
   if(!gameOver){
    p1Score++;
    if(p1Score === winingScore){
        gameOver = true;
        
         playerOneBtn.setAttribute('disabled','disabled');
        playerTwoBtn.setAttribute("disabled","disabled")
        
    }
    playerOneScoreDisplay.textContent = p1Score;
   }
    
})
playerTwoBtn.addEventListener('click',()=>{
   if(!gameOver){
    p2Score++;
    if(p2Score === winingScore){

        gameOver = true;

         playerOneBtn.setAttribute('disabled','disabled');
         playerTwoBtn.setAttribute("disabled","disabled")

    }
    playerTowScoreDisplay.textContent = p2Score;
   }
})
function winner(){
    if(p2Score === winingScore){

        gameOver = true;

         playerOneBtn.setAttribute('disabled','disabled');
         playerTwoBtn.setAttribute("disabled","disabled")

    }
}


resetBtn.addEventListener('click',()=>{
    let p1Score = 0;
    let p2Score = 0;
    let gameOver = false;
    playerOneScoreDisplay.textContent = 0;
    playerTowScoreDisplay.textContent = 0;
    playerOneBtn.removeAttribute('disabled');
    playerTwoBtn.removeAttribute('disabled');


})