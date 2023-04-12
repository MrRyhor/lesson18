function getSum() {
    let totalSum = 0
    const transport = parseFloat(document.getElementById('transport').value)
    totalSum += transport
    const inputsValue = document.getElementsByTagName('input')
    for (const input of inputsValue) {
        if (input.checked) totalSum += parseFloat(input.value)
    }    
    result.innerHTML = `Total Sum = ${totalSum}` 
}

window.onload = function() {
    document.querySelector('button').onclick = getSum
}