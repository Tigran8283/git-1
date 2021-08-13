/////async function///////

///async await///////////await-spasel

// async function f(){
//     let promise=new Promise((resolve,reject)=>{
//         setTimeout(()=>resolve("done"),1000)
//     })
//     let result=await promise;
//     console.log(result)
// }
// f()


// async function f(){
//     try{
//         let response=await fetch("http://no-user")
//     }catch(err){
//         console.log(err)
//     }
    
// }
// f()



// function resolveAfter2Seconds(){
//     return new Promise(resolve=>{
//         setTimeout(()=>{
//             resolve("res")
//         },2000)
//     })
// }
// async function asyncCall(){
//     console.log("calling")
//     const result=await resolveAfter2Seconds()
//     console.log(result)
// }
// asyncCall()



// async function fetchAsync(){
//     let response=await fetch("https://api.github.com");
//     let data=await response.json();
//     return data
// }
// fetchAsync()
// .then(data=>console.log(data))



// async function loadJson(url){
//     let response=await fetch(url)
//     if(response.status===200){
//         let json=await response.json();
//         return json
//     }
//     throw new Error(response.status)
// }
// loadJson("http://no-user")
// .catch(alert)

////ete status@ ete 200 ic 299 a uremn ok////////////



// Ստեղծել ասինքրոն ծրագիր,որը https://jsonplaceholder.typicode.com/users հղումից 
// կստանա user-ների տվյալները,կսպասի բոլոր տվյալների ստացմանը և console պատուհանում կտպի այն։


// async function f(){
//     let response=await fetch("https://jsonplaceholder.typicode.com/users")
//     let user=await response.json()
//     return user
// }
// f()
// .then(user=>console.log(user))



// Ստեղծել ասինքրոն ֆունկցիա,որը կունենա իր մեջ  new  Promise համապատասխան արգումենտներով։ 
// Promise-ի մեջ ստեղծել setTimeout ֆունկցիա,որը օգտագործելով  resolve կտպի “done” բառը։Այնուհետև 
// await-ում սպասել գործողության ավարտին և տպել արդյունքը։


// async function f(){
//     let promise=new Promise((resolve,reject)=>{
//         setTimeout(()=>resolve("done"),1000)

//          })
//         let result=await promise
// console.log (result)    
  
// }
// f() 


// Ստեղծել փոփոխական և նրան վերագրել +prompt()։Ստեղծել ասինքրոն ֆունկցիա,որն իր մեջ կպարունակի 
// try և կսպասի https://api.punkapi.com/v2/beers?per_page=10 հղման պատասխանին,որտեղ 10 թվի փոխարեն 
// պետք է լինի prompt-ում ներմուծված արժեքը։Եթե այդպիսի թիվ չի գտնվել ստեղծել error 'Data not fetched!' 
// հաղորդագրությամբ։ Եթե ամեն ինչ ճիշտ է տպել պարունակությունը էկրանին։



// let a=+prompt("mutqagrel tiv");
// async function f(){
// try{
//    let response=await fetch(`https://api.punkapi.com/v2/beers?per_page=${a}`)
//    let page=await response.json()
//    if(!page){
//      throw new Error("data not fetched");
    
// }
//    console.log(page)
//    .then(page=>alert(page))
// }catch(err){
// alert(err)
// }
// }


let a=+prompt("mutqagrel tiv");
const loadData=async()=>{
    try{
        const resrt=await fetch(`https://api.punkapi.com/v2/beers?per_page=${a}`)
        if(!resrt.ok){
            throw new Error("data not fetched")
        }else{
            const data=await resrt.json()
            document.write(JSON.stringify(data))
        }
    }
    catch(err){
        alert(err.message)
    }
}
loadData()






