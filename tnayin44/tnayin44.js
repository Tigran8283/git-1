// Տրված փոփոխականը դարձնել օբյեկտ։

// let j = '{"Name":"Krishna","Email": "XYZ", "CN": "12345"}';
// j = JSON.parse(j)

// console.log(j)
// alert(j.Email[1]);






// Տրված փոփոխականը դարձնել JSON։

let a = { Name: "Krishna", Email: "XYZ", CN: "12345" }
console.log(JSON.stringify(a.Name));
alert(JSON.stringify(a.Email[2]));
alert(JSON.stringify(a.CN[4]))