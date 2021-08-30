// debugger;
// var sum=0
// let arr=[1,-9,14,95,100];
//for(let v of arr){                 //////////nor versia/////////
//     if(v%2===0)   {
//         sum+=v
//     }       

// }  
// console.log(sum)



// Ստեղծել հետևյալ զանգվածը՝ ։Գրել ծրագիր,որը կշրջի զանգվածը և 
// օգտագործելով for-of ցիկլ տպել զանգվածի շրջված անդամները։


// let arr = ['elem1', 'elem2', 'elem3']
// arr.reverse()
// for(let x of arr){
//     console.log(x)
// }





// Օգտագործելով for-of ցիկլ գրել ծրագիր,որը կհաշվի նախադասության մեջ եղած o-երի քանակը։
// let count=0
// let str = 'You want the webserver to support four of the most popular programming paradigms.'

// for(let a of str){
//     if(a==="o"){
//        count++ 
//     }
// }
// console.log(count)


//////////function///////////

// function sum(){
//     console.log(81)
// }
// sum()


// function hello(){
//     return "Hello"
// }
// document.write(hello())



// function mult(x,y){
//     return x*y
// }
// console.log(mult(5,4))
// console.log(mult(10,9))


// function array(a){
//     for(let i=0;i<a.length;i++){
//         console.log(a[i])
//     }
// }
// array([8,98,-65,-3])



// Գրել ֆունկցիա, որը վերադարձնում է թվի քառակուսին: Թիվը փոխանցվում է որպես պարամետր:
// Գրել ֆունկցիա, որը վերադարձնում է երկու թվերի գումարը:
// Գրել ֆունկցիա, որն առաջին թվից հանում է երկրորդը և բաժանում երրորդի։


// function pow(a){
// return a*a
// }
// console.log(pow(+prompt()))

// function pow(a,b){
//     return a+b
//     }

//     console.log(pow(+prompt(),+prompt()))


// function pow(a,b,c){
//     return (a-b)/c
//     }
//     console.log(pow(4,2,2))


// Գրել ֆունկցիա, որը վերցնում է թիվը որպես պարամետր և ստուգում է այն բացասական է, թե ոչ: 
// Եթե ​​բացասական է, թող գործառույթը վերադարձնի true , իսկ եթե ոչ ՝ false:



// function f(a) {
//     if(a>0){
//         return true
//     }else{
//         return false;
//     }
// }
// console.log(f(-9))



// Ստեղծել ֆունկցիա,որը կստանա մեկ արգումենտ և կվերադարձնի զանգվածի յուրաքանչյուր անդամի արմատը տվյալ թվի փոխարեն։ 
// Օրինակ [64,49,36,25,15] զանգվածի փոխարեն պետք է ստանանք  ՝ [8, 7, 6, 5, 4]


// let arr=[]
// function f(a){
//     for(let i=0;i<a.length;i++){

//     arr.push (Math.sqrt(a[i]))
//     }
//     return arr
// }
// console.log(f([64,49,36,25,15]))


// Ստեղծել arrayFill անունով ֆունկցիա, որը զանգվածը կստեղծի տրված արժեքներով: 
// Որպես առաջին պարամետր ֆունկցիան վերցնում է  արժեը զանգվածը լցնելու համար, իսկ երկրորդը `քանի տարր պետք է լինի զանգվածում:

// Օրինակ ՝ arrayFill ('x', 5) զանգված կստեղծի ['x', 'x', 'x', 'x', 'x']:
 
// let arr=[]
// function arrayFill (x, y){
// for(let i=0;i<y;i++){
//     arr.push(x)

// }
// return arr

// }
// console.log(arrayFill(5,6))


// Տրված է թվերով զանգված: Պարզել, թե զանգվածին քանի՞ տարր պետք է ավելացվի, որպեսզի ընդհանուրը 10-ից ավելի լինի:

// function f(a){
//     for(let i=0;i<a.length;i++){
//         if(a.length<=11){
//            console.log(11-a.length)
//         }

//         }
// }
// f([3,18,3,5])



////////////

// let arr=[1,4,5,7];
// arr.forEach(function(v,i,a){
// console.log(v+" "+a[i])
// })

////v-value
///i-index
///a-array 


// let arr=[1,4,5,7];
// let arr1=arr.map(function(v){
//     return v>3
// })
// console.log(arr1)



// let arr=[1,4,5,7];
// let arr1=arr.map(x=>x*2);
// console.log(arr1)

// let arr=[1,4,5,7];
// let arr1=arr.map(x=>x<7)
// console.log(arr1)



