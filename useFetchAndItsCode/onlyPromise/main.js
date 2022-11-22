const API = 'https://api.thecatapi.com/v1/images/search';



const newFetch = new Request(API);

// newFetch.json();
// console.log(newFetch);
// newFetch
const myURL = newFetch.url;
const myMehod = newFetch.method;

console.log(newFetch);
console.log(newFetch.headers);
console.log(myMehod);

fetch(newFetch)
    .then(res => res.json()) 
    .then(blob => {
        console.log(blob);
    })

    /* 
        fetch()
        *Promesa de fetch es resuelta por then()
        * este espera un objeto Response y ese objeto nos permite usar la función json() (en este caso)
        * para resolver la data que viene dentro y se vulve a resolver con un then() y es transformada
        * esa data, esto cuando usamos then de las promesas.
        
    */



/* 
    Steps
    -Read Uso de Fetc()
    -Request
    -Fetch
    -Response()
*/