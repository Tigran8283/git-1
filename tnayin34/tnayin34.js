/* 1. Ստեղծել a և b փոփոխականներ և նրանց վերագրել արժեքներ։ Օգտագործելով
for ցիկլ տպել այդ միջակայքի բոլոր զույգ թվերի գումարը 
և միջին թվաբանականը(բոլոր թվերի գումարը բաժանած նրանց քանակի վրա։): */

/* var sum = 0;
var sum1 = 0;
var a = 8;
var b = 16;

for (var i = 0; i <= a; i++) {
    if (i % 2 === 0)
        sum += i
}

for (var j = 0; j <= b; j++) {
    if (j % 2 === 0)
        sum1 += j

}
console.log(sum);
console.log(sum1);

var sum2 = 0;
var count = 0
for (var i = a; i <= b; i++) {
    sum2 = sum2 + i;
    count = count + 1;
}
var avg = sum2 / count;
console.log(avg); */



/*2. Ստեղծել ծրագիր, որը կհաշվի ցանկացած թվի ֆակտորիալը։ */

/* var a = 6;

var faktorial = 1
for (i = 1; i <= a; i++) {
    faktorial = faktorial * i;

}
console.log(faktorial); */

/* 3. Գտնել 0 - ից 100 միջակայքի բոլոր 3 - ի բաժանվող թվերը և էկրանին տպել 5 - ական։ */

/* var hngyak = "";
var count = 0;
var a = 100;
for (i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
        count = count + 1;

        if (count <= 5) {
            hngyak = hngyak + i + " ";
            if (count == 5) {
                console.log(hngyak)
                count = 0;
                hngyak = "";


            }

        }


    }
} */

/* 4. Գտնել 0 - ից 100 միջակայքի բոլոր կենտ թվերի արտադրյալը։ */

var sum = 1;
var c = 100;
for (i = 0; i <= c; i++) {
    if (i % 2 === 1) {

        sum = sum * i;
    }
}
console.log(sum)

/* 5. Գրել ծրագիր, որը կստուգի 0 - ից 15 միջակայքի յուրաքանչյուր թիվը և console պատուհանում 
        կտպի տվյալ թիվը կենտ է թե զույգ։ */
var a = 15;
for (i = 1; i <= 15; i++) {
    if (i % 2 == 0) {
        console.log(i + " zuyg");
    } else {
        console.log(i + " kent ");
    }

}