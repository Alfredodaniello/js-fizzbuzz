/*
Scrivi un programma che stampi in console i numeri da 1 a 100, 
ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.

Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

Prima di partire a scrivere codice poniamoci qualche domanda:
Come faccio a sapere se un numero è divisibile per un altro?

Abbiamo visto qualcosa di particolare che possiamo usare?
Consigli del giorno:

1. Scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
2. Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"

BONUS 1:
Crea un container nel DOM , aggiungendo un elemento html con il numero o la stringa corretta da mostrare.

BONUS 2:
Applica stili differenti agli elementi aggiunti al DOM nel *BONUS 1*, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.
Se sei a corto di idee per lo stile, potresti prendere spunto dallo screenshot fornito in consegna.
*/


alert("Sei pronto?")

//Seleziono il mio contenitore
const container = document.querySelector("#container");
//Aggiungo la classe al contenitore
container.classList.add("my-container");


//Ottengo i numeri da 1 a 100 e aggiungo i rispettivi div con le rispettive classi
for(let x = 1; x <= 100; ++x) {
    const newDiv = document.createElement("div");
    container.append(newDiv);
    newDiv.classList.add("my-div");

    if (x % 3 === 0 && x % 5 === 0) {
        console.log("FizzBuzz")
        newDiv.innerHTML = "FizzBuzz";
        newDiv.classList.add("blue");
    } else if (x % 3 === 0) {
        console.log("Fizz");  
        newDiv.innerHTML = "Fizz";
        newDiv.classList.add("red");
    }
     else if (x % 5 === 0) {
        console.log("Buzz");
        newDiv.innerHTML = "Buzz";
        newDiv.classList.add("pink");
    } else {
        console.log(x);
        newDiv.innerHTML = x;
        newDiv.classList.add("green");
    }
}