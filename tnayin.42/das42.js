// let obj = {
//     name: 'Armine',
//     'lname': 'sargsyan',
//     age: 18,
//     hb: function() {
//         return ++this.age
//     }

// }
// delete(obj.lname);
// console.log(obj)
// console.log(obj.hb());
// console.log(obj.name);
// console.log(obj['name']);
// obj.age = 30;
// console.log(obj);



// let obj1 = {
//     name: 'Anna',
//     surname: 'Harutyunyan',
//     age: 20,
//     f: full

// }
// let obj2 = {
//     name: 'Armen',
//     surname: 'Vardanyan',
//     age: 22,
//     f: full
// }

// function full() {
//     return this.name + "  " + this.surname + " " + this.age;

// }
// console.log(obj1.f());
// console.log(obj2.f());


// let user = {
//     name: 'Armen',
//     admin: true,
//     country: 'Armenia',

// }
// for (let prop in user) {
//     // console.log(prop);
//     console.log(user[prop]);
// }


// let arr = [1, 2, 3];
// for (let v of arr) {
//     console.log(v)
// }


// let obj = new Object();
// obj.admin = false;
// obj.gender = 'male';
// console.log(obj);

// const user = {
//     id: 101,
//     email: 'tigrankocharyan@mail.ru',
//     personalInfo: {
//         name: 'Jack',
//         address: {
//             lin1: 'westwish',
//             lin2: 'westwish2',
//             city: 'walles',
//             state: 'ww'
//         }
//     }
// }
// console.log(user.personalInfo.address.city);


// var data = [{
//     'errorCode': 100,
//     'message': {},
//     'name': 'TypeError',
//     'value': '2'
// }]
// console.log(data[0].errorCode)

//1. tpel ayn usanoxneri azganunner@ voronq mec en 20 tarekanic u voronc anunnern u azganunner@ sksum en A tarov:

// let varj1 = {
//     lname: ['avagyan', 'Qocharyan', 'Manukyan', 'Ispiryan'],
//     age: [21, 14, 23, 18],
//     country: ['Erevan', 'Ispan', 'madrid', 'Moscow']
// }
// for (let i = 0; i < varj1.age.length; i++) {
//     if (varj1.age[i] > 20 && varj1.country[i] === 'Erevan') {
//         console.log(varj1.lname[i])
//     }

// }




//2. tpel 11 ic 20 dasamatyani hamar unecox ayn usanoxneri qanak@,voronc annunern u azganunner2 sksum en A tarov:

// let varj2 = {
//     name: ['Armen', 'Armine', 'Aram', 'Anahit'],
//     lname: ['Xazaryan', 'Tumanyan', 'isahakyan', 'Arustamyan'],
//     numbers: [13, 16, 9, 19]
// }
// for (let i = 0; i < varj2.numbers.length; i++) {
//     if (varj2.numbers[i] > 11 && varj2.numbers[i] < 20 &&
//         varj2.name[i][0] === "A" && varj2.lname[i][0] === 'A') {
//         console.log(varj2.name[i])
//     }

//}



//3. tpel bolor ayn grqeri ejeri gumarayin  qanak@ voronc hexinakneri azganuni arajin tar@ sksum e A tarov:

// let x = 0;
// let varj3 = {
//     lname: ['Sevak', 'Tumayan', 'Axayan', 'Ananyan'],
//     page: [200, 250, 120, 400],

// }
// for (let i = 0; i < varj3.lname.length; i++) {
//     if (varj3.lname[i][0] === "A") {
//         x += varj3.page[i]
//     }

// }
// console.log(x)



//4. tpel ayn bolor hexinakneri azganunner@ voronc grqeri vernagrum arka e patmutyun bar@

// let varj4 = {
//     lname: ['Xorenaci', 'Abovyan', 'Bakunc'],
//     title: ['Hayoc Patmutyun', 'Verg hayastani', 'mirhav']
// }
// for (let i = 0; i < varj4.lname.length; i++) {
//     if (varj4.title[i].includes("Patmutyun")) {
//         console.log(varj4.lname[i]);
//     }
// }



//5.Ete grqi ejeri qanak@ mec e trvac K tvic,apa grqi gin@ mecacnel 2 angam,
//hakarak depqum toxnel nuyn @: tpel bolorg gqeri hexinakneri azganunner@ u grqi nor gin@:

