
//ex1
/*
console.log(document.querySelector('p'))

console.log(document.querySelector('#one'))
console.log(document.querySelector('#two'))
console.log(document.querySelector('#three'))
console.log(document.querySelector('#four'))

const ps = document.querySelectorAll('p')

ps.forEach(text =>
  console.log(text.textContent))

ps[3].textContent='fourth paragraph'

ps[1].className = 'title'
ps[1].id = 'two'

*/
//ex2

let ps = document.querySelectorAll('p');
for (let i = 0; i < ps.length; i++) {
    if (i % 2 == 0) {
        ps[i].style.color = 'green'
        ps[i].style.backgroundColor = 'pink'
        ps[i].style.border = 'dotted'
        ps[i].style.fontFamily = 'cursive'
        ps[i].style.fontSize='33px'
    } else {
        ps[i].style.color = 'red'
        ps[i].style.backgroundColor = 'skyblue'
        ps[i].style.fontSize='25px'
        ps[i].style.border = 'solid'

    }
}