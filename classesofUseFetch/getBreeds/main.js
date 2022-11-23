// URL
const API = 'https://api.thedogapi.com/v1/';
const BREEDS = 'breeds';
const LIMIT = '?limit=3'

const API_KEY = 'live_8o81iddRPKsNMkNDSMMYR7j5m2dUochsy69F2Qb33Q9MNBuVMPxfv8zB7mW5b14c';
const HEADERS = {
    method: 'GET',
    headers: {
        'x-api-key': API,
    },
}


console.log(`${API}${BREEDS}${LIMIT}`)

async function loadBreeds() {
    const res = await fetch(`${API}${BREEDS}${LIMIT}`, HEADERS);
    const data = await res.json();

    if(res.status !== 200){
        console.log(`We have an errro ${res.status} ${data.message}`);
    } else {

        console.log(data);

        const section = document.getElementById('breedsDoggos');
        const article = document.createElement('article');
        const breedName = document.createElement('h5');
        const breedNameText = '';
        const img = document.createElement('img');

        // img.src = data[0].image.url;




    }
    
}

loadBreeds();

