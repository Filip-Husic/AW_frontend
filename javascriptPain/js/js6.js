function validate() {
  let fName=document.querySelector("#name");
    let fAddress=document.querySelector("#faddress");
    let fPostal_code=document.querySelector("#postal_code");
    let fCountry=document.querySelector("#country");
    let fEmail=document.querySelector("#email");

    let errors=false;

    let re=/^[A-Za-z ]{3,}$/;
    if (!re.test(fName.value)) {
        document
            .querySelector("#name_error")
            .textContent="'Name' field is required and you must provide, at least, 3 letters!";
        fName.classList.add("error");
        errors=true;
    } else {
        document
            .querySelector("#name_error")
            .textContent="";
        fName.classList.remove("error");
    }

    let reEmail=/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
    if (!reEmail.test(fEmail.value)) {
        document
            .querySelector("#email_error")
            .textContent="'E-mail' field is required and must be a valid e-mail!";
        errors=true;
        fEmail.classList.add("error");

    } else {
        document
            .querySelector("#email_error")
            .textContent="";
        fEmail.classList.remove("error");
    }

    if (fCountry.value==="") {
        document
            .querySelector("#country_error")
            .textContent="You must select a country!";
        errors=true;
        fCountry.classList.add("error");
    } else {
        document
            .querySelector("#country_error")
            .textContent="";
        fCountry.classList.remove("error");

    }

    if (!errors) {
        console.log("No errors");
    }

}
document.querySelector("#btSign").addEventListener("click",validate);