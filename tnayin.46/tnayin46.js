//1. Ստեղծել ֆունկցիա, որը որպես արգումենտ կստանա տեքստ և regExp - ի օգնությամբ ստուգել,
//     արդյոք տվյալ տեքստը սկսվում է մեծատառով թե ոչ։ Եթե այո տպել true, եթե ոչ false:


// function upper(str) {
//     let reg = /^[A-Z]/
//     if (reg.test(str)) {
//         return true
//     } else {
//         return false
//     }
// }
// console.log(upper('Hello'))



//2. Տրված զանգվածի համար դուրս բերեք բոլոր այն տարրերը, որոնք չեն պարունակում e.

// let items = ['goal', 'new', 'user', 'sit', 'eat', 'dinner'];
// let a = items.filter(e => !/e/.test(e));
// console.log(a);




//3. Տրված զանգվածի համար դուրս բերեք բոլոր այն տարրերը, որոնք  պարունակում e.

// let items = ['goal', 'new', 'user', 'sit', 'eat', 'dinner'];
// let a = items.filter(e => /e/.test(e));
// console.log(a);
// alert(a);


//4. Տրված մուտքային զանգվածի համար դուրս բերեք բոլոր տարրերը,
// որոնք սկսվում են den - ով կամ ավարտվում են ly - ով



// let items = ['lovely', 'fgdentist', '2 lonely', 'eden', 'flyn', 'dent'];
// let a = items.filter(e => /^den|ly$/.test(e))
// console.log(a)


// let items = ['lovely', 'fgdentist', '2 lonely', 'eden', 'flyn', 'dent'];
// let a = items.filter(e => !/^den|ly$/.test(e))
// console.log(a)


//5. Տրված տողի համար 5 - ի առաջին դեպքը փոխարինիր 'five' - ով:

// let ip = 'They ate 5 apples and 5 oranges';
// let reg = /5/g

// let ip1 = ip.replace(reg, "five")
// console.log(ip1)



//5.1. Տրված տողի համար 5 - ի առաջին դեպքը փոխարինիր 'five' - ով:

// let ip = 'They ate 5 apples and 5 oranges';
// let reg = ip.replace(/\d/g, "five");
// console.log(reg);

//6. Գրել regExp, որը կվերադարձնի միայն թվերը։


// let str = " Grigor ` (077)00-01-02, Mariam `(098)02-01-00,Armen`(077)01-02-00";
// let reg = str.match(/\d/g);
// console.log(reg);


//7. Գրել regExp, որը բոլոր“, ”-ները կփոխարինի“․” - ով։

let str = "www,site,com   www,bigsite,org  www,supersite,net";
let reg = str.replace(/,/g, ".")
console.log(reg);