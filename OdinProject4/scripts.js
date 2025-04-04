function makegrid(dim) {
    const sketchpad=document.querySelector(".sketchpad")
    cleargrid();
    // Caluclate height and width of cells
    let heightofdiv=sketchpad.offsetHeight/dim + "px"
    let widthofdiv=sketchpad.offsetWidth/dim + "px"  
    console.log(heightofdiv,widthofdiv)

    for(let i=0;i<dim;i++) {
        for(let j=0;j<dim;j++){
            let newdiv=document.createElement("div");
            newdiv.classList.add("newdiv");
            newdiv.style.height=heightofdiv;
            newdiv.style.width=widthofdiv;
            sketchpad.appendChild(newdiv);
        }
    }
    addListener();
}

function addListener(){
    const newdivs=document.querySelectorAll(".newdiv");
    let newdivsArray = Array.from(newdivs)

    if(!color)
    for(const divs of newdivsArray){
    divs.addEventListener("mouseover",coluring)
    }
    else 
    
    for(const divs of newdivsArray){
    divs.removeEventListener("mouseover",coluring)
    divs.addEventListener("mouseover",rainbowcolour)
    }
}

function random(number){
    return Math.floor(Math.random() * (number+1))
}

function rainbowcolour(e){
    let rndcolor=`rgb(${random(255)} ${random(255)} ${random(255)})`
    e.target.style.backgroundColor=rndcolor
}

function coluring(event) {
    event.target.style.backgroundColor ="black";
}

function editgrid(){
    dimension=prompt("Enter new value to grid(not more than 100)");
    if(dimension<=0 || dimension>100 || isNaN(dimension)){
        alert("Enter valid response")
    }
    else
    makegrid(dimension);
}

function cleargrid(){
    const sketchpad=document.querySelector(".sketchpad")
    sketchpad.innerHTML=''
}

function rainbowfunc() {
    if(!color)
        color=true
    else
        color=false
    addListener()
}

let color=false
let dimension=16;

const startbutton=document.querySelector(".start")
startbutton.addEventListener("click",() => makegrid(dimension))

const editgridbtn=document.querySelector(".edit-grid")
editgridbtn.addEventListener("click",editgrid)

const resetbtn=document.querySelector(".reset")
resetbtn.addEventListener("click",cleargrid)

const rainbowbutton=document.querySelector(".rainbow")
rainbowbutton.addEventListener("click",rainbowfunc)


