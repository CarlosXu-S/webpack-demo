import x from './x.js'
import jpg from './assets/2.jpg'
console.log(x)
console.log('hi2')

const div = document.getElementById('app')
console.log(jpg)
div.innerHTML = `
    <img src= "${jpg}">
`


const button = document.createElement('button')
button.innerText = '懒加载'
button.onclick = ()=>{
    const promise = import ('./lazy')
    promise.then((module)=>{
        const fn = module.default
        fn()
    }, ()=>{
        console.log('模块加载错误')
    })
}

div.appendChild(button)