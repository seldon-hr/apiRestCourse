console.log('Hello, world')

const URL = 'https://api.thedogapi.com/v1/images/search';


function callDogs () {
    fetch(URL)
        .then(res => res.json())
        .then(data => {
            const img = document.querySelector('.imgDog');
            img.src = data[0].url;
        })
}
callDogs();