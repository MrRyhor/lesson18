function sum() {
    const firstNum = parseFloat(document.getElementById('first').value)
    const secondNum = parseFloat(document.getElementById('second').value)
    const sum = firstNum + secondNum
    document.getElementById('res').value = sum.toFixed(2)
}
function subtraction() {
    const firstNum = parseFloat(document.getElementById('first').value)
    const secondNum = parseFloat(document.getElementById('second').value)
    const subtraction = firstNum - secondNum
    document.getElementById('res').value = subtraction.toFixed(2)
}
function mult() {
    const firstNum = parseFloat(document.getElementById('first').value)
    const secondNum = parseFloat(document.getElementById('second').value)
    const mult = firstNum * secondNum
    document.getElementById('res').value = mult.toFixed(2)
}
function divide() {
    const firstNum = parseFloat(document.getElementById('first').value)
    const secondNum = parseFloat(document.getElementById('second').value)
    const divide = firstNum / secondNum
    document.getElementById('res').value = divide.toFixed(2)
}
window.onload = function () {
    document.getElementsByTagName('button')[0].onclick = sum
    document.getElementsByTagName('button')[1].onclick = subtraction
    document.getElementsByTagName('button')[2].onclick = mult
    document.getElementsByTagName('button')[3].onclick = divide
}