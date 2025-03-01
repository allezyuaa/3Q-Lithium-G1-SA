const words = ["abhor", "abide", "abler", "abode", "about", "above", "abuse", "ached", "aches", "acids", 
    "backs", "bacon", "below", "belts", "bides", "bilge", "beast", "beams", "baked", "bathe", 
    "cadet", "cages", "chant", "chain", "cheap", "chips", "choir", "choke", "churn", "cigar", 
    "datum", "daunt", "death", "deals", "diets", "digit", "drums", "drugs", "ducts", "duels", 
    "earth", "edict", "elbow", "empty", "endow", "enjoy", "entry", "envoy", "equal", "extra", 
    "fable", "faint", "fears", "feast", "field", "films", "fluid", "flush", "frogs", "front", 
    "games", "gates", "gears", "germs", "ghost", "giant", "girls", "given", "glare", "glove",
    "habit", "hacks", "heads", "heart", "hinge", "hints", "hotel", "hours", "human", "humps",
    "image", "imbue", "incur", "index", "irked", "irony", "items", "ivory", "inter", "ingot",
    "jails", "jaunt", "jeans", "joins", "joker", "joust", "judge", "junks", "joint", "joked",
    "kinds", "kings", "knead", "knife", "knits", "knobs", "knots", "knows", "laced", "lacks",
    "lakes", "lambs", "large", "larva", "light", "liked", "loads", "loans", "lodge", "locks",
    "magic", "maids", "mauve", "mayor", "meals", "meats", "medal", "media", "miser", "mower"];

let secretWord = words[Math.floor(Math.random() * words.length)];
let attempts = 0;
const maxAttempts = 5;

function submitGuess() {

 let guess = prompt("Enter a 5-letter word:").toLowerCase();
 if (!guess || guess.length !== 5) {
             alert("Word must be exactly 5 letters!");
 }

 const row = document.getElementById(`r-${attempts}`);
     
 row.children[0].textContent = guess[0];
 row.children[1].textContent = guess[1];
 row.children[2].textContent = guess[2];
 row.children[3].textContent = guess[3];
 row.children[4].textContent = guess[4];
     
 row.children[0].classList.add(getClass(guess[0], 0));
 row.children[1].classList.add(getClass(guess[1], 1));
 row.children[2].classList.add(getClass(guess[2], 2));
 row.children[3].classList.add(getClass(guess[3], 3));
 row.children[4].classList.add(getClass(guess[4], 4));


 if (guess === secretWord) {
             alert("Congratulations! You guessed the word!");
             document.getElementById("message").textContent = "You guessed it!";
             createRestartButton();
             winGame();
             return;
 }
     
 attempts++;
 if (attempts >= maxAttempts) {
         setTimeout(() => alert("Congratulations! You guessed the word!"), 300);
         document.getElementById("message").textContent = `Game over! The word was ${secretWord}`;
         createRestartButton();
 }
}

function getClass(letter, index) {
if (letter === secretWord[index]) {
           return "correct";
}
 else if (secretWord.includes(letter)) {
           return "present";
 }  
 else {
           return "absent";
 }
}


function createRestartButton() {
 const restartContainer = document.getElementById("restart-container");
 restartContainer.innerHTML = "";
 const button = document.createElement("button");
 button.textContent = "Play Again";
 button.onclick = () => location.reload();
 restartContainer.appendChild(button);
}

function createConfetti(count) {
    if (count >= 100) return;

    let confetti = document.createElement("div");

    confetti.className = "confetti";
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.backgroundColor = `rgb(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255})`;
    document.body.appendChild(confetti);
    
    let fallInterval = setInterval(() => {
        let topValue = parseInt(confetti.style.top || 0);
        if (topValue > window.innerHeight) {
            clearInterval(fallInterval);
            confetti.remove();
        } else {
            confetti.style.top = topValue + 5 + "px";
        }
    }, 30);
    
    setTimeout(() => createConfetti(count + 1), 30);
}

function winGame() {
    createConfetti(0);
}
