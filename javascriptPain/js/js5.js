let firstName = "Filip";
let lastName = "Husic";
let fullName1 = firstName+" "+lastName;
//template string `-`
let fullName2 = `${firstName} ${lastName}`;
console.log(fullName1);
console.log(fullName2);

//get a specific char
console.log(fullName1[0]);//F
console.log(fullName1.charAt(0));//F

//find a char -1 if not found
let pos1 = fullName1.indexOf("i");//1
console.log(pos1);

let pos2 = fullName1.lastIndexOf("i");//9
console.log(pos2);

//i - case-insensitive in regex
let pos3 = fullName1.search(/C/i);
console.log(pos3);

let pos4 = fullName2.includes("c");//true
console.log(pos4);
//to be case-insensitive
let pos5 = fullName2.toUpperCase().includes("c".toUpperCase());//true
console.log(pos5);

// ex1 give all pos of char, a function that receives
// as a param a letter and a phrase and returns an array
// with the positions of the letter inside the phrase
let phrase = "Lorem ipsum dolor sit amet, consectetur adipisicing elit.";

function letterPositions(letter, phrase) {
    let charArray = [];
    for (let i = 0; i < phrase.length; i++) {
        if (phrase.charAt(i) === letter){
            charArray.push(i);
        }
    }
    return charArray;
}

console.log(letterPositions("e",phrase));
//extracting
console.log(fullName2.startsWith("Fil"));
console.log(fullName2.startsWith("Baba"));
console.log(fullName2.endsWith("ic"));
console.log(fullName2.charAt(4)==="p");

//substring (start_pos,end_pos excluded)
let firstName1 = fullName2.substring(0,5);
console.log(firstName1);
//substr (start_pos,num_chars)
let firstName2 = fullName2.substr(0,5);
console.log(firstName2);
//slice (start_pos,end_pos excluded)
let firstName3 = firstName1.slice(-5);
console.log(firstName3);

//replace regex g-global, i-case-insensitive
let replaced1 = fullName1.replace(/i/gi,"#");
console.log(replaced1);

let replaced2 = fullName1.replaceAll("i","#");
console.log(replaced2);

//trim
let anotherString = "        wow so many spaces       ";
console.log(anotherString.trim());

//other methods
let yetAnotherString = "Test";
console.log(yetAnotherString.padStart(10,"$"));
console.log(yetAnotherString.padEnd(10,"$"));
console.log(yetAnotherString.repeat(10));

//regex

let regex1 = /^[A-za-z ]*$/;
// let regex2 = new RegExp(/^[A-za-z ]*$/);
//specialized regex methods
//exec, test
if (!regex1.test(fullName1)){
    console.log("Error, name doesn't contain only letters and spaces!")
}else {
    console.log(fullName1 + " is a valid name.")
}
//general string methods that use regex
//match, replace, split

// AA-99—99
// 99-AA-99
// 99-99-AA
// AA-99-AA
//check valid licence plate
let licencePlate = "BB-CF-RE"
//validate
// if length!==8 => false
// if 3rd and 6th char are different from "-" => false
// other chars must be uppercase letters or numbers
// pairs of chars must be same type, either nums or letters
// pairs must not repeat

function checkLicencePlate(licencePlate) {
    if (licencePlate.length!==8){
        console.log("Invalid licence plate, it must have exactly 8 characters!")
        return false;
    }
    if (licencePlate.charAt(2) !== "-" || licencePlate.charAt(5) !== "-"){
        console.log("Invalid licence plate, 3rd and 6th char must be a dash '-'!")
        return false;
    }
    console.log("Valid licence plate!")
    return true;
    //TODO finish this bad boy without regex!
}

console.log(checkLicencePlate(licencePlate));

