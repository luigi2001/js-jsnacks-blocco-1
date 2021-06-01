
var somma = 0;

for(var i = 0; i < 5; i++){
    var numero = parseInt(prompt('inserisci un numero:'));
    /*console.log(numero);*/
    somma += numero;
}

/*console.log(somma);*/
document.getElementById('somma').innerHTML = somma;

/* numeri pari*/

for(var i = 0; i < 5; i++){
    var numero = parseInt(prompt('inserisci un numero:'));
    if(numero % 2 == 0){
        console.log(numero);
    }
}

/*var i = 0;

var somma = 0;

while(i < 5){
    var numero = parseInt(prompt('inserisci un numero:'));
    console.log(numero);
    somma += numero;
    i++;
}

console.log(somma);*/




