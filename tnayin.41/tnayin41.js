//.1 String - ի մեջ եղած n - երը փոխարինել xy տառերով։

// let str = "Im anunn e Anna ";
// let arr = str.split("");
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === "n") {
//         arr.splice(i, 1, "xy")

//     }

// }
// console.log(arr.join(""));

//.2 Օգտագործելով ֆունկցիա գրել սիմետրիկություն String - ի համար։ String - ը 
//ներմուծել prompt պատուհանի միջոցով։ Եթե String - ը սիմետրիկ է տպել true, եթե ոչ տպել false։


// function f(a) {
//     for (let i = 0; i < a.length; i++) {
//         if (a[i] !== a[a.length - 1 - i]) {
//             return false;
//         } else {
//             return true;

//         }

//     }
// }
// console.log(f(prompt()));


//.3 Ստեղծեք ֆունկցիա fullName(), որը կհարցնի օգտվողի անունը, ազգանունը և հայրանունը,
//     այնուհետև կվերադարձնի արժեքները մեկ տողով՝ իրարից անջատված մեկ տարածությամբ:


// function fullName() {
//     let a = prompt("mutqagreq dzer anun");
//     let b = prompt("mutqagreq dzer azganun@");
//     let c = prompt("mutqagreq hayranun");
//     return (a + " " + b + " " + c)
// }
// alert(fullName());



//.4 Օգտվելով map մեթոդից զանգվածի բոլոր անդամների տառերը դարձնել մեծատառեր։

// Օգտագործել հետևյալ զանգվածը["john", "JACOB", "jinGleHeimer", "schmidt"]

// let a = ["john", "JACOB", "jinGleHeimer", "schmidt"];
// let x = a.map(v => v.toUpperCase());
// console.log(x);


//.5 Օգտվելով map մեթոդից զանգվածի բոլոր անդամների առաջին տառերը դարձնել մեծատառ։

// Օգտագործել հետևյալ զանգվածը["john", "JACOB", "jinGleHeimer", "schmidt"]



// let a = ["john", "JACOB", "jinGleHeimer", "schmidt"];
// let x = a.map(v => v.charAt(0).toUpperCase() + v.slice(1));
// console.log(x);


// .6 Ստեղծեք հարց օգտվողի համար prompt() պատուհանի միջոցով։

// Ճիշտ պատասխանը նախօրոք պահեք answer փոփոխականում(փոքրատառերով):

//     Օգտվողի կողմից պատասխանը ստանալուց հետո, այն դարձրեք ամբողջությամբ փոքրատառերով,

//     այնուհետև համեմատեք ճիշտ պատասխանի հետ:

//     Եթե պատասխանը ճիշտ է, օգտվողին ցուցադրեք, որ պատասխանը ճիշտ է, եթե ոչ,
//     ապա ցուցադրեք, որ պատասխանը ճիշտ չէ:

//     Այն ժամանակ, երբ արդեն պատրաստ կլինի ծրագիրը, փորձեք պատասխանել,
//     մուտքագրելով տարբեր տառեր՝ մեծատառ, փոքրատառ:

//     Այնուհետև ժամանակավորապես հեռացրեք toLowerCase() մեթոդը և հետևեք իրադարձությանը,

//     այս երևույթը JavaScript - ում ավելի լավ յուրացնելու համար:



// let answer = "lexus"
// let a = prompt("the best car")
// if (a.toLowerCase() === answer) {
//     alert("patasxan@ chisht e")
// } else {
//     alert("patasxan@ sxal e")
// }







//.7 Ձեր առաջադրանքը կայանում է նրանում, որպեսզի ստուգեք զանգվածի յուրաքանչյուր տարրը,

// եթե կան սիմվոլներ Հայկական միջակայքից դուրս,
// ապա պատկերեք այդ սիմվոլը և այդ սիմվոլը պարունակող տարրը։ Հուշում՝ պետք է ստեղծեք ցիկլ ցիկլում։

// var names = ["Արաm", "john", "Արմինe"];
// var res = []
// for (var i = 0; i < names.length; i++) {
//     for (var j = 0; j < names[i].length; j++) {
//         if (names[i].charCodeAt(j) < 1329 || names[i].charCodeAt(j) > 1414) {
//             res.push(names[i][j].toUpperCase())
//         }
//     }
// }
// console.log(res.join(" ")



//8. Օգտվելով map մեթոդից զանգվածի բոլոր անդամների տառերը դարձնել մեծատառեր։

// Օգտագործել հետևյալ զանգվածը["john", "JACOB", "jinGleHeimer", "schmidt"]

// var n = ["JACOB", "jinGleHeimer", "schmidt"];
// let x = n.map(v => v.toUpperCase());
// console.log(x)


//9. String - ի մեջ եղած n - երը փոխարինել xy տառերով։

// let s = "Im anunn e Anna";
// let arr = s.split("")
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === "n") {
//         arr.splice(i, 1, "xyz");
//     }
// }
// console.log(arr.join(" "));



//10. Օգտագործելով ֆունկցիա գրել սիմետրիկություն String - ի 
//
// Եթե String - ը սիմետրիկ է տպել true, եթե ոչ տպել false։

// function f(a) {
//     for (let i = 0; i < a.length; i++) {
//         if (a[i] === a[a.length - 1 - i]) {
//             return true
//         } else {
//             return false;
//         }
//     }
// }
// console.log(f(prompt()));



//11. Ստեղծեք ֆունկցիա fullName(), որը կհարցնի օգտվողի անունը,
//     ազգանունը և հայրանունը, այնուհետև կվերադարձնի արժեքները մեկ տողով՝ իրարից անջատված մեկ տարածությամբ;


function fuulName() {
    let x = prompt("anun");
    let y = prompt("azganun");
    let z = prompt("hayranun");
    return (x + " " + y + " " + z);
}
alert(fuulName());