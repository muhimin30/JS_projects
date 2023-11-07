/*
  Rock Paper Scissors 🚀🔥
*/

// all global veriable needed
  let totalScore = { playerScore : 0, computerScore : 0 }
  let resultDiv = document.getElementById('result')
  let handDiv = document.getElementById('hands')
  let playerScoreDiv = document.getElementById('player-score');
// This is a function for random computer choice between rock paper scissor
function getComputerChoice() {
  let rpsChoice = ['Rock','Paper','Scissors'];
  let randomChoice = Math.floor(Math.random()*3);
  return rpsChoice[randomChoice];
}

// if draw score will be 0, if player win score will be 1 & if computer win score will be -1

function getResult(playerChoice, computerChoice) {

  let score;

  if(playerChoice == computerChoice){
    score = 0
  }else if(playerChoice == 'Rock' && computerChoice == 'Scissors'){
    score = 1
  }else if(playerChoice == 'Paper' && computerChoice == 'Rock'){
    score = 1
  }else if(playerChoice == 'Scissors' && computerChoice == 'Paper'){
    score = 1
  }else{
    score = -1
  }
  return score;
  
}

// this function is for showing result in dom which will come from onClickRPS function
function showResult(Total , Score, playerChoice, computerChoice) {

  
  if(Score == 1){
    resultDiv.innerText = "You Won!🔥"
  }else if(Score == -1){
    resultDiv.innerText = "You Lose😢"
  }else(
    resultDiv.innerText = "It's a tie🤷‍♂️"
  )

  handDiv.innerText = `👦 ${playerChoice} vs 🤖 ${computerChoice}`;
  playerScoreDiv.innerText = `Your Total Score = ${Total}`;
}

// calaulate fuction for who win
function onClickRPS(playerChoice) {
  const computerChoice = getComputerChoice();
  let Score = getResult(playerChoice , computerChoice);
  let Total = totalScore['playerScore'] += Score
  showResult(Total, Score, playerChoice, computerChoice);
}

// all click functions
function playGame() {
  // selected all rps buttons
  let rpsButtons = document.querySelectorAll('.rpsButton');

  rpsButtons.forEach(rpsButton =>{
    rpsButton.onclick = () => onClickRPS(rpsButton.value);
  })

  // target end game button & call it

  let endBtn = document.getElementById('endGameButton');

  endBtn.onclick = () => endGame(totalScore)
  
}

// ** endGame function clears all the text on the DOM **
function endGame(totalScore) {
  //clear total score
  totalScore['playerScore'] = 0;
  totalScore['computerScore'] = 0;
  //clear texts
  resultDiv.innerText = '';
  handDiv.innerText = '';
  playerScoreDiv.innerText ='';
}

playGame()