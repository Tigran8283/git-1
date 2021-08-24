
/////////////////////------JSON (JavaScript Object Notation)-------------/////////////////////////


// let student = {
//         name: 'John',
//         age: 30,
//         isAdmin: false,
//         courser: ['html', 'css', 'js'],
//         wife: null
//     }
// alert(student);
// let json = JSON.stringify(student);
// alert(json);
// alert(typeof json);


// alert(JSON.stringify(1))
// alert(JSON.stringify(false))
// alert(JSON.stringify([1, 2, 3]))


//////////////////////////////////////////////
///////// sa chi karoxas hxatel JSON i het Error


// let room = {
//     number: 23
// }
// let meetup = {
//     title: 'conferance',
//     participants: ['John', 'Ann']
// }
// meetup.place = room;
// room.occup = meetup
// JSON.stringify(meetup);
//////////////////////////////////////////////////



//  let user = {
//     name: 'John',
//     age: 24,
//     roles: {
//         isAdmin: false,
//         iseditor: true,
//     }
// }
// alert(JSON.stringify(user, null, 1)); 


// let x = {
//     name: 'Tigran',
//     lastname: 'Kocharyan',
//     age: 37,
//     email: 'tigrankocharyan@mail.ru',
//     phone: '043570000'

// }
// alert(JSON.stringify(x, null, 7));


///// JSON vichakic hanum e hakarakn e inch verevin@/////////////

//  let num = "[0,1,2]"
// num = JSON.parse(num);
// alert(num[1]); 


// let x = "[12,13,0,43,1234]"
// x = JSON.parse(x);
// alert(x[1])
// alert(x[2])
// alert(x[4])




// let user = '{"name": "John","age": "35","isAdmin": "false","friends": "[0,3,4]"}';
// user = JSON.parse(user)
// alert(user.friends[1]);


// let x = '{"anun":"Tigran","lastname":"Kocharyan","age":"37"}';
// x = JSON.parse(x);
// alert(x.lastname[1]);


// // Տրված փոփոխականը դարձնել օբյեկտ։

// let j = '{"Name":"Krishna","Email": "XYZ", "CN": "12345"}';
// j = JSON.parse(j)

// // console.log(j)
// alert(j.Email[1]);






// Տրված փոփոխականը դարձնել JSON։

let a = { Name: "Krishna", Email: "XYZ", CN: "12345" }
console.log(JSON.stringify(a.Name));
alert(JSON.stringify(a.Email[2]));
alert(JSON.stringify(a.CN[4]))