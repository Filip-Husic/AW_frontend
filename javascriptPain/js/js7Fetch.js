// Axios
// Fetch API - promise-based

const url = "https://jsonplaceholder.typicode.com/posts";
let startingRecord = 0;
const numberRecordsPerPage = 25;
let totalNumberRecords;

//TODO IMPLEMENT SEARCH IN PAGINATION
function paginate(start) {
    let urlValue = url+"?_start="+start+"&_limit="+numberRecordsPerPage;
    //fetch returns a promise
    fetch(urlValue)
        .then(response => {
            if (!response.ok){
                return Promise.reject("Page doesn't exist!");
            }else {
                totalNumberRecords = response.headers.get("X-Total-Count");
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
                // noinspection JSUnresolvedVariable
                content += `<td>${post.userId}</td>`;
                content += `<td>${post.title}</td>`;
                content += `<td>${post.body}</td>`;
                content += '</tr>';
            }
            document.querySelector(".dataTable tbody").innerHTML=content;
            document.querySelector("#totalPosts").textContent=totalNumberRecords;

            document.querySelector("#begin").textContent=start+1;
            document.querySelector("#end").textContent=start+numberRecordsPerPage;
            document.querySelector("#total").textContent=totalNumberRecords;
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
        console.log("Somebody toucha my spaghet!");
        let id = e.target.parentElement.getAttribute("data-id");
        // console.log(id);
        window.location.href=`../html/js7Details.html?id=${id}`;
    }
});

document.querySelector("#firstBt").addEventListener("click",function () {
    startingRecord = 0;
    paginate(startingRecord);
});
document.querySelector("#previousBt").addEventListener("click",function () {
    startingRecord -= numberRecordsPerPage;
    if (startingRecord <= 0){
        startingRecord = 0;
    }

    paginate(startingRecord);
});
document.querySelector("#nextBt").addEventListener("click",function () {
    startingRecord += numberRecordsPerPage;
    if (startingRecord >= totalNumberRecords){
        startingRecord = totalNumberRecords - numberRecordsPerPage;
    }
    paginate(startingRecord);
});
document.querySelector("#lastBt").addEventListener("click",function () {
    startingRecord = totalNumberRecords - numberRecordsPerPage;
    paginate(startingRecord);
});
document.querySelector("#search").addEventListener("input", function() {
    let value=document.querySelector("#search").value.trim();
    // if (value==="") {
    //     alert("You must provide at least one character to search.")
    //     document.querySelector("#search").focus();
    // }
        let urlValue=url + "?title_like=" + value;
        fetch(urlValue)
            .then(response => {
                if (!response.ok) {
                    return Promise.reject("Page does not exist!");
                } else {
                    return response.json();
                }
            })
            .then(posts => {
                // console.log(posts);
                if (posts.length === 0){
                    document.querySelector("#noResults").style.display="block";
                    document.querySelector(".dataTable").style.display="none";
                }else {
                let content="";
                for(let post of posts) {
                    content +=`<tr data-id="${post.id}">`;
                    // noinspection JSUnresolvedVariable
                    content +=`<td>${post.userId}</td>`;
                    content +=`<td>${post.title}</td>`;
                    content +=`<td>${post.body}</td>`;
                    content +='</tr>';
                }
                document.querySelector(".dataTable tbody").innerHTML=content;

                document.querySelector("#noResults").style.display="none";
                document.querySelector(".dataTable").style.display="block";
                }
            })
            .catch(error => console.log("An error has occurred: "+ error));

});
