let data = [
    {
        firstname : 'Martha',
        lastname :  'Yohanes',
        country : 'Finland',
        score : 85,
        timestamp : new Date(2014, 10, 24, 10, 33, 30, 0)

    },
    {   
        firstname : 'Mathias',
        lastname :  'Elias',
        country : 'Sweeden',
        score : 70,
        timestamp : new Date(2014, 10, 24, 10, 33, 30, 0)
    },
    {   
        firstname : 'David',
        lastname :  'Smith',
        country : 'Italy',
        score : 80,
        timestamp : new Date(2014, 10, 24, 10, 33, 30, 0)
    }
]

let fName = document.querySelector("#firstName")
let lName = document.querySelector("#lastName")
let countryName = document.querySelector("#country")
let scoreValue = document.querySelector("#score")
let warning = document.querySelector("#warn")
let div = document.querySelector(".data")

function addDataRow(){
    if(fName.value.trim()==="" ||lName.value.trim()==="" || country.value.trim()==="" || score.value.trim()==="" ){
        warning.innerHTML = "All fields are required"
    }
    else{
        warning.innerHTML=""
        let obj = {
            firstname  : fName.value.trim(),
            lastname : lName.value.trim(),
            country :  countryName.value.trim(),
            score :  parseInt(scoreValue.value),
            timestamp : new Date()
        }

        data.push(obj)
        //console.log(data)

        renderData(data)
        
    }
}
document.querySelector('#addButton').addEventListener("click",addDataRow)

function renderData(ar){
    let d = document.querySelector("ul")
    d.innerHTML=""
    ar.sort( (x,y)=>{
       return y.score- x.score
    })
    console.table(data)

    ar.forEach(element => {
        let rowDiv = document.createElement("li")
        rowDiv.setAttribute("class","data")

        let nameDiv = document.createElement("div")
        nameDiv.setAttribute("class","namDiv")
        let name = document.createElement("p")
        name.style.marginBottom =" 0px"
        
        name.innerHTML=`${element.firstname.toUpperCase()} ${element.lastname.toUpperCase()}`
        let date = document.createElement("p")
        date.style.marginTop="0px"
        date.style.fontSize="13px"

        date.innerHTML  =` ${element.timestamp.toLocaleDateString('en-US',{year:'numeric',month:'long',day:'numeric'})} ${ element.timestamp.toLocaleTimeString([],{ hours12:'false'})}`

        nameDiv.appendChild(name)
        nameDiv.appendChild(date)
        rowDiv.appendChild(nameDiv)

        let cnt = document.createElement("p")
        cnt.setAttribute("class","cntDiv")
        cnt.innerHTML = `${element.country.toUpperCase() }`
        rowDiv.appendChild(cnt)

        let sc = document.createElement("p")
        sc.setAttribute("class","scoreDiv")
        sc.innerHTML=`${element.score}`
        rowDiv.appendChild(sc)

        let btnDiv = document.createElement("div")
        btnDiv.setAttribute("class","btnGrp")
        let btn1 = document.createElement("button")
        btn1.setAttribute("class","btn")
        btn1.textContent="Del"
        btnDiv.appendChild(btn1)
        btn1.addEventListener("click",()=>deleteRow(element))

        let btn2 = document.createElement("button")
        btn2.setAttribute("class","btn")
        btn2.textContent="+5"
        btnDiv.appendChild(btn2)
        btn2.addEventListener("click",()=>updateScore(element,5))

        let btn3 = document.createElement("button")
        btn3.setAttribute("class","btn")
        btn3.textContent="-5"
        btnDiv.appendChild(btn3)
        btn3.addEventListener("click",()=>{updateScore(element,-5)})


        rowDiv.appendChild(btnDiv)

        d.appendChild(rowDiv)
    })


}

renderData(data)
function deleteRow(x){
    console.log(x)
    data = data.filter(ele=> ele != x)
    renderData(data)
    
}
function updateScore(x,val){
    data.forEach(ele=>{
        if(ele===x){
            console.log(ele,x)
            ele.score=ele.score+val
            if(ele.score<0)
                ele.score=0
        }
    })
    renderData(data)
}

 