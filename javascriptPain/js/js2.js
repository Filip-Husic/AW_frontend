// alert("STOP RIGHT THERE CRIMINAL SCUM! YOU VIOLATED THE LAW!")
let paragraphs = document.getElementsByTagName("p");

console.log(paragraphs);

//paragraphs[0]
document
    .getElementsByTagName("p")[0]
    .textContent="Deutsche Telekom";
console
    .log(
        document
        .getElementsByTagName("p")[0]
        .textContent
    );

document
    .getElementsByTagName("p")[0]
    .innerHTML="<strong><em>Deutsche Telekom</em></strong>";