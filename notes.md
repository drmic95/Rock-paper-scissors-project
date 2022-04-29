// first part of functioning code

const options = ['rock', 'paper', 'scissors'];

function computerPlay(random) {
let random1 = Math.floor(Math.random() \* random.length);
return random1;
}
const playerSelection = 'rock';
let computerSelection = computerPlay(options);

function playRound(playerSelection, computerSelection) {
if (computerSelection == 0 && playerSelection == 'rock') {
console.log('tie');
} else if (computerSelection == 0 && playerSelection == 'paper') {
console.log('player wins');
} else if (computerSelection == 0 && playerSelection == 'scissors') {
console.log('computer wins');
} else if (computerSelection == 1 && playerSelection == 'rock') {
console.log('computer wins');
} else if (computerSelection == 1 && playerSelection == 'paper') {
console.log('tie');
} else if (computerSelection == 1 && playerSelection == 'scissors') {
console.log('player wins');
} else if (computerSelection == 2 && playerSelection == 'rock') {
console.log('player wins');
} else if (computerSelection == 2 && playerSelection == 'paper') {
console.log('computer wins');
} else if (computerSelection == 2 && playerSelection == 'scissors') {
console.log('tie');
}
}
playRound(playerSelection, computerSelection);
