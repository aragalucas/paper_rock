compscore1 = 0
playerscore1 = 0
allscore1 = 0;
i = 0
u = prompt("how many rounds you want?: ")
function randomChoice() {
    i += 1
    if (i < u + 1) {
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
        function allscoree() {
            if (winner == "Tie") {
                allscore1 += 1;
                return allscore1
            } else {
                return allscore1
            }
            }
        function winner1() {
            if (compscore > playerscore) {
            winner0 = "computer win the game";
            return winner0;
        }
            else if (playerscore > compscore) {
            winner0 = "player win the game";
            return winner0;
        }
            else if (playerscore == compscore) {
            winner0 = "game tied";
            return winner0;
        }
        }
        let computerSelection = getComputerChoice();
        let randomplayerSelection = getComputerChoice();
        let playerSelection = randomplayerSelection
        let winner = playRound(playerSelection, computerSelection);
        let compscore = compscoree();
        let playerscore = playerscoree();
        let allscore = allscoree();
        let allscor = allscore + playerscore + compscore;
        winner = winner1();
        document.getElementById("item0").innerHTML = playRound(playerSelection, computerSelection)
        document.getElementById("item1").innerHTML = "player choose: " + playerSelection;
        document.getElementById("item2").innerHTML = "computer choose: " + computerSelection;
        document.getElementById("item3").innerHTML = "player score: " + playerscore;
        document.getElementById("item4").innerHTML = "computer score: " + compscore;
        document.getElementById("item5").innerHTML = "rounds " + allscor;
        if (i > u) {
            document.getElementById("item0").innerHTML = ""
            document.getElementById("item1").innerHTML = ""
            document.getElementById("item2").innerHTML = ""
            document.getElementById("item3").innerHTML = ""
            document.getElementById("item4").innerHTML = ""
            document.getElementById("item5").innerHTML = ""
            }
        if (i == u) {
            document.getElementById("item6").innerHTML = winner;
        }
            }
}
    function rockChoice() {
        i += 1
    if (i < u + 1) {
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
        function allscoree() {
        if (winner == "Tie") {
            allscore1 += 1
            return allscore1
        } else {
            return allscore1
        }
        }
        function winner1() {
            if (compscore > playerscore) {
            winner0 = "computer win the game";
            return winner0;
    }
            else if (playerscore > compscore) {
            winner0 = "player win the game";
            return winner0;
    }
            else if (playerscore == compscore) {
            winner0 = "game tied";
            return winner0;
    }
    }
        let computerSelection = getComputerChoice();
        let playerSelection = "rock"
        let winner = playRound(playerSelection, computerSelection);
        let compscore = compscoree();
        let playerscore = playerscoree();
        let allscore = allscoree();
        let allscor = allscore + playerscore + compscore;
        winner = winner1();
        document.getElementById("item0").innerHTML = playRound(playerSelection, computerSelection)
        document.getElementById("item1").innerHTML = "player choose: " + playerSelection;
        document.getElementById("item2").innerHTML = "computer choose: " + computerSelection;
        document.getElementById("item3").innerHTML = "player score: " + playerscore;
        document.getElementById("item4").innerHTML = "computer score: " + compscore;
        document.getElementById("item5").innerHTML = "rounds " + allscor;
        if (i > u) {
            document.getElementById("item0").innerHTML = ""
            document.getElementById("item1").innerHTML = ""
            document.getElementById("item2").innerHTML = ""
            document.getElementById("item3").innerHTML = ""
            document.getElementById("item4").innerHTML = ""
            document.getElementById("item5").innerHTML = ""
            }
        if (i == u) {
            document.getElementById("item6").innerHTML = winner;
        }
    }
    }
        function paperChoice() {
            i += 1
            if (i < u + 1) {
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
                function allscoree() {
                    if (winner == "Tie") {
                        allscore1 += 1
                        return allscore1
                    } else {
                        return allscore1
                    }
                    }
                    function winner1() {
                        if (compscore > playerscore) {
                        winner0 = "computer win the game";
                        return winner0;
                }
                        else if (playerscore > compscore) {
                        winner0 = "player win the game";
                        return winner0;
                }
                        else if (playerscore == compscore) {
                        winner0 = "game tied";
                        return winner0;
                }
                }
                let computerSelection = getComputerChoice();
                let playerSelection = "paper"
                let winner = playRound(playerSelection, computerSelection);
                let compscore = compscoree();
                let playerscore = playerscoree();
                let allscore = allscoree();
                let allscor = allscore + playerscore + compscore;
                winner = winner1();
                document.getElementById("item0").innerHTML = playRound(playerSelection, computerSelection)
                document.getElementById("item1").innerHTML = "player choose: " + playerSelection;
                document.getElementById("item2").innerHTML = "computer choose: " + computerSelection;
                document.getElementById("item3").innerHTML = "player score: " + playerscore;
                document.getElementById("item4").innerHTML = "computer score: " + compscore;
                document.getElementById("item5").innerHTML = "rounds " + allscor;
                if (i > u) {
                    document.getElementById("item0").innerHTML = ""
                    document.getElementById("item1").innerHTML = ""
                    document.getElementById("item2").innerHTML = ""
                    document.getElementById("item3").innerHTML = ""
                    document.getElementById("item4").innerHTML = ""
                    document.getElementById("item5").innerHTML = ""
                    }
                if (i == u) {
                    document.getElementById("item6").innerHTML = winner;
                }
            }
        }
                function scissorChoice() {
                    i += 1
                    if (i < u + 1) {
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
                        function allscoree() {
                            if (winner == "Tie") {
                                allscore1 += 1
                                return allscore1
                            } else {
                                return allscore1
                            }
                            }
                        function winner1() {
                            if (compscore > playerscore) {
                                winner0 = "computer win the game";
                                return winner0;
                        }
                            else if (playerscore > compscore) {
                                winner0 = "player win the game";
                                return winner0;
                        }
                            else if (playerscore == compscore) {
                                winner0 = "game tied";
                                return winner0;
                        }
                        }
                        let computerSelection = getComputerChoice();
                        let playerSelection = "scissor"
                        let winner = playRound(playerSelection, computerSelection);
                        let compscore = compscoree();
                        let playerscore = playerscoree();
                        let allscore = allscoree();
                        let allscor = allscore + playerscore + compscore;
                        winner = winner1();
                        document.getElementById("item0").innerHTML = playRound(playerSelection, computerSelection)
                        document.getElementById("item1").innerHTML = "player choose: " + playerSelection;
                        document.getElementById("item2").innerHTML = "computer choose: " + computerSelection;
                        document.getElementById("item3").innerHTML = "player score: " + playerscore;
                        document.getElementById("item4").innerHTML = "computer score: " + compscore;
                        document.getElementById("item5").innerHTML = "rounds " + allscor;
                        if (i > u) {
                            document.getElementById("item0").innerHTML = ""
                            document.getElementById("item1").innerHTML = ""
                            document.getElementById("item2").innerHTML = ""
                            document.getElementById("item3").innerHTML = ""
                            document.getElementById("item4").innerHTML = ""
                            document.getElementById("item5").innerHTML = ""
                            }
                        if (i == u) {
                            document.getElementById("item6").innerHTML = winner;
                        }
                    }
                    }
                    function newGame() {
                        compscore1 = 0
                        playerscore1 = 0
                        allscore1 = 0;
                        i = 0
                        u = prompt("how many rounds you want?: ")
                        document.getElementById("item0").innerHTML = "";
                        document.getElementById("item1").innerHTML = "";
                        document.getElementById("item2").innerHTML = "";
                        document.getElementById("item3").innerHTML = "";
                        document.getElementById("item4").innerHTML = "";
                        document.getElementById("item5").innerHTML = "";
                        document.getElementById("item6").innerHTML = "";
                    }