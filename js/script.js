const choiceList= ['Paper', 'Scissors', 'Rock']

// Randomly return paper, rock or scissors as computer's choice
function getComputerChoice(choiceList){
    randomNumber = Math.floor(Math.random() * choiceList.length); 
    return choiceList[randomNumber]
}

let computerChoice = getComputerChoice(choiceList)