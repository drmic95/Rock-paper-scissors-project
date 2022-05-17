// 'use strict';

function computerPlay() {
  return Math.floor(Math.random() * 3);
}

const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const playerSelection = [];
const computerSelection = [];

rock.addEventListener('click', function () {
  playerSelection.unshift('rock');
  computerSelection.unshift(computerPlay());
  playRound();
  // player score and comp score on html elements
  // if statement or function that will stop the game after result of 5 is achieved, or after there are 5 items in array;
  // kill functionality of buttons after the game is done, toggle
});
paper.addEventListener('click', function () {
  playerSelection.unshift('paper');
  computerSelection.unshift(computerPlay());
  playRound();
});
scissors.addEventListener('click', function () {
  playerSelection.unshift('scissors');
  computerSelection.unshift(computerPlay());
  playRound();
});

console.log(playerSelection);
console.log(computerSelection);

let playerScoreTotal = 0;
let compScoreTotal = 0;

function playRound() {
  if (
    // player wins
    (computerSelection[0] === 0 && playerSelection[0] === 'paper') ||
    (computerSelection[0] === 1 && playerSelection[0] === 'scissors') ||
    (computerSelection[0] === 2 && playerSelection[0] === 'rock')
  ) {
    console.log(
      `player wins --- player score ${(playerScoreTotal += 1)}...computer score ${compScoreTotal}`
    );
  } else if (
    // computer wins
    (computerSelection[0] === 0 && playerSelection[0] === 'scissors') ||
    (computerSelection[0] === 1 && playerSelection[0] === 'rock') ||
    (computerSelection[0] === 2 && playerSelection[0] === 'paper')
  ) {
    console.log(
      `computer wins --- player score ${playerScoreTotal}...computer score ${(compScoreTotal += 1)}`
    );
  } else {
    console.log('tie');
  }
}

// playRound();
