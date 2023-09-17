function getComputerChoice() {
let options = ["paper", "rock", "scissor"];
let choice = options[Math.floor(Math.random()*options.length)];
return choice
}
console.log(getComputerChoice())