/////////Date/////////



// let date = new Date();
// console.log(date);
// console.log(+date);

// let date = Date.now();
// console.log(date);



// let date = new Date();
// console.log(date.getFullYear());
// console.log(date.getMonth() + 1);
// console.log(date.getDate());
// console.log(date.getDay());
// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getSeconds());
// console.log(date.getUTCMilliseconds())



let date = new Date(2018, 2, 15, 18, 24);
console.log(date);



// let date = new Date();
// date.setFullYear(2019);
// date.setMonth(8);
// date.setDate(20)
// console.log(date);


// let div = document.getElementsByTagName('p')[1];



// setInterval(function() {
//     let date = new Date()
//     let h = (date.getHours() < 10) ? `0${date.getHours()}` : date.getHours()
//     let m = (date.getMinutes() < 10) ? `0${date.getMinutes()}` : date.getMinutes()
//     let s = (date.getSeconds() < 10) ? `0${date.getSeconds()}` : date.getSeconds()
//     div.innerHTML = `${h}: ${m}:${s}`

// }, 1000)


//1. Տպել տվյալ օրվա օր ամիս տարին՝ իրարից անջատելով“ / ”նշանով։
// Ստուգել եթե օրը կամ ամիսը 10 - ից փոքր է դիմացից ավելացնել 0։

// function f(x) {
//     let date = new Date();

//     let d = date.getDate();
//     let m = date.getMonth();
//     let y = date.getFullYear();
//     if (d < 10) {
//         d = 0 + "" + d;
//     }
//     if (m < 10) {
//         m = 0 + "" + m
//     }
//     return d + x + m + x + y;
// }
// console.log(f("/"))




///2.Ստեղծել ֆունկցիա, որը կվերադարձնի ամսվա լրիվ անունը և որպես արգումենտ կստանա օր, ամիս, տարին։/////




// function f(x) {
//     let a = ['hunvar', 'petrvar', 'mart', 'april', 'mayis', 'hunis', 'hulis', 'ogostos', 'september', 'hoktember', 'noyember', 'dektember']
//     return a[x.getMonth()]

// }
// console.log(f(new Date('12.01.2020')));



//3. Գրել ֆունցկիա որը կստուգի փոխանցված արգումենտի ժամը am է թե pm։


// function f(t) {
//     let h = t.getHours()
//     let m = t.getMinutes()
//     let s = t.getSeconds()
//     if (h > 12) {
//         h = h + ":" + m + ":" + s + ' pm'

//     } else {
//         h = h + ":" + m + ":" + s + " am"
//     }
//     return h
// }
// console.log(f(new Date()));




//4. Ստեղծել ֆունկցիա, որը որպես արգումենտ կստանա օր, ամիս, տարի և
// այդ տվյալների հիման վրա կվերադարձնի մարդու տարիքը։

// let p = prompt("mutaqrel taretiv@")

// function f() {
//     let d = new Date()

//     let y = d.getFullYear();

//     return y - p
// }
// alert(f());



//5. Գրել ֆունցկիա որը կստուգի փոխանցված արգումենտի օրը հանգստյան է թե ոչ։///

// let p = prompt("mutqagrel amsva or@");

// let z = ["erkushapti", 'ereqshapti', 'choreqshapti', 'hingshapti', 'urbat', 'shabat', 'kiraki']

// function f(t) {
//     let d = new Date(t)
//     let a = d.getDay()

//     return z[a - 1]
// }
// alert(f(p))




// 6. //

// let x = prompt("mutqagrel amsva or@");

// let z = ["erkushapti", 'ereqshapti', 'choreqshapti', 'hingshapti', 'urbat', 'shabat', 'kiraki']

// function f(t) {
//     let d = new Date(t)
//     let a = d.getDay()
//     alert(z[a - 1])
//     if (a === 6 || a === 7) {

//         return alert("hangstyan")


//     } else {

//         return alert('ashxatanqayin')
//     }


// }
// f(x)


//7. 200 rope - 3 jam 20 rope


// function f(t) {
//     let m = Math.floor(t / 60);
//     let a = t - (m * 60)
//     return `${m} jam ${a} rope`;
// }
// console.log(f(200))