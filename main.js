// Distanza
let distanza = parseInt(prompt('Inserisci i chilometri da percorrere'));
console.log(distanza)

// Eta
let eta = parseInt(prompt('Digita eta del passeggiero'));
console.log(eta)

// Costo base del biglietto 
let costo_biglietto = distanza * 0.21
console.log(costo_biglietto)

// Sconto minorenni
let sconto_minorenni = costo_biglietto - ((costo_biglietto * 20) / 100)
console.log(sconto_minorenni)

// Sconto senior
let sconto_senior = costo_biglietto - ((costo_biglietto * 40) / 100)
console.log(sconto_senior)

// Calcolo costo corsa
if (eta < 18) {
    document.getElementById('costo_corsa').innerHTML= 'Il prezzo del suo biglietto è: ' + sconto_minorenni.toFixed(2) + ' &euro; .';
} else if (eta >= 65) {
    document.getElementById('costo_corsa').innerHTML = 'Il costo del tuo biglietto è ' + sconto_senior.toFixed(2) + ' &euro; .';
} else {
    document.getElementById('costo_corsa').innerHTML = 'Il costo del tuo biglietto è ' + costo_biglietto.toFixed(2) + ' &euro; .';
};