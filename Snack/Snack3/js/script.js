
var numeri = [];
/*console.log(numeri);*/

for(var i = 0; i < 6; i++){
    var numero = parseInt(prompt('inserisci un numero:'));
    console.log(numero);
    if(numero % 2 != 0){
    numeri.push(numero);
    }
}

/*console.log(numeri);*/
document.getElementById('array').innerHTML = numeri;