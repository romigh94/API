const url = "http://www.omdbapi.com/?apikey=ffdc3cc5&s=batman";


const searchButton = document.getElementById("search-button");
searchButton.addEventListener("click", async function() {
    try {
        const inputField = document.getElementById("input-field");
        const data = await getMovies(inputField.value);
        objectFunction(data);
    } catch(error) {
        console.log(error);
        alert(error);
    }
});

function getData() {
    return fetch(url)
    .then(response => {
        return response.json();
    })
    .then(response => {
        return response.Search;
    })
}


