// AJAX - Asynchronous JavaScript And XML
// based on JS object called XMLHttpRequest
// XML - eXtended Markup Language

// <books></books> use custom tags

const url = "https://jsonplaceholder.typicode.com/posts?_start=0&_limit=20";

const xhr = new XMLHttpRequest();

console.log(xhr.readyState); // 0 - unsent


xhr.onreadystatechange = function () {
    console.log(this.readyState);

    // 1 - Opened
    // 2 - Headers received
    // 3 - Loading
    // 4 - Done

    if (this.readyState === 4) {

        // HTTP status codes
        // 1xx - Info
        // 2xx - OK
        // 3xx - redirect / caching
        // 4xx - client errors
        // 5xx - server errors

        console.log(this.status);
        switch (this.status) {
            case 200: {
                console.log("OK");
                //We can receive text, HTML, JSON or XML from the server
                // JSON.parse converts JSON string to an array
                let posts = JSON.parse(this.responseText);
                let content= "";
               for (let post of posts) {
                    console.log(post.title);
                    content += '<tr>';
                    content += `<td>${post.userId}</td>`;
                    content += `<td>${post.title}</td>`;
                    content += `<td>${post.body}</td>`;
                    content += '</tr>';
               }
                document.querySelector(".dataTable tbody").innerHTML=content;
                document.querySelector("#totalPosts").innerHTML=posts.length;
                break;
            }
            case 404: {
                console.log("Client errors!!!!");
                break;
            }
            default: {
                console.log("ready state = " + this.readyState);
            }
        }
    }
    console.log("End");
}

console.log("Before opening");


xhr.open("GET",url);

console.log("Before sending");

xhr.send();

// console.log("End");
