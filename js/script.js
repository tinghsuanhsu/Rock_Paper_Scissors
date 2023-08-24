const choiceList= ['Paper', 'Scissors', 'Rock'];

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
        return false
    } else if (playResult === 0) {
        console.log(`Draw! You both play ${computerSelection}`)
        return false
    } else {
        console.log(`You win! ${playerSelection} beats ${computerSelection}`)
        // ++playerScore
        return true
    }
    // return playerScore
}



  // Play 5 rounds of game and keep the scores 
function game(numOfRound){
    let score = 0
    for (let i = 0; i < numOfRound; i++){
        // const playerSelection = prompt('Choice paper, scissors or rock')
        
        const computerSelection = getComputerChoice()
        const playerSelections = document.querySelectorAll('button')
        const displaySelection = document.querySelector('#selected')

        // listen for the player choice to play against the computer and keep the scores
        playerSelections.forEach(selection => selection.addEventListener('click', (e)=> {
            let playerSelection = e.target.textContent // grab the selection
            displaySelection.textContent = playerSelection // display the selection 

            playResult= playRound(playerSelection, computerSelection)
            console.log(playResult)
            if (playResult) {
                score++
            } 
            console.log(score) 
        }))
        
    }
    return 
    console.log(`You won ${score} games!`)
}

// a test function to display the selection
function doSomethingWhenClick(e){
    console.log(e.target.textContent)
    const displaySelection = document.querySelector('#selected')
    displaySelection.textContent = e.target.textContent

}

game(2)