const url = "http://localhost:3000/films";

function paginate() {
    //fetch returns a promise
    fetch(url)
        .then(response => {
            if (!response.ok){
                return Promise.reject("Page doesn't exist!");
            }else {
                return response.json();
            }
        })
        .then(films => {
            // console.log(posts);
            let content= "";
            for (let film of films) {
                // console.log(post.title);
                content += `<tr data-id="${film.id}">`;
                // content += `<td><a href="../html/js7Details.html?id=${post.id}">${post.userId}</a></td>`;
                // noinspection JSUnresolvedVariable
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
paginate();

