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

//replace
