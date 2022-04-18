const techno = ['html','Javascript','Python','Numpy','pandas','react','node','mongodb','redux']
const titles= [
    ['🌱', 'Educator'],
    ['📔', 'Content Creator'],
    ['💻', 'Programmer'],
    ['🌐', 'Developer'],
    ['🔥', 'Motivator']
    
  ]
function color(){
    let random1 = Math.floor(Math.random() * 200)
    let random2 = Math.floor(Math.random() * 200)
    let random3 = Math.floor(Math.random() * 200)
    return `rgb(${random1},${random2},${random3})`
}

let tdiv = document.querySelector(".title")
let tech = document.querySelector("#tech")

let tit=0
setInterval(() => {
    tdiv.innerHTML =""
    let icon = document.createElement("p")
    let ocup = document.createElement("p")

    icon.innerHTML=`${titles[tit][0]}`
    icon.setAttribute("class","icon")
    ocup.innerHTML=`${titles[tit][1]}`
    ocup.setAttribute("class","anim")

    tdiv.appendChild(icon)
    tdiv.appendChild(ocup)
    tit=(tit+1)%5
}, 2000);

let x=0
setInterval(() => {
    
    let d=0

    tech.innerHTML=techno[x].toUpperCase()
    tech.style.color=color()
    tech.style.opacity=d
    x++
    x=x%9
   setTimeout(() => {
    tech.style.opacity=d+0.2
   }, 200);
   setTimeout(() => {
    tech.style.opacity=d+0.4
   }, 400);
   setTimeout(() => {
    tech.style.opacity=d+0.6
   }, 600);
   setTimeout(() => {
    tech.style.opacity=d+1
   }, 800);
   
}, 2000);


let div = document.querySelector(".courseBox")
let box = document.createElement("div")
box.setAttribute("class","box")
box.innerHTML="JAVASCRIPT FOR EVERYONE"
div.appendChild(box)

let box1 = document.createElement("div")
box1.setAttribute("class","box")
box1.innerHTML="30 DAYS OF PYTHON"
div.appendChild(box1)

let box2 = document.createElement("div")
box2.setAttribute("class","box")
box2.innerHTML="30 DAYS OF JAVASCRIPT"
div.appendChild(box2)

