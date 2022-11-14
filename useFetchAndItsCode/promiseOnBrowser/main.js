const API = 'https://api.thecatapi.com/v1/images/search';

function fetchDataPromise(urlAPI) {
    return fetch(urlAPI);
}

// fetchDataPromise(API)
//     .then(res => res.json())
//     .then(data => {
//         console.log(data);
//     })

//     .catch(error => console.log(error))
//     .finally(()=> console.log('Finalizo la extracción de datos'))


/* El cambio es que estamos haciendo el llamdo directo, ya no creamos otra función para llamar a fetch,
    estamos usando directamente a fetch para poder obtener esta data que obtenemos de las API.
    esto del código de arriba con una función creada y aquí abajo llamando directo con fetch() */

fetch(API)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        
        //Solo para tener buenas prácticas
        const section = document.querySelector('section');
        section.innerHTML = ""

        const h3 = document.createElement('h3');
        const h3Text = document.createTextNode('Random Cats')
        h3.appendChild(h3Text);
        section.appendChild(h3)

        const article = document.createElement('article');
        const img = document.createElement('img');

        img.src = data[0].url;
        img.width = 300;
        
        article.appendChild(img);
        section.appendChild(article)



    })

    .catch(error => console.log(error))
    .finally(()=> console.log('Finalizo la extracción de datos'))