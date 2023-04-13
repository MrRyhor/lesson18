function getRandomWish() {
    const wishList = ['love', 'peace', 'victory', 'health', 'luck', 'freiends', 'pet', 'work']
    let randomIndex = Math.floor(Math.random() * wishList.length)
    return wishList[randomIndex]
}

function getTreeDivWithRandomWish(val) {
    for (let i = 0; i < val; i++) {
        let div = document.createElement('div')
        div.setAttribute('id', 'div')
        let wish = getRandomWish()
        div.innerHTML = wish
        title.after(div)
    }
}

getTreeDivWithRandomWish(3)