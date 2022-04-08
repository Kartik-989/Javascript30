
/*
const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const countries = ['Finland', 'Sweden', 'Norway']


 //exer1   
let empset  = new Set()
console.log(empset)

let tmp = new Set()
for(let i=0;i<10;i++){
    tmp.add(i)
}
console.log(tmp)
tmp.delete(3)
console.log(tmp)
tmp.clear()
console.log(tmp)


const names = ["avc","sxxf","sdwwq","lfof", "badejo"]
let namesSet = new Set()
names.forEach(name => {
    namesSet.add(name)
})
console.log(namesSet)

let countriesLength = new Set()
countries.forEach(n=>{
        countriesLength.add(n)
        countriesLength.add(n.length)
})
console.log(countriesLength)
/////

//// ex 2


const t = [...a,...b]
let aUb = new Set(t)
console.log(aUb)


let A = new Set(a)
let B = new Set(b)

let c = a.filter((num) => B.has(num))
let C = new Set(c)

console.log(C)

let d = a.filter((num) => !B.has(num))
let D = new Set(d)

console.log(D)

*/

//// ex 3

// to find unique languages
let lang = new Set()
countries.forEach(element => {
    for(i in element.languages){
        lang.add(element.languages[i])
    }
})


function mostSpokenLanguages(countries, len){
    const ar =[]
    lang.forEach(value=>{
        let num = 0;
        countries.forEach(element => {
            if(element.languages.includes(value)){
                num++
            }
        })
        let o = {value,num}
        ar.push(o)
    })
    ar.sort((first,second) =>{

        return ( second.num-first.num)
    })

    return ar.splice(0,len)
}
console.log(mostSpokenLanguages(countries,10))
console.log(mostSpokenLanguages(countries, 3))
