
//ex 1
/*
function outer(){
    let count =0
    function plusOne(){
        count++
        return count
    }
    return plusOne()

}
console.log(outer())
*/
//ex 2

function outer(){
    let count =0
    function plusOne(){
        count++
        function plusTwo(){
            count+=2
            return count
        }
        return plusTwo()
    }
    function minusOne(){
        count--
        return plusOne()
    }
    return minusOne()

}
console.log(outer())

//ex3 
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