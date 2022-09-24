const API_URL_RANDOM = 'https://api.thedogapi.com/v1/images/search?limit=2';
const API_URL_FAVOURITES = 'https://api.thedogapi.com/v1/favourites?limit=2'

const API_KEY = 'live_VOYMcAfRNwYhJxe31OJ1fntESm8JSYSaoOaYx4mB63hcIrYtmR5fhMtx6YrCW92i';

const spanError = document.getElementById('error');




async function loadRandomDogs() {
    const res = await fetch(`${API_URL_RANDOM}&${API_KEY}`);
    const data = await res.json();
    console.log('Random Dogs')
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

async function loadFavoritesDogs() {
    const res = await fetch(API_URL_FAVOURITES);
    const data = await res.json();
    console.log('Favorites Dogs')
    console.log(data);

    if (res.status !== 200) {
        spanError.innerHTML = `Hubo un error ${res.status}`;
    }
    
}

loadRandomDogs();
loadFavoritesDogs();