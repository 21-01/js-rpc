const RPC = ["rock", "paper", "scissors"];

function getComputerChoice(){
    return RPC[Math.floor(Math.random() * RPC.length)];
}

function startRound(e){
    var playerScore = parseInt(document.querySelector("#playerScores").textContent)
    var computerScore = parseInt(document.querySelector("#computerScores").textContent)
    if (playerScore !== 5 && computerScore !== 5){
        const Player = e.target.id
        var Computer = getComputerChoice();
        if (Computer == "rock" && Player == "rock" || Computer == "paper" && Player == "paper" || Computer == "scissors" && Player == "scissors"){
            roundResults = "Draw";
        }
        else if (Computer == "rock" && Player == "scissors" || Computer == "paper" && Player == "rock" || Computer == "scissors" && Player == "paper"){
            roundResults = "Computer Win";
        }
        else{
            roundResults = "Player Win";
        }
        
        if (roundResults == "Computer Win"){
            playerScore++
        }
        else if (roundResults == "Player Win"){
            computerScore++
        }
        else{
        }
     
        document.querySelector("#whoWin").textContent = roundResults
        document.querySelector("#computerChoice").textContent = (Computer[0].toUpperCase() + Computer.substring(1))
        document.querySelector("#playerScores").textContent = String(playerScore)
        document.querySelector("#computerScores").textContent = String(computerScore)
        
        const resetBtn = document.createElement("button")
        resetBtn.className = "resetButton"
        resetBtn.textContent = "Reset Match"
        resetBtn.onclick = (e) => {
            document.querySelector("#playerScores").textContent = "0"
            document.querySelector("#computerScores").textContent = "0"
            e.target.remove()
            document.querySelector("#whoWin").textContent = ""
        }

        if (computerScore==5){
            matchResults = "Computer Win The Match"
            document.querySelector("#whoWin").textContent = matchResults
            document.querySelector(".whoWin").appendChild(resetBtn)
        }
        else if (playerScore==5){
            matchResults = "Player Win The Match"
            document.querySelector("#whoWin").textContent = matchResults
            document.querySelector(".whoWin").appendChild(resetBtn)
        }
    }
}
    

const chooseButton = document.querySelectorAll(".playerChoice")
chooseButton.forEach((playButton) => {
    playButton.addEventListener("click", (e) => startRound(e))
});