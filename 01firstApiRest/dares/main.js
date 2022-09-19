const API = 'https://api.thecatapi.com/v1/images/search';

async function refreshcat() {
    const response = await fetch(API);
    const cat = await response.json();

    const img = document.querySelector('img');
    img.src = cat[0].url;    
}

refreshcat();