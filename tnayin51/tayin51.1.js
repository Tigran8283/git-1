
let s=0
let div1=document.getElementsByClassName('div1')[0];
let but=document.getElementById('but')
but.addEventListener("click",function(){
    let inp1=+document.getElementById('inp1').value
let inp2=+document.getElementById('inp2').value
let inp3=+document.getElementById('inp3').value
div1.innerText=inp1
s++;
if(s===2){
    div1.innerText=inp1+inp2
}if(s===3){
    div1.innerText=inp1+inp2+inp3
    s=0
}
})