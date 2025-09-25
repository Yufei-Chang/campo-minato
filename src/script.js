// pijio la griglia da html
const griglia = document.getElementById("griglia")

// faccio un for per scorrere sulla lunghezza desiderata
for (let i = 0; i < 49; i++) {
    // creo cella
    const cella = document.createElement("div");
    // aggiungo la classe css
    cella.classList.add("cella");
    // aggiungo la nuova cella dentro la griglia, appendChild aggancia il figlio all'elemento genitore
    griglia.appendChild(cella);
}

// creo array vuoto per inserire le bombe
const bombe = [];

// mi serve una funzione che genera numeri interi random
function generaNumeroRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

// genera finché non ottengo 16 bombe allah u al bar
while (bombe.length < 16) {
    //imposto range di numero pari al numero di caselle
    const numeroRandom = generaNumeroRandom(1, 49);

    // se il numero non è già presente, lo aggiungo all'array
    if(!bombe.includes(numeroRandom)){
        bombe.push(numeroRandom);
    }
};