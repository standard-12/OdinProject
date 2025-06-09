const myLibrary=[]

function createcard(book) {
    const card=document.createElement("div");
    card.classList.add("cards")
    card.innerHTML=`           
            <h3>Book</h3>
            <p>Id : ${book.id} </p>
            <p>Title : ${book.name}</p>
            <p>Author : ${book.author}</p>
            <p>Pages : ${book.pages}</p>
            <p>Price :${book.price}</p>
            <div class="book-buttons">
                <button class="deletebtn">Delete</button>
                <button class="readbtn">Read?</button>
            </div>`
    const main=document.querySelector(".main");
    main.appendChild(card)
    addListeners(card)
}

function addListeners(card){
    const delbtn=card.querySelector(".deletebtn")
    const readbtn=card.querySelector(".readbtn")

    delbtn.addEventListener('click',removeBook)
    readbtn.addEventListener('click',(e)=>{
    const currentcolor=getComputedStyle(e.target).backgroundColor
    e.target.style.backgroundColor= (currentcolor==="rgb(226, 226, 21)")? "green":"rgb(226, 226, 21)"
    })
}

function removeBook(e){
    const main=document.querySelector(".main")
    const delchild=e.target.parentElement.parentElement
    const delId=delchild.querySelector("p").textContent.slice(-6,-1)
    let delindex=-1
    for(const book of myLibrary){
        delindex++
        if(book.id == delId){
            myLibrary.splice(delindex,1)
            break
        }
    }

    main.removeChild(delchild)
}



function Book(id,name,author,pages,price){
    this.id=id,
    this.name=name,
    this.author=author,
    this.pages=pages,
    this.price=price
}

function addBookToLibrary(id,name,author,pages,price) {
    const book=new Book(id,name,author,pages,price)
    myLibrary.push(book)
    createcard(book)
}

function getAllvalues() {
    const formdata=new FormData(form)
    form.reset()

    let values={}

    formdata.forEach((value,key) => {
        values[key]=value;
    })

    return values;
}


const form=document.querySelector("form")
const dialog=document.querySelector("dialog")
const addbtn=document.querySelector(".addbtn")

addbtn.addEventListener('click',()=>{
    dialog.showModal()
})

const closebtn=document.querySelector("dialog span")
closebtn.addEventListener('click',()=> {
    form.reset()
    dialog.close()
})

const dialogaddbtn=document.querySelector(".dialogbtn")
dialogaddbtn.addEventListener('click',()=>{
    // if(formvalidation()){
    // getAllvalues()
    // }
    let values=getAllvalues()
    let id = crypto.randomUUID()

    addBookToLibrary(id.substring(0,5),...Object.values(values))
    dialog.close()
})

