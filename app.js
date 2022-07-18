// Player must guess a number between a min and max
let min = 1, max = 10,
  winningNum = 2, guessesLeft = 3, guessValue;

const game = document.getElementById("game"),
  minNum = document.querySelector(".min-num"),
  maxNum = document.querySelector(".max-num"),
  guessBtn = document.getElementById("guess-btn"),
  guessInput = document.getElementById("guess-input"),
  message = document.querySelector(".message");

minNum.textContent = min;
maxNum.textContent = max;

guessBtn.addEventListener("click", function () {
  guessValue = parseInt(guessInput.value);

  if (!guessValue || guessValue < min || guessValue > max) {
    setMessage(`Please enter a number between ${min} and ${max}`, "red")
  }

  if (guessValue === winningNum) {
    guessInput.disabled = true;
    guessInput.style.borderColor = "green";
    setMessage(`Congratulations! ${winningNum} is correct, YOU WIN!`, "green");
  } else {

  }
});

function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}

// Player gets a certain amount of guesses

// Notify player of guesses remaining

// Notify the player of the correct answer if loose

// Let player choose to play again