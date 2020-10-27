//PARI E DISPARI

var invia = document.getElementById("invia");
invia.addEventListener("click",
	function() {
      // richiesta pari o dispari
      var pOd = document.getElementById("input").value;
      var pOdStatus = true;
      //controllo pOd
      if (pOd === "pari" || pOd === "Pari" || pOd === "dispari" || pOd === "Dispari") {
         pOdStatus = true;
         document.getElementById("pOdUser").innerHTML = "La tua fazione: " + pOd;
      } else {
         pOdStatus = false;
         alert("Non ho mai sentito il nome di questa fazione :( , scegli tra Pari o Dispari, grazie !");
         location.reload();
         }

      // richiesta numero user
      var numUser = document.getElementById("input2").value;
      // controllo numUser compreso tra 1 e 5
      if (numUser < 1 || numUser > 5 || isNaN(numUser) == true) {
         alert("Inserisci un numero compreso tra 1 e 5, grazie");
         location.reload();
      } else {
         setTimeout(function () {
            document.getElementById("myNum").innerHTML = "Il tuo numero: " + numUser;
         }, 1000);

      }

      // calcolo valore status fazione pc
      var pOdPc;
      if (pOd === "pari" || pOd === "Pari") {
         pOdPc = "Dispari";
      } else if (pOd === "dispari" || pOd === "Dispari"){
         pOdPc = "Pari";
      }

      setTimeout(function () {
         document.getElementById("pOdPc").innerHTML = "Fazione PC: " + pOdPc;
      }, 2000);


      // numero pc
      var numPc = parseInt(randomNum(5));
      setTimeout(function () {
         document.getElementById("pcNum").innerHTML = ("Numero PC: " + numPc);
      }, 3000);


      // somma numero user e numero pc
      var somma = parseInt(numUser) + parseInt(numPc);
      setTimeout(function () {
         document.getElementById("somma").innerHTML = "La somma è... ";
      }, 5000);

      setTimeout(function () {
         document.getElementById("somma").innerHTML = somma;
      }, 6500);

      setTimeout(function () {
         // controllo se somma pari o dispari
         document.getElementById("risultato").innerHTML = pOdValidator(somma);
      }, 7500);
   }
);


// transformazione stringa reverse
function randomNum(max) {
   if (max) { //se max è stato inserito, allora ritornami il valore random
   return Math.floor(Math.random() * max) + 1;
   } else { //se non è stato inserito, allora stampa questo messaggio
      return "non hai inserito il valore dell'argomento";
   }
}

// pari o dispari validator
function pOdValidator(num) {
   if (num % 2 === 0) {
      return " è un numero pari, quindi hanno vinto i pari!";
   } else {
      return " è un numero dispari, quindi hanno vinto i dispari!";
   }
 }
