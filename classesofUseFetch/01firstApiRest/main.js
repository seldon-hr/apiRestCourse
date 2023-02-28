const URL = 'https://api.thedogapi.com/v1/images/search';



// function refreshDoggo() {
//     fetch(URL)
//     .then(res => res.json())
//     .then(data => {
//         const img = document.querySelector('img');
//         img.src = data[0].url;
//     });
// }


/* async function fetchData(urlApi) {
    console.log(data);
    return data;
} */


//*It's seems working using first the word async
// async function refreshDoggo(){
//     const response = await fetch(URL);
//     const doggo = await response.json();
    
//     // const doggo = await fetchData(urlApi);
//     console.log(doggo)
//     const img = document.querySelector('img');
        
//     img.src = doggo[0].url;
   
// }

/* 

Here, we have the same function, but to use in the arrow function, and we could use the code
try catch to capture a erro
*/
const refreshDoggo = async () => {
    try {
      const response = await fetch(URL);
      const doggo = await response.json();
      const img = document.querySelector('img');
      img.src = doggo[0].url;
    } catch (error) {
      console.error(error);
    }
  }
  

refreshDoggo(URL);
// anotherFunction(URL);
 