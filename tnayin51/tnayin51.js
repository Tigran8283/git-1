let div1=+document.getElementById('div1').innerText;
let div2=+document.getElementById('div2').innerText;
let div3=+document.getElementById('div3').innerText;

 let s=0;
let sum=document.getElementById("sum");
sum.addEventListener("click",function(){
    sum.innerText=div1
    s++;
    if(s===2) {
        sum.innerText=div1+div2
    }if(s===3){
        sum.innerText=div1+div2+div3
        s=0;
    }
})

