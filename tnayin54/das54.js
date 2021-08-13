/////////////////////////////fetch-ashxatanq bazaneri het- ansixrona/////////////////////////////

//https://jsonplaceholder.typicode.com/

// fetch("https://jsonplaceholder.typicode.com/todos/1")
// .then((response)=>response.json())
// .then((response)=>response.text())
// .then((response)=>response.blob())
// .then((response)=>response.arrayBuffer())

// .then((data)=>console.log(data))


// fetch("https://jsonplaceholder.typicode.com/posts/1")
// .then((resp)=>resp.json())
// .then((response)=>response.text())
// .then((js)=>console.log(js))

// fetch("https://jsonplaceholder.typicode.com/posts/3")
// .then((resp)=>resp.json())
// .then((js)=>console.log(js))

////////bazanerum avelacnelu zevn e///////////////////
// fetch("https://jsonplaceholder.typicode.com/posts",{
//     method:"POST",
//     body:JSON.stringify({
//         title:"foo",
//         body:"Bar",
//         userId:1

//     }),
//     headers:{
//         "content-type":"application/json;Charset=UTF-8"
//     }
// })
// .then((response)=>response.json())
//  .then((json)=>console.log(json))


//////////////update aneln e////////////////////

// fetch("https://jsonplaceholder.typicode.com/posts/1",{
//     method:"PUT",
//     body:JSON.stringify({
//         id:1,
//         title:"Menu",
//         body:"MenuBar",
//         userId:"1"
//     }),
//     headers:{
//                  "content-type":"application/json;Charset=UTF-8"
//          }
// })
// .then((response)=>response.json())
//  .then((json)=>console.log(json))

////////////delete-@/////////////
// fetch("https://jsonplaceholder.typicode.com/posts/1",{
//     method:"DELETE",
    
// })
// .then((response)=>response.json())
//  .then((json)=>console.log(json))

/////////get harcum tvyal stanalu//////////////////////////////
// fetch("https://jsonplaceholder.typicode.com/posts/1/comments")
// .then((resp)=>resp.json())
// .then((json)=>console.log(json))



// HTML-ում ստեղծել input,button և p թեգերը։Օգտագործելով հետևյալ հասցեն՝   
// https://jsonplaceholder.typicode.com/users ՝  
// ստեղծել ծրագիր,որտեղ  input-ում մուտքագրված 
// անուն- ազգանունը կհամեմատենք հասցեում նշված 
// user-ների անվան և ազգանվան հետ և եթե համընկնեն,
// ապա ցուցադրել տվյալ մարդու էլեկտրոնային հասցեն՝ տեղադրված 
// p թեգի մեջ,հակառակ դեպքում տպել հետևյալ հաղորդագրությունը՝ 
// "Տվյալ անունով user չի գտնվել"։ Նախապես ստուգել,որ input-ի պարունակությունը դատարկ չէ։ 
// Ծրագիրը իրականացնելու համար տեղադրել click event-ը button թեգի 


// let inp=document.getElementById("input")
// let btn=document.getElementsByClassName("bt")[0]
// let p=document.getElementsByTagName("p")[0]


// btn.addEventListener("click",function(){
//     if(inp.value===""){
//         // alert("անուն- ազգանունը ")
//     }else{
//         fetch("https://jsonplaceholder.typicode.com/users ")
//         .then((resp)=>resp.json())
//         .then((json)=>{
//             let a=json.filter(user=>user.name===inp.value)
//             inp.value=""
//             if(a.length>0){
//                 p.innerHTML=a[0].email
//             }else{
//                 alert("Տվյալ անունով user չի գտնվել")
//             }
//         })
        
//     }
// })




// HTML-ում ստեղծել div թեգ։ Օգտագործելով հետևյալ հասցեն՝
//  https://corona-api.com/countries/am ` ստեղծել ծրագիր,որտեղ կստանաք տվյալ օրվա վարակվածների թիվը և այն կտպեք էկրանին։

// let div=document.getElementById("div")
// fetch("https://corona-api.com/countries/am")
// .then((resp)=>resp.json())
// .then((json)=>{
//     div.innerHTML=json.data.today.confirmed
    
// })


// HTML-ում ստեղծել input,button և div թեգերը։ Օգտագործելով հետևյալ հասցեն՝    
// http://api.tvmaze.com/search/shows?q=Titanik `   ստեղծել ծրագիր,որտեղ input-ում կմուտքագրենք որևէ ֆիլմի անուն 
// և կստանանք ֆիլմի անունը,նկարը և  ժանրը՝ հավաքված div թեգի մեջ։ Նախապես ստուգել,
// որ input-ի պարունակությունը դատարկ չէ։ Ծրագիրը իրականացնելու համար տեղադրել click event-ը 
// button թեգի վրա։

let inp=document.getElementById("input");
let bt=document.getElementsByClassName("bt")[0];
let div=document.getElementsByClassName("div")[0]

bt.addEventListener("click",function(){
    div.innerHTML=""
if(inp.value===""){
alert("partadir lracnel dasht")
}else{
    fetch(`http://api.tvmaze.com/search/shows?q=${inp.value}`)
    .then((resp)=>resp.json())
    .then((films)=>{
        const filmsImages=films.map(film=>{
            const{image,name,genres}=film.show;
            let divC=document.createElement("div");
            let img=document.createElement("img");
            let h3=document.createElement("h3");
            let p=document.createElement("p")
            img.src=image.medium;
            img.alt=name;
            p.innerHTML=genres;
            h3.innerHTML=name;
            divC.append(img)
            divC.append(h3)
            divC.append(p)
            div.append(divC)
        })
        inp.value=""
    });
}
})
    
