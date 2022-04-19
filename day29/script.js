let str = '30 DAYS OF JAVASCRIPT CHALLENGE 2020 ASABENEH YETAYEH'

let rootDiv = document.querySelector("body")

function render(){
    rootDiv.innerHTML=""
    rootDiv.style.backgroundColor=color()
    rootDiv.style.opacity="0.1"
    for(let i=0;i<str.length;i++){
        let p = document.createElement("p")
        p.innerHTML=` ${str[i]} `
        p.style.color=color()
        
        rootDiv.append(p);
    }
    setTimeout(() => {
        rootDiv.style.opacity="0.2"
    }, 400);
    
    setTimeout(() => {
        rootDiv.style.opacity="0.4"
    }, 800);
    setTimeout(() => {
        rootDiv.style.opacity="0.6"
    }, 1200);
    setTimeout(() => {
        rootDiv.style.opacity="0.8"
    }, 1500);
    setTimeout(() => {
        rootDiv.style.opacity="1"
    }, 1700);
    
}


render()
setInterval(render,3000)
function color(){
    let random1 = Math.floor(Math.random() * 200)
    let random2 = Math.floor(Math.random() * 200)
    let random3 = Math.floor(Math.random() * 200)
    return `rgb(${random1},${random2},${random3})`
}