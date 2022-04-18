
function showCountries(ar){
    let div = document.querySelector(".list")
    div.innerHTML=""
    ar.forEach(element => {
        let box = document.createElement("div")
        box.setAttribute("class","cntBox")
        box.textContent=`${element}`
        div.appendChild(box)

    });
   
    
}
showCountries(countries)


let filterStart = document.getElementById("startWord")
let filterContain = document.getElementById("wordInclude")
let order = document.getElementById("reverseOrder")
let inData = document.querySelector(".input")

inData.addEventListener("input",filterData)

let focusOrder = false
let focusfilterStart = false
let focusfilterContain = false

filterStart.addEventListener("click",e=>{
        focusfilterStart = ! focusfilterStart
        focusfilterContain=false
        focusOrder=false
        order.style.backgroundColor="rgb(153, 47, 234)"
        filterContain.style.backgroundColor="rgb(153, 47, 234)"
        focusfilterStart?filterStart.style.backgroundColor="rgb(83, 11, 159)":filterStart.style.backgroundColor="rgb(153, 47, 234)"
        filterData()

})

filterContain.addEventListener("click",e=>{
        focusfilterContain = !focusfilterContain
        focusfilterStart =false
        focusOrder = false
        order.style.backgroundColor="rgb(153, 47, 234)"
        filterStart.style.backgroundColor="rgb(153, 47, 234)"
        focusfilterContain? filterContain.style.backgroundColor="rgb(83, 11, 159)":filterContain.style.backgroundColor="rgb(153, 47, 234)"
        filterData()

})


order.addEventListener("click",e=>{
    focusOrder = !focusOrder
    focusfilterContain =false
    focusfilterStart = false
    filterContain.style.backgroundColor="rgb(153, 47, 234)"
    filterStart.style.backgroundColor="rgb(153, 47, 234)"
    focusOrder?order.style.backgroundColor="rgb(83, 11, 159)":order.style.backgroundColor="rgb(153, 47, 234)"
    filterData()

})

function filterData(){
    let ar = [...countries]
    let word = inData.value

    if(word ==="" || word ===" "){
        console.log("em")
        if(focusOrder)
            showCountries(ar.reverse())
        else
            console.log("noordder",ar[0],countries[0])
            showCountries(ar)
    }
    else{
        if(focusOrder){
            let ans = ar.filter(country => {
                return country.toLowerCase().includes(`${word}`)
            })
                showCountries(ans.reverse())
        }
        else if(focusfilterStart){
            let ans = ar.filter(country => {
                return country.toLowerCase().startsWith(`${word}`)
            })
            showCountries(ans)
        }
        else{
            let ans = ar.filter(country => {
                return country.toLowerCase().includes(`${word}`)
            })
            showCountries(ans)

        }
    }

    
}


