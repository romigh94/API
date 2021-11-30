const url = "http://www.omdbapi.com/?apikey=ffdc3cc5&s=batman";
const inputField = document.getElementById("input-field");


const searchButton = document.getElementById("search-button");
searchButton.addEventListener("click", async function() {
    try {
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
function getData() {
    return fetch(url)
    .then(response => {
    return response.json();

    })
    .then(response => {
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

//innerHTML
function showData(object) {

    return    `
               <img src="${object.Poster}" style="width:80px; float:left;">
    
               <h2 style="font-family:arial;">Title: ${object.Title}</h2>
               <h3 style="font-family:arial;">Year: ${object.Year}</h3>
               <h3 style="font-family:arial;">Type: ${object.Type}</h3>
               `
              
    
          }