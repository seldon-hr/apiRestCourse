const URL = 'https://api.thedogapi.com/v1/images/search';



// function refreshDoggo() {
//     fetch(URL)
//     .then(res => res.json())
//     .then(data => {
//         const img = document.querySelector('img');
//         img.src = data[0].url;
//     });
// }


async function fetchData(urlApi) {
    const response = await fetch(urlApi);
    const data = await response.json();
    return data;
}

const refreshDoggo = async (urlApi) => {

    const doggo = await fetchData(urlApi);

    const img = document.querySelector('img');
        
    img.src = doggo[0].url;
   
}

refreshDoggo(URL);
// anotherFunction(URL);
 