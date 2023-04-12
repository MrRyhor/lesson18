function age() {
    const CURRENT_YEAR = 2023
    const birthYear = parseInt(document.getElementById('birthInp').value)
    const qntOfYears = CURRENT_YEAR - birthYear
    document.getElementById('qntYears').value = qntOfYears
}

window.onload = function(){
    document.querySelector('button').onclick = age
}