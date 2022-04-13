let subt = document.querySelector(".subtitle")
subt.innerHTML= `Currently, we have ${countries.length} countries`

let sub = document.querySelector(".btnSub")

document.getElementById("popu").addEventListener("click", topPopulatedCountries);

document.getElementById("lang").addEventListener("click", topSpokenLanguage);


function presentData(ar){

let data = document.querySelector(".data")
data.innerHTML=""
ar.forEach(x=>{
    let newDiv = document.createElement("div")
    newDiv.style.display="flex"
    newDiv.style.width="80%"
    newDiv.style.margin="auto auto 3px auto"

    let f = document.createElement("h5")
    f.innerHTML=`${x.name}`
    f.style.width="20%"
    newDiv.appendChild(f)

    let bardiv= document.createElement("div")
    bardiv.style.width="70%"
    newDiv.appendChild(bardiv)


    let e = document.createElement("h5")
    e.innerHTML=`${x.value}`
    e.style.width="10%"
    newDiv.appendChild(e)
    data.appendChild(newDiv)
})
}


function topPopulatedCountries(){
    sub.innerHTML="10 Most populated countries in the world"

    const ar =[]
    for(const x of countries){
        let o = {}
        o.name=x.name;
        o.value = x.population;
        ar.push(o)
    }
    ar.sort((first,second) =>{

        return ( second.value-first.value)
    })

    //console.log(ar.splice(0,10))
    presentData(ar.splice(0,10)) 
}

let lang = new Set()
countries.forEach(element => {
    for(i in element.languages){
        lang.add(element.languages[i])
    }
})

function topSpokenLanguage(){
    sub.innerHTML="10 Most spoken languages in the world "

    const ar =[]
    lang.forEach(name=>{
        let value = 0;
        countries.forEach(element => {
            if(element.languages.includes(name)){
                value++
            }
        })
        let o = {name,value}
        ar.push(o)
    })
    ar.sort((first,second) =>{

        return ( second.value-first.value)
    })

    //console.log(ar.splice(0,10)) 
    presentData(ar.slice(0,10))
}

topPopulatedCountries()