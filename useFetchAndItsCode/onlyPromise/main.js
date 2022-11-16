const API = 'https://api.thecatapi.com/v1/images/search';



const newFetch = new Request(API);

// newFetch.json();
// console.log(newFetch);
// newFetch
const myURL = newFetch.url;
const myMehod = newFetch.method;

console.log(newFetch);
console.log(newFetch.headers);

fetch(newFetch)
    .then(res => res.json())
    .then(blob => {
        console.log(blob);
    })



/* 
    Steps
    -Read Uso de Fetc()
    -Request
    -Fetch
    -Response()
*/