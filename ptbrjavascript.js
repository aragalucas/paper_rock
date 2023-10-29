compscore1 = 0
playerscore1 = 0
allscore1 = 0;
i = 0
u = prompt("quantas rodadas você quer?: ")
function randomChoice() {
    i += 1
    if (i < u + 1) {
    function getComputerChoice() {
        let options = ["papel", "pedra", "tesoura"];
        let choice = options[Math.floor(Math.random()*options.length)];
        return choice
        }
        function playRound(playerSelection, computerSelection) {
        scissor = "tesoura"
        paper = "papel"
        rock = "pedra"
        if (playerSelection == rock && computerSelection == scissor) {
            return "jogador venceu"
        } 
        else if (playerSelection == scissor && computerSelection == paper) {
            return "jogador venceu"
               
        } 
        else if (playerSelection == paper && computerSelection == rock) {
            return "jogador venceu"
            
        } 
        else if (computerSelection == rock && playerSelection == scissor) {
            return "computador venceu" 
        }
        else if (computerSelection == scissor && playerSelection == paper) {
            return "computador venceu" 
        } 
        else if (computerSelection == paper && playerSelection == rock) {
            return "computador venceu"
        } 
        else if (playerSelection == computerSelection) {
            return "empate"
            
        }
        }
        function playerscoree() {
        if (winner == "jogador venceu") {
            playerscore1 += 1
            return playerscore1
        }
        else if (winner == "empate" && playerscore1 == 0) {
            playerscore1 == 0
            return playerscore1
        } else {
            return playerscore1
        }
        }
        function compscoree() {
        if (winner == "computador venceu") {
            compscore1 += 1
            return compscore1
        }
        else if (winner == "empate" && compscore1 == 0) {
            compscore1 = 0
            return compscore1
        } else {
            return compscore1
        }
        }
        function allscoree() {
            if (winner == "empate") {
                allscore1 += 1;
                return allscore1
            } else {
                return allscore1
            }
            }
        function winner1() {
            if (compscore > playerscore) {
            winner0 = "computador venceu o jogo";
            return winner0;
        }
            else if (playerscore > compscore) {
            winner0 = "jogador venceu o jogo";
            return winner0;
        }
            else if (playerscore == compscore) {
            winner0 = "jogo empatado";
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
        document.getElementById("item1").innerHTML = "jogador escolheu: " + playerSelection;
        document.getElementById("item2").innerHTML = "computador escolheu: " + computerSelection;
        document.getElementById("item3").innerHTML = "pontuação do jogador: " + playerscore;
        document.getElementById("item4").innerHTML = "pontuação do computador: " + compscore;
        document.getElementById("item5").innerHTML = "rodadas " + allscor;
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
        let options = ["papel", "pedra", "tesoura"];
        let choice = options[Math.floor(Math.random()*options.length)];
        return choice
        }
        function playRound(playerSelection, computerSelection) {
        scissor = "tesoura"
        paper = "papel"
        rock = "pedra"
        if (playerSelection == rock && computerSelection == scissor) {
            return "jogador venceu"
        } 
        else if (playerSelection == scissor && computerSelection == paper) {
            return "jogador venceu"
               
        } 
        else if (playerSelection == paper && computerSelection == rock) {
            return "jogador venceu"
            
        } 
        else if (computerSelection == rock && playerSelection == scissor) {
            return "computador venceu" 
        }
        else if (computerSelection == scissor && playerSelection == paper) {
            return "computador venceu" 
        } 
        else if (computerSelection == paper && playerSelection == rock) {
            return "computador venceu"
        } 
        else if (playerSelection == computerSelection) {
            return "empate"
            
        }
        }
        function playerscoree() {
        if (winner == "jogador venceu") {
            playerscore1 += 1
            return playerscore1
        }
        else if (winner == "empate" && playerscore1 == 0) {
            playerscore1 == 0
            return playerscore1
        } else {
            return playerscore1
        }
        }
        function compscoree() {
        if (winner == "computador venceu") {
            compscore1 += 1
            return compscore1
        }
        else if (winner == "empate" && compscore1 == 0) {
            compscore1 = 0
            return compscore1
        } else {
            return compscore1
        }
        }
        function allscoree() {
            if (winner == "empate") {
                allscore1 += 1;
                return allscore1
            } else {
                return allscore1
            }
            }
        function winner1() {
            if (compscore > playerscore) {
            winner0 = "computador venceu o jogo";
            return winner0;
        }
            else if (playerscore > compscore) {
            winner0 = "jogador venceu o jogo";
            return winner0;
        }
            else if (playerscore == compscore) {
            winner0 = "jogo empatado";
            return winner0;
        }
        }
        let computerSelection = getComputerChoice();
        let randomplayerSelection = getComputerChoice();
        let playerSelection = "pedra"
        let winner = playRound(playerSelection, computerSelection);
        let compscore = compscoree();
        let playerscore = playerscoree();
        let allscore = allscoree();
        let allscor = allscore + playerscore + compscore;
        winner = winner1();
        document.getElementById("item0").innerHTML = playRound(playerSelection, computerSelection)
        document.getElementById("item1").innerHTML = "jogador escolheu: " + playerSelection;
        document.getElementById("item2").innerHTML = "computador escolheu: " + computerSelection;
        document.getElementById("item3").innerHTML = "pontuação do jogador: " + playerscore;
        document.getElementById("item4").innerHTML = "pontuação do computador: " + compscore;
        document.getElementById("item5").innerHTML = "rodadas " + allscor;
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
        let options = ["papel", "pedra", "tesoura"];
        let choice = options[Math.floor(Math.random()*options.length)];
        return choice
        }
        function playRound(playerSelection, computerSelection) {
        scissor = "tesoura"
        paper = "papel"
        rock = "pedra"
        if (playerSelection == rock && computerSelection == scissor) {
            return "jogador venceu"
        } 
        else if (playerSelection == scissor && computerSelection == paper) {
            return "jogador venceu"
               
        } 
        else if (playerSelection == paper && computerSelection == rock) {
            return "jogador venceu"
            
        } 
        else if (computerSelection == rock && playerSelection == scissor) {
            return "computador venceu" 
        }
        else if (computerSelection == scissor && playerSelection == paper) {
            return "computador venceu" 
        } 
        else if (computerSelection == paper && playerSelection == rock) {
            return "computador venceu"
        } 
        else if (playerSelection == computerSelection) {
            return "empate"
            
        }
        }
        function playerscoree() {
        if (winner == "jogador venceu") {
            playerscore1 += 1
            return playerscore1
        }
        else if (winner == "empate" && playerscore1 == 0) {
            playerscore1 == 0
            return playerscore1
        } else {
            return playerscore1
        }
        }
        function compscoree() {
        if (winner == "computador venceu") {
            compscore1 += 1
            return compscore1
        }
        else if (winner == "empate" && compscore1 == 0) {
            compscore1 = 0
            return compscore1
        } else {
            return compscore1
        }
        }
        function allscoree() {
            if (winner == "empate") {
                allscore1 += 1;
                return allscore1
            } else {
                return allscore1
            }
            }
        function winner1() {
            if (compscore > playerscore) {
            winner0 = "computador venceu o jogo";
            return winner0;
        }
            else if (playerscore > compscore) {
            winner0 = "jogador venceu o jogo";
            return winner0;
        }
            else if (playerscore == compscore) {
            winner0 = "jogo empatado";
            return winner0;
        }
        }
        let computerSelection = getComputerChoice();
        let randomplayerSelection = getComputerChoice();
        let playerSelection = "papel"
        let winner = playRound(playerSelection, computerSelection);
        let compscore = compscoree();
        let playerscore = playerscoree();
        let allscore = allscoree();
        let allscor = allscore + playerscore + compscore;
        winner = winner1();
        document.getElementById("item0").innerHTML = playRound(playerSelection, computerSelection)
        document.getElementById("item1").innerHTML = "jogador escolheu: " + playerSelection;
        document.getElementById("item2").innerHTML = "computador escolheu: " + computerSelection;
        document.getElementById("item3").innerHTML = "pontuação do jogador: " + playerscore;
        document.getElementById("item4").innerHTML = "pontuação do computador: " + compscore;
        document.getElementById("item5").innerHTML = "rodadas " + allscor;
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
        let options = ["papel", "pedra", "tesoura"];
        let choice = options[Math.floor(Math.random()*options.length)];
        return choice
        }
        function playRound(playerSelection, computerSelection) {
        scissor = "tesoura"
        paper = "papel"
        rock = "pedra"
        if (playerSelection == rock && computerSelection == scissor) {
            return "jogador venceu"
        } 
        else if (playerSelection == scissor && computerSelection == paper) {
            return "jogador venceu"
               
        } 
        else if (playerSelection == paper && computerSelection == rock) {
            return "jogador venceu"
            
        } 
        else if (computerSelection == rock && playerSelection == scissor) {
            return "computador venceu" 
        }
        else if (computerSelection == scissor && playerSelection == paper) {
            return "computador venceu" 
        } 
        else if (computerSelection == paper && playerSelection == rock) {
            return "computador venceu"
        } 
        else if (playerSelection == computerSelection) {
            return "empate"
            
        }
        }
        function playerscoree() {
        if (winner == "jogador venceu") {
            playerscore1 += 1
            return playerscore1
        }
        else if (winner == "empate" && playerscore1 == 0) {
            playerscore1 == 0
            return playerscore1
        } else {
            return playerscore1
        }
        }
        function compscoree() {
        if (winner == "computador venceu") {
            compscore1 += 1
            return compscore1
        }
        else if (winner == "empate" && compscore1 == 0) {
            compscore1 = 0
            return compscore1
        } else {
            return compscore1
        }
        }
        function allscoree() {
            if (winner == "empate") {
                allscore1 += 1;
                return allscore1
            } else {
                return allscore1
            }
            }
        function winner1() {
            if (compscore > playerscore) {
            winner0 = "computador venceu o jogo";
            return winner0;
        }
            else if (playerscore > compscore) {
            winner0 = "jogador venceu o jogo";
            return winner0;
        }
            else if (playerscore == compscore) {
            winner0 = "jogo empatado";
            return winner0;
        }
        }
        let computerSelection = getComputerChoice();
        let randomplayerSelection = getComputerChoice();
        let playerSelection = "tesoura"
        let winner = playRound(playerSelection, computerSelection);
        let compscore = compscoree();
        let playerscore = playerscoree();
        let allscore = allscoree();
        let allscor = allscore + playerscore + compscore;
        winner = winner1();
        document.getElementById("item0").innerHTML = playRound(playerSelection, computerSelection)
        document.getElementById("item1").innerHTML = "jogador escolheu: " + playerSelection;
        document.getElementById("item2").innerHTML = "computador escolheu: " + computerSelection;
        document.getElementById("item3").innerHTML = "pontuação do jogador: " + playerscore;
        document.getElementById("item4").innerHTML = "pontuação do computador: " + compscore;
        document.getElementById("item5").innerHTML = "rodadas " + allscor;
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
                        u = prompt("quantas rodadas você quer?: ")
                        document.getElementById("item0").innerHTML = "";
                        document.getElementById("item1").innerHTML = "";
                        document.getElementById("item2").innerHTML = "";
                        document.getElementById("item3").innerHTML = "";
                        document.getElementById("item4").innerHTML = "";
                        document.getElementById("item5").innerHTML = "";
                        document.getElementById("item6").innerHTML = "";
                    }