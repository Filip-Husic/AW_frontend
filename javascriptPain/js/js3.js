let titles=document.querySelectorAll("#accordion h2");
let contents=document.querySelectorAll("#accordion article");
contents[1].style.display="none";
contents[2].style.display="none";
titles[0].querySelector(".fa-chevron-down").style.transform="rotate(180deg)";

for (let title of titles){
    title.addEventListener("click",function () {
        let currentVisibility = window.getComputedStyle(this.nextElementSibling)
            .getPropertyValue("display");
        if (currentVisibility === "none"){
            this.nextElementSibling.style.display="block";
        }else {
            this.nextElementSibling.style.display="none";
        }
        for (let title1 of titles){
            if (title1 !== this){
                title1.nextElementSibling.style.display="none";
            }
        }

        });
}