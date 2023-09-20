function getComputerChoice() {
let options = ["paper", "rock", "scissor"];
let choice = options[Math.floor(Math.random()*options.length)];
return choice
}
i = 0
while (i < 5)
{
    i += 1
function playRound(playerSelection, computerSelection) {
let s = "scissor"; 
let r = "rock";
let p = "paper";
if (playerSelection == r && computerSelection == s) {
    return "player win 'rock beats scissor'"
} 
else if (playerSelection == s && computerSelection == p) {
    return "player win 'scissor beats paper'"
       
} 
else if (playerSelection == p && computerSelection == r) {
    return "player win 'paper beats rock'"
    
} 
else if (computerSelection == r && playerSelection == s) {
    return "computer win 'rock beats scissor'" 
}
else if (computerSelection == s && playerSelection == p) {
    return "computer win 'scissor beats paper'" 
} 
else if (computerSelection == p && playerSelection == r) {
    return "computer win 'paper beats rock'"
} 
else if (playerSelection == computerSelection) {
    return "Tie"
    
}
}

let playerSelection = prompt("what is your choice").toLowerCase();
let computerSelection = getComputerChoice();
console.log(playerSelection, computerSelection)
console.log(playRound(playerSelection, computerSelection))
}