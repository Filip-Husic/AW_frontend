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
                content += `<td><input type="button" value="X" id="btDelete" data-id="${film.id}"></td>`;
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
        let content='<option value="">-- Select a genre --</option>';
            for (let genre of genres) {
                content += `<option value="${genre}">${genre}</option></option>`;
            }
            document.querySelector("#genre").innerHTML=content;
        })
        .catch(error => console.log("An error has occurred: " + error));
}
showGenres();


// noinspection JSUnusedLocalSymbols
function validateForm(fTitle, fYear, fDirector, fGenre) {
    let errors = false;
    let re = /^[A-Za-z ]{3,}$/;
    if (!re.test(fTitle.value)) {
        document.querySelector("#title_error")
            .textContent = "Title incorrect, must contain only letters and at least 3 letters!";
        errors = true;
    } else {
        document.querySelector("#title_error").textContent = "";
    }
    let minYear = parseInt(document.querySelector("#year").getAttribute("min"));
    let today = new Date();
    let maxYear = today.getFullYear(); // 2022
    if (parseInt(fYear.value) < minYear || parseInt(fYear.value) > maxYear) {
        document.querySelector("#year_error").textContent = `'Year' field must be equal or bigger than ${minYear} and smaller than ${maxYear}!`;
        errors = true;
    } else {
        document.querySelector("#year_error").textContent = "";
    }
    // ...
    return !errors;
}
showFilms();


    document.querySelector("#filmForm").addEventListener("submit",function (e) {
    e.preventDefault();
    let fTitle = document.querySelector("#title");
    let fYear = document.querySelector("#year");
    let fDirector = document.querySelector("#director");
    let fGenre = document.querySelector("#genre");

    if (validateForm(fTitle, fYear, fDirector, fGenre)) {
        fetch(urlFilm, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: fTitle.value.trim(),
                year: fYear.value.trim(),
                director: fDirector.value.trim(),
                genre: fGenre.value.trim()
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
                fTitle.value = "";
                fYear.value = "";
                fDirector.value = "";
                fGenre.value = "";
                alert("Record created with id = " + answer.id);

            })
            .catch(error => console.log("An error has occurred: " + error));
    }else {
        alert("form error!")
    }
})

document.querySelector(".filmsTable tbody").addEventListener("click",function (e) {
    if (e.target.nodeName === "INPUT"){
        let id = e.target.getAttribute("data-id");
        fetch(urlFilm + "/" + id, {
            method: "DELETE",
        }).then(function () {
            return showFilms();
        });
    }
})





