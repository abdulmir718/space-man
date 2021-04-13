//grabbing elements 
let remainingTrys = document.querySelector("#chances-remaining");

//word bank array
wordBank = ["PRESIDENT", "BIGFOOT", "NOTEBOOK", "JAPAN", "Uranus", "DRAKE", "GOLDFISH", "PANCAKE", "CHESS", "SHEEP", "GHOST", "TOOTHBRUSH", "GRANDFATHER", "BASEBALL", "MANUFACTURER", "AMPHIBIAN", "SWITZERLAND", "PAELLA", "VOLKSWAGEN", "HARPSICHORD"];

//hints array
hintsArray = ["We have a national holiday dedicated to these people every thrid month in February", "A mythical creature", "There is a famous romance move named after this item", "Known as 'the land of the rising sun'", "The coldest place in our solar system", "This artist has the most 'top 10 hits' on the Billboard charts", "This aquatic animal can see more colors than humans", "This is currently a popular breakfast food whose origins date back to ancient Greece. The Greeks used to call them'tagenias, which translates to 'frying pan'", "A popular board game invented in the 6th century", "This animal has rectangular pupils", "When you need to put together a quick Halloween cosutme, this is always a good bet", "You want to get a new one of these every 3-4 months", "There is a clock named after this particular relative", "Known as 'America's pastime'", "There are about 12 million of these kinds workers in the labor market", "A cold-blooded vertebrate animal", "This country is only about 41,277 sq km. To put that into perspective, California alone is almost 10 times bigger than this place", "A popular Spanish rice dish which traditionally includes chicken or seafood", "This company was founded in 1937 by Adolf Hitler and it is still around today", "A string instrument which was played in the 16th and 17th century, before later being replaced"];

//creating buttons for each letter
const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];


// creating alphabet unordered list
function createButtons() {
  for (var i = 0; i < alphabet.length; i++) {
  let btn = document.createElement("button");
  btn.setAttribute("id","but" + alphabet[i]);
  let t = document.createTextNode(alphabet[i]);
  btn.appendChild(t);
  document.body.appendChild(btn);
  }
}
createButtons();

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
for (i = 0; i < randomWord.length; i++) {
  dashes += "_ ";
  let blanks = document.querySelector("#guessWordText");
  blanks.innerHTML = dashes;
}

let chances = 10;
let gameState = document.querySelector("#chancesText");
gameState.innerHTML = chances;

// Function to determine index/indices of character guess
const letterButtons = (word, inputChar) => {
  answer = []
  for (i = 0; i < word.length; i++) {
    if (word[i] == inputChar) {
      answer.push(i);
    }
  }
  return answer;
}

// Function to allow for editing of strings
function setCharAt(str, index, chr) {
  if (index > str.length - 1) return str;
  return str.substring(0, index) + chr + str.substring(index + 1);
}

// Event listener for all buttons beginning with "but"
const btns = document.querySelectorAll("button[id^=but]");

btns.forEach(btn => {
  btn.addEventListener("click", event => {
    if (dashes.includes("_")) {
      if (chances > 0) {
        let inputChar = event.target.id[3]
        let result = letterButtons(randomWord, inputChar);
        console.log(result)
        if (result.length == 0) {
          chances--;
          console.log(`chances left: ${chances}`);
          gameState.innerHTML = chances;
          if (chances <= 0) {
            alert("GAME OVER: YOU RAN OUT OF CHANCES");
          }
        }
        else {
          for (i = 0; i < result.length; i++) {
            dashes = setCharAt(dashes, result[i] * 2, inputChar);
          }
          let blanks = document.querySelector("#guessWordText");
          blanks.innerHTML = dashes;
          if (!dashes.includes("_")) {
            blanks.innerHTML = dashes;
            alert("YOU WON!");
          }
        }
      }
      else {
        alert("GAME OVER: YOU RAN OUT OF CHANCES");
      }
    }
    else {
      alert("YOU WON!");
    }
  });

});
