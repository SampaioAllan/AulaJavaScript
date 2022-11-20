//////////////////////////////////////
//Parte 1
var array = [ 12, 6, 9, 42, 11, 102, 44, 15 ];

//Parte 1.1
var somaA = 0;
for (var i = 0; i < array.length; i++) {
    somaA += array[i];    
}
console.log("somaA = " + somaA);

//Parte 1.2
var cont = 0;
var somaB = 0;
while (cont < array.length) {
    somaB += array[cont];
    cont++;
}
console.log("somaB = " + somaB);

//Parte 1.3
var c = 0;
var somaC = 0;
do {
    somaC += array[c];
    c++;
} while (c < array.length);
console.log("somaC = " + somaC);


////////////////////////////////////////////////////
//Parte 2.1
var numero = 114

do {
    console.log(numero)
    var primo = true
    for (let index = numero-1; primo && index > 1; index --) {
        numero%index === 0 ? (primo = false, numero++) : true
    }  
}while (!primo) 

//////////////////////////////////////////////////
//parte 2.1
for (let index = 0; index < 70; index++) {
    index < 40 || index > 50 ? console.log(index) : null    
}
