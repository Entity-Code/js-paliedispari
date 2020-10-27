//PARI E DISPARI

// richiesta pari o dispari
var pOd = prompt("Pari o Dispari? quale fazione sceglierai? :)");
var pOdStatus = true;
//controllo pOd
if (pOd === "pari" || pOd === "Pari" || pOd === "dispari" || pOd === "Dispari") {
   pOdStatus = true;
} else {
   alert("Non ho mai sentito il nome di questa fazione :( , scegli tra Pari o Dispari, grazie !");
   location.reload();
   pOdStatus = false;
}


// richiesta numero user
var numUser = parseInt(prompt("Scegli un numero da 1 a 5"));
// controllo numUser compreso tra 1 e 5
if (numUser < 1 || numUser > 5 || isNaN(numUser) == true) {
   alert("Inserisci un numero compreso tra 1 e 5, grazie");
   location.reload();
} else {
   console.log("Tu: " + numUser);
}

// numero pc
var numPc = parseInt(randomNum(5));
console.log("Pc: " + numPc);

// somma numero user e numero pc
var somma = numUser + numPc;
console.log("somma: " + somma);

console.log(pOdValidator(somma));




// transformazione stringa reverse
function randomNum(max) {
   if (max) { //se max è stato inserito, allora ritornami il valore random
   return Math.floor(Math.random() * max) + 1;
   } else { //se non è stato inserito, allora stampa questo messaggio
      return "non hai inserito il valore dell'argomento";
   }
}

function pOdValidator(num) {
   if (num % 2 === 0) {
      return "Ha vinto la fazione pari!";
   } else {
      return "Ha vinto la fazione dispari!";
   }
 }
