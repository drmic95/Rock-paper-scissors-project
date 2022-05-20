function computerPlay() {
  return Math.floor(Math.random() * 3);
}
let playerScoreTotal = 0;
let compScoreTotal = 0;
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const PlayerScore = document.querySelector('.score-player');
const compScore = document.querySelector('.score-comp');
const playCounter = document.querySelector('.play-round-counter');
const playerSelection = [];
const computerSelection = [];

rock.addEventListener('click', function () {
  playerSelection.unshift('rock');
  computerSelection.unshift(computerPlay());
  playRound();
  playCounter.textContent = computerSelection.length;
  gameOver();
});
paper.addEventListener('click', function () {
  playerSelection.unshift('paper');
  computerSelection.unshift(computerPlay());
  playRound();
  playCounter.textContent = computerSelection.length;
  gameOver();
});
scissors.addEventListener('click', function () {
  playerSelection.unshift('scissors');
  computerSelection.unshift(computerPlay());
  playRound();
  playCounter.textContent = computerSelection.length;
  gameOver();
});

console.log(playerSelection);
console.log(computerSelection);

function playRound() {
  if (
    // player wins
    (computerSelection[0] === 0 && playerSelection[0] === 'paper') ||
    (computerSelection[0] === 1 && playerSelection[0] === 'scissors') ||
    (computerSelection[0] === 2 && playerSelection[0] === 'rock')
  ) {
    PlayerScore.textContent = playerScoreTotal++;
  } else if (
    // computer wins
    (computerSelection[0] === 0 && playerSelection[0] === 'scissors') ||
    (computerSelection[0] === 1 && playerSelection[0] === 'rock') ||
    (computerSelection[0] === 2 && playerSelection[0] === 'paper')
  ) {
    compScore.textContent = compScoreTotal++;
  } else {
    console.log('tie');
  }
}
playCounter.textContent = computerSelection.length;

function gameOver() {
  if (computerSelection.length === 11 && playerScoreTotal > compScoreTotal) {
    rock.remove();
    paper.remove();
    scissors.remove();
    alert(
      `Players score of ${playerScoreTotal} was sufficient to beat his godless AI enemy`
    );
  } else if (
    computerSelection.length === 11 &&
    playerScoreTotal < compScoreTotal
  ) {
    rock.remove();
    paper.remove();
    scissors.remove();
    alert(
      `The godless master defeated his inferior human creator with an advantage of ${
        compScoreTotal - playerScoreTotal
      } point`
    );
  } else if (
    computerSelection.length === 11 &&
    playerScoreTotal === compScoreTotal
  ) {
    rock.remove();
    paper.remove();
    scissors.remove();
    alert('We have a tie on our hands, better luck next time around');
  }
}

// span(playerScore).text content = Player wins with some DOM css, color, size whatever, or AI wins with same logic
// if statement or function that will stop the game after result of 5 is achieved
// kill functionality of buttons after the game is done, toggle
