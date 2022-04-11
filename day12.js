
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


//ex2 
*/

paragraph = `I love teaching If you do not love teaching what else can you love I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love`


function tenMostFrequentWords(paragraph,top){
    const ans=[]
    
    const ar = cleanText(paragraph).split(' ')
    //console.log(ar)
    let set = new Set(ar)
    //console.log(set)
    set.forEach(x =>  {
        let obj={},count=0
        ar.forEach(y=>{
            if(x===y){
                count++
            }
        })
        obj.word=x
        obj.count=count
        ans.push(obj)
    })
    //console.log(ans)
    ans.sort((a,b)=>{
        return(b.count - a.count)
    })
    return ans.slice(0,top)
}
console.log(tenMostFrequentWords(paragraph,10))



/// ex3

sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`
function cleanText(sentence){
    return(sentence.replace(/[^A-Za-z ]/g,''))
} 

console.log(cleanText(sentence))

console.log(tenMostFrequentWords(sentence,3))