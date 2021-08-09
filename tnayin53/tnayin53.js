/////////////////////////////promise-xostum///////////////////////////////////



//pending-result@ undefined e
//fullfiled-result@ arjeq e
//rejected-result@ errora

//2 arjeq stat,result



// let promise=new Promise(function(resolve,reject){
//     setTimeout(()=>resolve("done"),1000)
// })
// promise.then(
//     (result)=>console.log(result)),
//     (error)=>console.error(error)
    

///////resolve-i jamanak ogtagorcvum e then/////////////////

//     let prom=new Promise(function(resolve,reject){
//         setTimeout(()=>resolve("Tigran"),6000)
//     })
//     prom.then(
//         (result)=>console.log(result)),
//         (error)=>console.error("Kocharyan")
    
//////////////////////reject-i jamanak catch/////////////////
//     let promise=new Promise((resolve,reject)=>{
//         setTimeout(()=>reject(new Error("ooops")),1000)
//     })
//     promise.catch(console.log)


//     new Promise((resolve,reject)=>{
// setTimeout(()=>reject(new Error("Tigran")),3000)
//     })
//    .catch(prompt)



    // new Promise((resolve,reject)=>{
    //     setTimeout(()=>resolve("result"),2000)
    // })
    // .finally(()=>console.log("promise ready"))
    // .then((result)=>console.log(result))

    // new Promise((resolve,reject)=>{
    //     setTimeout(()=>resolve("Tigran"),1000)
    // })
    // .finally(()=>console.log("promise ready"))
    // .then((res)=>console.log(res))

    // new Promise((resolve,reject)=>{
    //     throw new Error("error")
    // })
    // .finally(()=>console.log("prmise ready"))
    // .catch((err)=>console.log(err))


    // new Promise((resolve,reject)=>{
    //     setTimeout(()=>reject("Tiko"),500)
    // })
    // .finally(()=>prompt("aaaaa"))
    // .catch((er)=>prompt(er))


    // function getData(d){
    //     return new Promise(function(resolve,reject){
    //         setTimeout(()=>resolve(d),1000)
    //     })
    // }
    // getData(10)
    // .then((num)=>{
    //     console.log("then 1 calles "+num)
    //     return getData(num+20)
    // })
    // .then((num)=>{
    //     console.log("then 2 calles "+num)
    //     return getData(num+30)
    // })
    // .then((num)=>{
    //     console.log("then 3 calles "+num)
    //     console.log(num)
    // })
    // console.log("buttom code")
    // arajnayin kardum e sinxronayin@ ays depqum buttom code@


//     function a(d){
//         return new Promise((resolve,reject)=>{
//             setTimeout(()=>resolve(d),800)
//         })
//     }
//     a(20)
//     .then((num)=>{
//         console.log("arajin tiv@ "+num)
//         return a(num+20)
//     })
//     .then((num)=>{
//         console.log("erkrord tiv@ "+num)
//         return a(num+30)
//     })
//     .then((num)=>{
//         console.log("errord tiv@ "+num)
//        console.log(num)
//     })
//    console.log("butoon code")
   
   
   
   
    // metod Promise.all zangvac e //

    //    Promise.all([
//        new Promise((resolve)=>setTimeout(()=>resolve(1),3000)),
//        new Promise((resolve)=>setTimeout(()=>resolve(2),2000)),
//        new Promise((resolve)=>setTimeout(()=>resolve(3),1000))
//    ]).then(console.log)
//veradarcnum e amenaerkar varkyan@ u tpum 3 miasin




   
// Promise.all([
//     new Promise((resolve)=>setTimeout(()=>resolve(1),3000)),
//     new Promise((resolve,reject)=>setTimeout(()=>reject("new error1"),2000)),
//     new Promise((resolve)=>setTimeout(()=>resolve(3),1000))
// ]).then(console.log).catch(console.error)
///////////////////////////veradarcnum e amenaerkar varkyan@ u tpum error////////////////////////////

