const API = 'https://api.thecatapi.com/v1/images/search';

async function refreshcat() {
    const response = await fetch(API);
    const cat = await response.json();

    const img = document.querySelector('img');
    img.src = cat[0].url;    
}

/* 
    En l sentido más práctico, hacemos una petición fetch, con async await, para esto, primero tenemos una respuesta que es 'response', de allí obtenemos los datos a emplear con la url 'API'
    después tenemos la data, en este caso cat, así obtenemos y lo pasamos a tipo json, y ahora si podemos emplear la data a nuestra imagen por una manipulación del DOM, dónde obtenemos un array
    y accedemos a su data.
*/


refreshcat();