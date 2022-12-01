// noinspection CssInvalidHtmlTagReference

const urlFilm = "http://localhost:3000/films";
const urlGenre = "http://localhost:3000/genres";


function showFilms() {
    //fetch returns a promise
    fetch(urlFilm)
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
                content += `<td>${film.director}</td>`;
                content += `<td>${film.genre}</td>`;
                content += '</tr>';
            }
            document.querySelector(".filmsTable tbody").innerHTML=content;
            document.querySelector("#totalFilms").textContent=films.length;

        })
        .catch(error => console.log("An error has occurred: " + error));
}


function showGenres() {
    //fetch returns a promise
    fetch(urlGenre)
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
showGenres();


document.querySelector("#filmForm").addEventListener("submit",function (e) {
    e.preventDefault();
    let fTitle = document.querySelector("#title");
    let fYear = document.querySelector("#year");
    let fDirector = document.querySelector("#director");
    let fGenre = document.querySelector("#genre");

    fetch(urlFilm, {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify({
            title: fTitle.value,
            year: fYear.value,
            director: fDirector.value,
            genre: fGenre.value
        })
    })
        .then(response => {
            if (!response.ok) {
                return Promise.reject("Page doesn't exist!");
            } else {
                return response.json();
            }

        })
        .then(answer => {
            console.log(answer);
            showFilms();
            fTitle.value="";
            fYear.value="";
            fDirector.value="";
            fGenre.value="";
            alert("Record created with id = " + answer.id);

        })
        .catch(error => console.log("An error has occurred: " + error));
})
showFilms();





