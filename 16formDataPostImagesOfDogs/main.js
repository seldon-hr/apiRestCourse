//URL de la API
const API = 'https://api.thedogapi.com/v1/';
const RANDOM = 'images/search';
const LIMIT_RANDOM = '?limit=2'
const IMAGES = 'images/upload'

//API Key
// const API_KEY = 'live_VOYMcAfRNwYhJxe31OJ1fntESm8JSYSaoOaYx4mB63hcIrYtmR5fhMtx6YrCW92i';
const API_KEY = 'live_8o81iddRPKsNMkNDSMMYR7j5m2dUochsy69F2Qb33Q9MNBuVMPxfv8zB7mW5b14c';


//URL for Favourites
const FAVOURITES = 'favourites';



const spanError = document.getElementById('error');




async function loadRandomDogs() {
    const res = await fetch(API+RANDOM+LIMIT_RANDOM);
    const data = await res.json();

    
   
    if (res.status !== 200) {
        spanError.innerHTML = `Hubo un error ${res.status}`;
    } else {
        const img1 = document.getElementById('img1');
        const img2 = document.getElementById('img2');
        const btn1 = document.getElementById('btn1');
        const btn2 = document.getElementById('btn2');
        
    
        img1.src = data[0].url
        img2.src = data[1].url

        btn1.onclick = () => saveFavouriteDog(data[0].id);
        btn2.onclick = () => saveFavouriteDog(data[1].id);
    }
    
}

async function loadFavouriteDogs() {
    const res = await fetch(API+FAVOURITES, {
        method: 'GET',
        headers: {
            'x-api-key': API_KEY, //Updating use the headers, use autorization with x-api-key
        },
    });
    // console.log(res.status);
    
    const data = await res.json();
    console.log('Favorites Dogs')
    console.log(data);
    
    if (res.status !== 200) {
        spanError.innerHTML = `Hubo un error ${res.status} ${data.message}`;
    } else {
        /* Limpiamos porque cada vez que agregamos se va a volver a llamar, de manera que se carga todo de nuevo
        y tendríamos repetido por cada vez que guardamos un doggo en favoritos, así limpiamos section que contiene todo
        e insertamos un h2 con su texto h2Text que lo agregaremos cada que agreguemos un nuevo a favoritos, ya que
        lo estamos eliminando cada vez. */


        const section = document.getElementById('favoritesDogs');

        section.innerHTML = ""
        const h2 = document.createElement('h2');
        const h2Text = document.createTextNode('Favourites Doggos');
        h2.appendChild(h2Text);
        section.appendChild(h2);

        /* Load dog images in favourites section */
        data.forEach(doggo => {
            const article = document.createElement('article');
            const img = document.createElement('img');
            const btn = document.createElement('button');
            const btnText = document.createTextNode('Get out Doggo of Favourites'); //allows create text for our html nodes


            btn.appendChild(btnText);
            img.src = doggo.image.url;
            img.width = 300;
            btn.onclick = () => deleteFavouriteDoggo(doggo.id); 
            /* Le mandamos la función que se debe ejecutar y el id de nuestro doggo, se usa arros
            function para que solo se ejecute cuando se hace click, de lo contrario se haría cada vez 
            que se acutaliza y se manda llamar por cada doggo. (por el forEach.) */
            article.appendChild(img);
            article.appendChild(btn);
            section.appendChild(article)
        })
    }
    
}



async function saveFavouriteDog(id) {
    const res = await fetch(API+FAVOURITES, {
        method: 'POST',
        headers: {
            'x-api-key': API_KEY,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ //The same language in frontend & backend
            image_id: id
        }),
    });

    const data = await res.json(); //Parseando en JSON
    console.log('save');
    console.log(data);

    if (res.status !== 200) {
        spanError.innerHTML = `Hubo un error ${res.status}  ${data.message}`;
    } else {
        console.log('Dogo agregado de favoritos')
        loadFavouriteDogs();
    }
}


async function deleteFavouriteDoggo(id) {
    const res = await fetch(API+FAVOURITES+'/'+id, {
        method: 'DELETE',
        headers: {
            'x-api-key': API_KEY,
        },
    });

    const data = await res.json();
    console.log('save');
    console.log(data);

    if (res.status !== 200) {
        spanError.innerHTML = `Hubo un error ${res.status}  ${data.message}`;
    } else {
        console.log('Dogo eliminado de favoritos')
        loadFavouriteDogs(); //Se recarga cada vez que se elimina uno, así como cuando se agrega uno.
    }
}


async function upLoadDoggoPhoto() {
    const form = document.getElementById('upLoadingForm')
    const formData = new FormData(form);

    console.log(formData.get('file'));

    const res = await fetch(API+IMAGES, {
        method: 'POST',
        headers: {
            'x-api-key': API_KEY,
            // 'Content-type': 'multipart/form-data'
        },
        body: formData,
    })

    const data = await res.json(); //Nos faltaba hablar en JSON

    if (res.status !== 201) {
        spanError.innerHTML = `Hubo un error al subir michi: ${res.status} ${data.message}`
    }
    else {
        console.log("Foto de michi cargada :)");
        console.log(data);
        console.log(data.url);
        console.log(data.id);
        saveFavouriteDog(data.id);
    }

}


loadRandomDogs();
loadFavouriteDogs();
