

function getComputerChoice() {
    let choice = getRandInteger(1,4)
    if(choice === 1)
        return "rock"
    else if (choice==2)
        return "paper"
    else
        return "scissor"
}

function getRandInteger(min,max) {
    return Math.floor(Math.random()*(max-min))+min;
}


let HumanScore=0;
let ComputerScore=0;

const Humanele=document.querySelector(".HumanScore")
const Compele=document.querySelector(".ComputerScore")
const Scores=document.querySelector(".scores")
let result;


function PlayRound(HumanChoice){
    let ComputerChoice=getComputerChoice();
    console.log("Comp Choice is :",ComputerChoice)

    if(HumanScore >= 3 || ComputerScore >= 3){
        alert("Game has finished");
    }
    if(!document.querySelector(".scores p")){
    result=document.createElement("p")
    Scores.appendChild(result)
    }
    
    if (HumanChoice===ComputerChoice){
        result.textContent="It's a draw"
        return
    }
    else if(HumanChoice==="rock" && ComputerChoice === "scissor"){
        HumanScore++;
        Humanele.textContent="Human Score : "+ HumanScore
        result.textContent="You won " + HumanChoice.replace(/^./i,"R") + " beats " + ComputerChoice  // Used regex to capitalize first letter 
    }
    else if(HumanChoice==="paper" && ComputerChoice === "rock"){
        HumanScore++;
        Humanele.textContent="Human Score : "+ HumanScore
        result.textContent="You won " + HumanChoice + " beats " + ComputerChoice
    }
    else if(HumanChoice==="scissor" && ComputerChoice==="paper"){
        HumanScore++;
        Humanele.textContent="Human Score : "+ HumanScore
        result.textContent="You won " + HumanChoice + " beats " + ComputerChoice
    }
    else{ 
        ComputerScore++;
        Compele.textContent="Computer Score : "+ ComputerScore
        result.textContent="Computer Won " + ComputerChoice + " beats " + HumanChoice
    }

    if(HumanScore === 3){
        result.textContent="You won the game " 
        return
    }
    else if (ComputerScore==3) {
        result.textContent="Computer won the game "
        return
    }
    else
    return;
}

const rockbtn=document.querySelector(".rock")
rockbtn.onclick = () => PlayRound("rock");

const scissorbtn=document.querySelector(".scissor")
scissorbtn.onclick = () => PlayRound("scissor");

const paperbtn = document.querySelector(".paper")
paperbtn.onclick = () => PlayRound("paper");









