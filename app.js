function computerPlay() {
  return Math.floor(Math.random() * 3);
}
const playerSelection = [
  prompt('rock, paper or scissors'),
  prompt('rock, paper or scissors'),
  prompt('rock, paper or scissors'),
  prompt('rock, paper or scissors'),
  prompt('rock, paper or scissors'),
];
console.log(playerSelection);

const computerSelection = [];
computerSelection.push(computerPlay());
computerSelection.push(computerPlay());
computerSelection.push(computerPlay());
computerSelection.push(computerPlay());
computerSelection.push(computerPlay());

console.log(computerSelection);

let playerScoreTotal = 0;
let compScoreTotal = 0;

function playRound() {
  for (let i = 0; i < 5; i++) {
    if (
      // player wins
      (computerSelection[i] === 0 && playerSelection[i] === 'paper') ||
      (computerSelection[i] === 1 && playerSelection[i] === 'scissors') ||
      (computerSelection[i] === 2 && playerSelection[i] === 'rock')
    ) {
      console.log(`player wins`);
      console.log(
        `player score ${(playerScoreTotal += 1)}...computer score ${compScoreTotal}`
      );
    } else if (
      // computer wins
      (computerSelection[i] === 0 && playerSelection[i] === 'scissors') ||
      (computerSelection[i] === 1 && playerSelection[i] === 'rock') ||
      (computerSelection[i] === 2 && playerSelection[i] === 'paper')
    ) {
      console.log(`computer wins`);
      console.log(
        `player score ${playerScoreTotal}...computer score ${(compScoreTotal += 1)}`
      );
    } else {
      console.log('tie');
    }
  }
}

playRound();

if (playerScoreTotal > compScoreTotal) {
  console.log(
    `Players score of ${playerScoreTotal} was sufficient to beat his godless AI enemy`
  );
} else if (playerScoreTotal < compScoreTotal) {
  console.log(
    `The godless master defeated his inferior human creator with an advantage of ${
      compScoreTotal - playerScoreTotal
    } point`
  );
} else {
  console.log(` We have a tie on our hands.`);
}
