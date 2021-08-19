// Օգտագործելով local storage-ի ֆունկցիաները,
// ստեղծել,փոփոխել,ստանալ,ջնջել և մաքրել նրա
//  պարունակությունը։

// let myStorage=window.localStorage
// myStorage.setItem("name","Vardan")
// myStorage.setItem("name2","Karen")
// myStorage.setItem("surname",['Qocharyan','Avagyan'])
// let get=myStorage.getItem("name")
// console.log(get)


// let remove=myStorage.removeItem("name2")
// console.log(remove)

// myStorage.clear()



// Ստեղծել ֆունցկիա,որը կստանա մեկ արգումենտ։Գրել ծրագիր,որը կտպի այն տարրերի գումարը,
// որոնց արժեքի և ինդեքսի գումարը առանց մնացորդի բաժանվում է տրված k թվին։Export անել տվյալ 
// ֆունցկիան։Ստեղծել նոր ֆայլ և նրա մեջ import անել արդեն ստեղծված ֆունցկիան և նրան փոխանցել զանգված։




export function f(e){
    let k=2
    let res=0
    for(let i=0;i<e.length;i++){
        if((e[i]+i)%k===0){
        res+=e[i]
        }
    }
    return  res
}
