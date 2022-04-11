
async function  getCountries(){
    let resp = await fetch('https://restcountries.com/v2/all')
    let data = await resp.json()


    // total no of languages
    let lang = new Set()
    const are =[]
    data.forEach(d => {
        console.log(`Name : ${d.name}, Population:${d.population},Area:${d.area},Capital: ${d.capital},Languages: ${d.languages[0].name}`)
        let name = d.name
        let area = d.area
        are.push({name:name,area:area})
        d.languages.forEach(language => {
            lang.add(language.name)
        })
        
    });
    console.log(` Total nu of languages are ${lang.size}`)
    are.sort((a,b)=>{
        return b.area-a.area
    })
    console.table(are.slice(0,10))



}

getCountries()


async function catNames(){
    let catNames=[],catWeight=[]
    const resp = await fetch('https://api.thecatapi.com/v1/breeds')
    const data = await resp.json()
    data.forEach(element => {
        catNames.push(element.name)
        catWeight.push(element.weight.metric)
    });

    console.table(catNames)
    console.log(catWeight)
  


    
}

catNames()
