let div = document.querySelector("div")

let h1 = document.createElement("h1")
h1.innerHTML = ` ${asabenehChallenges2020.challengeTitle} <span id="year">${asabenehChallenges2020.challengeYear}</span>`
h1.style.textAlign="center"
div.appendChild(h1)

let year = document.querySelector("#year");
year.style.fontSize = "45px"

function color(){
    let random1 = Math.floor((Math.random() * 200)+50)
    let random2 = Math.floor((Math.random() * 200)+50)
    let random3 = Math.floor((Math.random() * 200)+50)
    return `rgb(${random1},${random2},${random3})`
}
const changeClr1= () => {
    year.style.color = color();
}
setInterval(changeClr1, 1000)

const u = document.createElement("h3")
u.textContent= asabenehChallenges2020.challengeSubtitle
u.style.textAlign="center"
u.style.textDecorationLine="underline"
div.appendChild(u)

const p = document.createElement("p")

p.textContent = Date();
p.style.textAlign="center"
p.style.width = "300px"
p.style.margin="auto"

div.append(p)

const changeClr2 = () => {
    p.style.backgroundColor = color();
}
setInterval(changeClr2, 1000)

const ul = document.createElement("ul")

ul.style.listStyle="none"
ul.style.margin="auto"
ul.style.width = "80%"

asabenehChallenges2020.challenges.forEach(x=>{

    let li  = document.createElement('li')
    li.style.padding="15px"
    li.style.margin=" 5px 0px 5px 0px "
    if(x.status.toLowerCase() === 'done')
        li.style.backgroundColor="Mediumspringgreen"
    else if(x.status.toLowerCase() === 'ongoing')
        li.style.backgroundColor="orange"
    else
        li.style.backgroundColor="tomato"
    

    let liDiv = document.createElement("div")
    liDiv.style.display="flex"
    let t = document.createElement("h4")
    t.textContent = ` ${x.name}  `
    t.style.width="40%"
    t.style.margin="2px"
    t.style.padding="2px"
    liDiv.appendChild(t)
    

 
    let con = document.createElement('details')
    let sum = document.createElement('summary')
    sum.textContent=`${x.topics[0]}`
    x.topics.forEach(ele=>{
        let  alltopics = document.createElement('li')
        alltopics.textContent=`${ele}`
        con.appendChild(alltopics)
    })
    
    con.style.width="30%"
    con.style.padding="2px"
    con.style.textAlign="left"
    con.appendChild(sum)

    liDiv.appendChild(con)

    let st = document.createElement("h4")
    st.textContent=`${x.status}`
    st.style.width="30%"
    st.style.padding="2px"
    st.style.textAlign="right"

    liDiv.appendChild(st)

    li.appendChild(liDiv)

    ul.appendChild(li)
})

div.append(ul)


let authorName = document.createElement("h1")
authorName.style.textAlign="center"
authorName.style.fontWeight="bold"
authorName.textContent = ` ${asabenehChallenges2020.author.firstName} ${asabenehChallenges2020.author.lastName}`
div.appendChild(authorName)
let bio = document.createElement("p")
bio.textContent = ` ${asabenehChallenges2020.author.bio} `
bio.style.width="630px"
bio.style.textAlign="center"
bio.style.margin="auto"
div.appendChild(bio)


let features = document.createElement("div")
features.style.margin="auto"
features.style.width="60%"


div.appendChild(features)


let titles = document.createElement("div")
titles.style.float="left"
titles.style.width="30%"
titles.style.listStyle="none"
titles.style.margin=" 15px auto"
features.appendChild(titles)

let qualifications = document.createElement("div")
qualifications.style.float="right"
qualifications.style.width="30%"
qualifications.style.listStyle="none"
qualifications.style.padding="0px"
qualifications.style.margin="15px auto auto auto"
features.appendChild(qualifications)


let skills = document.createElement("div")
skills.style.float="center"
skills.style.width="25%"
skills.style.padding="15px"
skills.style.listStyle="none"
skills.style.margin=" 15px auto auto auto"
features.appendChild(skills)

let ti = document.createElement('h4')
ti.innerHTML="Titles"
titles.appendChild(ti)
asabenehChallenges2020.author.titles.forEach(x=>{
    let e = document.createElement("li")
    e.textContent= `${x[0]}  ${x[1]} `
    e.style.textAlign="left"
    titles.appendChild(e)
})

let sk = document.createElement('h4')
sk.textContent = "Skills"
skills.appendChild(sk)

asabenehChallenges2020.author.skills.forEach(x=>{
    let e = document.createElement("li")
        e.textContent= `${x}`
        e.style.textAlign="left"
        skills.appendChild(e)
})

let qu = document.createElement('h4')
qu.textContent = "Qualifications"
qualifications.appendChild(qu)

asabenehChallenges2020.author.qualifications.forEach(x=>{
    let e = document.createElement("li")
        e.textContent= `${x}`
        e.style.textAlign="left"
        qualifications.appendChild(e)
})


let keywords = document.createElement("div")
keywords.style.width = "60%"
keywords.style.margin="auto"
div.appendChild(keywords)

let kw = document.createElement('h4')
kw.textContent = "Keywords"

keywords.appendChild(kw)

asabenehChallenges2020.keywords.forEach(x=>{
    let k = document.createElement("h5")
    k.style.float="left"
    k.style.backgroundColor=color()
    k.textContent=`# ${x}`
    k.style.margin="5px"
    k.style.borderRadius="3px"
    k.style.padding=" 2px 2px 2px 2px "
    keywords.appendChild(k)
})



