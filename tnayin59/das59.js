////paymanakan operator if else, switch//////////

// Ստեղծել a փոփոխական և նրան վերագրել 
// թվային արժեք։Եթե արժեքը մեծ կամ հավասար է 0 
// տպել true հակառակ դեպքում տպել false։


// let a=+prompt()
// if(a>=0){
//     alert(true)
// }else{
//     alert(false)
// }


// Ստեղծել a փոփոխական և նրան վերագրել թվային արժեք։
// Եթե արժեքը մեծ է 0-ից և փոքր է 5-ից տպել true հակառակ 
// դեպքում տպել false։


// let a=10;
// if(a>0 && a<5){
//     console.log(true)
// }else{
//     console.log(false)
// }


// Ստեղծել a փոփոխական և նրան վերագրել թվային արժեք։
// Եթե արժեքը հավասար է 0-ի կամ 2-ի ապա նրան ավելացնել 7,
// հակադակ դեպքում այն բաժանել 10-ի։Տպել արդյունքը։


// let a=22
// if(a===0 || a===2){
//     console.log(a+7)
// }else{
//     console.log(a/10)
// }

// let a=+prompt()
// if(a===0 || a===2){
//    alert(a+7)
// }else{
//     alert(a/10)
// }


// Ստեղծել a  և b  փոփոխականներ։Եթե ​​a փոփոխականը հավասար է 
// կամ փոքր է 1 -ից, և b փոփոխականը մեծ է կամ հավասար է 3 -ի, 
// ապա տպել այդ փոփոխականների գումարը, 
// հակառակ դեպքում տպել դրանց տարբերությունը (հանման արդյունք): 



// let a=4;
// let b=8;
// if(a<=1 && b>=3){
//     console.log(a+b)
// }else(
//     console.log(a-b)
// )

// let a=+prompt();
// let b=+prompt();
// if(a<=1 && b>=3){
//     alert(a+b)
// }else(
//     alert(a-b)
//  )



// for(let i=0;i<5;i++){
//     console.log(i)
// }

// debugger;

// let arr=[1,-7,41,9,22]
// for(let i=0;i<arr.length;i++){
//     for(let j=i+1;j<arr.length;j++){
//         if(arr[i]>arr[j]){
//             let c=arr[i]
//             arr[i]=arr[j]
//             arr[j]=c
//         }
//     }
// }
// console.log(arr)

// debugger;
// let arr1=[2,4,3,1]
// for(let i=0;i<arr1.length;i++){
//     for(let j=i+1;j<arr1.length;j++){
//         if(arr1[i]>arr1[j]){
//         let a=arr1[i]
//         arr1[i]=arr1[j]
//         arr1[j]=a
//     }
//  }
// }
// console.log(arr1)
///i=0=1
//j=i+1=1=-7



// a=4
// switch(a){
//     case 5:
//   console.log("tiv 5");
//   break;

//   case 7:
//       console.log("tiv 7")
//       break;

//       case 4:
//           console.log("tiv 4")
// break;
// default:
//     console.log("ayl tiv");
//     break;
// }

//////////obekti mej zangvac/////////////
// var user={
//     name:["Anna","Narine","Marine"],
//     lastname:["Babayan","Vardanyan","Sargsyan"],
//     age:[24,34,89]

// }

// for(let i=0;i<user.age.length;i++){
// if(user.age[i]>35){
//     console.log(user.name[i])
// }
// }




// Ստեղծել զանգված 2, 5, 9, 15, 0, 4 արժեքներով, օգտագործելով for ցիկլ և if  
// ցուցադրել զանգվածի այն արժեքները,որոնք 3 -ից մեծ են և 10-ից փոքր:


// let arr=[2, 5, 9, 15, 0, 4]
// for(let i=0;i<arr.length;i++){
//     if(arr[i]>3 && arr[i]<10){
// console.log(arr[i])
//     }
// }



// Ստեղծել զանգված 1, 2, 5, 9, 4, 13, 4, 10 արժեքներով, օգտագործելով for ցիկլ և if  ցուցադրել true,
//  եթե զանգվածի անդամի արժեքը հավասար է 4-ի և fasle հակառակ դեպքում :

// debugger;
//  let arr=[1, 2, 5, 9, 4, 13, 4, 10]
//  for(let i=0;i<arr.length;i++){
//      if(arr[i]===4){
//          console.log(true)
//      }else{
//          console.log(false)
//      }
//  }

// debugger
// for(let i=1;i<=4;i++){
//     for(let j=1;j<=i;j++){
// document.write("x")
//     }
// document.write("<br>")
// }



// Ստեղծել lang փոփոխական,որը կարող է վերցնել 2 արժեք՝  
// 'ru' կամ 'en': Եթե ​​այն ունի «ru» արժեքը, ապա ստեղծել arr անունով զանգված,
// որը իր մեջ կպահի շաբաթվա օրերի անունը ռուսերեն, և եթե այն ունի «en» արժեքը, ապա անգլերեն: 
// Լուծել խնդիրը if-else,switch-case և օբյեկտի մեջ զանգված տարբերակներով։



 let lang='ru'
let arr=["Понедельник", "Вторник", "Среда", "Четверг"," Пятница"," Суббота" ,"Воскресенье"]
 let arr1=["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
 if(lang==='ru'){
     console.log(arr)
 }else if(lang="en"){
     console.log(arr1)
 }
 
 
 switch(lang){
     case 'ru':
         console.log(arr);
         break;
         case 'en':
             console.log(arr1)
 }