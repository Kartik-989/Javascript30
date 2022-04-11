const names = ['Asabeneh', 'Brook', 'David', 'John']
const countrie = [
  ['Finland', 'Helsinki'],
  ['Sweden', 'Stockholm'],
  ['Norway', 'Oslo']
]
const user = {
  name: 'Asabeneh',
  title: 'Programmer',
  country: 'Finland',
  city: 'Helsinki',
  age: 250
}
const users = [
  {
    name: 'Asabeneh',
    title: 'Programmer',
    country: 'Finland',
    city: 'Helsinki',
    age: 250
  },
  {
    name: 'Eyob',
    title: 'Teacher',
    country: 'Sweden',
    city: 'London',
    age: 25
  },
  {
    name: 'Asab',
    title: 'Instructor',
    country: 'Norway',
    city: 'Oslo',
    age: 22
  },
  {
    name: 'Matias',
    title: 'Developer',
    country: 'Denmark',
    city: 'Copenhagen',
    age: 28
  }
]

/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////

//ex1 

console.table(user)

//console.table(countries)



console.group('Names')
console.log(names)
console.groupEnd()

console.group('Countrie')
console.log(countrie)
console.groupEnd()

console.group('Users')
console.log(user)
console.groupEnd()


//ex 2

console.assert(10>2*10 , ' 10 is smaller')
console.warn('10 is smaller than 10*2')
console.error('correct the above equation')



/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
//ex 3
console.time('regular while loop')
let z=0
while(z>countrie.length){
z++

}
console.timeEnd('regular while loop')
console.time('Regular for loop')
for (let i = 0; i < countrie.length; i++) {
  //console.log(countrie[i][0], countrie[i][1])
}
console.timeEnd('Regular for loop')

console.time('for of loop')
for (const [name, city] of countrie) {
  //console.log(name, city)
}
console.timeEnd('for of loop')

console.time('forEach loop')
countrie.forEach(([name, city]) => {
  //console.log(name, city)
})
console.timeEnd('forEach loop')
