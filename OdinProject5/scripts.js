let operand1 = 0
let operand2 = 0
let input_temp = 0   // Store the input values temporarily 
let operator_flag = false // For distiguish between first btn press and 
let input_flag=false // To see if input is given even zero
let result = 0
let presentoperator=''
let equalbtn_flag =false

document.addEventListener("keydown",keyboard)

const signbtn=document.querySelector(".sign")
signbtn.addEventListener("click",signbtnpressed)

const equalbtn=document.querySelector(".equal")
equalbtn.addEventListener("click",equalbtnpressed)

const crossbtn=document.querySelector(".small-icon")
crossbtn.addEventListener("click",crossbtnpressed)

const ACbtn=document.querySelector(".clear")
ACbtn.addEventListener("click",ACbtnpressed)

const operatorbtns=document.querySelectorAll(".operator")
operatorbtns.forEach(operatorbtn => operatorbtn.addEventListener("click",operatorbtnpress))

const numbtns=document.querySelectorAll(".number")
numbtns.forEach( numbtn => numbtn.addEventListener("click",numbtnpress) )

function numbtnpress(e) {
    if(equalbtn_flag===true){
         ACbtnpressed()  // if the display is showing result and another number is recieved Reset and start new input
         equalbtn_flag=false
    }
    if(!input_flag) input_flag=true
    
    if(input_temp>Number.MAX_SAFE_INTEGER){
        return
    }
 
    input_temp = input_temp*10 + Number(e.target.value); // Calculate the number
    display(input_temp)
}

function operatorbtnpress(e){
    let prev_operator=presentoperator
    presentoperator=e.target.value

    if(input_flag===false)  // When the operator is pressed before giving input 
    {
     return                     
    }

    if(operator_flag=== false){
        operand1=input_temp
        readyfornextinput()
        display(operand1)
        operator_flag=true
    }
    else {
        operand2=input_temp
        result=calculate(prev_operator)
        operand1=result
        readyfornextinput()
        display(result)
    }
}

function display(data) {
    const disp=document.querySelector(".display")
    disp.textContent=data;
}

function calculate(operator){
    if(operator === '+') return operand1+operand2;
    else if(operator === '-') return operand1-operand2;
    else if(operator === '*') return operand1*operand2;
    else if(operator === '/') return operand1/operand2;
    else if(operator === '%') return operand1%operand2;
}

function cleardisplay(){
    display('')
}

function readyfornextinput() {
    input_temp=0
    input_flag=false
}

function ACbtnpressed() { // Reset all global variables to zero and cleardisplay
    operand1 = 0
    operand2 = 0
    input_temp = 0   
    operator_flag = false
    input_flag=false 
    result = 0
    presentoperator=''
    cleardisplay()
}

function crossbtnpressed(e) {
    if(input_temp!= 0) 
    {   input_temp = Math.floor(input_temp/10)
        display(input_temp)
    }
}

function equalbtnpressed() {
    console.log(presentoperator)
    if(operator_flag ===true && input_flag==true) // If equal button is pressed directly after input(before pressing operators) otherwise result will be alredy displayed
    {   equalbtn_flag=true
        operand2=input_temp
        result=calculate(presentoperator)
        readyfornextinput()
        display(result)
    }
} 

function signbtnpressed() {
    if(input_temp!= 0){
        input_temp = -1 * input_temp;
        display(input_temp)
    }
}

function keyboard(e){
        let operators=['+','-','*','/','%']
        let newobj = {
            target : {
                value: e.key
            }
        }
        if(+e.key>=0 && +e.key<=9){
            numbtnpress(newobj)
        }
        else if(operators.includes(e.key)){
            operatorbtnpress(newobj)
        }
        else {
            switch (e.key){
                case "Backspace":
                    crossbtnpressed(newobj)
                    break;
                case "=":
                    equalbtnpressed()
                    break;
                case "Enter":
                    equalbtnpressed()
                    break;
            }
        }
    }

// function operatorbtnpress(e){
//     if(input_flag===false)  // When the operator is pressed before giving input 
//     {
//      return                     
//     }
//     else if(operator_flag===false) // When the operator is pressed for first time same as(input_flag===true && operator_flag===false) but no need to mention first conditon because if its fales it wont reach here
//     {   var operator=e.target.value // Using var because scope of var is limited to function not to block
//         operand1=input_temp  
//         readyfornextinput()
//         cleardisplay()
//     }
//     else if(operator_flag===true) // When button is pressed for second time 
//     {   if(operand2===0) {        // For second input
//             operand2=input_temp
//             result=calculate(e.target.value)
//             readyfornextinput()
//             cleardisplay()
//          }
//         else                // For later presses 
//         { 
//             operand1=result  // This works because button can be pressed for third time only if its pressed 2nd time so the result will be alread stored in 
            
//         }

//     }
// }