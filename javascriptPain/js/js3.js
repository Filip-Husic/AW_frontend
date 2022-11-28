let titles=document.querySelectorAll("#accordion h2");
let contents=document.querySelectorAll("#accordion article");
contents[1].style.display="none";
contents[2].style.display="none";

for (let title of titles){
    title.addEventListener("click",function () {
        let currentVisibility = window.getComputedStyle(this.nextElementSibling)
            .getPropertyValue("display");
        if (currentVisibility === "none"){
        this.nextElementSibling.style.display="block";
        }else {
            this.nextElementSibling.style.display="none";
        }
    });
}