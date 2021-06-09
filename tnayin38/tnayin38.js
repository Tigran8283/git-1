/*1. Գրել ֆունկցիա որը վերցնում է եռանկյան հիմքն ու բարձրությունը և վերադարձնում նրա մակերեսը:

    Մակերես = (հիմք * բարձրություն) / 2 */
/* let himq = 8;
let f = function() {
    let barz = 10;
    alert("barcrutyun " + barz);

    alert("himq " + himq);
    return function() {
        alert("makeres");
        alert(himq * barz / 2);
    }
}
let f2 = f();
f2();

function p(x, y) {
    return (x * y / 2)
}
console.log(p(7, 10)); */



/* 2. Օգտագործելով ֆունկցիա գտնել երկչափ զանգվածի 3 - ի բաժանվող թվերի գումարը։ */


/* 3. function array(a) {
    let sum = 0
    for (let i = 0; i < a.length; i++) {

        for (let j = 0; j < a.length; j++) {
            if (a[i][j] % 3 === 0) {
                sum += a[i][j];
            }
        }

    }
    return sum;

}
console.log(array([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]));
 */


/* 3. Օգտագործելով ֆունկցիա հաշվել ցանկացած թվի ֆակտորիալ։ */



/* function f(a) {
    let fakt = 1;
    for (let i = 1; i <= a; i++) {
        fakt = fakt * i;

    }
    return fakt;
}
console.log(f(+prompt())); */


/* 4. Math.abs - ի գործողությունն արտահայտել ֆունկցիայի տեսքով։ */
/* function f(a) {

    if (a < 0) {


        a = a * (-1);
    }

    return a;
}
console.log(f(+prompt()));

 */

// 5. Math.pow - ի գործողությունն արտահայտել ֆունկցիայի տեսքով։

/* function pow(a, b) {
    let res = 1
    for (let i = 0; i < b; i++) {
        res = res * a
    }
    return res;
}
console.log(pow(5, 3));
 */

// 6. Math.ceil - ի գործողությունն արտահայտել ֆունկցիայի տեսքով։

// function ceil(a) {

//     if (a % 1 === 0) {
//         return a;
//     }
//     let res = a.toString()[0]
//     res = +res;
//     return res + 1;
// }
// console.log(ceil(+prompt()));


// 7. Math.floor - ի գործողությունն արտահայտել ֆունկցիայի տեսքով։function ceil(a) {


function floor(a) {
    if (a % 1 === 0) {
        return a;
    }

    let res = a.toString()[0]
    res = +res;
    return res;
}


console.log(floor(+prompt()));