///////.....regExp....///////
///kanonavor artahaytutyunner////

// let s='color 123 Sou 12'
// let reg=/c/g;
// let reg=/\w/g;
///------w-[a-zA-Z0-9]
// console.log(s.match(reg))   //////match metod@ misht veradarcnum e zangvac

//  let s='color$ 123 Sou 12'
// let reg=/\W/g;
// console.log(s.match(reg)) ////veradarcnum e ayc inch chuni poqratar w


// let s='color$ 123 Sou 12'
// let reg=/\d/g;
// console.log(s.match(reg)) ////tver@ miayn///

// let s='color$ 123 Sou 12'
// let reg=/\D/g;
// console.log(s.match(reg)) ///hakarak@ baci tveric///


// let s='color$ 123 Sou 12'
// let reg=/\s/g;
// console.log(s.match(reg))   ///miayn probelner@


// let s='color$ 123 Sou 12'
// let reg=/\S/g;
// console.log(s.match(reg))  ///amen inch baci probelneric

// let s='color$ 123 Sou 12'
// let reg=/\w+/g;
// console.log(s.match(reg))  ///max kpcnum e irar barer@


// let s='color$ 123 Sou 12'
// let reg=/\w*/g;
// console.log(s.match(reg))  



// let s='color$ 123 Sou 12'
// let reg=/./g;
// console.log(s.match(reg)) ///veradarcnum e amen inch


// let s='color$ 123 Sou 12'
// let reg=/.*/g;
// console.log(s.match(reg))   ///max kpcrec irar

// let s='color$ 123 Sou 12'
// let reg=/[a-hA-S0-2]/g;
// console.log(s.match(reg))


// let s='color$ 123 Sou 12'
// let reg=/[clo]/g;
// console.log(s.match(reg))  ///ichqan senc tar unenq kveradarcni



// let s='color$ 123 Sou 12'
// let reg=/^c.*2$/g;
// console.log(s.match(reg))   ////^sksel,$avartel//////


// let s='color$ 123 Sou 12'
// let reg=/\d{2,3}/g;         ////2 min 3 max
// console.log(s.match(reg))


// let s='color$ 123 Sou 12'
// let reg=/\d{4,}/g;         ////chunenq tenc tiv
// console.log(s.match(reg))




// let s='color$ 123 Sou 12'
// let reg=/\d{2}/g;         //// arajin  2 nisher@ vercnum e 
// console.log(s.match(reg))



// let s='color$ 123 Sou 12'
// let reg=/s/g;                  ////poqratar chunenq null
// console.log(s.match(reg))



// let s='color$ 123 Sou 12'
// let reg=/s/gi;                  ////gi mecatar poqratar veradarcnum e
// console.log(s.match(reg))


// let s='color$ 123 Sou 12'
// let reg=s.replace(/c/,'h');                  ////c tar h//replase-poxarinel
// console.log(reg)




// let s='color$ 123 Sou 12'
// let reg=/r/g;                  ////true false
// console.log(reg.test(reg))



////1.Ունենք հետևյալ string-ը՝ var a='ahb acb aeb aeeb adcb axeb'։Գրել ծրագիր,որը նախադասության մեջ եղած բոլոր a-երը կփոխարինի ! նշանով։Օգտագործել regEx(p):


// var a='ahb acb aeb aeeb adcb axeb'
// let reg=a.replace(/a/g,'!')
// console.log(reg)



//2.Ունենք հետևյալ string-ը՝ var a= 'aa aba abba abbba abbbba abbbbba'։Գրել ծրագիր,որը նախադասության մեջ կգտնի այն բառերը,որտեղ b-ի նվազագույն թիվը 3 է։Օգտագործել regEx(p):



// var a= 'aa aba abba abbba abbbba abbbbba'
// let reg=/b{3,}/g;
// console.log(a.match(reg))



///3.Ունենք հետևյալ string-ը՝ var s='aaa aba aca ada afa aza aga ':Գրել կանոնավոր արտահայտություն,որը կգտնի այն բառերը,
// որոնք սկսվում և վերջանում են a-ով,իսկ նրանց միջև եղած տառերը a-f միջակայքում են։


// var s="aaa aba aca ada afa aza aga"
// let reg=/a[a-f]a/g;
// console.log(s.match(reg))


//4. Ունենք հետևյալ string-ը՝ var s='a1b2c3':Գրել կանոնավոր արտահայտություն,որը կվերցնի միայն թվերը։



// var s='a1b2c3'
// var reg=/\d/g;
// console.log(s.match(reg))


// Ունենք հետևյալ string-ը՝ ։Կանոնավոր արտահայտության և ցիկլի միջոցով գրել ծրագիր,որը կվերցնի միայն թվերը և կվերադարձնի բոլոր թվերի գումարը։



// var str="46 vf 45 ty"
// var reg=/\d/g;
// var h=str.match(reg)
// var c=0
// for(let i=0;i<h.length;i++){
//    c+=parseInt(h[i]) 
// }
// console.log(c)




//.........OOP............//


// function Worker(name,surname,age){
//     this.name=name,
//     this.surname=surname,
//     this.age=age
// }
// const person1=new Worker("Anna","Sahakyan",45)
// console.log(person1)

// const person2=new Worker("Aram","Hakobyanyan",21)
// console.log(person2)


// function Worker(name,surname,age){
//         this.name=name,
//         this.surname=surname,
//         this.age=age,
//         this.getFullName=()=>{
//             alert(this.name+" "+this.age)
//         }
//     }
//     const person1=new Worker("Anna","Sahakyan",45)
//     console.log(person1.getFullName())
    
//     const person2=new Worker("Aram","Hakobyanyan",21)
//     console.log(person2.getFullName())


// class Human{
//     constructor(name,surname,admin){
//         this.name=name,
//         this.surname=surname,
//         this.admin=admin
//     }
// }
// const one=new Human('Hrant','Abrahamyan',true)
// console.log(one)




// Օգտագործելով OOP ստեղծել ֆունկցիա,որը որպես արգումենտ կստանա անուն,ազգանուն,աշխատավարձ և աշխատած օրերի քանակ։
// Օգտագործել տվյալ օբյեկտը և ստեղծել 2 աշխատակից։Հաշվել նրանց աշխատավարձերի ընդհանուր գումարը։
 


// function f(name,surname,ashxatavarz,oreriqanak){
//     this.name=name,
//     this.surname=surname,
//     this.ashxatavarz=ashxatavarz,
//     this.oreriqanak=oreriqanak

// }
// const person1=new f("Sahak","Babayan",400,7)
// const person2=new f("Armen","Poxosyan",500,6)

// const persone3=person1.ashxatavarz+person2.ashxatavarz
// console.log(persone3)



// Օգտագործելով OOP ստեղծել MyString ֆունկցիա։Ֆունկցիան պետք է ունենա հետևյալ մեթոդները՝ getReverse,
// որը պետք է վերադարձնի տեքստը շրջած տարբերակով և ucFirst,որը պետք է տեքստի առաջին տառը վերափոխի մեծատառի։


// function Mystring(a){
// this.hello=()=>{
// return a.split('').reverse().join('')
// }
// this.f=()=>{
// return a[0].toUpperCase()+a.slice(1)
// }
// }
// let x=new Mystring("world")
// console.log(x.hello())
// console.log(x.f())
