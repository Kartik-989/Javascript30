let cntTotal  = document.querySelector("#cnt")
let subt = document.querySelector("#subt")
let searchBar = document.querySelector('#searchBar')
let sub = document.querySelector(".btnSub")
let nameFilter =false,capitalFilter=false,popuFilter=false;
let totalPopu = 0;
    for(const x of countriesArray){
        totalPopu += x.population
    }

cntTotal.innerHTML=`Currently we have ${countriesArray.length} countries`

let div = document.querySelector(".countries")

function showCountries(arr){
    
    div.innerHTML=""
    arr.forEach(element => {
    let box = document.createElement("div")
    box.setAttribute("class","cntBox")

    let img = document.createElement("img")
    img.setAttribute("src",`${element.flag}`)
    img.setAttribute("class","cntImg")
    box.appendChild(img)

    let cntName = document.createElement("h4")
    cntName.innerHTML= `${element.name.toUpperCase()}`
    cntName.style.color="rgb(224, 146, 20)"
    box.appendChild(cntName)
    
    let capital = document.createElement("h5")
    capital.innerHTML =`Capital: ${element.capital}`
    box.append(capital)

    let lang = document.createElement("h5")
    lang.innerHTML=`Languages: ${element.languages}`
    box.appendChild(lang)
    
    let pop = document.createElement("h5")
    pop.innerHTML=`Popultation: ${element.population}`
    box.appendChild(pop)

    div.appendChild(box)
    });
    
}

showCountries(countriesArray)

document.getElementById("nameSort").addEventListener("click", nameSort);
document.getElementById("capiSort").addEventListener("click", capiSort);
document.getElementById("popuSort").addEventListener("click", popuSort);
searchBar.addEventListener("keyup",showFilterData)

function filterData(){
    let ar = [...countriesArray]
    let word =  searchBar.value.trim().toLowerCase()
    if(word === "" || word === " "){
            return(ar)
    }
    else{
        let ans = ar.filter(country => {
            
            if(country.name.toLowerCase().includes(`${word}`))
            {
                return true;
            }
            else if(country.capital)
                if(country.capital.toLowerCase().includes(`${word}`)){
                return true
            }
            else if(country.languages){
                let flag = false
                for(x of country.languages){
                    if(x.toLowerCase().includes(`${word}`)){
                        flag = true
                        break
                    }
                }

                return flag
                
            }
        })

        return ans

    }

}
function showFilterData(){
    document.getElementById("capiSort").innerHTML=`Capital `
    document.getElementById("popuSort").innerHTML=`Population `
    document.getElementById("nameSort").innerHTML=`Name `

    let ar = filterData()
    subt.textContent = `${ar.length} countries satisfied the search criteria `
    showCountries(ar)
    topPopulatedCountries()

}
function nameSort(){
    
    nameFilter = !nameFilter
    capitalFilter = popuFilter =false
    document.getElementById("capiSort").innerHTML=`Capital `
    document.getElementById("popuSort").innerHTML=`Population `

    let ar =  filterData()
    if(nameFilter){
        document.getElementById("nameSort").innerHTML=`Name &#8659`
        ar.sort((x,y)=>{
            return( (y.name>x.name)?1:-1)
        })
        //console.log(ar)
        
    }
    else{
        document.getElementById("nameSort").innerHTML=`Name &#8657`
        ar.sort((x,y)=>{
            return( (x.name>y.name)?1:-1)
        })
    }
    showCountries(ar)

}
function capiSort(){
    capitalFilter = !capitalFilter
    nameFilter = popuFilter = false
    document.getElementById("nameSort").innerHTML=`Name `
    document.getElementById("popuSort").innerHTML=`Population`


    let ar = filterData()
    if(capitalFilter){
        document.getElementById("capiSort").innerHTML=`Capital &#8659`
        ar.sort((x,y)=> (y.capital > x.capital)?1:-1 )
        
    }
    else{
        document.getElementById("capiSort").innerHTML=`Capital &#8657`
        ar.sort((x,y)=> (x.capital > y.capital)?1:-1 )

    }
    showCountries(ar)

}
function popuSort(){
    popuFilter = ! popuFilter
    capitalFilter = nameFilter =false
    document.getElementById("capiSort").innerHTML=`Capital `
    document.getElementById("nameSort").innerHTML=`Name `

    let ar = filterData()
    if(popuFilter){
        document.getElementById("popuSort").innerHTML=`Population &#8659`
        ar.sort((x,y)=> y.population-x.population)
    }
    else{
        document.getElementById("popuSort").innerHTML=`Population &#8657`
        ar.sort((x,y)=> x.population-y.population)

    }
    showCountries(ar)

}


/************************ graph section *************************/
document.getElementById("popu").addEventListener("click", topPopulatedCountries);
document.getElementById("lang").addEventListener("click", topSpokenLanguage);

function presentData(ar){
    //console.log(ar)
    let maxBar = ar[0].value
    let data = document.querySelector(".data")
    data.innerHTML=""
    ar.forEach(x=>{
        let newDiv = document.createElement("div")
        newDiv.style.display="flex"
        newDiv.style.width="80%"
        newDiv.style.margin="auto auto 3px auto"

        let f = document.createElement("h5")
        f.innerHTML=`${x.name}`
        f.style.width="30%"
        f.style.margin="5px"
        newDiv.appendChild(f)

        let bardiv= document.createElement("div")
        bardiv.style.width="60%"
        let bar  = document.createElement("div")
        bar.style.borderRadius="2px"
        bar.style.backgroundColor="rgb(224, 146, 20)"
        bar.style.width=`${(x.value/maxBar)*100}%`
        bar.style.height="30px"


        bardiv.appendChild(bar)
        newDiv.appendChild(bardiv)


        let e = document.createElement("h5")
        e.innerHTML=`${x.value}`
        e.style.width="10%"
        e.style.paddingLeft="15px"
        e.style.margin="10px"
        newDiv.appendChild(e)
        data.appendChild(newDiv)
    })
}


function topPopulatedCountries(){
    let countriesArray = filterData()
    sub.innerHTML=" Most populated countries in the world"

    const ar =[]
    
    let o = {}
        o.name='world';
        o.value = totalPopu;
        ar.push(o)
    for(const x of countriesArray){
        let o = {}
        o.name=x.name;
        o.value = x.population;
        ar.push(o)
    }
    ar.sort((first,second) =>{

        return ( second.value-first.value)
    })

    presentData(ar.splice(0,6)) 
}

function langCount(x){
    let l= new Set()
    x.forEach(element => {
        for(i in element.languages){
            l.add(element.languages[i])
        }
    })
    return l
}

function topSpokenLanguage(){
    let countriesArray = filterData()
    sub.innerHTML="Most spoken languages in the world "
    const ar =[]
    let lang=langCount(countriesArray)
    lang.forEach(name=>{
        let value = 0;
        countriesArray.forEach(element => {
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

    presentData(ar.slice(0,6))
}
topPopulatedCountries(countriesArray)



