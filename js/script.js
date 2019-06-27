const output = document.getElementById('output');
const result = document.getElementById('result');
const container = document.getElementById('container');
var playerScore = 0;
var computerScore = 0;
var rounds;

//Funkcja new game
function askNumberOfGames() {   
  var question = prompt("How many rounds end the game?", 5);
  document.getElementById('container').style.display="flex";
  
  if(question != null){
    
    document.getElementById('winningGamesNumber').innerHTML = "You have " + question + " rounds.";     
  }   
  rounds = parseInt(question); 
  
}


//Funkcja losująca
function computerMove(){
  var choice = Math.floor(Math.random()*3+1);  
  return choice;
}

//Funkcja playerMove
function playerMove(moveId){  
  output.classList.remove('win', 'draw', 'lose');
  var choice = computerMove();  
  
  if(choice === 1 && moveId == 'papier'){
    output.innerHTML = 'DRAW <br>you played PAPER, computer also played PAPER';    
    output.classList.add('draw');
  }
  else if(choice === 1 && moveId == 'kamien'){
    output.innerHTML = 'YOU LOSE <br>you played ROCK, computer played PAPER';    
    output.classList.add('lose');
    computerScore +=1;    
  }
  else if(choice === 1 && moveId == 'nozyce'){
    output.innerHTML = 'YOU WON <br>you played SCISSORS, computer played PAPER';   
    output.classList.add('win');
    playerScore +=1;    
  }
  else if(choice === 2 && moveId == 'papier'){
    output.innerHTML = 'YOU WON <br>you played PAPER, computer played ROCK';    
    output.classList.add('win');
    playerScore +=1;    
  }
  else if(choice === 2 && moveId == 'kamien'){
    output.innerHTML = 'DRAW <br>you played ROCK, computer played ROCK';   
    output.classList.add('draw');
  }
  else if(choice === 2 && moveId == 'nozyce'){
    output.innerHTML = 'YOU LOSE <br>you played SCISSORS, computer played ROCK';    
    output.classList.add('lose');
    computerScore +=1;   
  }
  else if(choice === 3 && moveId == 'papier'){
    output.innerHTML = 'YOU LOSE <br>you played PAPER, computer played SCISSORS';    
    output.classList.add('lose');
    computerScore +=1;    
  }
  else if(choice === 3 && moveId == 'kamien'){
    output.innerHTML = 'YOU WON <br>you played ROCK, computer played SCISSORS';
    output.classList.add('win');
    playerScore +=1;    
  }
  else if(choice === 3 && moveId == 'nozyce'){
    output.innerHTML = 'DRAW <br>you played SCISSORS, computer played SCISSORS';
    output.classList.add('draw');
  }  
  result.innerHTML = playerScore + " : " + computerScore;
  
  function gameOver() {
    output.innerHTML += "<br>Game over, please press the <b>New Game</b> button!";   
  }
  
  function clickButtonAfterEndGame() {
    document.getElementById('kamien').onclick = function() {gameOver()};
      document.getElementById('papier').onclick = function() {gameOver()};
      document.getElementById('nozyce').onclick = function() {gameOver()};
      document.getElementById('new-game').onclick = function(){
        location.reload(true);        
      }
  } 
  
    if(rounds === playerScore) {
      output.innerHTML += "<br><br> YOU WON THE ENTIRE GAME!!!"
      clickButtonAfterEndGame();
      container.classList.add('endGame');
      output.style.background = "#9ee585";
    }
    else if(rounds === computerScore){
      output.innerHTML += "<br><br> YOU LOST THE ENTIRE GAME :(";
      clickButtonAfterEndGame();
      container.classList.add('endGame');
      output.style.background = "#e25e4f";
    } 
  
}
