const words = ["abhor", "abide", "abler", "abode", "about", "above", "abuse", "ached", "aches", "acids", 
               "acorn", "acres", "acrid", "acted", "actor", "acute", "adept", "adieu", "admit", "adobe", 
               "adopt", "adore", "adorn", "adult", "aegis", "aeons", "afire", "after", "agent", "agile", 
               "aging", "aglow", "agony", "aided", "aides", "ailed", "aimed", "aired", "aisle", "album", 
               "alder", "alert", "alien", "alike", "alive", "aloes", "aloft", "alone", "along", "aloud", 
               "alter", "altos", "amber", "amble", "amend", "amigo", "amity", "among", "amour", "ample", 
               "amply", "amuse", "angel", "anger", "angle", "angry", "angst", "anime", "ankle", "antes"];
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
