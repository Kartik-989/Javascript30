
const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }
  
let count =0;
//user having many skills
for (const property in users) {
  if (users[property].skills.length > 0) {
      console.log(property)
  }
}

//users having greater or equal to 50 points
for (const property in users) {
  if (users[property].points >= 50) {
      count++
  }
}

console.log("no. of users are "+count);



//people who are mern stack developer
for (const property in users) {
  let flag=0;
  for(let i=0;i<users[property].skills.length;i++){
    if(users[property].skills[i]=='React')
    flag++;
    if(users[property].skills[i]=='MongoDB')
    flag++;
    if(users[property].skills[i]=='Express')
    flag++;
    if(users[property].skills[i]=='Node')
    flag++;
    
  }
   if(flag==4)
      console.log(property)
 
  }
  
 
// all keys in object 

const val = Object.keys(users)
console.log(val)
// all values in object
const value = Object.values(users);
console.log(value);
// Use the countries object to print a country name, capital, populations and languages.

  
let country = {
  name: "Nigeria",
  capital: "Abuja",
  population: "7 billion",
  languages: ["hausa", "igbo", "yoruba"]
}

console.log(`${country.name}\n${country.capital}\n${country.population}\n${country.languages}`)



//// Exercise 2

const personAccount = {
  firstName : 'Kartik',
  lastName : 'Jangu',

  incomes : {
    salary : 50000,
    bonus  : 6000
  },
  expenses:{
    rent : 4000,
    food : 2000,
    extra : 700
  },

  totalIncome:function(){
    let tIncome =0 ;
    let values = Object.values(this.incomes)

    for( i in values ){
      tIncome+=values[i]

    }
    return tIncome;

  },

  totalExpenses : function(){
    let tExpense =0;
    let values = Object.values(this.expenses)
    for(i in values){
      tExpense+=values[i]
      
    }
    return tExpense
  },
  

  
  accountInfo: function () {
      return `name:${this.firstName} ${this.lastName}\n
              incomes:${Object.entries(this.incomes)}
              expenses: ${
                  Object.entries(this.expenses)
              }
              totalIncome: ${this.totalIncome()}
              totalExpenses: ${this.totalExpenses()}
              accountBalance: ${this.accountBalance()}
              `
  },
  accountBalance: function () {
    return this.totalIncome() - this.totalExpenses();
  },

  addIncome: function(key,value){
    this.incomes[key] = value
  },
  addExpenxes: function(key,value){
    this.expenses[key] =value
  }
}

personAccount.addExpenxes('cloth',2000)
personAccount.addIncome('freelancing',2500)

console.log(personAccount.accountInfo())