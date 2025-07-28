const container = document.querySelector('#container')
const para = document.createElement('p')
para.textContent =  "Hey I’m red!"
container.appendChild(para)
const header = document.createElement('h3')
header.textContent =  "I’m a blue h3!"
container.appendChild(header)

const div = document.createElement('div')
div.style.border = " black";
div.style.backgroundColor = " pink";
const h1 = document.createElement('h1')
 h1.textContent = "IM A DIV"
 const p = document.createElement('p')
 p.textContent = "ME TOO"
div.appendChild(h1)
div.appendChild(p)

document.getElementById('container').append(div)



const btn =  document.querySelector('#btn')
btn.onClick = () => alert('heloo there')