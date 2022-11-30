// URL
const API = 'https://api.thedogapi.com/v1/';
const BREEDS = 'breeds/search/';
const LIMIT = '?limit=3'


const QUERY = 'Afghan';
const API_KEY = 'live_8o81iddRPKsNMkNDSMMYR7j5m2dUochsy69F2Qb33Q9MNBuVMPxfv8zB7mW5b14c';
const HEADERS = {
    method: 'GET',
    headers: {
        'x-api-key': API_KEY,
        'Content-Type': 'application/json',
    },
    // body: JSON.stringify({
    //     query: 'Afghan',
    // }),
}

const SEARCH = `${API}${BREEDS}?q=${QUERY}`;

/* 
    Como se esta haciendo el objeto que tengo que mandar para hacer
    la búsqueda.
    Mando un objeto, pero que más.

    *Tengo la url y me esta arrojando ya algo
    *Procesa esa data
    Ordenar por raza, así como list y un chekpoint
*/



async function searchBreed() {
    console.log(SEARCH);
    const res = await fetch(SEARCH, HEADERS);
    const data = await res.json();

    if(res.status !== 200){
        console.log(`We have an errror ${res.status} ${data.message}`);
    } else {

        console.log(data);



        // const section = document.getElementById('breedsDoggos');
        // data.forEach(breed => {
        //     const article = document.createElement('article');
        //     const breedName = document.createElement('h5');
        //     const breedNameText = document.createTextNode(breed.name);
        //     // console.log(breedNameText)
        //     const img = document.createElement('img');


        
        //     img.src = breed.image.url;
        //     img.width = 300;
        //     breedName.appendChild(breedNameText);

        //     article.appendChild(breedName);
        //     article.appendChild(img);
        //     section.appendChild(article);

        // });

    }
    
}

searchBreed();

