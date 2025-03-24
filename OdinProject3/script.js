

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

function getHumanChoice() {
    return prompt("Enter Your Choice").toLowerCase()
    
}

function PlayRound(HumanChoice,ComputerChoice){
    if (HumanChoice===ComputerChoice){
        console.log("Ohh it was a draw")
        return
    }
    else if(HumanChoice==="rock" && ComputerChoice === "scissor"){
        HumanScore++;
        console.log("You Won Rock beats scissor")
    }
    else if(HumanChoice==="paper" && ComputerChoice === "rock"){
        HumanScore++;
        console.log("You Won Paper beats Rock")
    }
    else if(HumanChoice==="scissor" && ComputerChoice==="paper"){
        HumanScore++;
        console.log("You Won Scissor beats Paper")
    }
    else{ 
        ComputerScore++;
        console.log("You Lose",ComputerChoice," beats ",HumanChoice)
    }
    return
}


let HumanScore=0;
let ComputerScore=0;

while(HumanScore<3 && ComputerScore<3){
    let ComputerChoice=getComputerChoice();
    console.log("Comp Choice is :",ComputerChoice)
    let HumanChoice=getHumanChoice();
    console.log("Human Choice is :",HumanChoice)
    PlayRound(HumanChoice,ComputerChoice)
}

if(HumanScore === 3){
    console.log("Human Won")
}
else console.log("Computer Won")