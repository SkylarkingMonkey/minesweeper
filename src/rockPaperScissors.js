
let userInput = prompt('Rock, paper or scissors?');
const getUserChoice = (userInput) => {
  userInput = prompt('Rock, paper or scissors?');
	userInput = userInput.toLowerCase();
  if(userInput === 'rock' | userInput === 'paper' | userInput === 'scissors' | userInput === 'bomb'){
    return userInput;
  }else{
    console.log('Please enter "Rock", "Paper" or "Scissors"!');
  }
}

const getComputerChoice = () => {
  const computerChoice = Math.floor(Math.random()*3);
  if(computerChoice === 0){
    return 'rock';
  } else if(computerChoice === 1){
    return 'paper';
  } else {
    return 'scissors';
  }
}

const determineWinner = (userChoice, computerChoice) => {
	if(userChoice === 'bomb'){
		return 'You have outsmarted the Computer Overlord! . . . for now.'
	}
  if(userChoice === computerChoice){
    return 'The Game is a Tie!  Play again!';
  }
  if(userChoice === 'paper') {
    if(computerChoice === 'rock') {
      return 'You Win!';
    } else{
      return 'The Computer Overlord Wins!';
    }
	}
  if (userChoice === 'scissors'){
    if(computerChoice === 'rock') {
      return 'The Computer Overlord Wins!';
    } else {
      return 'You have defeated the Computer Overlord!...for now';
		}
	}
  if (userChoice === 'rock'){
      if(computerChoice === 'scissors'){
        return 'You have defeated the Computer Overlord... for now';
      } else {
        return 'You lose bitch.';
      }
    }
}


const playGame = () => {
  const userChoice = getUserChoice('paper');
  const computerChoice = getComputerChoice();
  console.log('You threw: ' + userChoice);
  console.log('The computer threw: ' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
}

playGame();
