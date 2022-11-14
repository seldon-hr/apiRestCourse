const API = 'https://api.thecatapi.com/v1/images/search';

function fetchDataPromise(urlAPI) {
    return fetch(urlAPI);
}

fetchDataPromise(API)
    .then(res => res.json())
    .then(data => {
        console.log(data);
    })

    .catch(error => console.log(error))
    .finally(()=> console.log('Finalizo la extracción de datos'))