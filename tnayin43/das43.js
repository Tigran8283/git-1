// Destructure

// let arr = ['John', 'Smith'];
// let [firstName, surName] = arr;
// alert(firstName);
// alert(surName);


// let [firstName, title] = ['Julius', 'Cesar', 'Consfull', 'Roman']
// alert(title);

// let user = {
//     name: 'John',
//     age: 30,
//     lname: 'hghhg'

// }
// for (let [key, value] of Object.entries(user)) {
//     alert(`${key}:${value}`)
// }


// let guest = 'Jene';
// let admin = 'Pete';
// [guest, admin] = [admin, guest]
// alert(`${guest} ${admin}`);


// let [name1, name2, ...rest] = ["Julios", 'Caesar', 'Consul', 'Roman'];
// alert(rest[0])
// alert(rest[1])
// alert(rest.length);

//////////////////

// default value

// let [name, surname] = ['Ann']
// alert(name);
// alert(surname);

// let [name = prompt('name'), surname = prompt('surname')] = []
// alert(name);
// alert(surname);


// default value Object//


// let optons = {
//     title: 'Menu',
//     width: 100,
//     height: 100
// }
// let { title, width, height } = optons;
// alert(title);
// alert(width);
// alert(height)

// let { height, width, title } = { title: 'menu', height: 200, width: 150 }
// console.log(title, height, width);



// let optons = {
//     title: 'Menu',
//     width: 100,
//     height: 100
// }
// let { width: w, height: h, title } = optons
// alert(w)
// alert(h)
// alert(title)


// let optons = {
//     title: 'Menu',
//     width: 100,
//     height: 100
// }
// let { title, ...rest } = optons;
// alert(rest.height);
// alert(rest.width)



// Ստեղծել զանգված data անունով և նրա մեջ պահել 1, 2, 3 թվերը;

// Destructure - ի օգնությամբ զանգվածի առաջին անդամի արժեքը պահել a փոփոխականի տակ,

//     բաց թողեք զանգվածի 2 - րդ արժեքը, b փոփոխականի մեջ պահել զանգվածի 3 - րդ արժեքը,

//     և ստեղծել c փոփոխական, որը կունենա 4 արժեքը։ Տպել բոլոր փոփոխականների արժեքները։



// let data = [1, 2, 3];
// let [a, , b, c = 4] = data;
// console.log(a, b, c);




// Ստեղծել օբյեկտ, որը կպարունակի f1, f2, f3 բանալիներն ու համապատասխանաբար

// v1, 2, v3 արժեքները։ Destructure - ի օգնությամբ ստեղծել f1 և նրա մեջ պահել f1 բանալու արժեքը,
//     f2 բանալու անունը փոխել field2 անվամբ,
//     ստեղծել f4 բանալի և նրան վերագրել v4 արժեքը։ Տպել բոլոր փոփոխականների արժեքները։

// let obj = {
//     f1: 'v1',
//     f2: 2,
//     f3: 'v3'
// }
// let { f1, f2: field2, f4 = 'v4' } = obj;
// console.log(f1, field2, f4);



// let x = {
//     anun: 'Tigran',
//     azganun: 'Kocharyan',
//     age: 37,
//     phone: 43570000
// }
// let { anun: a, azganun: z, age, phone: tel, email = ' Tigrankocharyan@mail.ru ' } = x;
// console.log(a, z, age, tel, email);





// Ստեղծել գիրք օբյեկտ, որը կպարունակի՝ գրքի անունը, հեղինակի անունը, ժանրը և հրատարակման օրը, ամիսը, տարին։

// Destructure - ի օգնությամբ ստեղծել bookTitle և bookAuthor փոփոխականները և
// նրանց մեջ համապատասխանաբար պահել գրքի անունը և հեղինակի անունը։
// Օգտագործելով document.write մեթոդը էկրանին տպել հետևյալ նախադասությունը՝

//     "Մատանիների տիրակալ գիրքը գրվել է J.R.R Tolkien-ի կողմից",
//     որտեղ գրքի անվան և հեղինակի անվան փոխարեն պետք է տեղադրեք ձեր փոփոխականները։



// let obj = {
//     name: 'Մատանիների տիրակալ',
//     outer: 'J.R.R Tolkien',
//     janr: 'drama',
//     publish: '2007/1/6'
// }
// let { name: bookTitle, outer: bookAuthor } = obj
// document.write(bookTitle + " գիրքը գրվել է " + bookAuthor + '-ի կողմից ');




// let x = [1, 2, 3];
// let [number1, , number2] = x
// alert(number1)
// alert(number2)


// let x = [1, 3, 6, 8, 0, 12];
// let [num1, ...rest] = x;
// console.log(rest.length);


// let a = 5;
// let b = 12;
// [a, b] = [b, a];
// console.log(a, b)


// let obj = {
//     name: 'John',
//     srname: 'Vardanyan'
// }

// let { name, srname } = obj;
// console.log(name, srname)