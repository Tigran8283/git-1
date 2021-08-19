//1. Օգտվելով map մեթոդից զանգվածի բոլոր անդամները դարձնել string - ային։



// let arr = [2, 5, 100];
// let arr1 = arr.map(v => v + "")
// console.log(arr1);



//2. Օգտվելով map մեթոդից տպել զանգվածի անդամների քառակուսիները։



// let arr = [1, 2, 8, 9];
// let arr2 = arr.map(v => v * v)
// console.log(arr2);


//3. Օգտվելով filter մեթոդից տպել զանգվածի այն string - ային անդամները, որոնց երկարությունը փոքր է կամ հավասար 5։



// let arr = ["hello", "hi", "javascript"];
// let arr3 = arr.filter(v => v.length <= 5);
// console.log(arr3);







//4. Օգտվելով filter մեթոդից տպել զանգվածի այն անդամները, որոնք մեծ են 4 - ից։


// let arr = [1, 3, 7, 9, 15, 29, 65, 100];
// let arr1 = arr.filter(v => v > 4);
// console.log(arr1);

//5. Գրել ծրագիր, որը կվերադարձնի ամենաերկար երկրի անունը։
// Օգտագործել հետևյալ զանգվածը["Australia", "Germany", "United States of America"]


let arr3 = ["Australia", "Germany", "United States of America"];
let arr4 = arr3.filter(v => v.length > 10);
console.log(arr4);