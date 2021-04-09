//ceating alphabet Array
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
