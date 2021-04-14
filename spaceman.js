//Creating array of objects for the guess word and it's associated hint
let content = [
  {
    word: "PRESIDENT",
    hint: "We have a national holiday dedicated to these people every third week in February"
  },
  {
    word: "BIGFOOT",
    hint: "A mythical creature"
  },
  {
    word: "NOTEBOOK",
    hint: "There is a famous romance move named after this item"
  },
  {
    word: "JAPAN",
    hint: "Known as 'the land of the rising sun'"
  },
  {
    word: "URANUS",
    hint: "The coldest place in our solar system"
  },
  {
    word: "DRAKE",
    hint: "This artist has the most 'top 10 hits' on the Billboard charts"
  },
  {
    word: "GOLDFISH",
    hint: "This aquatic animal can see more colors than humans"
  },
  {
    word: "PANCAKE",
    hint: "This is a popular breakfast food whose origins date back to ancient Greece. The Greeks used to call them tagenias, which translates to 'frying pan'"
  },
  {
    word: "CHESS",
    hint: "A popular board game invented in the 6th century"
  },
  {
    word: "SHEEP",
    hint: "This animal has rectangular pupils"
  },
  {
    word: "TOOTHBRUSH",
    hint: "You want to get a new one of these every 3-4 months"
  },
  {
    word: "GRANDFATHER",
    hint: "There is a clock named after this particular relative"
  },
  {
    word: "BASEBALL",
    hint: "Known as 'America's pastime'"
  },
  {
    word: "MANUFACTURER",
    hint: "There are about 12 million of these kinds workers in the labor market"
  },
  {
    word: "AMPHIBIAN",
    hint: "A cold-blooded vertebrate animal"
  },
  {
    word: "SWITZERLAND",
    hint: "This country is only about 41,277 sq km. To put that into perspective, California alone is almost 10 times bigger than this place"
  },
  {
    word: "PAELLA",
    hint: "A popular Spanish rice dish which traditionally includes chicken or seafood"
  },
  {
    word: "VOLKSWAGEN",
    hint: "This company was founded in 1937 by Adolf Hitler and it is still around today"
  },
  {
    word: "HARPSICHORD",
    hint: "A string instrument which was played in the 16th and 17th century, before later being replaced"
  },
];

//Creating buttons for each letter
const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

function createButtons() {
  for (let i = 0; i < alphabet.length; i++) {
    let btn = document.createElement("button");
    btn.setAttribute("id", alphabet[i]);
    btn.setAttribute("class", "allLetters");
    let t = document.createTextNode(alphabet[i]);
    btn.appendChild(t);
    document.body.appendChild(btn);
    
  }
}
createButtons();

//Randomizing the guess word and it's corresponding everytime the page loads
let n = Math.floor(Math.random() * content.length);
let randomSelection = content[n];
let randomWord = randomSelection.word;
let randomHint = randomSelection.hint;


let selectRandomWord = () => {
  let title = document.querySelector("#guessWordText");
  title.innerHTML = randomWord;
}

console.log(randomWord);
selectRandomWord();

//Converting the randomized guess word into dashes by default
let dashes = ""
for (i = 0; i < randomWord.length; i++) {
  dashes += "_ ";
  let blanks = document.querySelector("#guessWordText");
  blanks.innerHTML = dashes;
}

//Creating a counter to display number of chances remaining
let chances = 10;
let gameState = document.querySelector("#chancesText");
gameState.innerHTML = `chances left: ${chances}`;

//Function to determine the index/indicies character guess
const checkCharacterGuess = (word, inputChar) => {
  answer = [];
  for (i = 0; i < word.length; i++) {
    if (word[i] == inputChar) {
      answer.push(i);
    }
  }
  return answer;
}

//Function to allow for the editing of strings
function setCharAt(str, index, chr) {
  if (index > str.length - 1) return str;
  return str.substring(0, index) + chr + str.substring(index + 1);
}

//Event listeners for all buttons with the class of allLetters
const btns = document.querySelectorAll("button[class^=allLetters]");

btns.forEach(btn => {
  btn.addEventListener("click", event => {
    if (dashes.includes("_")) {
      if (chances > 0) {
        let inputChar = event.target.id;
        let result = checkCharacterGuess(randomWord, inputChar);
        if (result.length == 0) {
          chances--;
          gameState.innerHTML = `chances left: ${chances}`;
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

//Display hint 
let hint = document.querySelector("#hint");
let hintText = document.querySelector("#showHint");

hint.addEventListener("click", e => {
  
  hintText.innerHTML = `Hint: ${randomHint}`;
})

// Play again event listener 
let playAgain = document.querySelector("#replay");

playAgain.addEventListener("click", e => {
  location.reload();
  return false;

})