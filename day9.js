const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand', 'italy', 'spain', 'germany', 'portugal', 'england', 'netherland', 'belgium', 'france', 'nigeria', 'U.S.A'];
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: ' ' },
  { product: 'potato', price: 8 },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]


/*///exercise 1 /////////////
countries.forEach(country=> console.log(country))
names.forEach(name=> console.log(name))
numbers.forEach(number=>console.log(number))

const cont = countries.map(cnt=>cnt.toUpperCase())
console.log(cont)
const cntlen = countries.map(cnt=>cnt.length)
console.log(cntlen)
const nam = names.map(n => n.toUpperCase())
console.log(nam)
const num = numbers.map(n => n *n)
console.log(num)
const pro = products.map(n => `${n.product}:${n.price}`)
console.log(pro)

const land = countries.filter(n=> n.toLowerCase().includes('land'))
console.log(land)
const sixchar =  countries.filter( n=> n.length == 6)
console.log(sixchar)

const gschar =  countries.filter( n=> n.length > 6)
console.log(gschar)

const econt =  countries.filter( n=> n.startsWith('E'))
console.log(econt)

const priceWithValues =products.filter(n=> n.price > 0)
console.log(priceWithValues)

const getStringList = (arr) => {
    let nn = arr.filter(item => {
        return typeof item === "string"
    })
    return nn;
}

let nn = getStringList(["victor", 3, 5, "kenneth"]);
console.log(nn);

let sumOfNumbers = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
})
console.log(sumOfNumbers)

let joinCountries = countries.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
})
console.log(joinCountries);

let isSomelength7 = countries.some(country => {
    return country.length > 7;
})
console.log(isSomelength7)

let isCountryIncludesLand = countries.every(country => {
    return country.toLowerCase().includes("land")
})
console.log(isCountryIncludesLand)

*/
/// 22222222222222///////////
const totalPrice = products.map(n => n.price)
                    .filter(price => price>0)
                    .reduce((sum,price)=> sum = sum+price)
console.log(totalPrice)

const sum = products.reduce((t,p)=> {
    if(p.price >0){
        t = t+ p.price
        
    }
    return t
    },0)
console.log(sum)

const ctgrzd = countries.filter(country => {
    return country.toLowerCase().includes("ia") || country.toLowerCase().includes("island") || country.toLowerCase().includes("land") || country.toLowerCase().includes("stan");
})
console.log(ctgrzd)

const firstTen = countries.slice(0,10) 
console.log(firstTen)

const lastTen = countries.slice(countries.length-10,countries.length)
console.log(lastTen)

function alphaCountry() {
    const alphaChar = 'ABCDEFGHIJKLMNOPQRSTUVEWXYZ'
    const finalObj = [];
    let alphaIndexer = 0;

    while (alphaIndexer !== alphaChar.length) {
    const startsWith = countries.filter((obj) => obj.startsWith(alphaChar[alphaIndexer]))
    finalObj.push({'letter': alphaChar[alphaIndexer], 'count': startsWith.length + ' times'})
    alphaIndexer++
  }

  return finalObj;
}
console.log(alphaCountry())