// Promise.allSettled([
//         new Promise((resolve,reject)=>setTimeout(()=>resolve(1),3000)),
//         new Promise((resolve,reject)=>setTimeout(()=>reject("new error"),2000)),
//         new Promise((resolve,reject)=>setTimeout(()=>resolve(3),1000))

// ])
// .then((result)=>{
//     result.forEach((v)=>{
//         if(v.status==="rejected"){
//             console.log(v.reason) //reason-patchar
//         }
//         else{
//             console.log(v)
//         }
//     })
// })
// .catch(console.error)



//race jamanakic kaxvac amenakarch jamanakinna tpum 
//  Promise.race([
//     new Promise((resolve)=>setTimeout(()=>resolve(1),1000)),
//     new Promise((reject)=>setTimeout(()=>reject(new Error("NEW")),2000)),
//     new Promise((resolve)=>setTimeout(()=>resolve(3),500)),

// ]).then(console.log)


// Promise.reject(new Error("fail"))
// .catch(function(value){
//     console.log(value)
// })


// Promise.resolve(11)
// .then(function(value){
//     console.log(value)
// })


// Ստեղծել ֆունկցիա,որը կստանա մեկ արգումենտ և կվերադարձնի new Promise(resolve, reject) 
// արգումենտներով։ Նրա մեջ ստեղծել setTimeout  ֆունկցիա,որտեղ կստուգենք՝ արդյոք ֆունկցիային 
// փոխանցված արգումենտը կենտ է,եթե այո,ապա  resolve-ի մեջ տպել "even number" ,
// հակառակ դեպքում՝ ստեղծել error՝ "odd number" հաղորդագրությամբ։ Կանչել ֆունկցիան և 
// փոխանցել արգումենտ և համապատասխան արգումենտին console պատուհանում տպել հաղորդագրությունը։



// function res(d){
//     return new Promise(function(resolve,reject){
//         setTimeout(()=>{
// if(d%2===1){
//     resolve("even number")
// }else{
//     reject(new Error("error"))
// }
//         })
//     })
// }
// res(10) .then(console.log).catch(console.log)



// Ստեղծել 3 փոփոխական։Առաջին փոփոխականին վերագրել resolve ֆունկցիան կանչած 5թվով,
// երկրորդ փոփոխականին վերագրել -44 արժեքը,երրորդ փոփոխականին վերագրել new Promise՝ 
// իր երկու արգումենտներով և նրա մեջ ստեղծել  setTimeout ֆունցկիա,որը կստանա resolve, 100, 
// 7 արժեքները։ Ստեղծել Promise.all,որը որպես արգումենտ կստանա ստեղծված 3 փոփոխականները զանգվածի տեսքով։ 
// Ստուգել,եթե արգումենտի արժեքը բացասական է ՝ստեղծել  error ՝"բացասական թիվ է գտնվել"  հաղորդագրությամբ,
// հակառակ դեպքում տպել արգումենտի արժեքը։ Օգտագործելով  catch-ը տպել error-ը։







// Ստեղծել ֆունկցիա,որը կստանա մեկ արգումենտ և կվերադարձնի new Promise(resolve) արգումենտով։ 
// Նրա մեջ ստեղծել setTimeout  ֆունկցիա,որտեղ արգումենտում ստացված արժեքը պետք է մեծացնել 2 անգամ։



function res(d){
    return new Promise(function(resolve,reject){
        setTimeout(()=>{
    
    if(d===d*2){
        resolve("even number "+d)
    }else{
        reject(new Error("error"))
    }

        })
    })
}
res(6) .then(console.log).catch(console.log)


function res(d){
    return new Promise(function(resolve,reject){
        setTimeout(()=>{
    
        d=d*2
        resolve("even number "+d)
        reject(new Error("error"))
    

        },1000)
    })
}
res(9) .then(console.log).catch(console.log)