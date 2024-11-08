let input = document.getElementById("value")
let display = document.getElementById("display")

function adding(){
    let inputvalue = input.value
    let h2 = document.createElement("h2")
    h2.textContent = inputvalue
    display.appendChild(h2)
    let i = document.createElement("i")
    h2.appendChild(i)
    i.setAttribute("class","fa-solid fa-trash")
}

function rem(event){
     console.log(event)
     if(event.target.classList[0]=="fa-solid"){
        let item = event.target.parentElement
        item.remove()
     }
}



display.addEventListener("click",rem)





























// function rem(event){
//     console.log(event.target.classList[0])
//     if(event.target.classList[0]== "fa-solid"){
//         let item = event.target.parentElement
//         item.remove()
//     }
// }
// display.addEventListener("click",rem)