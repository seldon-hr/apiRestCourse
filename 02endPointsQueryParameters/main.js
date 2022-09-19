const API = 'https://api.thedogapi.com/v1/images/search?limit=3';
/* 
Endpoints
    Estos son los lugares o categorias de nuestras apis. e.g.
    La url de nuestra API es https://api.thedogapi.com/v1/
    Y un endpoint sería este: images/search

Query parameters
    Consultas en est caso la iniciamos con ?
    y si buscamos otra  con &
*/

async function refresh() {
    const res = await fetch(API);
    const data = await res.json();
    
    console.log(data);
    const img1 = document.getElementById('img1');
    const img2 = document.getElementById('img2');
    const img3 = document.getElementById('img3');
    // img.src = data[0].url;

    img1.src = data[0].url
    img2.src = data[1].url
    img3.src = data[2].url
    
}

refresh();