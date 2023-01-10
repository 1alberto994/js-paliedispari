const word = prompt("Inserisci una parola");
const wordInv = wordRev(word);
if (word === wordInv) {
  alert("La parola è palindroma");
}
else {
  alert("La parola non è palindroma");
}

function wordRev(wordReverse) {
  const wordReve = wordReverse.split("").reverse().join("");
  return wordReve;
}