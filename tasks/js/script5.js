function getRandomNum(min = 1, max = 100) {
    return min + Math.floor(Math.random() * max)
}

//-------------------------------VAR. Nr. 1 ------------------------------------------------------
// window.onload = function () {

//     let table = `<table class="table">
//         <tr class = "tr">
//         <td class = "td"> ${getRandomNum()} </td>
//         <td class = "td"> ${getRandomNum()} </td>
//         <td class = "td"> ${getRandomNum()} </td>
//         <td class = "td"> ${getRandomNum()} </td>
//     </tr>
//     <tr class = "tr">
//         <td class = "td"> ${getRandomNum()} </td>
//         <td class = "td"> ${getRandomNum()} </td>
//         <td class = "td"> ${getRandomNum()} </td>
//         <td class = "td"> ${getRandomNum()} </td>
//     </tr>
//     <tr class = "tr">
//         <td class = "td"> ${getRandomNum()} </td>
//         <td class = "td"> ${getRandomNum()} </td>
//         <td class = "td"> ${getRandomNum()} </td>
//         <td class = "td"> ${getRandomNum()} </td>
//     </tr>
//     </table>`

//     res.innerHTML = table
// }

//-------------------------------VAR. Nr. 2 ------------------------------------------------------

// создаем таблицу
const table = document.createElement('table')
table.setAttribute('class', 'table') //добавляем класс table
res.append(table) //добавляем её в id = 'res'

// создаем три строки
for (let i = 0; i < 3; i++) {
    const tr = document.createElement('tr')
    tr.setAttribute('class', 'tr') //добавляем класс tr
    table.append(tr) //добавляем их в table
    
    // для каждой строки создаем 4 ячейки
    for (let j = 0; j < 4; j++) {
        const td = document.createElement('td')
        td.setAttribute('class', 'td') //добавляем класс td
        tr.append(td) //добавляем их в tr
        
        // формируем в ячейке td рандомные числа
        const randomNum = getRandomNum()
        td.append(randomNum)
    }
}

