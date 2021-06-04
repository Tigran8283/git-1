/*  var arr = [1, 5, 9, 8, 13, 21, 73]
 */
/*var s = arr.indexOf(21); */
/*  var s = arr.indexOf(21, 4);
 */
/*  var s = arr.lastIndexOf(21);
 */
/*  var s = arr.includes(5)
 */
/*  var s = arr.join(" ");
 */
/*  var s = arr.sort()
 */
/*  var s = arr.reverse();*/
/*  var s = arr.slice(1, 5);
 */
/*  var s = arr.splice(2, 3);
 */
/* var s = arr.splice(2, 3, true, 54, 79, 'ab', 74);
console.log(s); */

/* arr.push(1, false, 47);
arr.pop();
arr.unshift(2, 22, 522);
arr.shift();
console.log(arr) */
/* var arr1 = [3, 27, 7];
var arr2 = arr.concat(arr1);
console.log(arr2); */




/*1.  Տպել զանգվածի անդամները օգտագործելով ցիկլ */

// var people = ["Greg", "Mary", "Devon", "James"];
// for (var i = 0; i < people.length; i++) {
//     console.log(people[i])
// }


// /2.* Հեռացնել "Greg"
// անդամը զանգվածից */
// var people = ["Greg", "Mary", "Devon", "James"];
// people.shift();
// console.log(people);


// /3.* Հեռացնել "James"
// անդամը զանգվածից */
// var people = ["Greg", "Mary", "Devon", "James"];
// people.pop();
// console.log(people);


// /4.* Ավելացնել "Matt"
// անդամը զանգվածի սկզբից */


// var people = ["Greg", "Mary", "Devon", "James"];
// people.unshift("Matt");
// console.log(people);


// /5.* Ավելացրեք Ձեր անունը զանգվածի վերջից։ */

// var people = ["Greg", "Mary", "Devon", "James"];
// people.push("Tigran");
// console.log(people);


// /6.* Ստուգել արդյոք "Mary"
// անունը կա զանգվածում */

// var people = ["Greg", "Mary", "Devon", "James"];
// console.log(people.includes("Mary"));


// /7.* Պատճենել զանգվածը այնպես, որ այն չներառի "Mary" - ին կամ "Matt" - ը։ */

// var people = ["Greg", "Mary", "Devon", "James"];
// var a = people.splice(1, 1);
// console.log(people);

// /8.* Գտնել "Mary"
// անդամի դիրքը։ */

// var people = ["Greg", "Mary", "Devon", "James"];
// console.log(people.indexOf("Mary"));

// /9.* Գտնել "Foo"
// անդամի դիրքը։ */

// var people = ["Greg", "Mary", "Devon", "James"];
// console.log(people.indexOf("Foo"));

// /10.* Ջնջել "Devon"
// անդամին զանգվածից և նրա փոխարեն ավելացնել "Elizabeth"
// և "Artie" */

// var people = ["Greg", "Mary", "Devon", "James"];
// var s = people.splice(2, 1, "Elizabetha", "Artie");
// console.log(people);


// /11.* Ստեղծել նոր զանգված, որն իր մեջ կպահի "Bob"
// արժեքը, ապա 2 զանգվածները միացնել իրար։ */
// var people = ["Greg", "Mary", "Devon", "James"];
// var people1 = ["Bob"]
// var people2 = people.concat(people1);
// console.log(people2);



/*12. Գրել ծրագիր, որը կհաշվի ու զանգվածի մեջ կլցնի `

40 - 600 միջակայքի 11 - ին բաժանվող թվերը։
100 - 900 միջակայքի այն զույգ թվերը, որոնք բաժանվում են 13 - ի: * /
    /* var s = []
    for (var i = 40; i <= 600; i++) {
        if (i % 11 === 0) {
            s.push(i)
        }

    }
    console.log(s);

    var s = []
    for (var i = 100; i <= 900; i++) {
        if (i % 13 === 0) {
            s.push(i);
        }

    }
    console.log(s); */


/*13. var arr = [1, 5, true, 0, ’hello’, false, -5, ’world’, 88]

Ըստ իրենց տիպերի առանձին զանգվածներով տպել զանգվածի տարրերը։ */

/* var arr = [1, 5, true, 0, "hello", false, -5, "world", 88]
var arr1 = [];
var arr2 = [];
var arr3 = [];
for (var i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "string") {
        arr2.push(arr[i]);
    } else if (typeof arr[i] === "number") {
        arr1.push(arr[i]);
    } else {
        arr3.push(arr[i]);
    }
}
console.log(arr2);
console.log(arr1);
console.log(arr3);
 */




/*.14 Ստուգել զանգվածի սիմետրիկությունը։ */


var arr = [1, 7, 9, 6, -5, 1];
var s = arr;
for (var i = arr.length - 1; i >= 0; i--) {
    s.push(arr[i]);

}
console.log(s);