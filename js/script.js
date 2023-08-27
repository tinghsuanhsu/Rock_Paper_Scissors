// global variables
// play game
    // however, if player clicks reset 
    //      reset the scores and start from scratch --> DONE
    // else starting a game for n rounds
    //      in each round
    //          compare player choice and computer choice 
    //          set the score, display the score
    // stop when n rounds played
    // dont respond to any clicks, only respond to reset

const choiceList= ['Paper', 'Scissors', 'Rock'];
let playerScore = 0;
let computerScore = 0;
let defaultScoreText = "?";


let computerSelection = getComputerChoice()
let selectText = document.querySelector('#selected')
let playerScoreText = document.querySelector('#player-score')
let computerScoreText = document.querySelector('#computer-score')
let numOfGame = document.querySelector("#num-of-game")
playerScoreText.textContent = defaultScoreText; // display the selection 
computerScoreText.textContent = defaultScoreText; // display the selection 


function resetGame(){
    playerScore = 0;
    computerScore = 0;
    playerScoreText.textContent = defaultScoreText; // display the selection 
    computerScoreText.textContent = defaultScoreText; // display the selection 
    selectText.textContent = "Start";
    // reset scores
    // reset text   
}


function annouceGameResult() {
    var win = window.open("", "Title", "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=yes, width=780, height=200, top="+(screen.height-400)+", left="+(screen.width-840));
    win.document.body.innerHTML = "Play Again?";
  }

// Randomly return paper, rock or scissors as computer's choice
function getComputerChoice(){
    randomNumber = Math.floor(Math.random() * choiceList.length); 
    return choiceList[randomNumber]
}

// Convert paper, rock and scissors to numbers for easier comparison 
function convertChoice(choice){
    switch(choice){
        case 'PAPER':
            return 1
        case 'SCISSORS':
            return 2
        case 'ROCK':
            return 3
    } 
}


// A function that plays a single round of Rock Paper Scissors. 
function playRound(playerSelection, computerSelection) {
    
    // Change the selection to uppercase
    let playerSelectionUpper = playerSelection.toUpperCase()
    // Change the selection to uppercase
    let computerSelectionUpper = computerSelection.toUpperCase()

    // Convert rock, paper, scissors to respective numbers for the player
    let playerSelectionNumber = convertChoice(playerSelectionUpper)

    // Convert rock, paper, scissors to respective numbers for the computer
    let computerSelectionNumber = convertChoice(computerSelectionUpper)

    // Calculate the differences between computer's choice and player's choice
    let playResult = computerSelectionNumber - playerSelectionNumber

    // Keep player's score
    // let playerScore = 0

    // Evaluate the differences to determine who wins and print out the round
    if (playResult > 1 || playResult === -2){ 
        console.log(`You lose! ${computerSelection} beats ${playerSelection}`)
        computerScore++
    } else if (playResult === 0) {
        console.log(`Draw! You both play ${computerSelection}`)
    } else {
        console.log(`You win! ${playerSelection} beats ${computerSelection}`)
        playerScore++
    }
}




// Play 5 rounds of game and keep the scores 
function game(winScore){
    numOfGame.textContent = winScore
    const buttons = document.querySelectorAll('button')
    buttons.forEach(selection => selection.addEventListener('click', (e)=> {
        if (e.target.id == "resetbtn") {
            // reset the scores
            resetGame()
            return
        } else {
            let playerSelection = e.target.textContent
            selectText.textContent = e.target.textContent
            let computerSelection = getComputerChoice()
            playRound(playerSelection, computerSelection) 

            computerScoreText.textContent = computerScore
            playerScoreText.textContent = playerScore

            if (computerScore === winScore) {
                selectText.textContent = "You Lost!"
                // annouceGameResult()
            } else if (playerScore === winScore) {
                selectText.textContent = "You Win!"
                // annouceGameResult()
            }

        }   
    }
    ))
} 

game(2)