//Calcolare quanti secondi sono passati dalla mia nascita


//Dichiaro l'anno corrente
let thatDate = 2022;
console.log(thatDate);


//Dichiaro l'anno di nascita
let birthYear = 1998;
console.log(birthYear);


//Dichiaro l'età
let myAge = (thatDate - birthYear);
console.log(myAge);


//Calcolo quanti secondi sono passati dalla mia nascita
let secondsSinceBorn = (secondiInUnAnno * myAge);
console.log(secondsSinceBorn);


//Comunicare all'user quanti secondi sono passati dalla nascita di Alberto F.
let sayBorn = document.querySelector('.s_born');
sayBorn.innerHTML=`Dalla nascita di Alberto F. sono passati ${secondsSinceBorn} secondi.`;