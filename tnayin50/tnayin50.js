
// let div=document.getElementsByTagName("div")[0];

let bt=document.getElementsByTagName("button")[0];
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
                td.style.width=`${width}px`
                td.style.height=`${height}px`
                td.style.backgroundColor="random blue";
                tr.appendChild(td)
            }
            table.appendChild(tr)

        }
    }
    })
    


        



    
    
        


