//Inserire più parole e renderle una password temporanea selezionando le seconde lettere


//Dichiarare le parole

let studio = 'studioConBoolean';
studio[1];
console.log(studio[1]);

let musica = 'ascoltoHipHop';
musica[1];
console.log(musica[1]);

let città = 'abitoAdArezzo';
città[1];
console.log(musica[1]);

let scarpe = 'hoLeNike';
scarpe[1];
console.log(scarpe[1]);

let soccorso = '118';
soccorso[1];
console.log(soccorso[1]);

let cap = '52100';
cap[1];
console.log(cap[1]);


//Comunicare all'user la password temporanea
let pass = document.querySelector('.passw');
pass.innerHTML=`${studio[1]}${musica[1]}${città[1]}${scarpe[1]}${soccorso[1]}${cap[1]}`.toUpperCase()

