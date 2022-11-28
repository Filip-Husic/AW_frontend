// alert("STOP RIGHT THERE CRIMINAL SCUM! YOU VIOLATED THE LAW!")
let paragraphs = document.getElementsByTagName("p");

console.log(paragraphs);

//paragraphs[0]
// document
//     .getElementsByTagName("p")[0]
//     .textContent="Deutsche Telekom";
// console
//     .log(
//         document
//         .getElementsByTagName("p")[0]
//         .textContent
//     );
//
// document
//     .getElementsByTagName("p")[0]
//     .innerHTML="<strong><em>Deutsche Telekom</em></strong>";

//click event
//onclick event handler
let paragraph = document.getElementsByTagName("p")[0];
let previousContent = paragraph.textContent;
document
    .getElementById("btChange")
    .onclick=function () {
    if (paragraph.textContent === "Deutsche Telekom"){
        paragraph.textContent = previousContent;
    }else {
    document
        .getElementsByTagName("p")[0]
        .innerHTML="<strong><em>Deutsche Telekom</em></strong>";
    }
};

//events
//mouseover, mouseout, mouseleave, mousemove,dblclick
//keydown, keypress, keyup, input
// focus, blur, submit, change, select
//load, unload, scroll

//show hidden section
function showCollapsible() {
    let content = document.querySelector("#content").style.display;
    if (content === ""){
        document.querySelector("#content").style.display="block";
        document.querySelector("#btShow").innerHTML="Hide";
    }else {
        document.querySelector("#content").style.display="";
        document.querySelector("#btShow").innerHTML="Show";

    }
}

document.querySelector("#btShow")
    .addEventListener("click",showCollapsible);
//showCollapsible is a callback