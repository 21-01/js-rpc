const RPC = ["rock", "paper", "scissors"];


function getComputerChoice(){
    return RPC[Math.floor(Math.random() * RPC.length)];
}

function getPlayerChoice(){
    var choice = prompt("Choose between Rock, Paper, and Scissors!").toLowerCase();
    if (choice == null || !RPC.includes(choice)){
        return RPC[Math.floor(Math.random() * RPC.length)];
    }
    else{
        return choice;
    }
}

function startRound(){
    var Player = getPlayerChoice();
    var Computer = getComputerChoice();
    if (Computer == "rock" && Player == "rock" || Computer == "paper" && Player == "paper" || Computer == "scissors" && Player == "scissors"){
        return "Draw";
    }
    else if (Computer == "rock" && Player == "scissors" || Computer == "paper" && Player == "rock" || Computer == "scissors" && Player == "paper"){
        return "Computer Win";
    }
    else{
        return "Player Win";
    }
}

function bo5Game(){
    var computerScores = 0;
    var playerScores = 0;
    while (true){
        console.log("Computer Scores:", computerScores)
        console.log("Player Scores:", playerScores)
        roundWinner = startRound();
        if (roundWinner == "Computer Win"){
            console.log(roundWinner)
            computerScores++
        }
        else if (roundWinner == "Player Win"){
            console.log(roundWinner)
            playerScores++
        }
        else{
            console.log(roundWinner)
        }

        if (computerScores == 5){
            return "Computer Win The Match"
        }
        else if (playerScores == 5){
            return "Player Win The Match"
        }
    }
}

console.log(bo5Game())