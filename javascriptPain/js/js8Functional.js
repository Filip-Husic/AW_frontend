const url = "https://jsonplaceholder.typicode.com/posts";
//fetch returns a promise
fetch(url)
    .then(response => {
        if (!response.ok) {
            return Promise.reject("Page doesn't exist!");
        } else {
            totalNumberRecords = response.headers.get("X-Total-Count");
            return response.json();
        }
    })
    .then(posts => {
        let content = "";
        // for (let post of posts) {
        //     content += `<tr data-id="${post.id}">`;
        //     // noinspection JSUnresolvedVariable
        //     content += `<td>${post.userId}</td>`;
        //     content += `<td>${post.title}</td>`;
        //     content += `<td>${post.body}</td>`;
        //     content += '</tr>';
        // }
        //filter must use a condition that returns true of false
        //if true, the record will be added to the result
        // let results = posts.filter(post => post.title.includes("eum"));
        //refactor filter using forEach and if

        // let results = posts.map(post => post.title.toUpperCase());
        let temperatures=[0,19,27,6,-3];
        let total=temperatures.reduce((accumulator, elementValue) => accumulator + elementValue);
        console.log(total);
        console.log("Average temperature: " + total/temperatures.length);

        let results = posts.map(post => ({
            ...post,//spread operator
            title: post.title.toUpperCase()
        }));
        results.forEach(post => {
            content += `<tr data-id="${post.id}">`;
            // noinspection JSUnresolvedVariable
            content += `<td>${post.userId}</td>`;
            content += `<td>${post.title}</td>`;
            content += `<td>${post.body}</td>`;
            content += '</tr>';
        });
        document.querySelector(".dataTable tbody").innerHTML = content;
        document.querySelector("#totalPosts").textContent = posts.length;
    })
    .catch(error => console.log("An error has occurred: " + error));

