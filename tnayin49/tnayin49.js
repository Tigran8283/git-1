// let div=document.createElement("div")
// div.innerHTML="pakvox teygic araj";
// document.body.append(div)  ///////pakvox teygic araj///

// let p=document.createElement("p")
// p.innerHTML="bacvox teygic heto";
// div.prepend(p)


// let span=document.createElement("span");
// span.innerHTML="stexcum e divic araj";
// document.body.insertBefore(span,div);


// let div=document.getElementsByTagName("div")[0]
// div.remove();
// div.classList.add("a","b")
// div .classList.remove("b")
// div.classList.toggle("c")

// console.log(div.classList.contains("a"))


// let span=document.getElementsByTagName("span")[0];
// let parent=span.parentNode
// console.log(parent)
// console.log(parent.firstElementChild)
// console.log(parent.lastElementChild)
// console.log(parent.children)
// console.log(parent.children[2])
// console.log(span.previousElementSibling)
// console.log(span.nextElementSibling)

// let main=document.getElementsByTagName("main")[0];
// console.log(main.innerHTML)
// console.log(main.innerText)
// console.log(main.textContent)


// setInterval(function(a){
//     console.log("interval")
//     console.log(a)
// },1000,8)

// let c=setInterval(function(f){
//     console.log("interval")
//     clearInterval(c)
//     console.log(f)
// },1500,10)


// setTimeout(function(){
//     console.log('time')
// },1200)




// const light = () => {
//     let red=document.getElementsByClassName("red")[0]
//     let yel=document.getElementsByClassName("yellow")[0]
//     let gr=document.getElementsByClassName("green")[0]
    
//     setTimeout(function(){
//         red.style.backgroundColor="red"
//        yel.style.backgroundColor="rgb(114, 108, 108)"
//        gr.style.backgroundColor="rgb(114, 108, 108)"
//     },1000);

//     setTimeout(function(){
//         red.style.backgroundColor="rgb(114, 108, 108)"
//        yel.style.backgroundColor="yellow"
//        gr.style.backgroundColor="rgb(114, 108, 108)"
//     },3000);

//     setTimeout(function(){
//         red.style.backgroundColor="rgb(114, 108, 108)"
//        yel.style.backgroundColor="rgb(114, 108, 108)"
//        gr.style.backgroundColor="green"
//     },5000);

//     setTimeout(function(){
//         red.style.backgroundColor="rgb(114, 108, 108)"
//        yel.style.backgroundColor="yellow"
//        gr.style.backgroundColor="rgb(114, 108, 108)"
//     },7000);
// }

// setInterval(() => {
//     light()
// },7000);


let but=document.getElementsByTagName("button")
for(let i=0;i<but.length;i++){
     
    but[i].addEventListener("click",function(){
if(this.classList.contains("button1")){
let a=this.previousElementSibling;
let next=this.nextElementSibling.nextElementSibling;
if(next.innerHTML===""){
    next.innerHTML=a.innerHTML;
    a.innerHTML=""
}
}
else if(this.classList.contains("button3")){
let a=this.nextElementSibling;
let prev=this.previousElementSibling.previousElementSibling;
if(prev.innerHTML===""){
    prev.innerHTML=a.innerHTML;
    a.innerHTML=""
}
}
    })
}