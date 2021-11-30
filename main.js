const url = "http://www.omdbapi.com/?apikey=ffdc3cc5&s=batman";


const searchButton = document.getElementById("search-button");
searchButton.addEventListener("click", async function() {
    try {
        const inputField = document.getElementById("input-field");
        const data = await getData(inputField.value);
        console.log(data);

        if (inputField.value === "batman") {
            getData(inputField.value);
            updateData(data)
        } else {
            alert("movie not found")
        }

    } catch {
        console.log(error);
        alert(error);
    }
});


//Fetch och error hantering
function getData(inputField) {
    return fetch(url)
    .then(response => {
    return response.json();

    })
    .then(response => {
        if (response.Response === "False") {
        throw new Error(response.Error);
        }
        return response.Search;
    })
}

function updateData(objectEl) {
    let cards = "";
    objectEl.forEach(object => 
        (cards += showData(object)));
    
    const objectContainer = document.querySelector(".object-container");
    objectContainer.innerHTML = cards;

}


function showData(object) {

    return    `
                <div class="img-container">
               <img src="${object.Poster}" style="width:80px; float:left;">
    
               </div>

    
               <h2 style="font-family:arial;">Title: ${object.Title}</h2>
               <h3 style="font-family:arial;">Year: ${object.Year}</h3>
               <h3 style="font-family:arial;">Type: ${object.Type}</h3>
               `
              
    
          }