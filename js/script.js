const choiceList= ['Paper', 'Scissors', 'Rock']

// Randomly return paper, rock or scissors as computer's choice
function getComputerChoice(){
    randomNumber = Math.floor(Math.random() * choiceList.length); 
    return choiceList[randomNumber]
}

// Convert paper, rock and scissors to numbers for easier comparison 
function convertChoice(choice){
    switch(choice){
        case 1:
            "PAPER"
            break
        case 2:
            "SISSORS"
            break
        case 3:
            "ROCK"
            break
        } 
    }


/* A function that plays a single round of Rock Paper Scissors. 
The function should take two parameters - the playerSelection 
and computerSelection - and then return a string that declares the
 winner of the round like so: "You Lose! Paper beats Rock"
 */

 function playRound(playerSelection, computerSelection) {
    // Change the selection to uppercase
    let playerSelectionUpper = playerSelection.toUpperCase()
    // Change the selection to uppercase
    let computerSelectionUpper = computerSelection.toUpperCase()


    let playerSelectionNumber =0
    let computerSelectionNumber = 0

    // Convert rock, paper, scissors to respective numbers for the player
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
    
    // Convert rock, paper, scissors to respective numbers for the computer
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

    // Calculate the differences between computer's choice and player's choice
    let playResult = computerSelectionNumber - playerSelectionNumber

    // Evaluate the differences to determine who wins and print out the round
    if (playResult > 1 || playResult === -2){ 
        console.log("You Lose! " + computerSelection + " Beat " + playerSelection)
    } else if (playResult === 0) {
        console.log("Draw! You both play " + computerSelection)
    } else {
        console.log("You Win! " + playerSelection + " Beat " + computerSelection)
    }
  }
   
  const playerSelection = "rock";
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));