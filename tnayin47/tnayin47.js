//DOM//



//1. Օգտագործելով table ստեղծել բազմապատկման աղյուսակ:


// let table = document.getElementById('tab');
// let a = "";
// for (let i = 1; i <= 10; i++) {
//     a += "<tr>"
//     for (let j = 1; j <= 10; j++) {
//         a += "<td>" + i * j + "</td>"
//     }
//     a += "</tr>"
// }
// table.innerHTML = a;


//2.
//  let tab = document.getElementById('tab');
// let a = "";
// for (let i = 1; i <= 15; i++) {
//     a += "<tr>"
//     for (let j = 1; j <= 15; j++) {
//         if (i < 15 && j < 15 && i > 1 && j > 1) {

//             a += "<td></td>"
//         } else {
// console.log(988)
//             a += `<td style='background:#${ Math.floor(Math.random()*16777215).toString(16)}'> </td>`;

//         }
//     }
//     a += "</tr>"
// }

// tab.innerHTML = a


//3.

let tab = document.getElementById('tab');
let a = "";
for (let i = 1; i <= 15; i++) {
    a += "<tr>"
    for (let j = 1; j <= 15; j++) {
        if (i < 15 && j < 15 && i > 1 && j > 1) {
            a += `<td style='background:#${ Math.floor(Math.random()*16777215).toString(16)}'> </td>`;

           
        } else {
            a += "<td></td>"
        }
    }
    a += "</tr>"
}

tab.innerHTML = a