async function fetchAPI(e) {
    try {
        let response = await fetch('http://www.omdbapi.com/?apikey=ffdc3cc5&s=batman');
        if(!response.ok) {
            throw new Error('Some network problems')
        }

        let data = await response.json()
        let parameter = e.target.id;

        contentDiv.innerHTML = generatePageContentHTML(parameter, data);
    } catch(error) {

    }

}