
/*
let student = {
    firstName: "Kartik",
    lastName: "Jangu",
    age: 21,
    skills: ["html", "css", "javascript", "react","c++"],
    country: "India"
}

let txt = JSON.stringify(student)
localStorage.setItem("s1", txt)
console.log(localStorage)
*/


const personalAccount = {
    firstName: "Kartik",
    lastName: "Jangu",
    age:21,
    incomes:{
        job : 50000,
        bonus: 5000
    },
    expenses:{
        rent: 13000,
        fare: 2000,
        food:3750
    },

    totalIncome(){
        let inc = 0;
        Object.values(this.incomes).forEach(value =>{ inc=inc+value})
        return inc
    },
    totalExpense(){
        let inc =0;
        Object.values(this.expenses).forEach(value =>{ inc=inc+value})
        return inc
    },
    accountInfo(){
        return ` I am ${this.firstName} ${this.lastName}. I am ${this.age} year old.\n My total income is ${this.totalIncome()} and expenses is ${this.totalExpense()}.`
    },
    addIncome(source,value){
        this.incomes[source]=value
    },
    addExpense(x,y){
        this.expenses[x]=y
    },
    accountBalance(){
        return this.totalIncome-this.totalExpense
    }

}
personalAccount.addExpense('travel',3000)
console.log(personalAccount.accountInfo())
const p = JSON.stringify(personalAccount)
localStorage.setItem('p1',p)
let x=(JSON.parse(localStorage.getItem('p1')))
console.log(x)
localStorage.clear()