import homepage from "./homepage"
import createNavBar from "./navbar"
import aboutPage from "./about"
import contactPage from "./contact"
console.log("Hello")

// Here Class is not required we can do just with functions i am using class to refresh the syntax etc
class Screen {
    static content=document.querySelector("#content")
     static Rendernav(nav) {
    document.body.insertBefore(nav(),Screen.content);
}
    static RenderPage(DOMcreator){
        Screen.content.innerHTML="";
        Screen.content.appendChild(DOMcreator());
    }
}

function addeventListners(){
    const btns=document.querySelectorAll("nav button");
    btns.forEach(btn => {
        if(btn.textContent=="Contact"){
            btn.addEventListener('click',()=>Screen.RenderPage(contactPage));
        }
        if(btn.textContent=="Home"){
            btn.addEventListener('click',()=>Screen.RenderPage(homepage));
        }
        if(btn.textContent=="About"){
            btn.addEventListener('click',()=>Screen.RenderPage(aboutPage));
        }
    })
}

Screen.Rendernav(createNavBar);
Screen.RenderPage(homepage);
addeventListners();