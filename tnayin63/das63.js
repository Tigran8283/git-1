//////.....detrucring..../////

// let arr=[1,8,10,24]
// let[elem1,elem2]=arr
// console.log(elem1,elem2)

// let arr=[1,8,10,24]
// let[elem1,elem2,,elem3]=arr
// console.log(elem1,elem2,elem3)

// let arr=[1,8,10,24]
// let[elem1,...elem2]=arr
// console.log(elem1,elem2)
// console.log(elem2[1])


// let obj={
//     name:"Ani",
//     surName:"Avagyan",
//     age:24
// }
// let{name,surName,age}=obj
// console.log(name,surName,age)

// let obj={
//     name:"Ani",
//     surName:"Avagyan",
//     age:24
// }
// let{name:n,surName,age,admin="true"}=obj
// console.log(n,surName,age,admin)



// Օգտագործելով destructuring զանգվածի առաջին անդամը պահել elem1 փոփոխականի տակ,երկրորդը՝ elem2,իսկ մնացածը arr փոփոխականի տակ։
// Օգտագործելով console.log տպել արդյունքը։

// let newArr = ['первый', 'второй', 'третий', 'четвертый', 'пятый', 'шестой', 'седьмой']

// let[elem1,elem2,...arr]=newArr
// console.log(elem1,elem2)
// console.log(arr)



// Օգտագործելով destructuring զանգվածի առաջին անդամը անտեսել,իսկ երկրորդը պահել elem2 
// փոփոխականի տակ։Օգտագործելով console.log տպել արդյունքը։



// let newArr = ['первый', 'второй', 'третий', 'четвертый', 'пятый', 'шестой', 'седьмой']


// let[,elem2]=newArr
// console.log(elem2)



// Օգտագործելով destructuring զանգվածի առաջին անդամը անտեսել,երկրորդը պահել elem2 փոփոխականի տակ,
// ստեղծել elem3 և նրան վերագրել որևէ տեքստ։Օգտագործելով console.log տպել արդյունքը։

// let newArr = ['первый', 'второй']
// let[,elem2,elem3="hello"]=newArr
// console.log(elem2,elem3)


// Ստեղծել օբյեկտ,որը պետք է ունենա անուն,ազգանուն և տարիք։ Օգտագործելով destructuring վերցնել տվյալները և տպել արդյունքը։



// let obj={
//     name:"Anna",
//     surname:"Hakobyan",
//     age:30
// }
// let{name,surname,age}=obj
// console.log(name,surname,age)



//......promise......//bazayi het ansixron


// let promise=new Promise((resolve,reject)=>{
//     setTimeout(()=>reject(new Error("whoops!")),1000)
// })
// .catch(console.error)


// let promise=new Promise((resolve,reject)=>{
//     setTimeout(()=>resolve(5),1000)
// })
// .then(console.log)


// let promise=new Promise((resolve,reject)=>{
//     setTimeout(()=>reject(7),2000)
// })
// promise.then(
//     (res)=>console.log(res),
//     (err)=>console.error(err)
//  )



// Ստեղծել Promise իր 2 արգումենտներով։Ստեղծել փոփոխական,որը պատահական ամբողջ թվեր կգեներացնի 1-ից 10-ի 
// միջակայքում։ Promise-ի մեջ ստեղծել setTimeout ֆունկցիա,որի մեջ պետք է ստուգենք գեներացված թիվը։
// Եթե այն մեծ է 1-ից և փոքր է 5-ից տպել true,հակառակ դեպքում ստեղծել error։Տպել արդյունքը։



// let promise=new Promise((resolve,reject)=>{
//     let a=Math.floor(Math.random()*10+1)
   
//          setTimeout(()=>{
//              if(a>1 && a < 5){
//              resolve(true)
//             }else{

// reject(new Error("error"))
//             }
//          },1000) 
         
    
// })
// .catch(console.log)
// .then(console.log)


// Ստեղծել getNum ֆունկցիա,որը վերադարձնում է Promise իր resolve արգումենտով։ 
// Promise-ի մեջ ստեղծել setTimeout ֆունկցիա,որը 3 վայրկյանի ընթացքում resolve-ի 
// միջոցով կվերադարձնի պատահական թիվ 1-10 միջակայքից։ Ստեղծեք async ֆունկցիա, որը սպասում է getNum-ի արդյունքին, 
// այնուհետև տվյալ թվին ավելացնում է քառակուսի և տպում այն ​​էկրանին:

// function getNum(){
//    return new Promise((resolve)=>{
//     let a=Math.floor(Math.random()*10+1) 
// setTimeout(()=>{
// resolve(a)
// },3000)
// })
// }
// async function f(){
//      let c=await getNum()
//      console.log(c*c)
//  }
//  f()



/////.JSON.///////////////
///////////tvyal uxrkelu tvyal stanalu hamar////////

// let a={
//     admin:true,
//     saHayi:"Hello"
// }
// alert(a)
// alert(JSON.stringify(a))


// let arr='[1,4,6]'    ////JSON tipi string
// let c=JSON.parse(arr)
// alert(arr[1])        //////parse- zangvac


////array
//function
//object
//Dom
//regexp


// Ունենք հետևյալ JSON տիպի string-ը՝ var name = '["Armine", "Karen", "Narek"]'։Փոխակերպել այն սովորական զանգվածի և տպել վերջին անդամը։



var name = '["Armine", "Karen", "Narek"]'
let c=JSON.parse(name)
console.log(c[c.length-1])

// Ունենք հետևյալ  object-ը` var obj = {a: 'aaa', b: 'bbb'}: Փոխակերպել այն JSON տիպի string-ի:


 var obj = {a: 'aaa', b: 'bbb'}
 console.log(JSON.stringify(obj))