// let arr=[1,4,5,7];
// let arr1=arr.filter(x=>x<7)
// console.log(arr1)

// let arr=[1,4,5,7];
// let arr1=arr.find(v=>v>3)
// console.log(arr1)                 /////find veradarcnum e arajin patahac@


// let arr=[1,4,5,7];
// let arr1=arr.every(v=>v>4)           ///////every ete mek@ tekuz sxal e talis e fals
// console.log(arr1)


//  let arr=[1,4,5,7];
//  let arr1=arr.some(x=>x<7)         //////some tekuz mek@ bavararum e talu e true
// console.log(arr1)


// let arr=[1,4,7,48,28,12,82,78,9,5]
// let count=1
// arr.filter(v=>v%2===1).forEach(v=>count*=v)     // kent tver@ filtrecinq[7,9,5]                                              
// console.log(count)                               //forEach ov hashvecinq


// let arr=[1,5,2]
// let c=arr.reduce((prop,v)=>{
//     return prop+v                        ////reduce stanum e 2 arjeq
// },0)
// console.log(c)

// prop 0+1=1
//1+5=6
//6+2=8


// Ստեղծել ֆունկցիա,որը զանգվածը կկառուցի հետևյալ կերպ՝ առաջին տարրը կգրի 'x', երկրորդը 'xx', երրորդը 'xxx' և այլն:


// let arr=[]
// let s=""
// function f(){
//     for(let i=0;i<7;i++){
//  s+="x"
// arr.push(s)

//     }
//     return arr  
// }

//  console.log(f())




// Տրված է հետևյալ թվերով զանգված՝ var arr = [5, 6, 7, 8, 9]: Ստեղծեք նոր զանգված, 
// որը բաղկացած է այս թվերի քառակուսիներից։Օգտագործել forEach։

// var arr = [5, 6, 7, 8, 9]
// let arr1=[]
//   arr.forEach(v=>arr1.push(Math.pow(v, 2)))
// console.log(arr1)






// Տրված է հետևյալ թվերով զանգված՝ var arr = [5, 6, 7, 8, 9]: Գտնել այս թվերի գումարը։ Օգտագործել forEach։


//  var arr = [5, 6, 7, 8, 9]
//  let res=0;
//  arr.forEach(v=>res+=v)
//  console.log(res)



// Տրված է հետևյալ թվերով զանգված՝ : Ստեղծեք նոր զանգված, 
// որը բաղկացած է այս թվերի քառակուսիներից։Օգտագործել map։var arr = [5, 6, 7, 8, 9]



// var arr = [5, 6, 7, 8, 9]
// var arr1=[]

// arr.map(v=>arr1.push(Math.pow(v,2)))
// console.log(arr1)



// Տրված է հետևյալ թվերով զանգված՝ var arr = [5, 6, 7, 8, 9]: Ստուգեք, 
// որ զանգվածի բոլոր տարրերը մեծ են զրոյից ։Օգտագործել every։



// var arr = [5, - 6, 7, 8, 9]
// let arr1= arr.every(v=>v>0)
// console.log(arr1)



// Տրված է հետևյալ թվերով զանգված՝ : 
// Ստուգել դրա մեջ բացասական տարրերի առկայությունը: ։Օգտագործել some։var arr = [5, 6, -7, 8, 9]

// var arr = [5, 6, -7, 8, 9]
// var arr1=arr.some(v=>v<0)
// console.log(arr1)



// Տրված է հետևյալ թվերով զանգված՝ var arr = [1, -3, 5, 6, -7, 8, 9, -11]: 
// Թողեք դրանում միայն բացասական թվերը:Օգտագործել filter։



// var arr = [1, -3, 5, 6, -7, 8, 9, -11]

// var arr1=arr.filter(v=>v<0)
// console.log(arr1)





// Տրված է հետևյալ թվերով զանգված՝ var arr = [1, -3, 5, 6, -7, 8, 9, -11]:
//  Թողեք դրանում միայն զույգ թվերը:Օգտագործել filter։



//  var arr = [1, -3, 5, 6, -7, 8, 9, -11]

//  var arr1=arr.filter(v=>v%2===0);
//  console.log(arr1)




// Ոնենք հետևյալ զանգվածը՝ var arr = [1, 2, 3, 0, 4, 5, 6]։
// Օգտագործելով reduce ստեղծել ծրագիր,որը կհաշվի թվերի գումարը մինչ առաջին հանդիպած 0-ն։



var arr = [1, 2, 3, 0, 4, 5, 6]
let arr1 = arr.reduce((res,v, i, arr3)=>{
    if(v===0){
        arr3.splice(1);
    }
    return res+=v
})
console.log(arr1)

