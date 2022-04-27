// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

//Generazzione array 5 num casuali
let fiveNum = [];
for (let i = 0; i < 5 ; i++) {
    const num = Math.floor((Math.random() * 100) + 1);
    fiveNum.push(num);
};

//Stampa dei 5 num nel HTML
document.getElementById("numberToRemember").innerHTML = fiveNum;

setTimeout(timerGame, 1000);

function timerGame() {
    //Nascondere i 5 num casuali
    let fiveNum = document.getElementById("numberToRemember").classList;
    fiveNum.add("hidden");
    
    //Array dei 5 num scelti dall' utente
    let userFiveNum = [];
    for (let i = 0; i < 5; i++) {
        const userNum = parseInt(prompt("Inserisci un numero"));
        userFiveNum.push(userNum);
    }
    //Confronto array num random con l' array num scelti dall' utente
    let userPoints = [];
    for (let i = 0; i < 5; i++) {
        if (fiveNum[i] === userFiveNum[i]) {
            userPoints.push;
        } 
    }

    //Stampa risultato
    fiveNum.remove("hidden");
    document.getElementById("userNumberChoice").innerHTML = userFiveNum;
    document.getElementById("score").innerHTML = `Hai azzeccato ${userPoints.length}`;
};
    

