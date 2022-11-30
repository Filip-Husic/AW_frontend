const queryString = window.location.search;
// console.log(queryString); // ?id=1
const params = new URLSearchParams(queryString);
if (!params.has("id")){
    window.location.href="../html/js7Fetch.html"
}else {
    let id = params.get("id");
    // console.log(id);

    const url = "https://jsonplaceholder.typicode.com/posts/" + id;
    fetch(url)
        .then(response => {
            if (!response.ok) {
                return Promise.reject("Page doesn't exist!");
            } else {
                return response.json();

            }
        })
        .then(post => {
            document.querySelector("#info").innerHTML = `<h2>Title: ${post.title}</h2><p>Content: ${post.body}</p>`;
        })
        .catch(error => console.log("An error has occurred: " + error));
}
