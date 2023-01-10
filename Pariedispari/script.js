const numeroUtente=parseInt(prompt("Scegli un numero da 1 a 5"));
console.log("il numero utente è:", numeroUtente);
if(numeroUtente>5){
    alert("ERRORE,riprovare");
}
else if(numeroUtente %2==0){
    alert("Hai scelto pari");
}
else{
    alert("Hai scelto dispari");
}
function generaNumeroRandom(min,max){
    const numeroCpu=Math.floor(Math.random() *max-min+1)+1;
    return numeroCpu;
}
const numero=generaNumeroRandom(1,5);
console.log("il numero cpu è:", numero);
function sommaNumeri(num1,num2){
    const risultato=num1+num2;
    return risultato;
}
const somma=sommaNumeri(numeroUtente,numero);
console.log("la somma finale è :", somma);
if(numeroUtente %2==0 &&  somma %2==0){
   alert("utente hai vinto");
}
else if(numero%2!=0 && somma %2!=0){
    alert("utente hai perso");
}
else if(numeroUtente%2!=0 && somma %2!=0){
    alert("utente hai vinto");
}
else if(numero%2==0 && somma %2==0){
    alert("utente hai perso");
}