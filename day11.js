/*//// ex1

const constants = [2.72, 3.14, 9.81, 37, 100]
const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60
}
const users = [
{
  name:'Brook',
  scores:75,
  skills:['HTM', 'CSS', 'JS'],
  age:16
},
{
  name:'Alex',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'David',
  scores:75,
  skills:['HTM', 'CSS'],
  age:22
},
{
  name:'John',
  scores:85,
  skills:['HTML'],
  age:25
},
{
  name:'Sara',
  scores:95,
  skills:['HTM', 'CSS', 'JS'],
  age: 26
},
{
  name:'Martha',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'Thomas',
  scores:90,
  skills:['HTM', 'CSS', 'JS'],
  age:20
}
]

let[e,pi,gravity,humanBodyTemp,waterBoillingTemp] = constants
console.log(e,pi,gravity,humanBodyTemp,waterBoillingTemp)

let[fin, est, sw, den, nor] = countries
console.log(fin, est, sw, den, nor)



/// ex2
let {width,height,area,perimeter} = rectangle
console.log(width,height,area,perimeter)

for(const x of users){
    let { name , scores,skills,age} = x
    console.log(name , scores,skills,age)
}

for(const x of users){
    //let { name, scores, skills, age} =x
    //if(skills.length <2)
      //  console.log(name)

        //// OR ///////

    if(x.skills.length <2)
        console.log(x.name)
}



///////////// ex3 /////////

for(x of countries){
    let{name,capital,languages,population,flag ,curr } = x
    console.log(`Name: ${name} , Capital: ${capital}, Language: ${languages},Population:${population}`)
}

const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]
let[name,skills,scores] = student
let[, ,jsScore,reactScore]= scores
 console.log(name, skills, jsScore, reactScore)

// 3.
const students = [
    ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
    ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
  ]

  function convertArrayToObject(students){
    const aray=[]    
    for([name,skills,scores] of students){
        let obj = {}
        obj.name=name
        obj.skills=skills
        obj.scores=scores
        aray.push(obj) 
    }
    return aray
  }

  console.log(convertArrayToObject(students))

 */
//4.

const student = {
    name: 'David',
    age: 25,
    skills: {
      frontEnd: [
        { skill: 'HTML', level: 10 },
        { skill: 'CSS', level: 8 },
        { skill: 'JS', level: 8 },
        { skill: 'React', level: 9 }
      ],
      backEnd: [
        { skill: 'Node',level: 7 },
        { skill: 'GraphQL', level: 8 },
      ],
      dataBase:[
        { skill: 'MongoDB', level: 7.5 },
      ],
      dataScience:['Python', 'R', 'D3.js']
    }
  }
  let {name,age,skills} = student
  let fe = [...skills.frontEnd,{skill:'Bootstrap',level:8}]
  let be = [...skills.backEnd,{skill:'Express',level:9}]
  let db = [...skills.dataBase,{skill:'SQL',level:8}]
  let ds = [...skills.dataScience,'data science']
 
  const newStudent = {...student,skills:{frontEnd:[...fe],backEnd:[...be],dataBase:[...db],dataScience:[...ds]}}
  console.log(newStudent)