let images=document.querySelectorAll("#gallery img");

for (let image of images){
    image
        .addEventListener("click", function () {
        document
            .querySelector(".modal")
            .style.visibility="visible";
            document
                .querySelector(".modal img").src=this.src;
    });
}
document
    .querySelector(".modal, .btClose")
    .addEventListener("click", function () {
        document
            .querySelector(".modal")
            .style.visibility="hidden";

    })