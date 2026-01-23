
// node-media.js
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Piccola funzione stdin per chiedere input da terminale (restituisce un Number)
const stdin = (question) =>
  new Promise((resolve) => rl.question(question, (ans) => resolve(Number(ans))));

(async () => {
  let numerocasse;
  let c = 0;
  const PESOMAX = 1500;
  let pesocassa;
  let pesotot = 0;

    numerocasse = await stdin("numero casse? ");
  do {
    pesocassa = await stdin("cassa " + (c + 1) + "? ");
    pesotot += pesocassa;
    c++;
  } while (c < numerocasse);

  

  console.log("il peso delle casse è "+ pesotot);
  if(pesotot <= PESOMAX)
  {
    console.log("il camion può trasportare le casse");
  }
  else
  {
    console.log("il camion non può trasportare le casse");
  }
  rl.close();
})();
