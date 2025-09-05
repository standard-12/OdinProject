import "./navbar.css"

function createNavBar() {
    
    const heading=document.createElement("h2");
    heading.textContent="GSB Snacks"

    const navBar=document.createElement("nav");
    const noofButtons=3;
    const buttons=["Home","About","Contact"];
    for(let i=0;i<noofButtons;i++){
        const btn=document.createElement("button");
        btn.textContent=buttons[i];
        btn.type="button";
        navBar.appendChild(btn);
    }

    const container=document.createElement("header");
    container.appendChild(heading);
    container.appendChild(navBar)

    return container; 
}

export default createNavBar;