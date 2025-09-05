import "./contact.css"

function contactPage() {
    const div=document.createElement("div");
    div.classList.add("contact");
    div.innerHTML=`<p>For further queries please contact</p>
            <p>Vijaya Shenoy : +919480660442</p>
            <p>Email : vijayanshenoy1980@gmail.com</p>`

    return div;
}

export default contactPage


