function addizione(a, b){
    let result = a + b;
    return result;
}

// ... (sottrazione, moltiplicazione, divisione rimangono uguali) ...
function sottrazione(a, b){
    let result = a - b;
    return result;
}

function moltiplicazione(a, b){
    let result = a * b;
    return result;
}

function divisione(a, b){
    // Opzione 1: Miglioriamo la gestione della divisione per zero
    if (b === 0) {
        return "Errore: Divisione per zero non permessa.";
    }
    let result = a / b;
    return result;
}


let a , b, risultato;

// Opzione 2: Uniamo le richieste di input con un testo guida più chiaro nel prompt
a = parseInt(prompt("Inserisci il PRIMO valore numerico su cui operare:"));
b = parseInt(prompt("Inserisci il SECONDO valore numerico su cui operare:"));

// Rendiamo il menu di scelta più compatto e descrittivo nel prompt
let menu = "Scegli l'operazione:\n";
menu += "1: Addizione (+)\n";
menu += "2: Sottrazione (-)\n";
menu += "3: Moltiplicazione (*)\n";
menu += "4: Divisione (/)";

let scelta = parseInt(prompt(menu));

switch (scelta){
  case 1:
    risultato = addizione(a,b);
    break;
  case 2:
    risultato = sottrazione(a,b);
    break;
  case 3:
    risultato = moltiplicazione(a,b);
    break;
  case 4:
    risultato = divisione(a,b);
    break;
  default:
    // Gestione di una scelta non valida da parte dell'utente
    risultato = "L'opzione selezionata non è valida. Riprova.";
}

// Opzione 2 (cont.): Mostriamo il risultato finale con un alert() invece che solo nella console
alert("Il risultato dell'operazione scelta è: " + risultato);


// Se vuoi ancora vederlo nella console, lascialo:
console.log("Il risultato dell'operazione scelta è "+ risultato)
