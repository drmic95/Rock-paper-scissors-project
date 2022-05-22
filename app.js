// ELEMENTS
const playerScoreDiv = document.querySelector('.score-player');
const compScoreDiv = document.querySelector('.score-comp');
const playCounterDiv = document.querySelector('.play-round-counter');
const buttonsContainer = document.querySelector('.btn-container');
const roundResultDiv = document.querySelector('.round-result');
const resetButton = document.querySelector('.reset');

// GAME
const ROCK = 'rock';
const PAPER = 'paper';
const SCISSORS = 'scissors';
const options = [ROCK, PAPER, SCISSORS];

function computerPlay() {
  return Math.floor(Math.random() * 3);
}

resetButton.addEventListener('click', () => resetGame());

// this enables only one listener
buttonsContainer.addEventListener('click', (event) => {
  const isRockSelected = event.target.classList.contains(ROCK);
  const isScissorsSelected = event.target.classList.contains(SCISSORS);
  const isPaperSelected = event.target.classList.contains(PAPER);

  if (isRockSelected) {
    playRound(ROCK);
  }

  if (isPaperSelected) {
    playRound(PAPER);
  }

  if (isScissorsSelected) {
    playRound(SCISSORS);
  }
});

function resetGame() {
  playerScoreTotal = 0;
  compScoreTotal = 0;
  roundNumber = 0;
  playerScoreDiv.textContent = 0;
  compScoreDiv.textContent = 0;
  playCounterDiv.textContent = 0;
  resetButton.style.display = 'none';
  roundResultDiv.textContent = '';
  buttonsContainer.style.display = 'flex';
}

let playerScoreTotal = 0;
let compScoreTotal = 0;
let roundNumber = 0;

function playRound(playerSelection) {
  const computerSelection = options[computerPlay()];

  console.log('PLAYER: ', playerSelection);
  console.log('COMPUTER: ', computerSelection);
  console.log('\n');
  if (
    // player wins
    (playerSelection === ROCK && computerSelection === SCISSORS) ||
    (playerSelection === PAPER && computerSelection === ROCK) ||
    (playerSelection === SCISSORS && computerSelection === PAPER)
  ) {
    // player score is increased here
    playerScoreTotal += 1;
    // the increased value is displayed
    playerScoreDiv.textContent = playerScoreTotal;
    roundResultDiv.textContent = 'Player wins round!';
  } else if (
    // computer wins
    (computerSelection === ROCK && playerSelection === SCISSORS) ||
    (computerSelection === PAPER && playerSelection === ROCK) ||
    (computerSelection === SCISSORS && playerSelection === PAPER)
  ) {
    // computer score is increased here
    compScoreTotal += 1;
    // the increased value is displayed
    compScoreDiv.textContent = compScoreTotal;
    roundResultDiv.textContent = 'Computer wins round!';
  } else {
    roundResultDiv.textContent = 'Tie round!';
  }
  // next round
  roundNumber++;
  playCounterDiv.textContent = roundNumber;

  // first to 5 wins
  if (playerScoreTotal === 5 || compScoreTotal === 5) {
    gameOver();
  }
}

function gameOver() {
  if (playerScoreTotal > compScoreTotal) {
    alert(
      `Players score of ${playerScoreTotal} was sufficient to beat his godless AI enemy`,
    );
    roundResultDiv.textContent = 'PLAYER WINS THE GAME!';
  } else if (playerScoreTotal < compScoreTotal) {
    alert(
      `The godless master defeated his inferior human creator with an advantage of ${
        compScoreTotal - playerScoreTotal
      } point`,
    );
    roundResultDiv.textContent = 'GODLESS AI WINS THE GAME!';
  }

  buttonsContainer.style.display = 'none';
  resetButton.style.display = 'block';
}
