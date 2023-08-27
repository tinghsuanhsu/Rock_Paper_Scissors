// global variables
const choiceList= ['Paper', 'Scissors', 'Rock'];
let playerScore = 0;
let computerScore = 0;
let defaultScoreText = "?";

let selectText = document.querySelector('#selected')
let playerScoreText = document.querySelector('#player-score')
let computerScoreText = document.querySelector('#computer-score')
let numOfGame = document.querySelector("#num-of-game")
let computerSelection = getComputerChoice() // get computer choice

const buttons = document.querySelectorAll('button')

playerScoreText.textContent = defaultScoreText; // display the selection 
computerScoreText.textContent = defaultScoreText; // display the selection 

function resetGame(){
    playerScore = 0; // reset score to 0
    computerScore = 0; // reset score to 0
    playerScoreText.textContent = defaultScoreText; // display the selection 
    computerScoreText.textContent = defaultScoreText; // display the selection 
    selectText.textContent = "Start";
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
    let computerSelectionUpper = computerSelection.toUpperCase()

    // Convert rock, paper, scissors to respective numbers for the player and computer
    let playerSelectionNumber = convertChoice(playerSelectionUpper)
    let computerSelectionNumber = convertChoice(computerSelectionUpper)

    // Calculate the differences between computer's choice and player's choice
    let playResult = computerSelectionNumber - playerSelectionNumber

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

// Play n rounds of game and keep the scores 
function game(winScore){
    numOfGame.textContent = winScore // display the winning criteria

    buttons.forEach(selection => selection.addEventListener('click', (e)=> {
        // if player doesn't reset the game before one side wins/loses
        if (e.target.id == "resetbtn") {
            resetGame()
            return
        } else {
            let playerSelection = e.target.textContent // get player choice
            selectText.textContent = e.target.textContent // display player choice
            computerSelection = getComputerChoice() // get a new computer choice for each round

            playRound(playerSelection, computerSelection) // play a round 

            computerScoreText.textContent = computerScore // display computer score after the round
            playerScoreText.textContent = playerScore // display player score after the round

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