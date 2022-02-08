alert("Benvenuto!")

//Calcolare i secondi, minuti, ore


//Dichiarare i secondi in un'ora
let secondiInUnMinuto = 60;
console.log(secondiInUnMinuto);


//Dichiarare i minuti in un'ora
let minutiInUnOra = 60;
console.log(minutiInUnOra);


//Calcolare quanti secondi ci sono in un'ora
let secondiInUnOra = secondiInUnMinuto * minutiInUnOra;
console.log(secondiInUnOra);


//Dichiarare quante ore ci sono in un giorno
let oreInUnGiorno = 24;
console.log(oreInUnGiorno);


//Calcolare quanti secondi ci sono in un giorno
let secondiInUnGiorno = secondiInUnOra * oreInUnGiorno;
console.log(secondiInUnGiorno);


//Dichiarare quanti giorni ci sono in un anno
let giorniInUnAnno = 365;
console.log(giorniInUnAnno);


//Calcolare quanti secondi ci sono in un anno
let secondiInUnAnno = giorniInUnAnno * secondiInUnGiorno;
console.log(secondiInUnAnno);


//Comunicare all'user quanti secondi ci sono in un anno
let secondsInAYear = document.querySelector('.s_year');
secondsInAYear.innerHTML = `In un anno ci sono ${secondiInUnAnno} secondi.`