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
    return;
  }

  if (guessValue === winningNum) {
    gameOver("win", `${winningNum} is correct, YOU WIN 😎!`)
  } else {
    // Player gets a certain amount of guesses
    --guessesLeft;
    if (!guessesLeft) {
      gameOver("lose", `YOU LOST 😔 The correct number was ${winningNum}`)
    } else {
      guessInput.style.borderColor = "red";
      guessInput.value = "";
      setMessage(`${guessValue} is not correct, ${guessesLeft} guesses left`);
    }
  }
});

function gameOver(result, msg) {
  const color = result === "win" ? "green" : "red";

  guessInput.disabled = true;
  guessInput.style.borderColor = color;
  setMessage(msg, color);
}

function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}

// Notify player of guesses remaining

// Notify the player of the correct answer if loose

// Let player choose to play again