
function createInputs() {
    let inputsQnt = parseInt(document.getElementById('in').value)
    for (let i = 0; i < inputsQnt; i++) {
        const inputs = document.createElement('input')
        inputs.setAttribute('id', `inp${i}`)
        inputs.setAttribute('type', 'number')
        inputs.setAttribute('placeholder', '0')
        inputs.setAttribute('class', 'inp')
        scores.append(inputs)
    }
}
function getAverageScore() {
    let inputsQnt = parseInt(document.getElementById('in').value)
    let averageScore = 0
    let inputsValue = 0
    for (let i = 0; i < inputsQnt; i++) {
        inputsValue += parseInt(document.getElementById(`inp${i}`).value)
        console.log(inputsValue)        
    }
    averageScore += inputsValue / inputsQnt
    sum.innerHTML = `Average Score = ${averageScore.toFixed(2)}`
}


window.onload = function () {
    document.getElementById('btn1').onclick = createInputs
    document.getElementById('btn2').onclick = getAverageScore
}



