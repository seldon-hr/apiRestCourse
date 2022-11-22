const API = 'https://api.thecatapi.com/v1/images/search';


const myheaders = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    },
}


// const newFetch = new Request(API);
const request = new Request(
    API,
    myheaders,
);

// newFetch.json();
// console.log(newFetch);
// newFetch
/* const myURL = newFetch.url;
const myMehod = newFetch.method; */

/* console.log(newFetch);
console.log(newFetch.headers);
console.log(myMehod); */

fetch(request)
    .then(res => res.json()) 
    .then(data => {
        console.log(data[0].url);
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