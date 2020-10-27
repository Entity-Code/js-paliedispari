//PALINDROMO

// chiedo all'utente di inserire una parola
var parola = prompt("Inserisci una parola");
validationPalindrome(parola);
console.log(parola);








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
      console.log("Questa parola è palindroma");
   } else {
      console.log("Questa parola non è palindroma");
   }
}
