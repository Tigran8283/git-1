/*1. Ստեղծել string - ային զանգված և նրա մեջ պահել անուններ։ 
Այնուհետև console պատուհանում տպել տարրի ինդեքսը և ինդեքսին համապատասխանող արժեքը։ */

/* var arr = ["karen", "Hayk", "ani"];
for (var i = 0; i < arr.length; i++) {
    console.log(i + " : " + arr[i]);
} */



/*2. Գտնել և տպել այն թվերը, որոնց աջ ու ձախ կողմերի գումարը մեծ է 8 - ից։ */

/* var arr = [1, 2, 8, 12, 0, 11, 4, 0, 10, 3, 7];
for (var i = 0; i < arr.length; i++) {
    if (arr[i - 1] + arr[i + 1]) {
        console.log(arr[i]);
    }
} */

/*3. Գտնել զանգվածի ամենամեծ թիվը։ */

/* var arr = [1, 2, -8, 12, 0, 11, 4, 0, 10, 3, 7];
var max = arr[0];
for (var i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }


}
console.log(max); */



/*4. Գտնել զանգվածի ամենափոքր թիվը */

/* var arr = [1, 2, -8, 12, 0, 11, 4, 0, 10, 3, 7];
var min = arr[0];
for (var i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
        min = arr[i];
    }
}
console.log(min);
 */

/*5. Զանգվածի տարրերը դասավորել 1 տողի վրա հակառակ հերթականությամբ։ */


var arr = [2, 4, 6, 12, 16, 22];
var string = ""
for (var i = arr.length - 1; i >= 0; i--) {
    string = string + " " + arr[i];
}
console.log(string);


var arr = [12, 24, 37, 45];
var a = ''
for (i = arr.length - 1; i >= 0; i--) {
    a = a + " " + arr[i];
}
console.log(a)