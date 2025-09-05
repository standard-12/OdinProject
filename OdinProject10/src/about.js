import "./about.css"

function About() {
    const div=document.createElement("div");
    div.classList.add("about");
    div.innerHTML=`        <p>Want to know more about us?</p>
        <p>This prestigious store has been serving people since 2004. The hotel was just an method to engange in some exciting lifestyle in middle of the boring schedule</p>`

    return div;
}

export default About