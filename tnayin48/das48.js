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



let which=document.getElementsByClassName("which")[0];
let mouseover=document.getElementsByClassName("mouseover")[0];


which.addEventListener("mousedown",function(){
    mouseover.innerText="mousedown"
})
which.addEventListener("mouseup",function(){
    mouseover.innerText="mouseup"
})
which.addEventListener("contextmenu",function(){
    mouseover.innerText="contextmenu"
})
which.addEventListener("dblclick",function(){
    mouseover.innerText="dblclick"
})
which.addEventListener("click",function(){
    mouseover.innerText="click"
})



let inp=document.getElementsByTagName("input")[0];
let m=document.getElementsByClassName("mouse")[0]



inp.addEventListener("keyup",function(){
    m.innerText="keyup"
})
inp.addEventListener("keydown",function(){
    m.innerText="keydown"
})