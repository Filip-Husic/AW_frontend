const fimlUrl = "http://localhost:3000/films";

function paginate() {
    //fetch returns a promise
    fetch(fimlUrl)
        .then(response => {
            if (!response.ok){
                return Promise.reject("Page doesn't exist!");
            }else {
                return response.json();
            }
        })
        .then(films => {
            let content= "";
            for (let film of films) {
                content += `<tr data-id="${film.id}">`;
                content += `<td>${film.title}</td>`;
                content += `<td>${film.year}</td>`;
                // noinspection JSUnresolvedVariable
                content += `<td>${film.director}</td>`;
                content += `<td>${film.genre}</td>`;
                content += '</tr>';
            }
            document.querySelector(".filmsTable tbody").innerHTML=content;
            document.querySelector("#totalFilms").textContent=films.length;

        })
        .catch(error => console.log("An error has occurred: " + error));
}
paginate();

const genreUrl = "http://localhost:3000/genres";

function showGenres() {
    //fetch returns a promise
    fetch(genreUrl)
        .then(response => {
            if (!response.ok){
                return Promise.reject("Page doesn't exist!");
            }else {
                return response.json();
            }
        })
        .then(genres => {
            let content= "";
            for (let genre of genres) {
                content += `<option value="${genre}">${genre}</option></option>`;
            }
            document.querySelector("#genre").innerHTML=content;
        })
        .catch(error => console.log("An error has occurred: " + error));
}
paginate();
showGenres();


