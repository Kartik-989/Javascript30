
const h1 = document.querySelector('h1')
h1.innerHTML = `Asabeneh Yetayeh challenges in <span id="year">2020<span>`
let year = document.querySelector("#year");

function color(){
    let random1 = Math.floor(Math.random() * 200)
    let random2 = Math.floor(Math.random() * 200)
    let random3 = Math.floor(Math.random() * 200)
    return `rgb(${random1},${random2},${random3})`
}

const changeClr1= () => {
    year.style.color = color();
}
setInterval(changeClr1, 1000)


const p = document.querySelector("p")

p.textContent = Date();
p.style.border = "dotted"
p.style.width = "300px";
p.style.margin = "0 auto"

const changeClr2 = () => {
 p.style.backgroundColor = color();
}
setInterval(changeClr2, 1000)

const list = document.querySelectorAll('li')

list.forEach(element=>{
    element.style.margin=' 5px auto'
    element.style.border='solids'
    element.style.listStyle='none'
    element.style.fontSize='30px'
    if(element.textContent.toLowerCase().includes('done'))
         element.style.backgroundColor = "green"
    else if (element.textContent.toLowerCase().includes("ongoing"))
        element.style.backgroundColor = "yellow"
     else 
        element.style.backgroundColor = "red"
    

})

