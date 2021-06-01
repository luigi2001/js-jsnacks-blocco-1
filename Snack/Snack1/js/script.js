var parolaA = prompt('inserisci una parola:');

var parolaB = prompt('inserisci una seconda parola:');

var lunghezzaA = parolaA.length;

var lunghezzaB = parolaB.length;

if(lunghezzaA < lunghezzaB){
    /*console.log(parolaA);
    console.log(parolaB);*/
    document.getElementById('parole').innerHTML = parolaA + ',' + parolaB;
} else if(lunghezzaA == lunghezzaB){
    /*console.log('sono uguali:', parolaA, parolaB);*/
    document.getElementById('parole').innerHTML = 'sono uguali:' + parolaA + ',' + parolaB;
} else{
    /*console.log(parolaB);
    console.log(parolaA);*/
    document.getElementById('parole').innerHTML = parolaB + ',' + parolaA;
}