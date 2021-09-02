/////////////.....DOM.......///////////////
////Document Object Model///////




// let div=document.getElementsByTagName("div")
// console.log(div[0])

// let div=document.getElementById("text")
// console.log(div)


// let tags=document.getElementsByClassName("one")[1]
// console.log(tags)

// let divs=document.querySelector("div")
// console.log(divs)                                  /////querySelector veradarcnum e arajin handipac\@




// let divs=document.querySelectorAll("div")//[2]
// console.log(divs)





// let btn=document.getElementById("event")
// btn.addEventListener("click",function(){
//     alert("click me")
// })


//  let btn=document.getElementById("event")
//  btn.addEventListener("dblclick",function(){
//      alert("click me")
//  })



// let btn=document.getElementById("event")
// btn.addEventListener("mousedown",function(){
//    console.log("down")
// })


// let btn=document.getElementById("event")
// btn.addEventListener("mouseup",function(){
//    console.log("down")
// })



// let btn=document.getElementById("event")
// btn.addEventListener("mouseover",function(e){
//    console.log(e.pageX)                               //////kordinatner
// })


// let inp=document.getElementsByClassName("inp")[0]
// inp.addEventListener("keyup",function(e){
//     console.log(e.which)
// })


// let inp=document.getElementsByClassName("inp")[0]
// inp.addEventListener("keydown",function(e){
//     console.log("keydown")
// })



// let inp=document.getElementsByClassName("inp")[0]
// inp.addEventListener("keypress",function(e){
//     console.log("keypress")
// })


// let inp=document.getElementsByClassName("inp")[0]
// let btn=document.getElementById("event")
//  btn.addEventListener("click",function(){             /// value ashxatum ei miayn inputi ev textariayi het
//     console.log(inp.value)
// })



// let btn=document.getElementById("event")
// let div=document.getElementsByTagName("div")[0]
// btn.addEventListener("click",function(){
//     div.innerHTML="beforeEvent"
// })



// let btn=document.getElementById("event")
// btn.addEventListener("click",function(){
//     this.style.color="white"
//     btn.style. background="red"
// })



//  let h1=document.createElement("h1")  //<h1></h1>
// h1.innerHTML="heading 1"               //<h1>heading</h1>
// document.body.append(h1)              //<h1>heading</h1> ,</body>  //pakvoxic heto


// let h1=document.createElement("h1")  
// h1.innerHTML="heading 1"               
// document.body.prepend(h1)              //prepend bacvoxic heto      






// let h1=document.createElement("h1")  
// h1.innerHTML="heading 1"               
// document.body.prepend(h1)   
// h1.remove()             






//.1 Html-ում ստեղծել button և  2input։Գրել ծրագիր որի միջոցով 
// button-ին սեղմելիս input-ներում եղած ինֆորմացիաները կտեղափոխվեն։


// let btn=document.getElementById("event")
// let inp=document.getElementsByClassName("inp")[0]
// let inp1=document.getElementsByClassName("inp1")[0]

// btn.addEventListener("click",function(){
//     let s=inp.value
//     let x=inp1.value

//     inp.value=x
//     inp1.value=s
// })



//2. Html-ում ստեղծել button,որը կունենա նախնական 0 արժեք։Գրել ծրագիր,
// որի շնորհիվ ամեն անգամ button-ին սեղմելիս արժեքը կավելանա 1-ով։


// let btn=document.getElementById("event")
// let inp=document.getElementsByClassName("inp")[0]

// btn.addEventListener("click",function(){
//     inp.value++
// })


//3. Html-ում ստեղծել 3 հատ p թեգ և 1 button։ Նրանց մեջ տեղադրել ինֆորմացիաներ։
// Գրել ծրագիր,որի միջոցով button-ին սեղմելիս p թեգերի ինֆորմացիաները 
// կփոխվեն և կդառնան իրենց ինդեքսների համարները։
 
// let btn=document.getElementById("event")
// let a=document.getElementsByTagName("p")

// btn.addEventListener("click",function(){
//  for(let i=0;i<a.length;i++){
//      a[i].innerHTML=i
//  }
// })


//.4 Html-ում ստեղծել 3 հատ p թեգ և 1 button։ Նրանց մեջ տեղադրել ինֆորմացիաներ։Գրել ծրագիր,
// որի միջոցով button-ին սեղմելիս p թեգերի ինֆորմացիաների սկզբից կավելանան իրենց 
// ինդեքսները և button-ը կդառնա disabled։

// let btn=document.getElementById("event")
// let a=document.getElementsByTagName("p")

// btn.addEventListener("click",function(){

//  for(let i=0;i<a.length;i++){

//      a[i].innerHTML=i+" "+a[i].innerHTML
//  }
//  btn.disabled=true
//})


//5. Html-ում ստեղծել տեքստային input և button։ Գրել ծրագիր,որի միջոցով ամեն 
// անգամ button-ին սեղմելիս կավելանա նոր դատարկ input։

// let btn=document.getElementById("button")
// let input=document.getElementById("inp")

// btn.addEventListener("click",function(){
//     let s=document.createElement("input")
//     document.body.append(s)
// })






//.6 HTML-ում ստեղծել p։Javascript-ում ստեղծել գունային զանգված,օրինակ՝
// var colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue']։
// Գրել ծրագիր,որի միջոցով p-ին ամեն անգամ սեղմելիս կստանա զանգվածից հերթական գույն։

var colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue']
 
// let p=document.getElementsByTagName("p")[0]
// p.style.fontSize="50px"
// p.style.textAlign="center"
// p.addEventListener("click",function(){
//     const color=Math.floor(Math.random()*5)
//     for(let i=0;i<colors.length;i++){
      
//        p.style.color= colors[color]
      
//     }
// })
let p=document.getElementsByTagName("p")[0]

function f1(){
    var k=0;
    return function(){
        this.style.color=colors[k]
        k++;
        if(k===colors.length){
            k=0
        }
    }
}
p.addEventListener("click",f1())