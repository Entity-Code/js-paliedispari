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
         document.getElementById("risultato").innerHTML = validationPalindrome(parola);
      }
   }
);

// DICHIARAZIONE FUNZIONI

// transformazione stringa reverse
// transforma in stringa, la inverte, la ritrasforma in stringa
function reverseString(string) {
  return string.split("").reverse().join(""); //
}

//creo funzione per dire in output se la parola inserita è palindroma o no
function validationPalindrome(string) {

   if (string === reverseString(string)) {
      return "Questa parola è palindroma";
   } else if (string !== reverseString(string)){
      return "Questa parola non è palindroma";
   } else if (string == ""){
      return "Inserisci prima una parola, grazie";
   }
}
