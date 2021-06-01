
var invitati = ['Alice', 'Michele', 'Sara', 'Federico', 'Piero'];

var nome = prompt('Come ti chiami?');

var i = 0;

var maiuscola = nome.charAt(0).toUpperCase()+ nome.slice(1);

var risposta = 'Mi dispiace purtroppo non sei stato invitato';

while(i < invitati.length){
    if(invitati[i] == maiuscola){
        console.log(risposta = 'Complimenti! Risulti tra gli invitati alla festa');
    } else{
        console.log('non invitato');
    }
    i++;
}

document.getElementById('nome').innerHTML = risposta;