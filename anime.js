const baseUrl = `https://api.jikan.moe/v3/search/anime?q=`;
const animeTitle = document.querySelector('.animeTitle');
const animeSypnosis = document.querySelector('.animeSypnosis');
const createAnimeImg = document.createElement('img')

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
        animeTitle.textContent = `${response.results[0].title}`
        animeSypnosis.textContent = `${response.results[0].synopsis}`
        createAnimeImg.src = `${response.results[0].image_url}`
        document.body.appendChild(createAnimeImg);

    }).catch(handleError)
}

//Function to submit the search input with the return key
function sendReturnKey() {
    document.getElementById("inputBox").addEventListener("keyup", function(event){
        event.preventDefault();
        if (event.keyCode === 13) {
            document.getElementById("searchName").click();
        }
    });
}
sendReturnKey();
