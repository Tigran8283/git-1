// Գրել Ֆիբոնաչի շարքը ռեկուրսիայով։

// function fib(n) {
//     if (n < 2) return 1
//     return fib(n - 1) + fb(n - 2)

// }
// console.log(fb(+prompt()));


// Տպել զանգվածի տարրերն օգտագործելով ռեկուրսիա։

let arr = [1, 4, [5, 7, [8, 15, [12, 14], 55], 81, 71], 0]

function f(arr) {
    let arrRes = [];
    arr.forEach(el => {
        if (typeof el === 'object') {
            const result = f(el);
            result.forEach(el => arrRes.push(el));
        } else {
            arrRes.push(el);
        }
    });
    return arrRes;
}



console.log(f(arr))


// Տպել զանգվածի տարրերի արտադրյալը օգտագործելով ռեկուրսիա։


//let arr = [1, 4, [5, 7, [8, 15, [12, 14], 55], 81, 71], 0]