/////OOP-object orientid programing///////////

// const person1={
//     name:"Sahak",
//     lastname:"Sahakyan",
//     age:55,
//     friends:[],
//     getFullName(){
//         return this.name+" "+this.lastname
//     }
// }

// const person2={
//     name:"Vahan",
//     lastname:"araqelyan",
//     age:23,
//     friends:[],
//     getFullName(){
//         return this.name+" "+this.lastname
//     }
// }



// function Person(name,lastName,age){
//     this.name=name,
//     this.lastName=lastName,
//     this.age=age,
//     this.friends=[],
//     this.getFullName=()=>{
//         return this.name+" "+this.lastName+" "+this.age+" year"
//     }
//     }
    
//     const person1=new Person("Jon","Japers",25)
//     const person2=new Person("Armine","Gevorgyan",87)
//     const person3=new Person("Edgar","Urutyan",39)
//     console.log(person1.getFullName())
//     console.log(person2.getFullName())
//     console.log(person3.getFullName())
//     console.log(person2)
    
    
    
    // function Person(anun,azganun,tariq,friends){
    //     this.anun=anun,
    //     this.azganun=azganun,
    //     this.tariq=tariq,
    //     this.friends=[]
    
    //     this.getFullName=()=>{
    //         return this.anun+" "+this.azganun+" "+this.tariq+" tarekan"
    //     }
    // }
    // let person1=new Person("Tigran","Kocharyan",38,9)
    // let person2=new Person("Mesrop","Manukyan",38)
    // let person3=new Person("Vardan","Hovhannisyan",39)
    // let person4=new Person("Eduard","Araqelyan",38)
    // console.log(person1.getFullName())
    // console.log(person2.getFullName())
    // console.log(person3.getFullName())
    // console.log(person4.getFullName())
    // console.log(person4)
    
    
    ///////ete person mtnum e person1 i mej tpum e true ete voch false
    // let n=person1 instanceof Person;
    // alert(n)

/////////class////////////////


//     class Human{
// constructor(name,lname,age){
//     this.name=name;
//     this.lname=lname;
//     this.age=age
// }
// hb(){
//     return ++this.age 
// }
//     }
//     let obj=new Human("Alla","Vardanyan",38)
//     console.log(obj)
//     console.log(obj.hb())



class Animal{
    constructor(name){
        this.name=name
    }
    toString(){
        return this.name+" "+"aryuc"
    }
}
let obj=new Animal("lion")
console.log(obj.toString())
console.log(obj)

// extends-jarangel  super-(name)-konkret voric jarangel
class Dog extends Animal{
    constructor(name,age){
        super(name);
        this.age=age
    }
    toString(){
        return "dog name "+super.toString()
    }
}
const dog1=new Dog("Rex",9)
console.log(dog1)
alert(dog1.toString())

//////proto////////
// const a={
//     name:"Arevik"

// }
// const b={
// lastname:"Babayan"
// }

// a.__proto__=b
// alert(a.name)

// const c={
//     age:19,
//     showAge(){
//         alert(this.age)
//     }
// }
// b.__proto__=c
// alert(b.lastname)
// a.showAge()

// //////Object.Keys obekti banali/////////
// alert(Object.keys(a))


///////////Object.create -nor grelazev jarangel///////////
// const b={
//     lastname:"Haroyan"
// }
// const a=Object.create(b)
// a.lastname="Margaryan"
// console.log(a)

// const num={
//     age:20
// }
// const num1=Object.create(num)
// num1.age=3;
// console.log(num1)




// const b={
//     lastName:"Petrosyan"
// }
// function A(){
//     this.name="Ashot"
// }
// A.prototype=b;
// const a=new A()
// console.log(a)
// console.log(a.lastName)


// const j={
//     azagnun:"Kocharyan"
// }
// function  A() {
//     this.anun="Tigran"
//     this.age=38
// }
// A.prototype=j;
// const a=new A()
// console.log(a)
// console.log(a.azagnun)
// console.log(a.age)



////Oopn uni metodner --------------polymorfizm----- function vor@ anum e mekic avel gorcoxutyun///

// function sayHi(){
//     alert("hi")
// }

// function sayHiName(name){
//     alert("hello "+name)
// }
// function sayHiFullName(name,lastname){
//     alert("Greetings"+name+" "+lastname)
// }

