// const API_URL_RANDOM = 'https://api.thedogapi.com/v1/images/search?limit=2';
// Just Api
const API = 'https://api.thedogapi.com/v1/images/search?limit=2&api_key=live_8o81iddRPKsNMkNDSMMYR7j5m2dUochsy69F2Qb33Q9MNBuVMPxfv8zB7mW5b14c';
const API_URL_FAVOURITES = 'https://api.thedogapi.com/v1/favourites?limit=2'

/* Dentro de la api con los query parameters se indica el número del tamaño, es decir
    nuestra búsqueda esta reducida a solo dos. */

// const API_KEY = 'live_VOYMcAfRNwYhJxe31OJ1fntESm8JSYSaoOaYx4mB63hcIrYtmR5fhMtx6YrCW92i';
const API_KEY = 'live_8o81iddRPKsNMkNDSMMYR7j5m2dUochsy69F2Qb33Q9MNBuVMPxfv8zB7mW5b14c';

const spanError = document.getElementById('error');




async function loadRandomDogs() {
    // const res = await fetch(`${API_URL_RANDOM}&apiKey=${API_KEY}`);
    const res = await fetch(API);
    const data = await res.json();
    console.log('Random Dogs')
    console.log(res.status); //Con esto estamos probando que es lo que esta haciendo bajo el objeto json recibido.
    console.log(data);
   
    if (res.status !== 200) {
        spanError.innerHTML = `Hubo un error ${res.status}`;
    } else {
        const img1 = document.getElementById('img1');
        const img2 = document.getElementById('img2');
        
    
        img1.src = data[0].url
        img2.src = data[1].url
    }
    
}

// async function loadFavouriteDogs() {
//     const res = await fetch(`${API_URL_FAVOURITES}&apiKey=${API_KEY}`);
//     console.log(res.status);
    
//     const data = await res.json();
//     console.log('Favorites Dogs')
//     console.log(data);
    
//     if (res.status !== 200) {
//         spanError.innerHTML = `Hubo un error ${res.status}`;
//     } else {

//     }
    
// }



// async function saveFavouritesDogs() {
//     const rest = await fetch(`${API_URL_FAVOURITES}&apiKey=${API_KEY}`, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//             image_id: 'dje'
//         }),
//     });

//     const data = await rest.json();
//     console.log('save');
//     console.log(rest);

//     if (rest.status !== 200) {
//         spanError.innerHTML = `Hubo un error ${rest.status}`;
//     }
// }



loadRandomDogs();
// loadFavouriteDogs();
// saveFavouritesDogs();