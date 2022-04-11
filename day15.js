/////ex 1 and ex2
class Animal {
    constructor(name, age, color, legs) {
        this.name = name;
        this.age = age;
        this.color = color
        this.legs = legs
    }
    getfullInfo() {
        return `${this.name} is ${this.age} year(s) old ${this.color} in color`
    }
    set removeLegs(leg) {
        this.legs -= leg
    }
    get getName() {
        return this.name;
    }
}



class cat extends Animal{
        constructor(name,age,color,legs){
            super(name,age,color,legs)
            this.catagory ='Cat'
        }
        getfullInfo() {
            return `${super.name} is ${this.age} year(s) old ${this.color} ${this.catagory}`
        }


}
class dog extends Animal{
    constructor(name,age,color,legs){
        super(name,age,color,legs)
        this.catagory = 'Dog'
    }
    getfullInfo() {
        return `${this.name} is ${this.age} year(s) old ${this.color} ${this.catagory}`
    }



}

let obj1 = new dog("jack", 5, "brown", 4);
let obj2 = new cat("brie", 2, "white", 4);


console.log(obj1.getfullInfo());
console.log(obj2.getfullInfo());


class Statistics {
    constructor(arr) {
        this.arr = arr;
    }


    count() {
        return this.arr.length;
    }

    sum() {
        let sum = 0;
        this.arr.forEach((num) => {
            sum += num
        })
        return sum;
    }

    mean() {
        
        return Math.ceil(this.sum() / this.arr.length)
    }

    min() {
                return Math.min(...this.arr);
    }

    max() {
        return Math.max(...this.arr)
    }

    range() {
        return this.max() - this.min();
    }

    median() {
        let sorted = this.arr.sort()
        let index = sorted.length / 2
        index = Math.floor(index);
        return sorted[index];
    }
 

    describe() {
        return `
        Count: ${this.count()}\n
        Sum: ${this.sum()}\n 
        Min: ${this.min()}\n
        Max: ${this.max()}\n
        Range: ${this.range()}\n
        Mean: ${this.mean()}\n
        Median: ${this.median()}`
    }
}

let numbers = new Statistics([31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]);
console.log(numbers.describe())

class PersonAccount {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.incomes = [];
        this.expenses = [];
    }

    totalIncome() {
        let totalIncom = 0;
        this.incomes.forEach(income => totalIncom += income)
        return totalIncom
    }
    totalExpenses() {
        let totalExpenses = 0;
        this.expenses.forEach(expense => totalExpenses += expense)
        return totalExpenses;
    }

    accountInfo() {
        return `
        Full-Name: ${this.firstName} ${this.lastName}
        total-Income: ${this.totalIncome()}
        total-Expenses: ${this.totalExpenses()}
        `
    }

    set addIncome(amount) {
        this.incomes.push(amount)
    }

    set addExpenses(cost) {
        this.expenses.push(cost)
    }
}

let myAccount = new PersonAccount("victor", "kenneth")
console.log(myAccount.accountInfo())
myAccount.addIncome=15000
myAccount.addExpenses=5000
myAccount.addIncome=2000
myAccount.addExpenses=2570
console.log(myAccount.accountInfo())