const choiceList= ['Paper', 'Scissors', 'Rock']

// Randomly return paper, rock or scissors as computer's choice
function getComputerChoice(){
    randomNumber = Math.floor(Math.random() * choiceList.length); 
    return choiceList[randomNumber]
}


/* A function that plays a single round of Rock Paper Scissors. 
The function should take two parameters - the playerSelection 
and computerSelection - and then return a string that declares the
 winner of the round like so: "You Lose! Paper beats Rock"
 */

 function playRound(playerSelection, computerSelection) {
    let playerSelectionUpper = playerSelection.toUpperCase()
    let computerSelectionUpper = computerSelection.toUpperCase()
    let playerSelectionNumber = 0
    let computerSelectionNumber = 0

    switch(playerSelectionUpper) {
        case "ROCK":
            playerSelectionNumber = 3
            break
        case "SISSORS":
            playerSelectionNumber = 2
            break
        case "PAPER":
            playerSelectionNumber = 1
            break
    }
    
    switch(computerSelectionUpper) {
        case "ROCK":
            computerSelectionNumber = 3
            break
        case "SISSORS":
            computerSelectionNumber = 2
            break
        case "PAPER":
            computerSelectionNumber = 1
            break
    }

    let playResult = computerSelectionNumber - playerSelectionNumber

    if (playResult > 1 || playResult === -2){ 
        console.log("You Lose")
    } else if (playResult === 0) {
        console.log("Draw")
    } else {
        console.log("You Win")
    }
  }
   
  const playerSelection = "rock";
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));