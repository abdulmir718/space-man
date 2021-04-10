//grabbing elements




//ceating alphabet rrray
const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// creating alphabet unordered list
const letterButtons = () => {
    
    alphabetButtons =
    document.querySelector(".alphabet-buttons");alphabetLetters = 
    document.createElement("ul");

    for(let i = 0; i < alphabet.length; i++) {
        alphabetLetters.id = "alphabet";
        createList = 
        document.createElement("li");
        createList.id = "all-letters";
        createList.innerHTML = alphabet[i];
        alphabetButtons.appendChild(alphabetLetters);
        alphabetLetters.appendChild(createList);

    }
    
}
letterButtons();

//word bank array

wordBank = ["PRESIDENT", "BIGFOOT", "NOTEBOOK", "JAPAN", "NEPTUNE", "DRAKE", "GOLDFISH", "PANCAKE", "CHESS", "SHEEP", "GHOST", "TOOTHBRUSH", "GRANDFATHER", "BASEBALL", "MANUFACTURER", "MONA-LISA", "SWITZERLAND", "PAELLA", "VOLKSWAGEN", "HARPSICHORD"];

//select random guess word function
let n = Math.floor(Math.random() * wordBank.length);
let randomWord = wordBank[n];

let selectRandomWord = () => {
  let title = document.querySelector("#guessWordText");
  title.innerHTML = randomWord;
    
}

console.log(randomWord);
selectRandomWord();
