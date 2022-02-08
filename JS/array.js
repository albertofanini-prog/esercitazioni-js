//Metodo conosciuto fino ad ora: creare variabili separate

/*let dino1 = 'T-rex';
console.log(dino1);

let dino2 = 'Velociraptor';
console.log(dino2);

let dino3 = 'Stegosaurus';
console.log(dino3);

let dino4 = 'Triceratopos';
console.log(dino4);

let selectDinos = document.querySelector('.dinos');
selectDinos.innerHTML = `Sono stati selezionati: ${dino1}, ${dino3}`*/



//Metodo con arrays

let dinosaurs =  ['T-Rex','Velociraptor', 'Stegosaurus','Triceratopos'];
console.log(dinosaurs);

//let selectDinos = document.querySelector('.dinos');
//selectDinos.innerHTML = `Sono stati selezioni: ${dinosaurs[0]}, ${dinosaurs[3]}.`



//Modificare un array

dinosaurs[0] = 'Tyrannosaurus Rex';

let selectDinos = document.querySelector('.dinos');
selectDinos.innerHTML = `Sono stati selezioni: ${dinosaurs[0]}, ${dinosaurs[3]}.`;
