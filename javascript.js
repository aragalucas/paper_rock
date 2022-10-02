function getComputerChoice() {
let options = ["paper", "rock", "scissor"];
let choice = options[Math.floor(Math.random()*options.length)];
return choice
}
compscore1 = 0
playerscore1 = 0
i = 0
while (i < 5)
{
    i += 1
function playRound(playerSelection, computerSelection) {
let s = "scissor"; 
let r = "rock";
let p = "paper";
if (playerSelection == r && computerSelection == s) {
    return "player win"
} 
else if (playerSelection == s && computerSelection == p) {
    return "player win"
       
} 
else if (playerSelection == p && computerSelection == r) {
    return "player win"
    
} 
else if (computerSelection == r && playerSelection == s) {
    return "computer" 
}
else if (computerSelection == s && playerSelection == p) {
    return "computer win" 
} 
else if (computerSelection == p && playerSelection == r) {
    return "computer win"
} 
else if (playerSelection == computerSelection) {
    return "Tie"
    
}
}
function playerscoree() {
if (winner == "player win") {
    playerscore1 += 1
    return playerscore1
}
else if (winner == "Tie" && playerscore1 == 0) {
    playerscore1 == 0
    return playerscore1
} else {
    return playerscore1
}
}
function compscoree() {
if (winner == "computer win") {
    compscore1 += 1
    return compscore1
}
else if (winner == "Tie" && compscore1 == 0) {
    compscore1 = 0
    return compscore1
} else {
    return compscore1
}
}
let playerSelection = prompt("what is your choice").toLowerCase();
let computerSelection = getComputerChoice();
let winner = playRound(playerSelection, computerSelection)
let compscore = compscoree();
let playerscore = playerscoree();
console.log(playerSelection, computerSelection)
console.log(playRound(playerSelection, computerSelection))
console.log("player score: " + playerscore)
console.log("computer score: " + compscore)
}