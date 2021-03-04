const baseUrl = 'https://api.jikan.moe/v3/search/anime?q=';
const animeTitle = document.querySelector('.animeTitle');
const animeSypnosis = document.querySelector('.animeSypnosis');
const createAnimeImg = document.createElement('img');
const animeGrid = document.querySelector('.anime');

function handleError(err) {
    console.log('Oh NO');
    console.log(err);
  }

 //Pulls the first results and displays the name, description, and img on click from a list of results 
function clickButton() { 
    const inputText = document.getElementById('inputBox').value;
    const animeSearch = fetch(baseUrl + inputText); 
    animeSearch.then(response => {
        return response.json();
    }).then(response => {
        console.log(response.results[0].title);
        console.log(response.results);
        /*
        animeTitle.textContent = `${response.results[0].title}`
        animeSypnosis.textContent = `${response.results[0].synopsis}`
        createAnimeImg.src = `${response.results[0].image_url}`
        document.body.appendChild(createAnimeImg);
        */
        displayListOfAnime(response.results);

    }).catch(handleError)
}

function displayListOfAnime(anime){
    console.log('Creating HTML');
    console.log(anime);
    const html = anime.map(anime => {
        return `<div> 
            <h2>${anime.title} </h2>
            <p>${anime.synopsis} </p>
            <img src ="${anime.image_url}">
        </div>`
    });
    console.log(html);
    animeGrid.innerHTML = html.join('');
}

//Function to submit the search input with the return key
//I can refactor this
function sendReturnKey() {
    document.getElementById("inputBox").addEventListener("keyup", function(event){
        event.preventDefault();
        if (event.keyCode === 13) {
            document.getElementById("searchName").click();
        }
    });
}
sendReturnKey();