// let k = 220;
// let x = 1;
// let varj5 = {
//     lname: ['Xorenaci', 'Abovyan', 'Bakunc'],
//     page: [200, 100, 300],
//     price: [500, 600, 800]
// }
// for (let i = 0; i < varj5.price.length; i++) {

//     if (varj5.page[i] > k) {
//         x = varj5.price[i] * 2
//         console.log(varj5.lname)
//     }
// }
// console.log(x)


//6.Tpel ayn haxordman vernagir@ vor@ sksum e 18:20

// let varj6 = {
//     title: ['bari luys ', 'jam', 'lurer'],
//     hours: [18, 21, 00],
//     minute: [20, 50, 40]
// }
// for (let i = 0; i < varj6.title.length; i++) {
//     if (varj6.hours[i] === 18 && varj6.minute[i] === 20) {
//         console.log(varj6.title[i])
//     }

// }


//7.Tpel ayn haxordman vernagir@ vor@ sksvum en 19:30ic hrto


// let varj7 = {
//     title: ['bari luys ', 'jam', 'lurer'],
//     hours: [18, 20, 28],
//     minute: [20, 50, 30]
// }
// for (let i = 0; i < varj7.title.length; i++) {
//     if (varj7.hours[i] > 19 && varj7.minute[i] >= 30) {
//         console.log(varj7.title[i])
//     }
// }

//8.Tpel ayn kinotatronneri anunner@,voroncum cucadrvum e trvac vernagrov kinonkar@

// let varj8 = {
//     kino: ["Nayri", 'Moskva', 'Russia'],
//     title: ['Titanik', 'Gladiator', 'Garegin Njdeh']
// }
// for (let i = 0; i < varj8.kino.length; i++) {
//     if (varj7.kino[i] === varj7.title) {
//         console.log(varj8.kino[i])
//     }

// }
//????????????????????????????????????????????//


//9.Tpel ayn ararkaneri anunner@ voronc reitingayin miavor@ poqr che trvac amboxj tvic a,
//ev ayd ararkayic usanox @ stacel e b tvic barcr:

// let a = 70;
// let b = 10
// let varj9 = {
//     ararka: ['hayoc lezu', 'hanrahashiv', 'fizika'],
//     reiting: [50, 60, 90],
//     gnahatakan: [15, 18, 20]
// }
// for (let i = 0; i < varj9.ararka.length; i++) {
//     if (varj9.reiting[i] > a && varj9.gnahatakan[i] > b) {
//         console.log(varj9.ararka[i]);
//     }
// }



//10.Tpel ayn qnutyunneri amsatver@ voronq nshanakvac en shapat orerin:


// let varj10 = {
//     data: [12, 14, 15, 17, 19],
//     weekdays: ['tuesday', 'wednesday', 'thursday', 'friday', 'saturday']

// }
// for (let i = 0; i < varj10.data.length; i++) {
//     if (varj10.weekdays[i] === "saturday") {
//         console.log(varj10.data[i])
//     }
// }




// Ստեղծել ուսանող օբյեկտ, որը կունենա անուն, ազգանուն, մաթեմատիկա, օտար լեզու,
// կենսաբանություն, ֆիզիկա, ինֆորմատիկա բանալիներն ու համապատասխան արժեքները
//     (առարկաների համար մինչև 100 բալ գնահատական)։ Այնուհետև ստեղծել մեթոդ և հաշվել ուսանողի ՄՈԳ - ը։
// Եթե այդ թիվը մեծ է 80 - ից, ապա alert պատուհանով տպել“ գերազանց” արտահայտությունը։ Եթե մեծ է 70 - ից տպել“ լավ”։
// Եթե մեծ է 40 - ից տպել“ բավարար”։ Եթե փոքր է 40 - ից տպել“ հեռացնել բուհ - ից” արտահայտությունը։


let x = 0;
let usanox = {
    name: 'Diana',
    lname: 'Hovhannisyan',
    matematika: 20,
    fizika: 3,
    info: 10
}
if (usanox.matematika + usanox.fizika + usanox.info > 80) {
    alert('gerazanc');
}
if (usanox.matematika + usanox.fizika + usanox.info > 70 &&
    usanox.matematika + usanox.fizika + usanox.info < 80) {
    alert("lav")
}
if (usanox.matematika + usanox.fizika + usanox.info < 40) {
    alert('bav');
}