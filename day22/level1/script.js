let body = document.querySelector("body")
let div = document.querySelector("div")

function isPrime(x){
    if(x<2)
        return false
    else if(x===2)
        return true
    else{
        for(let i=2;i<x;i++)
        {
            if(x%i===0)
                return false
        }
    return true
    }
}
console.log(isPrime(25))
for (let i = 0; i <= 100; i++) {

    
    if(isPrime(i)){
    let box = document.createElement("div")
    box.textContent = i;
    box.style.width = "130px";
    box.style.height = "90px";
    box.style.backgroundColor = "red"
    box.style.margin = "8px"
    box.style.color= "white"
    box.style.alignContent="center"
    box.style.fontSize="30px"
    box.style.fontWeight="bold"
    div.appendChild(box)
    }

    else {
        if (i % 2 === 0) {
        let box = document.createElement("div")
        box.textContent = i
        box.style.width = "130px";
        box.style.height = "90px"
        box.style.backgroundColor = "green"
        box.style.margin = "8px"
        box.style.color= "white"
        box.style.alignContent="center"
        box.style.fontSize="30px"
        box.style.fontWeight="bold"
        div.appendChild(box)
        }
        else {
            let box = document.createElement("div")
            box.textContent = i;
            box.style.width = "130px";
            box.style.height = "90px";
            box.style.backgroundColor = "yellow"
            box.style.margin = "8px"
            box.style.color= "white"
            box.style.alignContent="center"
            box.style.fontSize="30px"
            box.style.fontWeight="bold"
            div.appendChild(box)
        }
}

}