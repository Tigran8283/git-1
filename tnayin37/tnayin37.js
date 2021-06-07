// 1. Տպել երկրորդային անկյունագծի տարրերը 1 ցիկլով։

/* var arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
for (var i = 0; i < arr.length; i++) {
    console.log(arr[i][arr.length - 1 - i]);
} */



// 2. Գտնել զանգվածի բոլոր զույգ թվերի գումարը։
/* var sum = 0;
var arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length; j++) {
        if (arr[i][j] % 2 === 0) {
            sum = sum + arr[i][j];
        }
    }
}
console.log(sum);

 */

// 3. Գտնել և տպել գլխավոր անկյունագծի ներքևի թվերը։


/* var arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
        if (j < i) {
            console.log(arr[i][j]);

        }
    }

} */


// 4. Գտնել և տպել երկրորդային անկյունագծի ներքևի թվերը։

var arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
        if (i + j > arr.length - 1) {
            console.log(arr[i][j]);

        }
    }
}