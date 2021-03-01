//const animeInput = document.getElementById('inputBox').value; 
const baseUrl = `https://api.jikan.moe/v3/search/anime?q=`;
const animeTitle = document.querySelector('.animeTitle');
const animeSypnosis = document.querySelector('.animeSypnosis');
const createAnimeImg = document.createElement('img')

function handleError(err) {
    console.log('Oh NO');
    console.log(err);
  }
function clickButton() { 
    const inputText = document.getElementById('inputBox').value;
    const animeSearch = fetch(baseUrl + inputText); 
    animeSearch.then(response => {
        return response.json();
    }).then(response => {
        console.log(response.results[0].title);
        animeTitle.textContent = `${response.results[0].title}`
        animeSypnosis.textContent = `${response.results[0].synopsis}`
        createAnimeImg.src = `${response.results[0].image_url}`
        document.body.appendChild(createAnimeImg);

    }).catch(handleError)
}

