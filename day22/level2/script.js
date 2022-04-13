let div = document.querySelector("div")
div.style.display="flex"
div.style.flexWrap="wrap"


let p  = document.querySelector("h4")
const url = 'https://restcountries.com/v2/all'
const fetchData = async () => {
    try {
        const response = await fetch(url)
        const data = await response.json()
        countries = data;
        console.log(countries.length)
        p.textContent= `Total number of countries : ${countries.length}`
        
       
        countries.forEach(country => {
            let box = document.createElement("div")
            box.textContent = `${country.name.toUpperCase()}`
            box.style.width = "150px";
            box.style.height = "90px"
            box.style.backgroundColor = "white"
            box.style.border= "groove"
            box.style.margin = "6px"
            box.style.padding = "20px"
            box.style.alignContent="center"
            box.style.fontWeight="bold"
            div.appendChild(box)
        })

    } catch (err) {
        console.log(err)
    }
}

fetchData();