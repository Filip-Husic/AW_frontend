// Axios
// Fetch API - promise-based

const url = "https://jsonplaceholder.typicode.com/posts";
let startingRecord = 0;
const numberRecordsPerPage = 25;

function paginate(start) {
    let urlValue = url+"?_start="+start+"&_limit="+numberRecordsPerPage;
    //fetch returns a promise
    fetch(urlValue)
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
}
paginate(startingRecord);

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
});

document.querySelector("#nextBt").addEventListener("click",function () {
    startingRecord += numberRecordsPerPage;
    paginate(startingRecord);
});
document.querySelector("#previousBt").addEventListener("click",function () {
    startingRecord -= numberRecordsPerPage;
    paginate(startingRecord);
});