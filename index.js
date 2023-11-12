import './src/request'
import _ from 'lodash'
import klee from "@assets/images/klee.png"
const img = document.createElement('img')
img.src = klee
img.style.height = '500px'
document.body.appendChild(img)

const btn = document.createElement('button')

btn.addEventListener('click', async () => {
    const url = '/api/test1'
    const res = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    res.json().then(data => {
        return console.log(data);
    })

})
btn.style.width = '100px'
btn.style.height = '100px'
btn.style.backgroundColor = 'pink'
document.body.appendChild(btn)