// sayHiFullName("Vardan","Martirosyan")
// sayHiName("Alla")
// sayHi()

// function hi(...args){
//     if(args.length===0){
//     alert("hi")
// }else if(args.length===1){
//     alert("hello "+args[0])
// }else if(args.length>=2){
//     alert("Greetings "+args[0]+" "+args[1]+""+args[2])
//     }
// }
// hi()
// hi("Anush")
// hi("Anahit","Mkrtchyan","19")


// const data=[
//     {name:"Joe",age:33},
//     {name:"Mike",age:22},
//     {name:"Suzan",age:20}
// ]


// function findByName(name){
//     return data.filter(obj=>obj.name===name)
// }
// function findByAge(age){
//     return data.filter(obj=>obj.age===age)
// }

// console.log(findByAge(22))


// function find(...args){
//     if(typeof(args[0])==="number"){
//         return data.filter(obj=>obj.age===args[0])
//     }else{
//         return data.filter(obj=>obj.name===args[0])
//     }
// }
// alert(JSON.stringify(find(20)))
// alert(JSON.stringify(find("Joe")))


// Հայտարարել փոխադրամիջոց անունով class։ Constructor-ի մեջ պահել անիվներ և մաքսիմալ արագություն արգումենտները։

// class-ը վերագրել որևէ  փոփոխականի  և փոխանցել 3 և 20 թվերը։Տպել արդյունքը։



// class Poxad{
//     constructor(aniv,maxarag){
//     this.aniv=aniv
//     this.maxarag=maxarag
// }
// }
// let obj=new Poxad(3,20)
// console.log(obj)


// Հայտարարել մեքենա անունով class։Ավելացնել կոնստրուկտոր, որը վերցնում է մակնիշը, մոդելը, տարին և գույնը:

// Ավելացնել setColor անունով մեթոդ,որը վերցնում է մեկ պարամետր՝գույն և վերափոխում է մեքենայի գույնը:class-ը 
// վերագրել որևէ  փոփոխականի  և փոխանցել համապատասխան արժեքները։ Տպել արդյունքը։ 
// Այնուհետև setColor մեթոդով փոխել մեքենայի գույնը և կրկին տպել արդյունքը։

 


// class Meqena{
//     constructor(maknish,model,tari,guyn){
//         this.maknish=maknish
//         this.model=model
//         this.tari=tari
//         this.guyn=guyn
//     }
//  setColor(guyn){
//  this.guyn=guyn
// }
// }
// let obj=new Meqena("Lexus","is",2011,"sev")

// obj.setColor("Metalic")
// console.log(obj)

    
// Ունենալ 2class:Առաջինի մեջ որպես constructor պահել 2 արգումենտ և ունենալ ֆունկցիա ,
// որը կհաշվի այդ արգումենտների գումարը։
// 2-րդ class-ը պետք է ունենա constructor 3 արգումենտով որից 2-ը պետք է ժառանգվի 
// առաջին class-ից և պետք է ունենա ֆունկցիա որ կհաշվի տվյալ 3 թվերի գումարը։ 

class Sum{
    constructor(x,y){
        this.x=x
        this.y=y

        
    }
     f(){
        return this.x+this.y
    }
}

class Sum1 extends Sum{

    constructor(x,y,c){

        super(x,y)
        this.c=c
    }
     z(){
         return super.f()+this.c

    }
}
let obj3=new Sum1(5,7,10)
console.log(obj3.z())


// Օգտագործելով class կոնստրուկտոր ստեղծել ժամացույց,որը  միշտ կաշխատի։


let div=document.getElementsByTagName("div")[0]

class Watch{
    constructor(hours,minute,second){
        this.hours=hours
        this.minute=minute
        this.second=second
    }
    w(){
        this.second++
        if(this.second===60){
            this.minute++
            this.second=0
        } if(this.minute===60){
this.hours++
this.minute=0
        }if(this.hours===24){
            this.hours=0
        }
        div.innerHTML=((this.hours<10)?`0${this.hours}`:this.hours)+":"+
        ((this.minute<10)?`0${this.minute}`:this.minute)+":"+
        ((this.second<10)?`0${this.second}`:this.second);
    }
   
}
let obj7=new Watch(14,41,5);
setInterval(function(){
    obj7.w()
},1000)