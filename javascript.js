compscore1 = 0
playerscore1 = 0
function randomChoice() {
function getComputerChoice() {
let options = ["paper", "rock", "scissor"];
let choice = options[Math.floor(Math.random()*options.length)];
return choice
}
function playRound(playerSelection, computerSelection) {
scissor = "scissor"
paper = "paper"
rock = "rock"
if (playerSelection == rock && computerSelection == scissor) {
    return "player win"
} 
else if (playerSelection == scissor && computerSelection == paper) {
    return "player win"
       
} 
else if (playerSelection == paper && computerSelection == rock) {
    return "player win"
    
} 
else if (computerSelection == rock && playerSelection == scissor) {
    return "computer win" 
}
else if (computerSelection == scissor && playerSelection == paper) {
    return "computer win" 
} 
else if (computerSelection == paper && playerSelection == rock) {
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
function winer() {
    if (compscore > playerscore) {
        return "computer win the game"
    }
    else if (compscore < playerscore) {
        return "player win the game"
    }
    else if (compscore == playerscore) {
        return "game tied"
    }
}
let computerSelection = getComputerChoice();
let randomplayerSelection = getComputerChoice();
playerSelection = randomplayerSelection
let winner = playRound(playerSelection, computerSelection);
let compscore = compscoree();
let playerscore = playerscoree();
document.getElementById("item0").innerHTML = playRound(playerSelection, computerSelection)
document.getElementById("item1").innerHTML = "player choose: " + playerSelection;
document.getElementById("item2").innerHTML = "computer choose: " + computerSelection;
document.getElementById("item3").innerHTML = "player score: " + playerscore;
document.getElementById("item4").innerHTML = "computer score: " + compscore;
}

function rockChoice() {
    function getComputerChoice() {
        let options = ["paper", "rock", "scissor"];
        let choice = options[Math.floor(Math.random()*options.length)];
        return choice
        }
        function playRound(playerSelection, computerSelection) {
        scissor = "scissor"
        paper = "paper"
        rock = "rock"
        if (playerSelection == rock && computerSelection == scissor) {
            return "player win"
        } 
        else if (playerSelection == scissor && computerSelection == paper) {
            return "player win"
               
        } 
        else if (playerSelection == paper && computerSelection == rock) {
            return "player win"
            
        } 
        else if (computerSelection == rock && playerSelection == scissor) {
            return "computer win" 
        }
        else if (computerSelection == scissor && playerSelection == paper) {
            return "computer win" 
        } 
        else if (computerSelection == paper && playerSelection == rock) {
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
        function winer() {
            if (compscore > playerscore) {
                return "computer win the game"
            }
            else if (compscore < playerscore) {
                return "player win the game"
            }
            else if (compscore == playerscore) {
                return "game tied"
            }
        }
        let computerSelection = getComputerChoice();
        let randomplayerSelection = getComputerChoice();
        playerSelection = "rock"
        let winner = playRound(playerSelection, computerSelection);
        let compscore = compscoree();
        let playerscore = playerscoree();
        document.getElementById("item0").innerHTML = playRound(playerSelection, computerSelection)
        document.getElementById("item1").innerHTML = "player choose: " + playerSelection;
        document.getElementById("item2").innerHTML = "computer choose: " + computerSelection;
        document.getElementById("item3").innerHTML = "player score: " + playerscore;
        document.getElementById("item4").innerHTML = "computer score: " + compscore;
        }
        function paperChoice() {
            function getComputerChoice() {
                let options = ["paper", "rock", "scissor"];
                let choice = options[Math.floor(Math.random()*options.length)];
                return choice
                }
                function playRound(playerSelection, computerSelection) {
                scissor = "scissor"
                paper = "paper"
                rock = "rock"
                if (playerSelection == rock && computerSelection == scissor) {
                    return "player win"
                } 
                else if (playerSelection == scissor && computerSelection == paper) {
                    return "player win"
                       
                } 
                else if (playerSelection == paper && computerSelection == rock) {
                    return "player win"
                    
                } 
                else if (computerSelection == rock && playerSelection == scissor) {
                    return "computer win" 
                }
                else if (computerSelection == scissor && playerSelection == paper) {
                    return "computer win" 
                } 
                else if (computerSelection == paper && playerSelection == rock) {
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
                function winer() {
                    if (compscore > playerscore) {
                        return "computer win the game"
                    }
                    else if (compscore < playerscore) {
                        return "player win the game"
                    }
                    else if (compscore == playerscore) {
                        return "game tied"
                    }
                }
                let computerSelection = getComputerChoice();
                let randomplayerSelection = getComputerChoice();
                playerSelection = "paper"
                let winner = playRound(playerSelection, computerSelection);
                let compscore = compscoree();
                let playerscore = playerscoree();
                document.getElementById("item0").innerHTML = playRound(playerSelection, computerSelection)
                document.getElementById("item1").innerHTML = "player choose: " + playerSelection;
                document.getElementById("item2").innerHTML = "computer choose: " + computerSelection;
                document.getElementById("item3").innerHTML = "player score: " + playerscore;
                document.getElementById("item4").innerHTML = "computer score: " + compscore;
                }
                function scissorChoice() {
                    function getComputerChoice() {
                        let options = ["paper", "rock", "scissor"];
                        let choice = options[Math.floor(Math.random()*options.length)];
                        return choice
                        }
                        function playRound(playerSelection, computerSelection) {
                        scissor = "scissor"
                        paper = "paper"
                        rock = "rock"
                        if (playerSelection == rock && computerSelection == scissor) {
                            return "player win"
                        } 
                        else if (playerSelection == scissor && computerSelection == paper) {
                            return "player win"
                               
                        } 
                        else if (playerSelection == paper && computerSelection == rock) {
                            return "player win"
                            
                        } 
                        else if (computerSelection == rock && playerSelection == scissor) {
                            return "computer win" 
                        }
                        else if (computerSelection == scissor && playerSelection == paper) {
                            return "computer win" 
                        } 
                        else if (computerSelection == paper && playerSelection == rock) {
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
                        function winer() {
                            if (compscore > playerscore) {
                                return "computer win the game"
                            }
                            else if (compscore < playerscore) {
                                return "player win the game"
                            }
                            else if (compscore == playerscore) {
                                return "game tied"
                            }
                        }
                        let computerSelection = getComputerChoice();
                        let randomplayerSelection = getComputerChoice();
                        playerSelection = "scissor"
                        let winner = playRound(playerSelection, computerSelection);
                        let compscore = compscoree();
                        let playerscore = playerscoree();
                        document.getElementById("item0").innerHTML = playRound(playerSelection, computerSelection)
                        document.getElementById("item1").innerHTML = "player choose: " + playerSelection;
                        document.getElementById("item2").innerHTML = "computer choose: " + computerSelection;
                        document.getElementById("item3").innerHTML = "player score: " + playerscore;
                        document.getElementById("item4").innerHTML = "computer score: " + compscore;
                        }