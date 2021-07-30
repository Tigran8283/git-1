///////////////////////////////////////////////////// Event/////////////////////////////////////////////////////////


// let div=document.getElementsByTagName("div")[0];
// div.addEventListener("click",function(){
// alert("click")
// })

// let div=document.getElementsByTagName("div")[0];
// div.addEventListener("click",f)
// function f(){
//     alert("event click")
// }


// let btn=document.getElementsByTagName("button")[0];
// btn.addEventListener("mousedown",function(){
//     console.log("mousdown")
// })


// btn.addEventListener("mouseup",function(){
//     console.log("mouseup")
//})

// let btn=document.getElementsByTagName("button")[0];
// btn.addEventListener("contextmenu",function(e){
//     e.preventDefault()
//     alert("kangnecnel")
// })



// document.addEventListener("mousemove",function(e){
//     console.log(e.pageX,e.pageY);
// })

// let div=document.getElementsByTagName("div")[0];
// div.addEventListener("copy",function(e){
//     e.preventDefault();
//     alert("no")
// })



// let div=document.getElementsByTagName("div")[0];
// div.addEventListener("click",function(e){
//     console.log(e.target)
// })


// let div=document.getElementsByTagName("div")[0];
//  div.addEventListener("click",function(e){
// div.style.backgroundColor="cyan";
// this.style["margin-top"]="10em";
// })

// let inp=document.getElementsByTagName("input")[0];
// inp.setAttribute("value","surname")
// console.log(inp.getAttribute("value"));
// inp.removeAttribute("value")



// let btn=document.getElementsByTagName("button")[0]
// let inp=document.getElementsByTagName("input")[0]
// btn.addEventListener("click",function(){
//     console.log(inp.value)
// })


//  let inp=document.getElementsByTagName("input")[0]
//  inp.addEventListener("keyup",function(e){
// console.log(e.which)
//  })

// let inp=document.getElementsByTagName("input")[0]
//   inp.addEventListener("keyup",function(e){
// if(e.which!==13)return;
// console.log(this.value);
//   })



// let which=document.getElementsByClassName("which")[0];
// let mouse=document.getElementsByClassName("mouseover")[0];

// which.addEventListener("mousedown",function(){
//     mouse.innerText="mousedown"

// })
// which.addEventListener("mouseup",function(){
//     mouse.innerText="mouseup"
// })
// which.addEventListener("contextmenu",function(e){
//     e.preventDefault()
//     mouse.innerText="contextmenu"
    
// })
// which.addEventListener("dblclick",function(){
//     mouse.innerText="dblclick"
// })
// which.addEventListener("click",function(){
//     mouse.innerText="click"
// })



// let inp=document.getElementsByTagName("input")[0];
// let m=document.getElementsByClassName("mouse")[0]



// inp.addEventListener("keyup",function(){
//     m.innerText="keyup"
// })
// inp.addEventListener("keydown",function(){
//     m.innerText="keydown"
// })

// let click=document.getElementsByClassName("b")[0];
// let href=document.getElementsByTagName("a")[0]
// let img=document.getElementsByTagName("img")[0]

// click.addEventListener("click",function(){
//     img.src='./illustration-geiranger.jpeg'
//     href.href="https://mail.google.com/mail/u/0/?zx=8069iqfcerxi#inbox/FMfcgzGkZQSzkwFBWSTQzMqWssgGcXvV"
//     href.innerText="Google"
// })

// Ստեղծել 2input և 1button։ Առաջին input-ը 
// պետք է նախատեսված լինի անվան,
// իսկ երկրորդը ազգանվան համար։
// Դաշտերում մուտքագրել տվյալներ և 
// դրանք էկրանին տպել ոչ համարակալված ցուցակի 
// տեսքով և ջնջել դաշտերի պարունակությունը։Ստուգել, 
// եթե դաշտերից որևէ մեկը դատարկ է,
// ուրեմն alert պատուհանում տպել հետևյալ հաղորդագրությունը՝  
// “Պարտադիր լրացնել բոլոր դաշտերը”։

// let but=document.getElementsByClassName("but")[0];
// let inp=document.getElementsByClassName("i")[0];
// let inp1=document.getElementsByClassName("i1")[0]
// let ul=document.getElementsByTagName("ul")[0];


// but.addEventListener("click",function(){
//     if(inp.value===""||inp1.value===""){
//         alert("Պարտադիր լրացնել բոլոր դաշտերը")
//     }else{
//         let a=inp.value
//         let b=inp1.value
//         ul.innerHTML+="<li>"+ a+" " +b+"</li>"
//         inp.value=""
//         inp1.value=""
//     }
   
//  })