console.log('howdy');

const URL = 'https://api.thedogapi.com/v1/images/search';

fetch(URL)
    .then(res => res.json())
    .then(data => {
        const img = document.querySelector('img');
        img.src = data[0].url;
    });