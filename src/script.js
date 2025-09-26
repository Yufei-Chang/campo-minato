// pijio degli elementi da html
const griglia = document.getElementById("griglia");
const punteggio = document.getElementById("contapunteggio");
const bottone = document.getElementById("restart-btn");

// inizializzo le variabili necessari
let punti;
const punteggiomassimo = 33;
let giocoFinito;
let bombe;

// funzione generale per far partire o resettare la partita
function init() {
    // stato iniziale della partita
    griglia.innerHTML = "";

    // inizializzo i dati della partita
    punti = 0;
    giocoFinito = false;
    bombe = [];
    punteggio.innerText = 0;

    // inizio generando 16 bombe
    while (bombe.length < 16) {
        //imposto range di numero pari al numero di caselle
        const numeroRandom = generaNumeroRandom(1, 49);

        // se il numero non è già presente, lo aggiungo all'array
        if (!bombe.includes(numeroRandom)) {
            bombe.push(numeroRandom);
        }
    };
    // controllo se ho fabbricato bene le bombe
    console.log(bombe);

    // ciclo for per leggere ogni singola cella, per poterci operare dentro
    for (let i = 0; i < 49; i++) {
        // creo cella
        const cella = document.createElement("div");
        // aggiungo la classe css
        cella.classList.add("cella");
        // aggiungo un identificativo stringa a ogni cella
        cella.innerText = i + 1;
        // aggiungo la nuova cella dentro la griglia, appendChild aggancia il figlio all'elemento genitore
        griglia.appendChild(cella);


        // scateniamo l'evento su una cella quando la si clicca
        cella.addEventListener("click", function () {
            // controllo la condizione della variabile e blocco il codice
            if (giocoFinito || this.classList.contains("cliccata")) {
                return;
            }
            // trasformo l'identificativo in numero
            const numeroCella = parseInt(this.innerText)

            // condizione di sconfitta o vittoria
            if (bombe.includes(numeroCella)) {
                this.style.backgroundColor = "red";
                alert("Allah u al bar, you lost!")
                //cambio condizione della variabile e blocco tutto
                giocoFinito = true;
            } else {
                this.style.backgroundColor = "lightblue";
                this.classList.add("cliccata");
                //incremento il punteggio e aggiorno in pagina
                punti++;
                punteggio.innerText = punti;
            }
            // blocco il codice al punteggio massimo
            if (punti === punteggiomassimo) {
                alert("Congratulazioni, partita perfetta!")
                giocoFinito = true;
            }
        })
    };
}

// mi serve una funzione che genera numeri interi random
function generaNumeroRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

// aggiungo l'evento al bottone per poterlo scatenare come un uragano (non abusare)
bottone.addEventListener('click', init);
// richiamo la funzione per far partire il gioco la prima volta che viene caricata
init();