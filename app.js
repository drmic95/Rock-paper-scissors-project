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

function playRound(computerSelection, playerSelection) {
  for (let i = 0; i < 10; i++) {
    computerSelection[i];
    if (
      (computerSelection === 0 && playerSelection === 'paper') ||
      (computerSelection === 1 && playerSelection === 'scissors') ||
      (computerSelection === 2 && playerSelection === 'rock')
    ) {
      console.log(`player wins`);
      playerScoreTotal++;
      console.log(
        `player score ${playerScoreTotal}...computer score ${compScoreTotal}`
      );
    } else if (
      (computerSelection === 0 && playerSelection === 'scissors') ||
      (computerSelection === 1 && playerSelection === 'rock') ||
      (computerSelection === 2 && playerSelection === 'paper')
    ) {
      // computer wins
      console.log(`computer wins`);
      compScoreTotal++;
      console.log(
        `player score ${playerScoreTotal}...computer score ${compScoreTotal}`
      );
    }
  }
}

playRound(computerSelection, playerSelection);
