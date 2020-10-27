//PALINDROMO

var invia = document.getElementById("invia");
invia.addEventListener("click",
	function() {
      // chiedo all'utente di inserire una parola
      var parola = document.getElementById("input").value;

      // controllo inserimento parola
      if (parola == "") {
         document.getElementById("risultato").innerHTML = "Inserisci prima una parola, grazie";
      } else {
         validationPalindrome(parola);
      }
   }
);





// DICHIARAZIONE FUNZIONI

// transformazione stringa reverse
function reverseString(name) {
  if (name === "") {
     return "";
   }
  else {
     return reverseString(name.substr(1)) + name.charAt(0);
   }
}

//creo funzione per dire in output se la parola inserita è palindroma o no
function validationPalindrome(string) {

   if (string === reverseString(string)) {
      return document.getElementById("risultato").innerHTML = "Questa parola è palindroma";
   } else if (string !== reverseString(string)){
      return document.getElementById("risultato").innerHTML = "Questa parola non è palindroma";
   } else if (string == ""){
      return document.getElementById("risultato").innerHTML = "Inserisci prima una parola, grazie";
   }
}
