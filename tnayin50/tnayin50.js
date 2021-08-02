
// let div=document.getElementsByTagName("div")[0];


let bt=document.getElementsByTagName("button")[0];

function rgbFunc(){
    var r=Math.floor(Math.random()*255)
    var g=Math.floor(Math.random()*255)
    var b=Math.floor(Math.random()*255)
    return 'rgb('+r+','+g+','+b+')';
}
bt.addEventListener("click",function(e){
    let radio=document.querySelector(".radio");
    if(radio.checked){
    
    let column=document.getElementById("column").value;
    let row=document.querySelector(".row").value;
    let width=document.querySelector(".width").value;
    let height=document.querySelector(".height").value;
    let table= document.getElementById("tab");
   
        for(let i=0;i<row;i++){
           let tr= document.createElement("tr")
           
            for(let col=0;col < column;col++){
                
                let td=document.createElement("td")
                td.addEventListener("mouseover",function(){
                this.style.backgroundColor=rgbFunc()
                })
                table.style.width=`${width}px`
                table.style.height=`${height}px`
                tr.appendChild(td)
            }
            table.appendChild(tr)

        }
    }
   
    })
    


        



    
    
        


