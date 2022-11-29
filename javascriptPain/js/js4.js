let images=document.querySelectorAll("#gallery img");

for (let image of images){
    image
        .addEventListener("click", function () {
        document
            .querySelector(".modal")
            .style.visibility="visible";
            document
                .querySelector(".modal img").src=this.src;
            // console.log(this.getAttribute("data-id"))
            document
                .querySelector(".modal img")
                .setAttribute("data-id",this.getAttribute("data-id"));
            document.querySelector("#caption").textContent=this.getAttribute("alt");
        });
}

document
    .querySelector(".modal, .btClose")
    .addEventListener("click", function () {
        document
            .querySelector(".modal")
            .style.visibility="hidden";

    });

function changeEverything(position) {
    let image = images[position].getAttribute("src");
    document
        .querySelector(".modal img").setAttribute("src",image);
    document.querySelector(".modal img").setAttribute("data-id",position);
    document.querySelector("#caption").textContent=images[position].getAttribute("alt");
}


document
    .querySelector(".fa-chevron-right")
    .addEventListener("click", function (doge) {
        doge.stopPropagation();
        let position = document
            .querySelector(".modal img")
            .getAttribute("data-id");
        position++;
        if (position === images.length-1){
            position=0;
        }
        changeEverything(position);

    });
document
    .querySelector(".fa-chevron-left")
    .addEventListener("click", function (doge) {
        doge.stopPropagation();
        let position = document
            .querySelector(".modal img")
            .getAttribute("data-id");
        position--;
        if (position < 0){
            position=images.length-1;
        }else {

        }
        changeEverything(position);
    });