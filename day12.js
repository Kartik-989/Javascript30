
/*  ex1
let text2 = "He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month."
let salaries = text2.match(/\d+/g);
let totalAnnualIncome = 0;
salaries.forEach(element => {
    totalAnnualIncome += Number(element);
})
console.log(totalAnnualIncome)

let text = "The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction"

function distBtwTwoPart () {
    let arr = text.match(/\d+/g)

    arr.sort((a,b)=>{
    return a-b
    })
    return  arr[arr.length - 1] - arr[0]
    
}
console.log(distBtwTwoPart());

const pattern = /^[F/f]irst[Nn]ame$|^[F/f]irst_[Nn]ame$/
const isValidVariable = (str) => {
    console.log(pattern.test(str));
}
isValidVariable('first_name')
*/

//ex2 

