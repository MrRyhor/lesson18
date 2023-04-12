function getRandomWish() {
    const wishList = ['love', 'peace', 'victory', 'health', 'luck', 'freiends', 'pet', 'work']
    let randomIndex = Math.floor(Math.random() * wishList.length)
    return wishList[randomIndex]
}

let div1 = document.createElement('div')
div1.setAttribute('class', 'div')
let wish1 = getRandomWish()
div1.innerHTML = wish1
const title = document.querySelector('.title')
title.after(div1)

let div2 = document.createElement('div')
div2.setAttribute('class', 'div')
let wish2 = getRandomWish()
div2.innerHTML = wish2
title.after(div2)

let div3 = document.createElement('div')
div3.setAttribute('class', 'div')
let wish3 = getRandomWish()
div3.innerHTML = wish3
title.after(div3)

