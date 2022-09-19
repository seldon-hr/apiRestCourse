const API = 'https://api.thedogapi.com/v1/images/search';


async function refresh() {
    const res = await fetch(API);
    const data = await res.json();

    const img = document.querySelector('img');
    img.src = data[0].url;
    
}

refresh();