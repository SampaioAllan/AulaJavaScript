//1
if(caminho === 5 && corro === 2)
{
   console.log('passo o dia bem');
} 

//2 
if(levanto === 'cedo' || levanto < 8)
{
    console.log('saio tranquilo');
} 

//3
if(!terminotrabalho || !tenhocompromisso)
{
    console.log('saio tarde');
} 

///////////////////////////////////////////////////
var numero = 10

switch (numero) {
    case 2:
        console.log(numero + " é primo")
        break;

    default:
        var primo = true
        for (let index = numero-1; primo === true && index > 1; index --) {
            primo = numero%index === 0 ? false : true
        }
        var resposta = primo ? (numero + " é primo") : (numero + " não é primo")
        console.log(resposta)
        break;
}

///////////////////////////////////////////////////
//Devo tranformar o código abaixo
//trocando "if-else" por ternário
var hora =1
var minutos = 0
if (hora >0){
    minutos = hora * 60
} else{
    minuto = 60
}
///////////////////
var hora = 1
var minutos = hora > 0 ? hora*60 : 60
console.log(minutos)