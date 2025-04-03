function makegrid(dim) {
    const sketchpad=document.querySelector(".sketchpad")
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

    const newdivs=document.querySelectorAll(".newdiv");
    let newdivsArray = Array.from(newdivs)
    for(const divs of newdivsArray){
    divs.addEventListener("mouseover",coluring)
    }
}
let dimension=16;
const startbutton=document.querySelector(".start")
startbutton.addEventListener("click",() => makegrid(dimension))



function coluring(event) {
    event.target.style.backgroundColor ="black";
}