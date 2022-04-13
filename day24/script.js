const space = {
    mercury:{
        gravity:0.38,
        image:"mercury.png"
    },
    venus:{
        gravity:0.91,
        image:"venus.png"
    },
    earth:{
        gravity:1.0,
        image:"earth.png"
    },
    mars:{
        gravity:0.38,
        image:"mars.png"
    },
    jupiter:{
        gravity:2.34,
        image:"jupiter.png"
    },
    saturn:{
        gravity:0.93,
        image:"saturn.png"
    },
    uranus:{
        gravity:0.92,
        image:"uranus.png"
    },
    neptune:{
        gravity:1.12,
        image:"neptune.png"
    },
    pluto:{
        gravity: 0.08,
        image:"pluto.png"
    }
}

const input = document.querySelector("input")
const select = document.querySelector("select")
const button = document.querySelector("button")
const container = document.querySelector(".container")

button.addEventListener("click",function(){
    if(input.value ==="" ){
        document.getElementById("wDiv").innerHTML="Enetr mass Please!"
        document.getElementById("imgDiv").innerHTML =""
    }           

    else{
        document.getElementById("wDiv").innerHTML=" "
        document.getElementById("imgDiv").innerHTML =""
        imgSrc = space[select.value].image;
        weight = Number(input.value) * space[select.value].gravity;
        
        let image = document.createElement("img")
        image.src = `images/${imgSrc}`
        image.style.maxWidth="100%"
        image.style.height="auto"
        let p = document.createElement("p");
        p.innerHTML = `Weight of object on <span style="color:white">${select.value}<span> is <span style="color:white "> ${weight} <span>`
    
        document.getElementById("imgDiv").appendChild(image) 
        document.getElementById("wDiv").appendChild(p) 
    
    }

    
})