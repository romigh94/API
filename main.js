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
            throw new Error("Not found") 
        }


    } catch {
        console.log(error);
        alert(error);
    }
});


//Fetch och error hantering
function getData() {
    return fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error("No success")
        }
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
               <img src=<"${object.Poster}">
                  <h3>${object.Title}</h3>
                  <h4>${object.Year}</h4>
                  <h4>${object.Type}</h4>
               `
              
          }