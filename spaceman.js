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

let dashes = ""
for (i=0;i<randomWord.length;i++) {
  dashes += " _ ";
  let blanks = document.querySelector("#guessWordText");
  blanks.innerHTML = dashes;
}

//need figure out what button the user has selected
let chances = 10 
while (chances >= 0) {
    const letterButtons = (str, char) => {
      ans = []
      for (i=0; i < str.length; i++) {
          if (str[i] == char) {
            ans.push(i)
        }
      }
      return ans
    }
let result = letterButtons (randomWord, "C") 
    if (result === []) {
        chances--
    }
    else {for (i=0;i<result.length;i++) {
        dashes[result[i]] = inputChar
      }}

}



