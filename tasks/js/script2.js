function converter() {
    const DOLLAR_RATE = 38
    const EURO_RATE = 41
    const sumInUAH = parseFloat(document.getElementById('uahInp').value)
    const sumInDollar = sumInUAH / DOLLAR_RATE
    const sumInEuro = sumInUAH / EURO_RATE
    document.getElementById('dollInp').value = sumInDollar.toFixed(2)
    document.getElementById('euroInp').value = sumInEuro.toFixed(2)
}

window.onload = function(){
    document.querySelector('button').onclick = converter
}