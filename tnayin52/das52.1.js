//----------------try-catch------------//

// try{
//     alert("start of runs")
//     alert("end of runs")
// }catch(err){
//     alert("catch is ignored")
// }


// try{
//     alert('start of runs')
//     jhhjh;
//     alert("end of runs")
// }catch(error){
//     alert("error")
// }


// try{
//     setTimeout(function(){
//         noSucgjjff();
//     },1000)
// }catch(err){
//     alert("won't work")
// }


// setTimeout(function(){
//     try{
//         noSucgjjff();
//     }
//     catch{
//         alert("Error is caught")
//     }
// })


//error unen 3 mas-anun,haxordagrutyun,erkusn irar het kochvum e stack-amboxj informatia


// try{
//     llala
// }catch(err){
//     alert(err.name)
//     alert(err.message)
//     alert(err.stack)
// }


// let json='{"age":30}';
// try{
//     let user=JSON.parse(json)
//     alert(user.name)
// }catch(err){
//     alert("doesn't execute")
// }

// let error=new Error("thing happen")
// alert(error.name)
// alert(error.message) 


// let json='{"age":30}';
// try{
//     let user=JSON.parse(json)
//     if(!user.name){
//         throw new Error("Incomplate data")
//     }
//     alert(user.name)
// }catch(err){
//     alert("Json error "+err.message)
// }


// try{
//    user={h:o}
// }catch(err){
//     if(err instanceof ReferenceError)
//     alert("Reference")
// }

// function readDate(){
//     let json='{"age":30}'
//     try{
//         hfdjr
//     }catch(err){
//         if(!(err instanceof SyntaxError)){
//             throw err;
//         }
//     }
// }
// try{
//     readDate()
// }catch(err){
//     alert("Extrenal catch "+err)
// }



// try{
//     alert("try")
//     if(confirm("make an error?")) BAD_CODE()
// }catch(err){
//     alert("catch")
// }finally{
//     alert("finally")
// }



// Ստեղծել փոփոխական և նրան վերագրել prompt պատուհան ,
// որն իր մեջ կպարունակի "Type hello" արտահայտությունը։try-ում տուգել,
// եթե օգտվողը չի մուտքագրել "hello" բառը,ապա ստեղծել error,
// որը կտպի "Oops, you didn't type hello" հաղորդագրությունը։Catch-ում ստանալ այն և alert պատուհանով 
// տպել հաղորդագրությունը։Finally-ում տպել 'thanks for playing!'  արտահայտությունը alert  




// try{
//     let a=prompt("Type hello")
//     if(a !=="hello"){
//         alert("Oops, you didn't type hello")
//     }

//     }catch(err){
//         alert("error")
// }finally{
//     alert('thanks for playing!')
// }





//Ստեղծել հետևյալ զանգվածը՝ let arr = [1, 4, true, 8,"hello"]։ 
//try-ում տուգել,եթե զանգվածի անդամը boolean է ստեղծել error՝ 
//"Oops,this itam is boolean" հաղորդագրությամբ, եթե string է ստեղծել error՝ 
//"Oops,this itam is string" հաղորդագրությամբ։ Error-ները պահել զանգվածում։Օգտագործելով  catch-ը տպել error-ները։
// let arr = prompt[1, 4, true, 8,"hello"];

// let arr1=[]
// let arr = [1, 4, true, 8,"hello",];
// try{
//         for(let i=0;i<=arr.length;i++){
        
//         if(typeof arr[i]==="boolean"||typeof arr[i] === "string"){
//            arr1.push(`Oops, ${arr[i]} is ${typeof arr[i]}`)
            
//         }  
//      }
//      if(arr1.length) {
//          throw new Error(arr1 )
//      }
    
//     }
//     catch(err){
//         alert(err)
//         console.log(err)
//     }



// Ստեղծել փոփոխական և նրան վերագրել prompt պատուհան ,
// որն իր մեջ կպարունակի " Մուտքագրեք Ձեր տարիքը " արտահայտությունը:
// Եթե տարիքը փոքր է 18-ից ստեղծել error՝ "Թույլատրելի մուտքը 18-ից բարձր" 
// հաղորդագրությամբ,հակառակ դեպքում տպել "Ձեր մուտքը հաստատվել է" 
// հաղորդագրությունը։ Օգտագործելով  catch-ը տպել error-ը։

let a=prompt("Մուտքագրեք Ձեր տարիքը ");
try{
    
    if(a <= 18){
        throw new Error("Թույլատրելի մուտքը 18-ից բարձր")
       
        console.log(age)
    }else{
        throw new Error("Ձեր մուտքը հաստատվել է") 
    }
}
    catch(err){
     alert(err)
    }
    
    
