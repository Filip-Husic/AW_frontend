// Axios
// Fetch API - promise-based

const url = "https://jsonplaceholder.typicode.com/posts?_start=0&_limit=20";
//fetch returns a promise
fetch(url)
    .then(response => {
        if (!response.ok){
            return Promise.reject("Page doesn't exist!");
        }else {
            return response.json();

        }
    })
    .then(posts => {
        // console.log(posts);
        let content= "";
        for (let post of posts) {
            // console.log(post.title);
            content += `<tr data-id="${post.id}">`;
            // content += `<td><a href="../html/js7Details.html?id=${post.id}">${post.userId}</a></td>`;
            content += `<td>${post.userId}</td>`;
            content += `<td>${post.title}</td>`;
            content += `<td>${post.body}</td>`;
            content += '</tr>';
        }
        document.querySelector(".dataTable tbody").innerHTML=content;
        document.querySelector("#totalPosts").innerHTML=posts.length;

    })
    .catch(error => console.log("An error has occurred: " + error));

// event delegation
let tablePosts = document.querySelectorAll(".dataTable tbody")[0];
console.log(tablePosts);
tablePosts.addEventListener("click",function (e) {
    // console.log(e.target.nodeName);
    if (e.target.nodeName === "TD"){
        console.log("somebody toucha my spaghet!");
        let id = e.target.parentElement.getAttribute("data-id");
        // console.log(id);
        window.location.href=`../html/js7Details.html?id=${id}`;
    }
})