import "./homepage.css"

function createDiv(){
    const div=document.createElement("div");
    
    const h2=document.createElement("h2");
    h2.textContent="Namaste"
    const h5=document.createElement("h5");
    h5.textContent="Experience Authentic GSB Flavors"

    div.append(h2,h5);

    return div;
}

export default createDiv;