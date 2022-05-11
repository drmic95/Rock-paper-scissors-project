'strict code';

const options = ['rock', 'paper', 'scissors'];

function computerPlay(random) {
  let random1 = Math.floor(Math.random() * random.length);
  return random1;
}
let playerSelection = prompt('');
let computerSelection = computerPlay(options);

let playerScoreTotal = 0;
let compScoreTotal = 0;

function playRound(playerSelection, computerSelection) {
  if (computerSelection == 0 && playerSelection == 'rock') {
    console.log('tie');
  } else if (computerSelection == 0 && playerSelection == 'paper') {
    console.log('player wins');
    return (playerScoreTotal = playerScoreTotal + 1);
  } else if (computerSelection == 0 && playerSelection == 'scissors') {
    console.log('computer wins');
    return (compScoreTotal = compScoreTotal + 1);
  } else if (computerSelection == 1 && playerSelection == 'rock') {
    console.log('computer wins');
    return (compScoreTotal = compScoreTotal + 1);
  } else if (computerSelection == 1 && playerSelection == 'paper') {
    console.log('tie');
  } else if (computerSelection == 1 && playerSelection == 'scissors') {
    console.log('player wins');
    return (playerScoreTotal = playerScoreTotal + 1);
  } else if (computerSelection == 2 && playerSelection == 'rock') {
    console.log('player wins');
    return (playerScoreTotal = playerScoreTotal + 1);
  } else if (computerSelection == 2 && playerSelection == 'paper') {
    console.log('computer wins');
    return (compScoreTotal = compScoreTotal + 1);
  } else if (computerSelection == 2 && playerSelection == 'scissors') {
    console.log('tie');
  }
}

function game() {
  for (let i = 0; i < 10; i++) {
    playRound(playerSelection, computerSelection)[i];
    console.log(
      `player score ${playerScoreTotal}...computer score ${compScoreTotal}`
    );
  }
}

game();

// playRound(playerSelection, computerSelection);

// console.log('playerScore', playerScoreTotal);
// console.log('computerScore', compScoreTotal);
//   `player score ${playerScoreTotal[i]}...computer score ${compScoreTotal[i]}`;
